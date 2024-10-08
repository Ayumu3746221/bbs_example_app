import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/layouts/heder";
import ClientProvider from "./components/home/ClientProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BBS_Exaple_app",
  description: "my portfolio Ayumu3746221 for github",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="ja">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header></Header>
          <ClientProvider>
            {children}
          </ClientProvider>
        </body>
      </html>
  );
}
