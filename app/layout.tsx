import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Degovan - We commit to your work and your business as digital development.",
  description: "Ready to discuss with us? Let's commit to your project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuItem = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "How we work",
      path: "/how-we-work",
    },
    {
      label: "Projects",
      path: "/projects",
    },
    {
      label: "Contributors",
      path: "/contributors",
    },
  ];
  return (
    <html lang="en">
      <body className={`antialiased ${lexend.className}`}>
        <Header
          logo="./assets/logo/logo.png"
          menu={menuItem}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
