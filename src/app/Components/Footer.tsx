"use client";

import Link from 'next/link';
import { useTheme } from './ThemeProvider';

const Footer = () => {
  const { theme } = useTheme();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
        { name: 'Press', href: '/press' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Support', href: '/support' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { name: 'Twitter', href: 'https://twitter.com' },
        { name: 'LinkedIn', href: 'https://linkedin.com' },
        { name: 'GitHub', href: 'https://github.com' },
        { name: 'Discord', href: 'https://discord.com' },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-white/95 to-white/90 dark:from-gray-900/95 dark:to-gray-900/90 border-t border-gray-100/30 dark:border-gray-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
              YourBrand
            </Link>
            <p className="text-secondary dark:text-secondary-dark text-sm">
              Building the future of digital experiences with cutting-edge technology and innovative solutions.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-primary dark:text-primary-dark font-bold mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-secondary dark:text-secondary-dark hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-100/30 dark:border-gray-700/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary dark:text-secondary-dark text-sm">
              © {new Date().getFullYear()} YourBrand. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/terms"
                className="text-secondary dark:text-secondary-dark hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-300"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-secondary dark:text-secondary-dark hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-300"
              >
                Privacy
              </Link>
              <Link
                href="/cookies"
                className="text-secondary dark:text-secondary-dark hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-300"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
