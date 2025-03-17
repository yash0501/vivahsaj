import { getAllBlogPosts } from '@/lib/data';
import { BlogCard, BlogPost } from '@/components/BlogCard';

export const metadata = {
  title: 'Blog | Vivaahsaj',
  description: 'Wedding planning tips, inspiration and guidance from Vivaahsaj',
};

export default function BlogsPage() {
  const posts = getAllBlogPosts();
  
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-text-primary">Wedding Planning Blog</h1>
      <p className="text-text-secondary mb-12 text-lg">Discover wedding inspiration, planning tips, and expert advice</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post as BlogPost} />
        ))}
      </div>
    </div>
  );
}
