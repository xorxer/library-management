import { 
  Figtree, 
  Inter, 
  Roboto, 
  Barlow 
} from 'next/font/google';

// Define each font with its weight variants
export const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700', '900'],
});

export const barlow = Barlow({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

// Font class string to be added to root layout
export const fontVariables = `${figtree.variable} ${inter.variable} ${roboto.variable} ${barlow.variable}`;