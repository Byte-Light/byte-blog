const AnalyticsPage = () => {
  const analyticsData = {
    totalPosts: 42,
    totalViews: 1280,
    totalUsers: 250,
    engagementRate: 75, // in percentage
  };

  return (
    <div className="p-6 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-semibold mb-8 text-center md:text-left">
        Analytics Dashboard
      </h1>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Total Posts", value: analyticsData.totalPosts },
          { title: "Total Views", value: analyticsData.totalViews },
          { title: "Total Users", value: analyticsData.totalUsers },
          { title: "Engagement Rate", value: `${analyticsData.engagementRate}%` },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-4xl font-bold text-blue-600">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-6 text-center md:text-left">
        Recent Activity
      </h2>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <ul className="space-y-3">
          {[
            { title: "Post: Understanding TypeScript", views: 120 },
            { title: "Post: React Best Practices", views: 85 },
            { title: "Post: Building a Blog with Next.js", views: 95 },
            { title: "Post: JavaScript Fundamentals", views: 65 },
          ].map((activity, index) => (
            <li
              key={index}
              className="flex justify-between items-center text-sm md:text-base"
            >
              <span>{activity.title}</span>
              <span className="font-medium text-gray-600">
                Views: {activity.views}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnalyticsPage;
