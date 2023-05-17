import Header from '@/components/Header';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import Footer from '@/components/Footer';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'My Blog',
    template: 'My Blog | %s',
  },
  description: '프론트엔드 개발자 블로그',
  icons: {
    icon: 'favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="mx-auto flex w-full flex-col">
        <div className="mx-auto w-full max-w-screen-2xl">
          <Header />
        </div>
        <main className="grow">{children}</main>
        <div className="w-full -bg--sub-color">
          <Footer />
        </div>
      </body>
    </html>
  );
}
