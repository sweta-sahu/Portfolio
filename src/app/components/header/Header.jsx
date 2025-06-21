'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/education', label: 'Education' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background text-foreground shadow-md border-b-4 border-primary">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href="/" 
          className="text-primary text-2xl font-bold no-underline hover:text-primary-light transition"
        >
          Sweta Sahu
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-primary lg:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Navigation links */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute inset-x-0 top-full bg-background text-foreground lg:static lg:block`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center">
            {navItems.map(({ href, label }) => (
              <li key={href} className="border-b border-primary lg:border-none">
                <Link
                  href={href}
                  className="block px-4 py-3 text-primary no-underline hover:underline transition"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
