import React from 'react';
import { personalInfo, contactInfo } from '../../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Pankaj <span className="text-orange-500">Kshetri</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Software Developer passionate about creating efficient, scalable solutions 
              using Java, Spring Boot, and modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="text-orange-500">📧</span> {contactInfo.email}
              </p>
              <p className="text-gray-400">
                <span className="text-orange-500">🌍</span> {contactInfo.location}
              </p>
            </div>
            <div className="flex space-x-4">
              <a 
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-xl"
              >
                🐙
              </a>
              <a 
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-xl"
              >
                💼
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-xl"
              >
                📧
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Pankaj Kshetri. All rights reserved. Built with React and passion for coding.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;