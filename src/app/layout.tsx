import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/assets/styles/globals.css";
import ClientPathDetector from "@/components/base/ClientPathDetector";
import SmoothWrapper from "@/components/base/SmoothWrapper";
import Footer from "@/components/main/Footer/Footer";
import Header from "@/components/main/Header/Header";
import ParallaxWarpper from "@/components/sections/ParallaxWarpper/ParallaxWarpper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App",
  description: "Next App Description",
  robots: "noindex, nofollow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <SmoothWrapper />
        <ClientPathDetector path={["/", "/test-page"]}>
          <ParallaxWarpper />
        </ClientPathDetector>

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className="relative flex flex-col">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
