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
      <Link href="/blogs" className="text-brand-primary hover:text-brand-secondary transition mb-6 inline-block">
        ← Back to all blogs
      </Link>
      
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">{post.title}</h1>
      
      <div className="flex items-center text-text-secondary mb-8">
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
          className="rounded-lg shadow-md"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="prose prose-lg max-w-none 
                    prose-headings:text-text-primary 
                    prose-p:text-text-secondary 
                    prose-a:text-brand-primary prose-a:no-underline hover:prose-a:text-brand-secondary
                    prose-strong:text-text-primary
                    prose-li:text-text-secondary
                    prose-img:rounded-lg prose-img:shadow-md
                    prose-blockquote:border-l-brand-primary prose-blockquote:text-text-secondary
                    prose-hr:border-utility-lightGray
                    prose-pre:bg-utility-lightGray prose-pre:text-text-primary">
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold my-6" {...props} />,
            h2: ({ node, ...props }) => <h2 className="text-2xl font-bold my-5" {...props} />,
            h3: ({ node, ...props }) => <h3 className="text-xl font-semibold my-4" {...props} />,
            a: ({ node, ...props }) => <a className="text-brand-primary hover:text-brand-secondary transition" {...props} />,
            img: ({ node, src, alt, ...props }) => (
              <div className="relative w-full h-auto my-6">
                <img src={src} alt={alt} className="rounded-lg shadow-md" {...props} />
              </div>
            ),
            ul: ({ node, ...props }) => <ul className="list-disc pl-6 my-4" {...props} />,
            ol: ({ node, ...props }) => <ol className="list-decimal pl-6 my-4" {...props} />,
            blockquote: ({ node, ...props }) => (
              <blockquote className="border-l-4 border-brand-primary pl-4 italic my-6" {...props} />
            ),
            code: ({ node, ...props }) => (
              <code className="bg-utility-lightGray px-1.5 py-0.5 rounded text-text-primary font-mono text-sm" {...props} />
            ),
            pre: ({ node, ...props }) => <pre className="bg-utility-lightGray p-4 rounded-lg overflow-x-auto my-6" {...props} />
          }}
        >
          {post.content}
        </ReactMarkdown>
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
