import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../component/Navbar";
import { AuthProvider } from "../lib/AuthContext";
import Footer from "../component/Footer";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next";
import ClickToCallFAB from "../component/ClickToCall";
import Script from "next/script"; // ✅ Add this import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Last Call Trips",
  description:
    "Last Call Trips is a premium service that finds you incredibly cheap flight deals. We scour the web to uncover hidden deals, unadvertised sales and mistake fares that save you at least 40% from average prices.",
  icons: {
    icon: "/faviconn.ico",
    shortcut: "/faviconn.ico",
    apple: "/faviconn.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />

        {/* ✅ Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3H64JGPSQN"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3H64JGPSQN');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <AuthProvider>
            <Navbar />
            <main className="pt-28 min-h-screen mt-10">{children}</main>
            <Footer />
            <ClickToCallFAB phoneNumber="+1 (833) 747-1983" />
          </AuthProvider>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
