import React from "react";
import Card from "@/app/components/home/service/card";
export default function Services() {
  const services = [
    {
      title: "Pengembangan Web",
      img: "./assets/card/web-transparent.png",
      description:
        "Kami membangun website yang fungsional, indah, dan mudah digunakan.",
    },
    {
      title: "Pengembangan Mobile",
      img: "./assets/card/mobile-transparent.png",
      description:
        "Kami membangun aplikasi mobile yang fungsional, indah, dan mudah digunakan.",
    },
    {
      title: "Desain UI / UX",
      img: "./assets/card/ui-ux.png",
      description:
        "Kami menciptakan desain yang menarik dan pengalaman pengguna yang optimal.",
    },
    {
      title: "Backend & API",
      img: "./assets/card/backend-api.png",
      description:
        "Kami menciptakan desain yang menarik dan pengalaman pengguna yang optimal.",
    },
  ];

  return (
    <div className="bg-[#F6F9FC]">
      <div className="border-l  border-r container pt-20 pb-60 max-w-7xl   mx-auto grid grid-cols-1 gap-5 justify-center  space-y-8 w-full">
        <div className="space-y-5 lg:p-0 p-8 ">
          <div className="text-primary flex items-center gap-4">
            <div className="w-1 h-4 lg:-ml-0.5 ml-4 bg-primary"></div>
            <p>Services</p>
          </div>
          <div className="pl-4 space-y-5">
            <h2 className="font-bold tracking-tighter lg:text-4xl text-3xl lg:max-w-sm max-w-xs text-gray-600">
              Layanan yang kami tawarkan untuk Anda
            </h2>
            <p className="text-gray-400 ">
              Kami menyediakan berbagai layanan pengembangan digital yang
              dirancang untuk membantu bisnis Anda tumbuh dan berkembang. Dari
              pembuatan website hingga aplikasi mobile, kami siap mewujudkan
              visi digital Anda dengan solusi yang inovatif dan berkualitas
              tinggi.
            </p>
          </div>
        </div>
        <div className="grid break-inside-avoid overflow-hidden lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-5 lg:gap-5 gap-10 justify-center">
          {services.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              img={service.img}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
