import React from 'react'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-green-500 mb-4">
            IndianBite
          </h2>
          <p className="text-sm leading-relaxed">
            Bringing authentic Indian flavors from local kitchens directly to
            your doorstep. Fresh, fast and reliable food delivery service.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 cursor-pointer" onClick={()=>navigate("/")}>Home</li>
            <li className="hover:text-green-400 cursor-pointer">Restaurants</li>
            <li className="hover:text-green-400 cursor-pointer" onClick={()=>navigate("/about")}>About Us</li>
            <li className="hover:text-green-400 cursor-pointer" onClick={()=>navigate("/contact")}>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 cursor-pointer">FAQs</li>
            <li className="hover:text-green-400 cursor-pointer">Help Center</li>
            <li className="hover:text-green-400 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-green-400 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm mb-2">Email: support@indianbite.com</p>
          <p className="text-sm mb-2">Phone: +91 98765 43210</p>
          <p className="text-sm">Available: 9 AM to 11 PM</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} IndianBite. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;