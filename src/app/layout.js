// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ozzie Gonzalez Photography",
  description: "Professional photography portfolio showcasing landscape, wildlife, and lifestyle photography",
};

export default function RootLayout({ children }) {
  const isDarkLogo = children?.props?.segment === ""; // Check if we're on the home page

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mainContainer">
          <header className="header">
            <div className="logo-container">
              <Link href="/">
                <Image
                  className="logo"
                  src={isDarkLogo ? "/signature.png" : "/signature-dark.png"}
                  alt="Ozzie's Logo"
                  width={200}
                  height={150}
                  priority={true}
                />
              </Link>
            </div>
            <Navbar />
          </header>
          <main className="contentContainer">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}