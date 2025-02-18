"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Support', path: '/support' },
  ];

  const ThemeToggleButton = () => (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg text-primary hover:text-blue-600 dark:text-primary-dark dark:hover:text-blue-400 hover:bg-blue-50/40 dark:hover:bg-blue-900/40 transition-all duration-300"
    >
      {theme === 'light' ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      )}
    </button>
  );

  return (
    <nav className="bg-gradient-to-r from-white/95 to-white/90 dark:from-blue-dark-800/95 dark:to-blue-dark-900/90 backdrop-blur-2xl shadow-lg border-b border-gray-100/30 dark:border-blue-dark-600/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo/Brand - Enhanced with stronger gradient and text shadow */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-blue-600 transition-all duration-700 hover:scale-105 [text-shadow:_0_1px_20px_rgb(59_130_246_/_20%)]">
            Cyphernix
            </Link>
          </div>

          {/* Desktop Menu - Enhanced text styling */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="relative text-primary hover:text-blue-600 dark:text-primary-dark dark:hover:text-blue-400 px-4 py-2 rounded-lg text-sm font-bold tracking-wider transition-all duration-300 ease-out hover:bg-blue-50/40 dark:hover:bg-blue-900/40 group overflow-hidden"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-lg"></span>
              </Link>
            ))}
            <ThemeToggleButton />
            {/* Contact Button - Enhanced with stronger gradient and glow */}
            <Link
              href="/contact"
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-blue-600 text-white px-8 py-3 rounded-full text-sm font-bold tracking-wider transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-[0_5px_30px_rgba(37,99,235,0.6)] active:scale-95 group [text-shadow:_0_1px_3px_rgb(0_0_0_/_20%)]"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-white/25 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
            </Link>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggleButton />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-primary hover:text-blue-600 dark:text-primary-dark dark:hover:text-blue-400 hover:bg-blue-50/40 dark:hover:bg-blue-900/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Enhanced text styling */}
      <div 
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden backdrop-blur-2xl`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-b from-white/95 to-white/90 dark:from-blue-dark-800/95 dark:to-blue-dark-900/90">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-primary hover:text-blue-600 dark:text-primary-dark dark:hover:text-blue-400 block px-4 py-3 rounded-lg text-base font-bold tracking-wider hover:bg-blue-50/40 dark:hover:bg-blue-900/40 transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          {/* Mobile Contact Button - Enhanced with stronger gradient and glow */}
          <Link
            href="/contact"
            className="block mx-4 my-4 text-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-blue-600 text-white px-6 py-3.5 rounded-full text-base font-bold tracking-wider transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-[0_5px_30px_rgba(37,99,235,0.6)] active:scale-95 [text-shadow:_0_1px_3px_rgb(0_0_0_/_20%)]"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
