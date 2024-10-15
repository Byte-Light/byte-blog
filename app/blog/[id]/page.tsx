// /app/blog/[id]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import AuthorCard from '@/components/blog/AuthorCard';
import TagList from '@/components/blog/TagList';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
}

const BlogPostPage: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    // Simulate fetching post by ID (replace with real API)
    const mockPosts: BlogPost[] = [
      {
        id: '1',
        title: 'Mastering TypeScript for React Developers',
        content: 'This is the full content of the TypeScript blog post...',
        author: 'John Doe',
        publishedAt: 'October 12, 2024',
        tags: ['TypeScript', 'React', 'Programming'],
      },
      {
        id: '2',
        title: 'Understanding JavaScript Closures',
        content: 'This is the full content of the closures blog post...',
        author: 'Jane Smith',
        publishedAt: 'October 10, 2024',
        tags: ['JavaScript', 'Closures', 'Programming'],
      },
    ];

    const post = mockPosts.find((p) => p.id === id);
    setPost(post || null);
  }, [id]);

  if (!post) {
    return <p className="text-center text-gray-400">Post not found.</p>;
  }

  return (
    <article className="max-w-4xl mx-auto py-16 px-6 bg-gradient-to-br from-blue-800 to-purple-800 rounded-lg shadow-lg">
      <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
        {post.title}
      </h1>
      <div className="flex items-center justify-between text-gray-300 mb-6">
        <AuthorCard author={post.author} />
        <span className="font-light">{post.publishedAt}</span>
      </div>
      <TagList tags={post.tags} />
      <div className="mt-8 text-lg leading-relaxed text-gray-200 border-t border-gray-700 pt-8">
        {post.content}
      </div>
    </article>
  );
};

export default BlogPostPage;
