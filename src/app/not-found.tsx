import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Page Not Found</h2>
        <p className="text-secondary-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="btn-primary inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 