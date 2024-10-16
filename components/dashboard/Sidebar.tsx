import { FC } from "react";
import Link from "next/link";

const Sidebar: FC = () => (
  <div className="w-64 bg-gray-800 text-white h-screen p-5">
    <h1 className="text-2xl font-bold mb-8">Blog Dashboard</h1>
    <nav className="space-y-4">
      <Link href="/dashboard" className="block text-lg hover:text-blue-300">
        Overview
      </Link>
      <Link href="/dashboard/new-post" className="block text-lg hover:text-blue-300">
        Posts
      </Link>
      <Link href="/dashboard/comments" className="block text-lg hover:text-blue-300">
        Comments
      </Link>
      <Link href="/dashboard/analytics" className="block text-lg hover:text-blue-300">
        Analytics
      </Link>
      <Link href="/dashboard/profile" className="block text-lg hover:text-blue-300">
        Profile
      </Link>
    </nav>
  </div>
);

export default Sidebar;
