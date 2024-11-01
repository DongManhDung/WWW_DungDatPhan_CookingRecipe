import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-700 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cột 1: Liên kết nhanh */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">Contact Us</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Terms of Service</a>
            </li>
          </ul>
        </div>

        {/* Cột 2: Thông tin liên hệ */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300">Email: support@ddpcooking.com</p>
          <p className="text-gray-300">Phone: +123 456 7890</p>
          <p className="text-gray-300">Location: 123 Culinary St, Food City</p>
        </div>

        {/* Cột 3: Sign up for Newsletter */}
        <div className="relative">
          <h2 className="text-2xl font-semibold mb-4">Sign up for Newsletter</h2>
          <p className="text-gray-300 mb-4">
            Stay updated with our latest recipes and cooking tips! Enter your email to subscribe.
          </p>
          <div className="flex justify-between items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded w-full text-gray-800 focus:outline-none"
              required
            />
            <button type="submit" className="bg-white text-green-700 py-2 px-4 rounded ml-2 hover:bg-gray-200">
              Subscribe
            </button>
          </div>
        </div>
        

      </div>

      

      {/* Dòng bản quyền */}
      <div className="mt-8 text-center text-gray-400">
        © {new Date().getFullYear()} DDP Cooking. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;