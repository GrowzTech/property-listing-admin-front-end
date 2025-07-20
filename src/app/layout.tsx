import type { Metadata } from "next";
import { Inter, Literata } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const literataSans = Literata({
  variable: "--font-literata-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Land Mercado",
  description: "Land Mercado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={`${interSans.variable} ${literataSans.variable} antialiased font-inter`}
        >
          {children}
          <ToastContainer position="top-right" autoClose={3000} />
        </body>
      </html>
    </StoreProvider>
  );
}
