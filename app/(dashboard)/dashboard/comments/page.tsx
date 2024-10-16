"use client"
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
    // Fetch comments from your API or Firestore here
    const fetchComments = async () => {
      // TODO: Replace with your actual API call
      const response = await fetch("/api/comments"); // Example API endpoint
      const data: Comment[] = await response.json();
      setComments(data);
    };

    fetchComments();
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Comments</h1>

      {comments.length > 0 ? (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-white p-4 rounded shadow-md border">
              <p className="font-semibold">{comment.author}</p>
              <p className="text-gray-700">{comment.content}</p>
              <p className="text-sm text-gray-500 mt-2">{comment.date}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No comments yet. Be the first to comment!</p>
      )}
    </div>
  );
};

export default CommentsPage;
