"use client";

import { ChevronRight } from "lucide-react";
import Marquee from "react-fast-marquee";
import CardStack from "./clients/card-stack";
import { useRouter } from "next/navigation";

export default function whatWeDo() {
  const router = useRouter();

  const stack = [
    {
      img: "./assets/logo/stack/React.png",
      name: "React",
    },
    {
      img: "./assets/logo/stack/Vue.js.png",
      name: "Vue",
    },
    {
      img: "./assets/logo/stack/Next.js.png",
      name: "Next.js",
    },
    {
      img: "./assets/logo/stack/Nuxt JS.png",
      name: "Nuxt.js",
    },
    {
      img: "./assets/logo/stack/Tailwind CSS.png",
      name: "Tailwind CSS",
    },
    {
      img: "./assets/logo/stack/TypeScript.png",
      name: "TypeScript",
    },
    {
      img: "./assets/logo/stack/MYSQL.png",
      name: "MYSQL",
    },
    {
      img: "./assets/logo/stack/Livewire.png",
      name: "Livewire",
    },
    {
      img: "./assets/logo/stack/Vite.js.png",
      name: "Vite.js",
    },
    {
      img: "./assets/logo/stack/Laravel.png",
      name: "Laravel",
    },
    {
      img: "./assets/logo/stack/Nest.js.png",
      name: "Nest.js",
    },
  ];

  return (
    <div>
      <div className="border-l  border-r container max-w-7xl   mx-auto grid grid-cols-1 gap-5 justify-center pt-20  space-y-8 w-full">
        <div className="lg:flex grid grid-cols-1 lg:p-0 p-10 lg:gap-5 gap-10 items-center justify-between ">
          <div className="space-y-5 lg:order-1 order-2">
            <div className="text-primary flex items-center gap-4">
              <div className="w-1 h-4 lg:-ml-0.5 ml-4 bg-primary"></div>
              <p>How We Work</p>
            </div>
            <div className="pl-4 space-y-5">
              <h2 className="font-bold tracking-tighter lg:text-4xl text-3xl lg:max-w-lg max-w-xs text-gray-600">
                Apa yang kami lakukan untuk membangun hal-hal hebat
              </h2>
              <p className="text-gray-400 max-w-sm">
                Kami menggunakan teknologi terkini dan metodologi pengembangan
                yang terbukti untuk menciptakan solusi digital yang inovatif.
                Setiap proyek dikerjakan dengan dedikasi penuh untuk memastikan
                hasil yang melampaui ekspektasi Anda.
              </p>
              <button
                onClick={() => router.push("/how-we-work")}
                className="bg-primary text-sm flex items-center text-white px-6 py-3 rounded-md hover:bg-blue-500  transition-colors"
              >
                Pelajari Lebih Lanjut <ChevronRight className="ml-2 text-sm" />
              </button>
            </div>
          </div>
          <div className="lg:order-2 order-1">
            <img
              src="./assets/path.svg"
              alt=""
              className="lg:max-w-full max-w-sm w-full"
            />
          </div>
        </div>
        <div className="  border-t border-gray-200">
          <Marquee
            gradient={true}
            speed={50}
            direction="left"
            pauseOnHover={false}
            className="py-5 overflow-hidden"
          >
            {stack.map((item) => (
              <CardStack
                key={item.name}
                img={item.img}
                name={item.name}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
