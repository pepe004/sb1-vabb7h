import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-20 rounded-lg my-8">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Support Your Favorite Creators</h1>
        <p className="text-xl md:text-2xl mb-8">Join our community and help creators thrive through donations, memberships, and more.</p>
        <div className="flex justify-center space-x-4">
          <Link href="/signup" className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Get Started
          </Link>
          <Link href="/explore" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition duration-300">
            Explore Creators
          </Link>
        </div>
      </div>
    </div>
  )
}