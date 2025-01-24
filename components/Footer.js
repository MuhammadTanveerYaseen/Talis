"use client"
import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ModeToggle } from './theme-btn';

const Footer = () => {
  return (
    <footer className="bg-background/50 border-t backdrop-blur p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Logo and Branding */}
        <div className="text-center md:text-left">
          <Link href="/">
            <div className="text-lg font-bold">
              TALIS
            </div>
          </Link>
          <p className="text-sm text-muted-foreground mt-2">
            Inspiring creativity, blogs, and more!
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex justify-center space-x-4 md:space-x-6">
          <Link href="/" className="text-sm hover:text-primary transition-colors duration-200">
            Home
          </Link>
          <Link href="/about" className="text-sm hover:text-primary transition-colors duration-200">
            About
          </Link>
          <Link href="/blog" className="text-sm hover:text-primary transition-colors duration-200">
            Blog
          </Link>
          <Link href="/contact" className="text-sm hover:text-primary transition-colors duration-200">
            Contact
          </Link>
        </div>

        {/* Social Links & Theme Toggle */}
        <div className="text-center md:text-right">
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 hover:text-primary transition-colors duration-200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5.5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 hover:text-primary transition-colors duration-200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.599 0 0 .599 0 1.325v21.351C0 23.401.599 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.794.714-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.725 0 1.324-.599 1.324-1.324V1.325C24 .599 23.401 0 22.675 0z"></path>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 hover:text-primary transition-colors duration-200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.645.07 4.849s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.645-.07 4.85-.07M12 0C8.741 0 8.332.014 7.053.072 5.775.13 4.559.417 3.515 1.46c-1.044 1.044-1.331 2.26-1.388 3.538C2.014 8.332 2 8.741 2 12s.014 3.668.072 4.947c.057 1.278.344 2.494 1.388 3.538 1.044 1.044 2.26 1.331 3.538 1.388C8.332 21.986 8.741 22 12 22s3.668-.014 4.947-.072c1.278-.057 2.494-.344 3.538-1.388 1.044-1.044 1.331-2.26 1.388-3.538.058-1.279.072-1.688.072-4.947s-.014-3.668-.072-4.947c-.057-1.278-.344-2.494-1.388-3.538-1.044-1.044-2.26-1.331-3.538-1.388C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"></path>
              </svg>
            </a>
          </div>
          <div className="mt-4">
            <ModeToggle />
          </div>
        </div>
      </div>
      <div className="text-center mt-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} TALIS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
