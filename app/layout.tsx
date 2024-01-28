import type { Metadata } from 'next';
import { Catamaran } from 'next/font/google';
import './globals.css';
import Logo from '../public/nordstrom-logo.svg';
import Image from 'next/image';
import { GlobalContextProvider } from './Context/store';
import Payload from './components/Payload';

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
      <body className={catamaran.className} suppressHydrationWarning={true}>
        <div className='container'>
          <Image src={Logo} alt='company logo' height='25' className='logo' />
        </div>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
