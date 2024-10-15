// components/Footer.tsx
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-semibold text-cyan-400">CodeBlog</h2>
          <p className="text-gray-400 mt-2">
            Empowering developers with the latest programming tips, tutorials, and insights.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-cyan-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-cyan-400">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-cyan-400">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-cyan-400">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-medium mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebook className="text-xl hover:text-cyan-400" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter className="text-xl hover:text-cyan-400" />
            </Link>
            <Link href="https://github.com" target="_blank">
              <FaGithub className="text-xl hover:text-cyan-400" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedin className="text-xl hover:text-cyan-400" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} CodeBlog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
