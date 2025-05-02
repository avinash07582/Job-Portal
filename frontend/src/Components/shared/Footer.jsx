// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="border-t border-t-gray-200 py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-4 md:mb-0">
//             <h2 className="text-xl font-bold">Job Hunt</h2>
//             <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
//           </div>
          
//           <div className="flex space-x-4 mt-4 md:mt-0">
//             <a href="https://facebook.com" className="hover:text-gray-400" aria-label="Facebook">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82V14.706H9.692v-3.578h3.128V8.408c0-3.1 1.893-4.787 4.657-4.787 1.325 0 2.463.1 2.794.144v3.238l-1.918.001c-1.503 0-1.794.715-1.794 1.762v2.31h3.587l-.468 3.578h-3.119V24h6.116C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.407 0 22.676 0z" /></svg>
//             </a>
//             <a href="https://twitter.com" className="hover:text-gray-400" aria-label="Twitter">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.934 4.934 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.924 4.924 0 00-8.38 4.49A13.978 13.978 0 011.67 3.149 4.93 4.93 0 003.16 9.724a4.903 4.903 0 01-2.229-.616v.062a4.93 4.93 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.93 4.93 0 004.6 3.417A9.869 9.869 0 010 21.543a13.978 13.978 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.004-.425-.015-.636A10.012 10.012 0 0024 4.557z" /></svg>
//             </a>
//             <a href="https://linkedin.com" className="hover:text-gray-400" aria-label="LinkedIn">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" /></svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
// import React from "react";
// import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-10">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Company Info */}
//         <div>
//           <h2 className="text-xl font-bold mb-4">JobPortal</h2>
//           <p className="text-gray-400">Find your dream job with us.</p>
//         </div>
        
//         {/* Quick Links */}
//         <div>
//           <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
//           <ul className="space-y-2 text-gray-400">
//             <li><Link to="/jobs" className="hover:text-white">Browse Jobs</Link></li>
//             <li><Link to="/companies" className="hover:text-white">Companies</Link></li>
//             <li><Link to="/about" className="hover:text-white">About Us</Link></li>
//             <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
//           </ul>
//         </div>

//         {/* Social Media */}
//         <div>
//           <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
//           <div className="flex space-x-4">
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//               <Linkedin className="w-6 h-6 hover:text-blue-400" />
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//               <Instagram className="w-6 h-6 hover:text-pink-500" />
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//               <Twitter className="w-6 h-6 hover:text-blue-500" />
//             </a>
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//               <Facebook className="w-6 h-6 hover:text-blue-600" />
//             </a>
//           </div>
//         </div>
//       </div>
      
//       {/* Copyright */}
//       <div className="text-center text-gray-500 text-sm mt-6">
//         © {new Date().getFullYear()} JobPortal. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

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




