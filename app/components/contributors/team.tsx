"use client";
import Card from "@/app/components/contributors/list/card";
import DrawerHiring from "@/app/components/drawer-hiring";
import { useState } from "react";

type Contributor = {
  name: string;
  photo: string;
  role: string;
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
  };
};

const contributors: Contributor[] = [
  {
    name: "Fahmi Dafrin Maulana",
    photo: "/assets/team/dafrin.png",
    role: "Founder & Marketing",
    socials: {
      github: "https://github.com/destroylord",
      linkedin: "https://id.linkedin.com/in/fahmi-dafrin-maulana",
      instagram: "https://www.instagram.com/fdm_0301/",
    },
  },
  {
    name: "Mohammad Sahrullah",
    photo: "/assets/team/sahrul.png",
    role: "Frontend Engineer ",
    socials: {
      github: "https://github.com/sahrullahh",
      linkedin: "https://id.linkedin.com/in/mohammad-sahrullah",
      instagram: "https://www.instagram.com/shrullahh_/",
    },
  },
  {
    name: "Ahmad Irsyadulibad",
    photo: "/assets/team/irsyad.png",
    role: "Fullstack Developer",
    socials: {
      github: "https://github.com/irsyadulibad",
      linkedin: "https://id.linkedin.com/in/irsyadulibad",
      instagram: "https://www.instagram.com/a.irsyadulibad/",
    },
  },
  {
    name: "Azza Wafiqurrohmah",
    photo: "/assets/team/azza.png",
    role: "Backend Developer ",
    socials: {
      github: "https://github.com/AzzaWafiqurrohmah",
      linkedin: "https://id.linkedin.com/in/azza-wafiqurrohmah",
      instagram: "https://www.instagram.com/_azza.wfq/",
    },
  },
];

export default function Team() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white relative z-10">
      <DrawerHiring
        isOpen={open}
        onOpenChange={setOpen}
      />
      <div className="border-l  border-r container pt-20 pb-10 max-w-7xl mx-auto grid grid-cols-1 gap-5 justify-center space-y-8 w-full">
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
        <div className="grid break-inside-avoid overflow-hidden lg:grid-cols-5 grid-cols-2 p-5 items-center gap-3 justify-center">
          {contributors.map((item) => (
            <Card
              key={item.name}
              name={item.name}
              photo={item.photo}
              role={item.role}
              socials={item.socials}
            />
          ))}
        </div>
        <div className="py-8 px-5 bg-white border-t space-y-5">
          <div className="flex lg:gap-20 gap-5 lg:flex-row flex-col justify-between">
            <div className="space-y-5">
              <h2 className="text-2xl max-w-[200px] font-semibold tracking-tighter">
                We Are Hiring! to Join Our Team
              </h2>
              <button
                className="text-white w-full text-sm px-5 py-3 rounded-md bg-primary tracking-tighter hover:underline"
                onClick={() => setOpen(true)}
              >
                Apply Now
              </button>
            </div>
            <p className="text-gray-400 font-normal flex-1">
              <span className="font-bold text-neutral-700 tracking-tighter mr-2">
                We Are Hiring!.
              </span>
              Bergabunglah dengan tim kami yang dinamis dan inovatif! Kami
              sedang mencari individu berbakat yang siap untuk tumbuh bersama
              kami. Jika Anda memiliki semangat untuk teknologi dan ingin
              menjadi bagian dari perjalanan kami, jangan ragu untuk menghubungi
              kami dengan menekan tombol "Apply Now".
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
