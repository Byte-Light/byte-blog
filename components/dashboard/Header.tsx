"use client"; // Required for client-side routing

import { FC } from "react";
import { useRouter } from "next/navigation"; // Use router for programmatic navigation

const Header: FC = () => {
  const router = useRouter();

  const handleCreatePost = () => {
    router.push("/dashboard/new-post"); // Navigate to the new post page
  };

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <h2 className="text-xl font-semibold">Dashboard Overview</h2>
      <button
        onClick={handleCreatePost}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add New Post
      </button>
    </header>
  );
};

export default Header;
