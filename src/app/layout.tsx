import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@components/marginals/Header";
import Footer from "@components/marginals/Footer";
import { headers } from "next/headers";
import { getMetadata } from "@/lib/utils/sitemap";

const inter = Inter({ subsets: ["latin"] });

export function generateMetadata(): Metadata {
  const pathname = headers().get("x-next-pathname") || "/";
  const { title, description } = getMetadata(pathname);
  return { title, description };
}

export const viewport = {
  themeColor: "white",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
