import { FC } from "react";

interface Post {
  id: string;
  title: string;
  date: string;
}

const posts: Post[] = [
  { id: "1", title: "First Blog Post", date: "2024-10-01" },
  { id: "2", title: "Understanding TypeScript", date: "2024-10-05" },
];

const PostList: FC = () => (
  <div className="mt-6">
    <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
    <ul className="space-y-3">
      {posts.map((post) => (
        <li key={post.id} className="bg-white p-4 rounded shadow-md">
          <h4 className="text-xl font-semibold">{post.title}</h4>
          <p className="text-gray-500">{post.date}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default PostList;
