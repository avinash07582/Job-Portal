

import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#6A0DAD] text-white py-4"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-xl font-bold">JobPortal</h2>
          <p className="text-gray-300 text-sm">Find your dream job with us.</p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-lg font-semibold mb-1">Quick Links</h2>
          <ul className="text-gray-300 space-y-1 text-sm">
            <li>
              <Link to="/jobs" className="hover:text-white transition relative">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Jobs
                </motion.span>
              </Link>
            </li>
            <li>
              <Link to="/browse" className="hover:text-white transition relative">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Browse Jobs
                </motion.span>
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex space-x-4"
        >
          {[
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Instagram, href: "https://instagram.com" },
            { icon: Twitter, href: "https://twitter.com" },
            { icon: Facebook, href: "https://facebook.com" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <social.icon className="w-5 h-5 text-gray-300 hover:text-white transition" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center text-gray-300 text-xs mt-3 border-t border-purple-600 pt-2"
      >
        © {new Date().getFullYear()} JobPortal. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;




