import { getAllBlogPosts } from '@/lib/data';
import BlogCard from '@/components/BlogCard';

export const metadata = {
  title: 'Blogs | Vivahsaj',
  description: 'Read our latest blog posts',
};

export default function BlogsPage() {
  const posts = getAllBlogPosts();
  
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-12">
        <h1 className="text-3xl font-bold">Our Blogs</h1>
      </div>
      
      {posts.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl text-gray-600">No blog posts yet</h2>
          <p className="mt-4">Check back soon for new content</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
