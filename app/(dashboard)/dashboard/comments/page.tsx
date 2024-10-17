"use client";
import { useEffect, useState } from "react";

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

const CommentsPage = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      // Replace this with your actual API call
      const response = await fetch("/api/comments");
      const data: Comment[] = await response.json();
      setComments(data);
    };

    fetchComments();
  }, []);

  return (
    <div className="p-6 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-semibold mb-8 text-center md:text-left">
        Comments
      </h1>

      {comments.length > 0 ? (
        <div className="space-y-6">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white p-4 md:p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow"
            >
              <p className="font-semibold text-base md:text-lg">{comment.author}</p>
              <p className="text-gray-700 mt-1">{comment.content}</p>
              <p className="text-sm text-gray-500 mt-3">
                {new Date(comment.date).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-12">
          No comments yet. Be the first to comment!
        </p>
      )}
    </div>
  );
};

export default CommentsPage;
