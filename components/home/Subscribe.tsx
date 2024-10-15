'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast'; // Ensure react-hot-toast is installed

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter a valid email address!');
      return;
    }

    setLoading(true);

    try {
      // Simulate an API call (replace with your endpoint)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Successfully subscribed!');
      setEmail('');
    } catch (error) {
      toast.error('Failed to subscribe. Please try again!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative p-12 bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-xl">
      {/* Decorative Elements */}
      <div className="absolute -top-8 left-8 w-48 h-48 bg-cyan-500/30 blur-2xl"></div>
      <div className="absolute -bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-3xl"></div>

      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Never Miss an Update!
        </h2>
        <p className="text-gray-300 mt-4 mb-8">
          Join our mailing list and stay updated with the latest news and articles.
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <input
            type="email"
            className="w-full sm:w-96 p-4 text-gray-800 rounded-sm focus:ring-4 focus:ring-cyan-400 transition"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className={`w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white transition-all shadow-md ${
              loading ? 'opacity-60 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
