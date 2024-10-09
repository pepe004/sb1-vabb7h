import Image from 'next/image'
import Link from 'next/link'

const creators = [
  { id: 1, name: 'Alice Johnson', category: 'Artist', image: 'https://source.unsplash.com/300x300/?portrait,woman' },
  { id: 2, name: 'John Smith', category: 'Musician', image: 'https://source.unsplash.com/300x300/?portrait,man' },
  { id: 3, name: 'Emma Davis', category: 'Writer', image: 'https://source.unsplash.com/300x300/?portrait,girl' },
  { id: 4, name: 'Michael Brown', category: 'Podcaster', image: 'https://source.unsplash.com/300x300/?portrait,boy' },
]

export const FeaturedCreators = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Creators</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {creators.map((creator) => (
          <Link key={creator.id} href={`/creator/${creator.id}`} className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform group-hover:scale-105">
              <Image src={creator.image} alt={creator.name} width={300} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{creator.name}</h3>
                <p className="text-gray-600">{creator.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/explore" className="inline-flex items-center text-primary hover:text-primary-dark font-semibold">
          Discover more creators
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}