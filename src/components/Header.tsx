"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              Seattle Homes
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/properties" className="text-secondary-600 hover:text-primary-600 font-medium">
              Browse
            </Link>
            <Link href="/neighborhoods" className="text-secondary-600 hover:text-primary-600 font-medium">
              Neighborhoods
            </Link>
            <Link href="/workflows" className="text-secondary-600 hover:text-primary-600 font-medium">
              Alerts
            </Link>
            <Link href="/about" className="text-secondary-600 hover:text-primary-600 font-medium">
              About
            </Link>
            <Link href="/login" className="btn-primary">
              Sign In
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary-500 hover:text-secondary-900 hover:bg-secondary-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/properties" 
              className="block px-3 py-2 rounded-md text-base font-medium text-secondary-900 hover:bg-secondary-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Browse
            </Link>
            <Link 
              href="/neighborhoods" 
              className="block px-3 py-2 rounded-md text-base font-medium text-secondary-900 hover:bg-secondary-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Neighborhoods
            </Link>
            <Link 
              href="/workflows" 
              className="block px-3 py-2 rounded-md text-base font-medium text-secondary-900 hover:bg-secondary-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Alerts
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-secondary-900 hover:bg-secondary-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/login" 
              className="block w-full text-center mt-4 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 