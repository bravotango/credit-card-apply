import { Catamaran } from 'next/font/google';
import Image from 'next/image';
import type { Metadata } from 'next';
import { GlobalContextProvider } from './Context/store';
import './globals.css';
import Logo from '../public/nordstrom-logo.svg';
import Head from 'next/head';

const catamaran = Catamaran({ subsets: ['latin'], weight: '600' });

export const metadata: Metadata = {
  title: 'Credit card application',
  description: 'NextJS 13+',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
        />
      </Head>
      <body className={catamaran.className} suppressHydrationWarning={true}>
        <div className='container'>
          <Image src={Logo} alt='company logo' height='25' className='logo' />
        </div>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
