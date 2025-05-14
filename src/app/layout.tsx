import './globals.css';
import { fontVariables } from '../lib/fonts';
import Navbar from './navbar';



export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-home-gradient min-h-screen ${fontVariables}`}> 
        <Navbar/>
        {children}
      </body>

    </html>
  );
}
