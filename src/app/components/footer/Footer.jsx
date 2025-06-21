'use client';

import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t-4 border-primary">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between px-4 py-6 gap-8">
        {/* Contact Section */}
        <div>
          <h5 className="text-primary font-bold mb-2">Contact</h5>
          <p>
            Email:{' '}
            <Link
              href="mailto:swetasah@buffalo.edu"
              className="text-foreground hover:text-primary transition"
            >
              swetasah@buffalo.edu
            </Link>
          </p>
          <p>Phone: +1 (716) 446-6484</p>
        </div>

        {/* Social Links Section */}
        <div>
          <h5 className="text-primary font-bold mb-2">Follow Me</h5>
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/23-sweta-sahu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-foreground hover:text-primary transition"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/sweta-sahu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-foreground hover:text-primary transition"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center px-4 pb-4">
        <hr className="border-t border-primary my-4" />
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Sweta Sahu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
