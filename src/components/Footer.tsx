"use client";

import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-secondary-300">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Seattle Homes</h3>
            <p className="mb-4">
              Your trusted source for real estate listings across the Greater Seattle area, powered by daily NWMLS updates.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-secondary-300 hover:text-primary-400">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" className="text-secondary-300 hover:text-primary-400">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com" className="text-secondary-300 hover:text-primary-400">
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Properties</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/properties/single-family" className="hover:text-primary-400">Single Family</Link>
              </li>
              <li>
                <Link href="/properties/condos" className="hover:text-primary-400">Condos</Link>
              </li>
              <li>
                <Link href="/properties/new-construction" className="hover:text-primary-400">New Construction</Link>
              </li>
              <li>
                <Link href="/properties/luxury" className="hover:text-primary-400">Luxury Homes</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Popular Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/neighborhoods/seattle" className="hover:text-primary-400">Seattle</Link>
              </li>
              <li>
                <Link href="/neighborhoods/bellevue" className="hover:text-primary-400">Bellevue</Link>
              </li>
              <li>
                <Link href="/neighborhoods/kirkland" className="hover:text-primary-400">Kirkland</Link>
              </li>
              <li>
                <Link href="/neighborhoods/redmond" className="hover:text-primary-400">Redmond</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-primary-400">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400">Contact</Link>
              </li>
              <li>
                <Link href="/agents" className="hover:text-primary-400">Find an Agent</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary-400">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-800 mt-12 pt-8 text-sm text-secondary-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Seattle Homes. All rights reserved. Not affiliated with NWMLS.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-8">
                <li>
                  <Link href="/terms" className="hover:text-primary-400">Terms</Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-primary-400">Privacy</Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-primary-400">Cookies</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 