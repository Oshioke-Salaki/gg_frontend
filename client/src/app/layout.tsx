import { Inter } from "next/font/google";

import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/ui/query-provider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});



const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Gasless Gossip Landing Page</title>
      </head>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
      >
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}