import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sweta Sahu',
  description: 'Portfolio of Sweta Sahu',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}