import React from "react";
import Card from "@/app/components/home/service/card";
export default function Services() {
  const services = [
    {
      title: "Web Development",
      img: "./assets/card/web-transparent.png",
      description:
        "We build websites that are functional, beautiful, and easy to use.",
    },
    {
      title: "Mobile Development",
      img: "./assets/card/mobile-transparent.png",
      description:
        "We build websites that are functional, beautiful, and easy to use.",
    },
    {
      title: "UI / UX Design",
      img: "./assets/card/mobile-transparent.png",
      description:
        "We build websites that are functional, beautiful, and easy to use.",
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
              The services we offer to you
            </h2>
            <p className="text-gray-400 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
