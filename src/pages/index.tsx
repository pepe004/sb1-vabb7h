import { Hero } from '@/components/Hero'
import { FeaturedCreators } from '@/components/FeaturedCreators'
import { RecentCampaigns } from '@/components/RecentCampaigns'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <FeaturedCreators />
      <RecentCampaigns />
    </div>
  )
}