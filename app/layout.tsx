import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Spotlight from "@/components/Spotlight";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VJL Portfolio",
  description: "This is Victor Jimenez-Lorenzo's portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative">
          <Spotlight />
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
              <Header/>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
