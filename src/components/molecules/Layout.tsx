import React from 'react';
import { motion } from 'framer-motion';
import Button from '../atoms/Button';

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showHeader = true, showFooter = true }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {showHeader && (
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-secondary-900 opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav className="flex items-center justify-between">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-2"
              >
                <span className="text-2xl font-bold tracking-tight text-white">Travel Concierge <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">AI</span></span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden md:flex items-center space-x-8"
              >
                <Button variant="secondary">Features</Button>
                <Button variant="secondary">About</Button>
                <Button variant="secondary">Contact</Button>
                <Button variant="primary">Get Started</Button>
              </motion.div>
            </nav>
          </div>
        </header>
      )}

      <main>
        {children}
      </main>

      {showFooter && (
        <footer className="bg-gray-950 text-gray-300 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <span className="text-2xl font-bold tracking-tight text-white">Travel Concierge <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">AI</span></span>
                <p className="text-gray-400 mt-2">
                  Your personal AI travel assistant for seamless, smart journeys.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><button className="hover:text-white transition-colors">Features</button></li>
                  <li><button className="hover:text-white transition-colors">Pricing</button></li>
                  <li><button className="hover:text-white transition-colors">Documentation</button></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><button className="hover:text-white transition-colors">About</button></li>
                  <li><button className="hover:text-white transition-colors">Blog</button></li>
                  <li><button className="hover:text-white transition-colors">Careers</button></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><button className="hover:text-white transition-colors">Help Center</button></li>
                  <li><button className="hover:text-white transition-colors">Contact</button></li>
                  <li><button className="hover:text-white transition-colors">Status</button></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
              <p>&copy; 2024 Travel Concierge AI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout; 