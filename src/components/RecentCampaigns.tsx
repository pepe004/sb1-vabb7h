import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const campaigns = [
  { id: 1, title: 'New Album Release', creator: 'John Smith', image: 'https://source.unsplash.com/600x400/?music,album', goal: 5000, raised: 3750 },
  { id: 2, title: 'Art Exhibition Funding', creator: 'Alice Johnson', image: 'https://source.unsplash.com/600x400/?art,exhibition', goal: 10000, raised: 7500 },
  { id: 3, title: 'Podcast Equipment Upgrade', creator: 'Michael Brown', image: 'https://source.unsplash.com/600x400/?podcast,microphone', goal: 2000, raised: 1800 },
]

export const RecentCampaigns = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Recent Campaigns</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={campaign.image} alt={campaign.title} width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-xl mb-2">{campaign.title}</h3>
              <p className="text-gray-600 mb-4">by {campaign.creator}</p>
              <div className="bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm">
                <span>${campaign.raised} raised</span>
                <span>${campaign.goal} goal</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/campaigns" className="inline-flex items-center text-primary hover:text-primary-dark font-semibold">
          View all campaigns
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}