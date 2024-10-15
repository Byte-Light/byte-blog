'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
}

const RecentPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const mockPosts = [
        {
          id: '1',
          title: 'Mastering TypeScript for React Developers',
          excerpt: 'A complete guide to using TypeScript in your React projects.',
          publishedAt: 'October 12, 2024',
        },
        {
          id: '2',
          title: 'Understanding JavaScript Closures',
          excerpt: 'A deep dive into closures and their importance in JavaScript.',
          publishedAt: 'October 10, 2024',
        },
        {
          id: '3',
          title: 'How to Build a REST API with Node.js and Express',
          excerpt: 'Learn how to create scalable APIs with Node and Express.',
          publishedAt: 'October 8, 2024',
        },
      ];
      setTimeout(() => {
        setPosts(mockPosts);
        setIsLoading(false);
      }, 1500);
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return <p className="text-center text-gray-500 animate-pulse">Loading recent posts...</p>;
  }

  return (
    <section className="py-20 px-12 bg-gradient-to-br from-gray-900 to-black text-white shadow-xl">
      <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
        Recent Posts
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="group">
            <div className="p-6 bg-gray-800 hover:bg-gray-700 shadow-lg transition-all group-hover:shadow-2xl group-hover:scale-105">
              <h3 className="text-2xl font-semibold group-hover:text-cyan-400 transition-colors">
                {post.title}
              </h3>
              <p className="mt-4 text-gray-300">{post.excerpt}</p>
              <span className="mt-4 block text-sm text-gray-500">
                {post.publishedAt}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
