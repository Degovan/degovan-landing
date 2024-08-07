import React from "react";
import Card from "@/app/components/contributors/list/card";
const team = [
  {
    title: "Fahmi Dafrin Maulana",
    img: "./assets/card/mobile-transparent.png",
    description: "Founder or Owner Degovan",
  },
  {
    title: "Ahmad Irsyadul'ibad",
    img: "./assets/card/mobile-transparent.png",
    description: "Backend Engineer",
  },
  {
    title: "Mohammad Sahrullah",
    img: "./assets/card/mobile-transparent.png",
    description: "Frontend Engineer",
  },
  {
    title: "Azza Wafiqurrohmah",
    img: "./assets/card/mobile-transparent.png",
    description: "Web Developer",
  },
];
export default function list() {
  return (
    <div className="bg-white relative z-10">
      <div className="border-l  border-r container pt-20 pb-60 max-w-7xl   mx-auto grid grid-cols-1 gap-5 justify-center  space-y-8 w-full">
        <div className="space-y-5 lg:p-0 p-8 ">
          <div className="pl-4 space-y-5">
            <p className="text-gray-400 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="grid break-inside-avoid overflow-hidden lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-5 lg:gap-5 gap-10 justify-center">
          {team.map((service) => (
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
