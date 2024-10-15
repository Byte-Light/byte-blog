// components/Hero.tsx
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-96 h-96 bg-indigo-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="w-80 h-80 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-4xl px-6 text-center text-white">
        {/* Animated Heading */}
        <h1 className="text-6xl sm:text-7xl font-extrabold tracking-wide leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 animate-text">
          Empower Your Dev Journey
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-2xl text-gray-100/80">
          Discover insightful tutorials, coding tips, and hands-on projects to fuel your growth as a developer.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex justify-center gap-6">
          <Link
            href="/blog"
            className="px-8 py-4 text-xl font-semibold rounded-full shadow-lg bg-yellow-400 hover:bg-yellow-500 text-black transition-transform transform hover:scale-105"
          >
            Explore Blog
          </Link>
          <Link
            href="/tutorials"
            className="px-8 py-4 text-xl font-semibold rounded-full shadow-lg bg-white/20 backdrop-blur-lg hover:bg-white/30 text-white transition-transform transform hover:scale-105"
          >
            Browse Tutorials
          </Link>
        </div>
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 opacity-70 pointer-events-none"></div>
    </div>
  );
};

export default Hero;
