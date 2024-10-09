import { DollarSign, ShoppingBag, Users, Palette } from 'lucide-react'

const features = [
  { icon: DollarSign, title: 'Donations', description: 'Support creators with one-time or recurring donations.' },
  { icon: Users, title: 'Memberships', description: 'Get exclusive content and perks by becoming a member.' },
  { icon: ShoppingBag, title: 'Shop', description: 'Purchase physical or digital products from creators.' },
  { icon: Palette, title: 'Commissions', description: 'Request custom work directly from your favorite creators.' },
]

export default function HowItWorks() {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <feature.icon className="h-12 w-12 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}