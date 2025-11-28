import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 mt-10">
      <div className="container mx-auto py-10 px-5 grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">🎬 MovieTime</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            MovieTime is your trusted platform for exploring the latest movies,
            trending films, and timeless classics. Browse, discover, and add
            your favorite movies to your cart instantly.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li>
              <a href="#" className="hover:text-primary transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Movies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Trending
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Email: support@movietime.com
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Phone: +880 1234-567890
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center md:justify-start space-x-4 text-xl text-gray-600 dark:text-gray-300">
            <a href="#" className="hover:text-primary transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Rights */}
      <div className="text-center py-4 border-t border-black/5 dark:border-white/5 text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} MovieTime. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
