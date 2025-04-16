'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Import icons (you can use any icon library like react-icons)
import { 
  FaHome, 
  FaCode, 
  FaProjectDiagram, 
  FaCogs, 
  FaComments, 
  FaEnvelope 
} from 'react-icons/fa';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add a slight threshold to prevent flickering
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      const sections = ['home', 'technical expertise', 'projects', 'development process', 'testimonials', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(id);
    }
  };

  // Map sections to their respective icons
  const sectionIcons = [
    { id: 'home', icon: <FaHome size={20} />, label: 'Home' },
    { id: 'technical expertise', icon: <FaCode size={20} />, label: 'Technical Expertise' },
    { id: 'projects', icon: <FaProjectDiagram size={20} />, label: 'Projects' },
    { id: 'development process', icon: <FaCogs size={20} />, label: 'Development Process' },
    { id: 'testimonials', icon: <FaComments size={20} />, label: 'Testimonials' },
    { id: 'contact', icon: <FaEnvelope size={20} />, label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
      style={{
        // This ensures no white line appears during scrolling
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        willChange: 'transform'
      }}
    >
      <div className="max-w-7xl mx-auto pl-2 pr-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ml-0">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 focus:outline-none"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 relative">
                <Image
                  src="/logo0.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </button>
          </div>

          {/* Desktop Nav Links with Icons */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4 lg:space-x-6">
              {sectionIcons.map(({ id, icon, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`p-3 rounded-md text-sm font-medium transition-colors relative group ${
                    activeSection === id
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  aria-label={label}
                >
                  {icon}
                  {/* Tooltip on hover */}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}