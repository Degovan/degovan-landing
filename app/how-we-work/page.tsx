import { Hero, Process } from "@/app/components/how-we-work";
import { Faq } from "@/app/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cara Kerja Kami - Degovan",
  description:
    "Pelajari alur kerja jasa pembuatan website dan pengembangan website Degovan, dari riset kebutuhan bisnis hingga website siap pakai dan terukur.",
  keywords: [
    "cara kerja jasa pembuatan website",
    "proses pengembangan website",
    "jasa pengembangan website profesional",
    "agency digital Indonesia",
    "website bisnis SEO friendly",
  ],
  openGraph: {
    title: "Cara Kerja Jasa Pengembangan Website Profesional - Degovan",
    description:
      "Pelajari alur kerja jasa pembuatan website dan pengembangan website Degovan, dari riset kebutuhan bisnis hingga website siap pakai dan terukur.",
    images: [
      {
        url: "/assets/logo/image-og.png",
        width: 512,
        height: 512,
        alt: "Logo Degovan",
      },
    ],
  },
  twitter: {
    title: "Cara Kerja Jasa Pengembangan Website Profesional - Degovan",
    description:
      "Pelajari alur kerja jasa pembuatan website dan pengembangan website Degovan, dari riset kebutuhan bisnis hingga website siap pakai dan terukur.",
    images: [
      {
        url: "/assets/logo/image-og.png",
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
      <Process />
      <Faq />
    </div>
  );
}
