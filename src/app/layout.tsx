import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/common/Header";
import { Footer } from "@/common/Footer";

export const metadata: Metadata = {
  title: "Team of 1",
  description: "AI powered",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans flex flex-col mb-12">
        <Header />
        <div className="p-4">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
