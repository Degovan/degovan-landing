import { Hero, Team } from "@/app/components/contributors";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontributor",
  description:
    "Kenali tim web developer dan kontributor Degovan yang berpengalaman dalam jasa pembuatan website, landing page, dan solusi digital untuk bisnis.",
  keywords: [
    "tim web developer Indonesia",
    "kontributor website profesional",
    "jasa pembuatan website",
    "jasa pembuatan landing page",
    "solusi digital untuk bisnis",
  ],
  openGraph: {
    title: "Tim Web Developer & Kontributor Website Profesional - Degovan",
    description:
      "Kenali tim web developer dan kontributor Degovan yang berpengalaman dalam jasa pembuatan website, landing page, dan solusi digital untuk bisnis.",
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
    title: "Tim Web Developer & Kontributor Website Profesional - Degovan",
    description:
      "Kenali tim web developer dan kontributor Degovan yang berpengalaman dalam jasa pembuatan website, landing page, dan solusi digital untuk bisnis.",
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

export default function page() {
  return (
    <div>
      <Hero />
      <Team />
    </div>
  );
}
