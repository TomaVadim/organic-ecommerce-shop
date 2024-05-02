import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Header } from "@/components/public/header/header/header";
import { Footer } from "@/components/public/footer/footer/footer";

import "./globals.css";

const inter = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
