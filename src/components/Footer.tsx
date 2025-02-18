// import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1e1b4b] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 gradient-text">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-purple-200">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>kirankulal2002@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>9844240521</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>Nagara, Puttur</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 gradient-text">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-purple-200 hover:text-purple-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#events" className="text-purple-200 hover:text-purple-400 transition-colors">Events</a>
              </li>
              <li>
                <a href="#registration" className="text-purple-200 hover:text-purple-400 transition-colors">Registration</a>
              </li>
              <li>
                <a href="#team" className="text-purple-200 hover:text-purple-400 transition-colors">Team</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4 gradient-text">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/yem_see_yeh_pappuz?utm_source=qr&igsh=MWN2NDhteGE5azZ0cQ==" className="text-purple-200 hover:text-purple-400 transition-colors">
                Instagram
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-500/20 text-center text-purple-200">
  <p>&copy; 2025 TechFest. All rights reserved. | Crafted with 💜 by Kiran and Void</p>
</div>

      </div>
    </footer>
  );
};

export default Footer;