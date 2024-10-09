import Link from 'next/link'
import { Coffee, Twitter, Instagram, Youtube } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Coffee className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">CreatorHub</span>
            </Link>
            <p className="text-sm text-gray-600">Support your favorite creators through donations, memberships, and more.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-primary">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-primary">Careers</Link></li>
              <li><Link href="/press" className="text-gray-600 hover:text-primary">Press</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-600 hover:text-primary">Help Center</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-primary"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-primary"><Youtube className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">&copy; 2023 CreatorHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}