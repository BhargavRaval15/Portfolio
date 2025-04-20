import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/BhargavRaval15', 
      icon: <FaGithub size={20} /> 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/-bhargavraval-', 
      icon: <FaLinkedin size={20} /> 
    },
    { 
      name: 'Email', 
      url: 'mailto:bhargavraval27473@gmail.com', 
      icon: <FaEnvelope size={20} /> 
    },
    { 
      name: 'LeetCode', 
      url: 'https://leetcode.com/u/BhargavRaval15/', 
      icon: <FaCode size={20} /> 
    }
  ];

  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {currentYear} Bhargav Raval. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 