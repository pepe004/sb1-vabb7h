import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { databases } from '@/lib/appwrite';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { creatorId, userId, priceId } = req.body;

      // Create a Stripe customer
      const customer = await stripe.customers.create({
        metadata: { userId },
      });

      // Create the subscription
      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: priceId }],
        payment_behavior: 'default_incomplete',
        expand: ['latest_invoice.payment_intent'],
      });

      // Store subscription info in Appwrite
      await databases.createDocument('YOUR_DATABASE_ID', 'subscriptions', 'unique()', {
        userId,
        creatorId,
        stripeSubscriptionId: subscription.id,
        status: subscription.status,
      });

      res.status(200).json({
        subscriptionId: subscription.id,
        clientSecret: (subscription.latest_invoice as any).payment_intent.client_secret,
      });
    } catch (err: any) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}