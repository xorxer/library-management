import '../../app/user-globals.css';
import { inter, roboto, figtree, barlow, poppins } from '../../lib/fonts';
import Navbar from './navbar';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable} ${figtree.variable} ${barlow.variable} ${poppins.variable}`}>
      <body className="bg-home-gradient min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

