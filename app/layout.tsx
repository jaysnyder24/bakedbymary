import type { Metadata } from 'next';
import { Bebas_Neue, Poppins } from 'next/font/google';
import './globals.css';
import Nav from './components/navigation/Nav';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas-neue',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Baked By Mary | Homemade, Specialty Cookies In Ankeny, IA',
  description:
    "If you're looking for delicious, homemade specialty cookies in Ankeny, IA, Baked By Mary has you covered. Order online today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${bebasNeue.variable} ${poppins.variable} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
