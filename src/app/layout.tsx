import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Photobooth',
  description: '4cuts in web',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="static/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="static/favicon-16x16.png" />
        <link rel="manifest" href="static/site.webmanifest" />
        <link rel="mask-icon" href="static/safari-pinned-tab.svg" color="#0080f5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <header className="h-[100px] flex-center">
          <Link href={{ pathname: '/' }}>
            <h1 className="logo">PHOTOBOOTH</h1>
          </Link>
        </header>
        <main>{children}</main>
        <footer className="h-[200px] flex-center">
          <div>
            Created by <a href={'https://diveindeep.space/'}>diveindeep</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
