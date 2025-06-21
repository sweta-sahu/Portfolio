import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata = { title: 'Sweta Sahu - Portfolio', description: 'Portfolio website' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="stylesheet" href="/Portfolio/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/Portfolio/css/style.min.css" />
        <script
          src="/Portfolio/js/bootstrap.bundle.min.js"
          defer
        ></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}