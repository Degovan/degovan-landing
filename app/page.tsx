import {
  Hero,
  WhatWeDo,
  Services,
  Statisfied,
  Testimonial,
  Projects,
  Faq,
} from "@/app/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website & Pengembangan Website - Degovan",
  description:
    "Degovan adalah jasa pembuatan website dan pengembangan website profesional di Indonesia untuk bisnis, UMKM, company profile, dan landing page SEO-friendly.",
  keywords: [
    "degovan",
    "degovan landing page",
    "degovan website",
    "degovan jasa pembuatan website",
    "jasa pembuatan website",
    "jasa pengembangan website",
    "jasa web developer Indonesia",
    "agency digital Indonesia",
    "jasa pembuatan landing page",
    "jasa pembuatan company profile website",
    "jasa redesign website",
    "jasa website untuk UMKM",
    "jasa maintenance website",
    "solusi digital untuk bisnis",
  ],
  openGraph: {
    title:
      "Jasa Pembuatan Website & Pengembangan Website Profesional - Degovan",
    description:
      "Degovan adalah jasa pembuatan website dan pengembangan website profesional di Indonesia untuk bisnis, UMKM, company profile, dan landing page SEO-friendly.",
    images: [
      {
        url: "/assets/logo/logo.png",
        width: 512,
        height: 512,
        alt: "Logo Degovan",
      },
    ],
  },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <Services />
      <Statisfied />
      {/* <Client /> */}
      <Projects />
      <Testimonial />
      <Faq />
    </div>
  );
}
