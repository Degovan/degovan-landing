"use client";
import React from "react";
import Card from "@/app/components/contributors/list/card";

type Contributor = {
  name: string;
  photo: string;
  role: string;
};

const contributors: Contributor[] = [
  {
    name: "Fahmi Dafrin Maulana",
    photo: "/assets/team/dafrin.png",
    role: "Founder & Marketing",
  },
  {
    name: "Ahmad Irsyadullibad",
    photo: "/assets/team/irsyad.png",
    role: "Backend & Fullstack",
  },
  {
    name: "Mohammad Sahrullah",
    photo: "/assets/team/sahrul.png",
    role: "Frontend Engineer ",
  },
];

export default function Team() {
  return (
    <div className="bg-white relative z-10">
      <div className="border-l border-r container pt-20 pb-60 max-w-7xl mx-auto grid grid-cols-1 gap-5 justify-center space-y-8 w-full">
        <div className="space-y-5 lg:p-0 p-8">
          <div className="pl-4 space-y-5">
            <p className="text-gray-400">
              Berkenalan dengan individu-individu berbakat dan berdedikasi di
              balik kesuksesan setiap proyek kami. Bersama-sama, kami
              menggabungkan keahlian dan kreativitas untuk memberikan hasil
              terbaik yang berdampak nyata bagi klien kami.
            </p>
          </div>
        </div>
        <div className="grid break-inside-avoid overflow-hidden lg:grid-cols-5 md:grid-cols-2 grid-cols-1 p-5 items-center  gap-3 justify-center">
          {contributors.map((item) => (
            <Card
              key={item.name}
              name={item.name}
              photo={item.photo}
              role={item.role}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
