import Link from 'next/link';
import Image from 'next/image';

// Sample book data
const featuredBooks = [
  {
    id: 1,
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    coverImage: '/images/thinking-fast-slow.jpg',
    slug: 'thinking-fast-slow',
  },
  {
    id: 2,
    title: 'Atomic Habits',
    author: 'James Clear',
    coverImage: '/images/atomic-habits.jpg',
    slug: 'atomic-habits',
  },
  {
    id: 3,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    coverImage: '/images/psychology-of-money.jpg',
    slug: 'psychology-of-money',
  },
  {
    id: 4,
    title: 'Deep Work',
    author: 'Cal Newport',
    coverImage: '/images/deep-work.jpg',
    slug: 'deep-work',
  },
];

const BookshelfSection = () => {
  return (
    <section className="py-16 bg-secondary-50">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-secondary-900 mb-2">Featured Books</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Discover our curated collection of books to enhance your knowledge and skills.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {featuredBooks.map((book) => (
            <Link 
              key={book.id} 
              href={`/reader/${book.slug}`}
              className="group"
            >
              <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-md transition transform group-hover:scale-105 duration-200">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"></div>
                <div className="w-full h-full bg-secondary-200 relative">
                  {/* We're using a placeholder div instead of an actual image for now */}
                  <div className="absolute inset-0 flex items-center justify-center bg-secondary-100 text-secondary-400 text-sm font-medium">
                    {book.title}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <h3 className="font-bold truncate">{book.title}</h3>
                  <p className="text-sm text-gray-200">{book.author}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/library" 
            className="btn-primary"
          >
            Browse All Books
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookshelfSection; 