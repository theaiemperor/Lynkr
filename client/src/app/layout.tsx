import Navbar from "@/components/Navbar";
import "@/static/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PropsWithChildren } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lynkr - AI PDF Chat App",
  description:
    "Just upload a PDF and start chatting to get instant answers, summaries, or insights",
  icons: ["/icon.png"],
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen bg-gray-200`}
        >
          <div className="sticky top-0 z-50">
            <Navbar />
          </div>
          <div className="w-full mt-5">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
