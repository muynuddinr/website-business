"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { FiArrowRight, FiCode, FiLayout, FiShield } from 'react-icons/fi';

const Home = () => {
  // Generate subtle background elements
  const backgroundElements = useMemo(() => {
    const elements = [];
    for (let i = 0; i < 20; i++) {
      elements.push({
        type: i % 3,
        size: Math.random() * 15 + 5, // Smaller sizes
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 3,
        duration: Math.random() * 15 + 10,
      });
    }
    return elements;
  }, []);

  return (
    <main className="relative min-h-screen bg-[#f8faff] dark:bg-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Wave Lines */}
        <svg
          className="absolute w-full h-full opacity-30 dark:opacity-20"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <path
            className="text-blue-100 dark:text-blue-900"
            fill="currentColor"
            d="M 0 400 Q 250 300 500 400 Q 750 500 1000 400 L 1000 1000 L 0 1000 Z"
          >
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              values="
                M 0 400 Q 250 300 500 400 Q 750 500 1000 400 L 1000 1000 L 0 1000 Z;
                M 0 400 Q 250 500 500 400 Q 750 300 1000 400 L 1000 1000 L 0 1000 Z;
                M 0 400 Q 250 300 500 400 Q 750 500 1000 400 L 1000 1000 L 0 1000 Z"
            />
          </path>
          <path
            className="text-blue-50 dark:text-blue-800"
            fill="currentColor"
            d="M 0 500 Q 250 400 500 500 Q 750 600 1000 500 L 1000 1000 L 0 1000 Z"
          >
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="
                M 0 500 Q 250 400 500 500 Q 750 600 1000 500 L 1000 1000 L 0 1000 Z;
                M 0 500 Q 250 600 500 500 Q 750 400 1000 500 L 1000 1000 L 0 1000 Z;
                M 0 500 Q 250 400 500 500 Q 750 600 1000 500 L 1000 1000 L 0 1000 Z"
            />
          </path>
        </svg>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/50 dark:to-blue-950/20" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-blue-600">DevFlow</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-blue-600 font-medium">Home</Link>
                <Link href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Projects</Link>
                <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">About</Link>
                <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Contact</Link>
              </div>
              <div>
                <Link
                  href="/get-started"
                  className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Build Better Software
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                With Modern Tools
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-10"
            >
              Streamline your development workflow with our comprehensive suite of tools. 
              Built for developers by developers, focusing on productivity, collaboration, 
              and code quality.
            </motion.p>

            {/* Technology Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center gap-4 mb-10"
            >
              {['React', 'Node', 'Python', 'Docker', 'AWS', 'Git'].map((tech) => (
                <div
                  key={tech}
                  className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center"
                >
                  <span className="text-blue-600">{tech[0]}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/demo"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all duration-300"
              >
                Try Free Demo
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
};

const features = [
  {
    title: "Cloud Native",
    description: "Deploy and scale your applications with ease using our cloud-first architecture.",
    icon: <FiCode className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Developer Experience",
    description: "Intuitive tools and workflows that make development a joy, not a chore.",
    icon: <FiLayout className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Enterprise Ready",
    description: "Built with security and scalability in mind for businesses of all sizes.",
    icon: <FiShield className="w-6 h-6 text-blue-600" />,
  },
];

export default Home;
