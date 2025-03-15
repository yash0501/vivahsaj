import Link from 'next/link';

export default function BlogNotFound() {
  return (
    <div className="container mx-auto py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
      <p className="text-lg mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
      <Link 
        href="/blogs" 
        className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors duration-200"
      >
        Back to All Blogs
      </Link>
    </div>
  );
}
