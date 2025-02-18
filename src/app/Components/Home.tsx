"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -45, 0],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Floating Elements */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block"
              >
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-600 dark:text-blue-400 text-sm font-semibold backdrop-blur-sm border border-blue-200/20 dark:border-blue-500/20">
                  Welcome to the Future of Digital Solutions
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 leading-tight">
                Transform Your <br /> Digital Experience
              </h1>
              
              {/* Floating cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-20 top-0 w-32 h-32 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl hidden lg:block"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-16 bottom-0 w-24 h-24 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl hidden lg:block"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-secondary dark:text-secondary-dark max-w-3xl mx-auto mb-8"
            >
              Empowering your journey with cutting-edge solutions and innovative technology that drives success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <Link
                  href="/services"
                  className="relative px-8 py-4 bg-white dark:bg-blue-dark-800 rounded-full text-lg font-bold text-blue-600 dark:text-blue-400 inline-flex items-center gap-2 group-hover:text-blue-500 transition-all duration-300"
                >
                  Explore Services
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full text-lg font-bold border-2 border-blue-600/20 dark:border-blue-400/20 text-blue-600 dark:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300"
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-background dark:from-background-dark to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50/50 dark:bg-blue-dark-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-blue-dark-800/50 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/30 dark:border-blue-dark-600/30"
              >
                <div className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary dark:text-primary-dark">
                  {feature.title}
                </h3>
                <p className="text-secondary dark:text-secondary-dark">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-primary-dark">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg text-secondary dark:text-secondary-dark mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have elevated their business with our solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-blue-600 text-white px-8 py-3 rounded-full text-lg font-bold tracking-wider transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-[0_5px_30px_rgba(37,99,235,0.6)]"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </main>
  );
};

const features = [
  {
    title: "Innovative Solutions",
    description: "Cutting-edge technology solutions tailored to your business needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Expert Support",
    description: "24/7 dedicated support from our team of experienced professionals.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Secure & Reliable",
    description: "Enterprise-grade security and reliability for your peace of mind.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default Home;
