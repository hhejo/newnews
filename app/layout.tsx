import type { Metadata } from 'next';
// import localFont from 'next/font/local';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
// import Aside from '@/components/aside';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

const notoSansKr = Noto_Sans_KR({ weight: ['500'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Newnews',
  description: 'Book service by Hhejo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${notoSansKr.className} antialiased`}
      >
        <Header />
        <>{children}</>
        <Footer />
      </body>
    </html>
  );
}
