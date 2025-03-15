import { getBlogPostBySlug } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage(props: PageProps) {
  // We need to await the entire params object first
  const params = await props.params;
  const slug = String(params.slug || '');
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto py-12 px-4 max-w-4xl">
      <Link href="/blogs" className="text-purple-600 mb-6 inline-block">
        ← Back to all blogs
      </Link>
      
      <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
      
      <div className="flex items-center text-gray-600 mb-8">
        <span className="mr-4">By {post.author}</span>
        <span>{new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</span>
      </div>
      
      <div className="relative w-full h-80 mb-8">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}

export async function generateMetadata(props: PageProps) {
  // Similarly await the entire params object first
  const params = await props.params;
  const slug = String(params.slug || '');
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }
  
  return {
    title: `${post.title} | Vivahsaj`,
    description: post.excerpt,
  };
}
