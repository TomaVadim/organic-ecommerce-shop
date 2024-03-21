import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

import "./globals.css";

const inter = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ecobazar",
  description: "Organic eco-bazar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col h-svh`}>
        <Header />
        <main className="grow shrink-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
