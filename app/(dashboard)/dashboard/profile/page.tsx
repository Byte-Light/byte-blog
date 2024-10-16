const ProfilePage = () => {
    // Static user data for demonstration
    const user = {
      name: "John Doe",
      email: "john.doe@example.com",
      profilePicture: "https://via.placeholder.com/150", // Placeholder for profile picture
      posts: [
        { id: "1", title: "Understanding TypeScript", date: "October 1, 2024" },
        { id: "2", title: "React Best Practices", date: "October 5, 2024" },
        { id: "3", title: "Building a Blog with Next.js", date: "October 10, 2024" },
      ],
    };
  
    return (
      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="flex items-center mb-6">
          <img
            src={user.profilePicture}
            alt="Profile Picture"
            className="w-24 h-24 rounded-full mr-4"
          />
          <div>
            <h1 className="text-2xl font-semibold">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
  
        <h2 className="text-xl font-semibold mb-4">My Posts</h2>
        {user.posts.length > 0 ? (
          <div className="space-y-4">
            {user.posts.map((post) => (
              <div key={post.id} className="bg-white p-4 rounded shadow-md border">
                <h3 className="text-lg font-medium">{post.title}</h3>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No posts available.</p>
        )}
      </div>
    );
  };
  
  export default ProfilePage;
  