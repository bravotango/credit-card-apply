'use client';
import Image from 'next/image';
import { GlobalContextProvider } from './Context/store';
import './styles/globals.css';
import Logo from '../public/nordstrom-logo.svg';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchParams = useSearchParams();
  const showLogo = searchParams.get('noLogo') ?? true; // default value is "1"

  return (
    <html lang='en'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <body suppressHydrationWarning={true}>
        {showLogo && (
          <div className='container'>
            <Image src={Logo} alt='company logo' height='25' className='logo' />
          </div>
        )}
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
