// /app/blog/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const mockPosts: Post[] = [
      { id: '1', title: 'Mastering TypeScript for React Developers', excerpt: 'A guide to TypeScript.', publishedAt: 'October 12, 2024' },
      { id: '2', title: 'Understanding JavaScript Closures', excerpt: 'Deep dive into closures.', publishedAt: 'October 10, 2024' },
    ];
    setTimeout(() => {
      setPosts(mockPosts);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <p className="text-center text-gray-400">Loading posts...</p>;
  }

  return (
    <section className="py-16 px-8 bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="block p-4 border border-gray-700 hover:bg-gray-800 transition">
            <h2 className="text-3xl">{post.title}</h2>
            <p className="text-gray-400">{post.excerpt}</p>
            <span className="text-gray-500">{post.publishedAt}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
