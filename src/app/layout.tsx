import type { Metadata } from 'next';
import { Orbitron, Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/hooks/ThemeProvider';
import Footer from '@/components/footer/Footer';
import React from 'react';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: '200',
});

const orbitron = Orbitron({
  variable: '--font-orbitron',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'EmpresaX',
  description: 'Conecte, gerencie, cresça.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${orbitron.variable} antialiased`}>
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
