import React from "react";
import { Facebook, Instagram, Twitter, Mail} from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
            <h2 className="font-bold text-lg mb-2">About Us</h2>
            <p className="text-gray-800 font-semibold">
              We design the best solutions for your important occasions. Let us help you stand out!
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
            <h2 className="font-bold text-lg mb-2">Quick Links</h2>
            <ul>
              <li><a href="#" className="text-gray-800 hover:text-gray-400 font-semibold">About</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-400 font-semibold">Services</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-400 font-semibold">Home</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-400 font-semibold">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
            <h2 className="font-bold text-lg mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-white">
                <Facebook className="w-6 h-6"/>
              </a>
              <a href="#" className="text-gray-700 hover:text-white">
                <Instagram className="w-6 h-6"/>
              </a>
              <a href="#" className="text-gray-700 hover:text-white">
                <Twitter className="w-6 h-6"/>
              </a>
              <a href="#" className="text-gray-700 hover:text-white">
                <Mail className="w-6 h-6"/>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
            <h2 className="font-bold text-lg mb-2">Contact Info</h2>
            <p className="text-gray-800">New colony ,Prathipadu,Tadepalligudem,534146</p>
            <a href="mailto:example@email.com" className="text-gray-800 hover:text-white">ajithreddy1441@gmail.com</a>
            <p className="text-gray-800 mt-1">+91 6309357023</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-blue-600">
            © 2024 Your Company Name. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
