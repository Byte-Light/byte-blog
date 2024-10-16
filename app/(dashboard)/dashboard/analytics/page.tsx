const AnalyticsPage = () => {
    // Static data for demonstration
    const analyticsData = {
      totalPosts: 42,
      totalViews: 1280,
      totalUsers: 250,
      engagementRate: 75, // in percentage
    };
  
    return (
      <div className="p-8 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-semibold mb-6">Analytics Dashboard</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-semibold">Total Posts</h2>
            <p className="text-3xl font-bold">{analyticsData.totalPosts}</p>
          </div>
  
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-semibold">Total Views</h2>
            <p className="text-3xl font-bold">{analyticsData.totalViews}</p>
          </div>
  
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-semibold">Total Users</h2>
            <p className="text-3xl font-bold">{analyticsData.totalUsers}</p>
          </div>
  
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-semibold">Engagement Rate</h2>
            <p className="text-3xl font-bold">{analyticsData.engagementRate}%</p>
          </div>
        </div>
  
        <h2 className="text-xl font-semibold mt-8 mb-4">Recent Activity</h2>
        <div className="bg-white p-4 rounded shadow-md">
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Post: Understanding TypeScript</span>
              <span>Views: 120</span>
            </li>
            <li className="flex justify-between">
              <span>Post: React Best Practices</span>
              <span>Views: 85</span>
            </li>
            <li className="flex justify-between">
              <span>Post: Building a Blog with Next.js</span>
              <span>Views: 95</span>
            </li>
            <li className="flex justify-between">
              <span>Post: JavaScript Fundamentals</span>
              <span>Views: 65</span>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default AnalyticsPage;
  