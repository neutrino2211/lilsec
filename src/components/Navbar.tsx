import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bug, Code2, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldShowBackground = isScrolled || location.pathname.startsWith('/project');

  const navLinks = [
    { path: '/', label: 'Projects' },
    { path: '/about', label: 'About Me' },
    { path: '/updates', label: 'Updates' }
  ];

  return (
    <nav  
      className={`fixed w-full z-50 transition-all duration-300 ${
        shouldShowBackground ? 'bg-white/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="lilsec" className={`h-6 w-6 ${shouldShowBackground ? 'text-blue-600' : 'text-white'}`} />
            <span className={`font-bold text-lg ${shouldShowBackground ? 'text-gray-900' : 'text-white'}`}>
              lilsec
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  shouldShowBackground
                    ? 'text-gray-600 hover:text-blue-600'
                    : 'text-white/90 hover:text-white'
                } ${location.pathname === link.path ? 'text-blue-600 underline' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${shouldShowBackground ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${shouldShowBackground ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg rounded-lg mt-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-gray-600 hover:text-blue-600 ${
                  location.pathname === link.path ? 'font-semibold' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};