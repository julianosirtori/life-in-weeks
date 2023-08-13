import { Header } from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Life in Weeks",
  description:
    "Life in weeks is a project to help you to see how much time you have left in your life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${inter.className} bg-primary-background`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
