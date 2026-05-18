import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Degovan",
    template: "%s - Degovan",
  },
  description:
    "Siap berdiskusi dengan kami? Mari berkomitmen pada proyek Anda.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  applicationName: "Degovan",
  openGraph: {
    siteName: "Degovan",
    title: "Degovan",
    description:
      "Siap berdiskusi dengan kami? Mari berkomitmen pada proyek Anda.",
  },
  twitter: {
    title: "Degovan",
    description:
      "Siap berdiskusi dengan kami? Mari berkomitmen pada proyek Anda.",
  },
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
      label: "Kontributor",
      path: "/contributors",
    },
  ];
  return (
    <html lang="id">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Degovan",
            url: "https://degovan.com",
            logo: "https://degovan.com/favicon.ico",
          }),
        }}
      />
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
