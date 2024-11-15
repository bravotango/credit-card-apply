'use client';
import { Catamaran } from 'next/font/google';
import Image from 'next/image';
import { GlobalContextProvider } from './Context/store';
import './styles/globals.css';
import Logo from '../public/nordstrom-logo.svg';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';

const catamaran = Catamaran({ subsets: ['latin'], weight: '600' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchParams = useSearchParams(); // Get the search parameters
  const showLogo = searchParams.get('logo') !== '0'; // Check if the logo query parameter is not 0

  return (
    <html lang='en'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <body className={catamaran.className} suppressHydrationWarning={true}>
        <div className='container'>
          {showLogo && (
            <Image src={Logo} alt='company logo' height='25' className='logo' />
          )}
        </div>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
