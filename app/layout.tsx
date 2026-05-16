import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Degovan - Kami berkomitmen pada pekerjaan dan bisnis Anda sebagai pengembangan digital.",
  description:
    "Siap berdiskusi dengan kami? Mari berkomitmen pada proyek Anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuItem = [
    {
      label: "Beranda",
      path: "/",
    },
    {
      label: "Cara Kerja Kami",
      path: "/how-we-work",
    },
    {
      label: "Proyek",
      path: "/projects",
    },
    {
      label: "Kontributor",
      path: "/contributors",
    },
  ];
  return (
    <html lang="id">
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
