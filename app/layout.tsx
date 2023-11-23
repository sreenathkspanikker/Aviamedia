import { metropolis } from './fonts/fonts'
import "@/styles/main.scss";

// component
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Mainframe from '@/components/Mainframe';

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${metropolis.variable}`}>
      <body>
        <Header />
        <Mainframe />
        {children}
        <Footer />
      </body>
    </html>
  )
}