import type { Metadata } from "next";
import { Inconsolata, Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../../components/Navbar';
import Head from 'next/head'; 
import { Footer } from "../../components/Footer";

const inconsolata = Inconsolata({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "PICTMUN",
  description: "Welcome to our PICTMUN website 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>
      <body className={inconsolata.className}>
        <Navbar/>
        {children}
        <Footer />
        </body>
    </html>
   
  );
}
