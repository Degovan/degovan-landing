"use client";

import { useStore } from "@/store";
import Card from "@/app/components/projects/list/card";

export default function List() {
  const { projects } = useStore();

  return (
    <div className="bg-white relative z-10">
      <div className="border-l  border-r container pt-20 pb-60 max-w-7xl mx-auto grid grid-cols-1 gap-5 justify-center space-y-8 w-full">
        <div className="space-y-5 lg:p-0 p-8 ">
          <div className="pl-4 space-y-5">
            <p className="text-gray-400 ">
              Jelajahi portofolio proyek kami yang telah berhasil diselesaikan.
              Setiap proyek mencerminkan dedikasi kami dalam memberikan solusi
              digital berkualitas tinggi yang memenuhi kebutuhan klien dan
              melampaui ekspektasi mereka.
            </p>
          </div>
        </div>
        <div className="grid break-inside-avoid overflow-hidden lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-5 lg:gap-5 gap-10 justify-center">
          {projects.map((item) => (
            <Card
              key={item.name}
              title={item.name}
              img={item.images}
              description="Deskripsi proyek akan segera diperbarui."
            />
          ))}
        </div>
      </div>
    </div>
  );
}
