import Image from 'next/image';
import Link from 'next/link';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  coverImage: string;
  content: string;
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blogs/${post.slug}`} className="block">
      <article className="bg-background-main rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg h-full">
        <div className="relative w-full h-48">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-text-primary hover:text-brand-primary transition">
            {post.title}
          </h2>
          
          <div className="text-sm text-text-secondary mb-3">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })} • By {post.author}
          </div>
          
          <p className="text-text-secondary mb-4 line-clamp-3">{post.excerpt}</p>
          
          <span 
            className="text-brand-primary font-medium hover:text-brand-secondary transition inline-block"
          >
            Read more →
          </span>
        </div>
      </article>
    </Link>
  );
}
