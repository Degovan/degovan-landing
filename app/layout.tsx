import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Degovan | Jasa Pembuatan Website & Pengembangan Website",
    template: "%s | Degovan",
  },
  verification: {
    google: "4ycLNoLZeQjDEzdWnV9I3QRy5ea1rGOEkz25JmLQsRA",
  },

  description:
    "Siap berdiskusi dengan kami? Mari berkomitmen pada proyek Anda.",
  icons: {
    icon: [
      { url: "https://degovan.com/favicon.ico", sizes: "any" },
      { url: "https://degovan.com/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "https://degovan.com/favicon.ico",
    apple: "https://degovan.com/favicon.ico",
  },
  applicationName: "Degovan",
  openGraph: {
    siteName: "Degovan",
    title: "Degovan | Jasa Pembuatan Website & Pengembangan Website ",
    description:
      "Siap berdiskusi dengan kami? Mari berkomitmen pada proyek Anda.",
    images: [
      {
        url: "https://degovan.com/assets/logo/image-og.png",
        width: 512,
        height: 512,
        alt: "Logo Degovan",
      },
    ],
  },
  twitter: {
    title: "Degovan | Jasa Pembuatan Website & Pengembangan Website",
    description:
      "Siap berdiskusi dengan kami? Mari berkomitmen pada proyek Anda.",
    images: [
      {
        url: "https://degovan.com/assets/logo/image-og.png",
        width: 512,
        height: 512,
        alt: "Logo Degovan",
      },
    ],
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
