import Link from 'next/link'
import { Coffee, Search } from 'lucide-react'

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Coffee className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">CreatorHub</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/explore" className="text-gray-600 hover:text-primary">Explore</Link>
          <Link href="/shop" className="text-gray-600 hover:text-primary">Shop</Link>
          <Link href="/about" className="text-gray-600 hover:text-primary">About</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Search className="h-6 w-6 text-gray-400 cursor-pointer" />
          <Link href="/login" className="text-gray-600 hover:text-primary">Log in</Link>
          <Link href="/signup" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition duration-300">Sign up</Link>
        </div>
      </div>
    </header>
  )
}