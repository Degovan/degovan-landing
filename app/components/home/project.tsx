"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const stories = [
  {
    title: "Translate Jawa",
    desc: "Layanan translate (terjemah) bahasa Indonesia ke Jawa dengan Krama, Ngoko dan Inggil yang disertai dengan kamus dan artinya.",
    link: "https://translatejawa.com",
    image: "/assets/projects/translate-jawa.png",
  },
  {
    title: "Translate Lampung",
    desc: "Layanan translate (terjemah) bahasa Indonesia ke Lampung dengan Dialek A atau O yang disertai dengan kamus dan artinya.",

    link: "https://translatelampung.com",
    image: "/assets/projects/translate-lampung.png",
  },
  {
    title: "CekArtiNama",
    desc: "Layanan untuk mengecek arti nama beserta penjelasan maknanya.",

    link: "https://cekartinama.com",
    image: "/assets/projects/cekartinama.png",
  },
  {
    title: "Jadwal Sholat",
    desc: "Layanan untuk menampilkan jadwal sholat berdasarkan lokasi Anda.",

    link: "https://jadwal-sholat.org",
    image: "/assets/projects/jadwal-sholat.png",
  },
  {
    title: "Secure Browsing",
    desc: "Layanan untuk memeriksa keamanan sebuah situs web dengan menganalisis berbagai faktor seperti sertifikat SSL, reputasi domain, dan potensi ancaman keamanan lainnya.",
    link: "#",
    image: "/assets/projects/secure-browsing.png",
  },
];

export default function Projects() {
  return (
    <div className="bg-white">
      <div className="border-l  border-r container pt-20 pb-20 max-w-7xl   mx-auto grid grid-cols-1 gap-5 justify-center  space-y-8 w-full">
        <div className="space-y-5 lg:p-0 p-8 ">
          <div className="text-primary flex items-center gap-4">
            <div className="w-1 h-4 lg:-ml-0.5 ml-4 bg-primary"></div>
            <p>Projects</p>
          </div>
          <div className="pl-4 space-y-5">
            <h2 className="font-bold tracking-tighter lg:text-4xl text-3xl lg:max-w-sm max-w-xs text-gray-600">
              Banyak proyek telah kami selesaikan
            </h2>
            <p className="text-gray-400 ">
              Jelajahi portofolio proyek kami yang telah berhasil diselesaikan.
              Setiap proyek mencerminkan dedikasi kami dalam memberikan solusi
              digital berkualitas tinggi yang memenuhi kebutuhan klien dan
              melampaui ekspektasi mereka.
            </p>
          </div>
        </div>
        <section className="px-5 border-t relative w-full overflow-hidden py-10">
          <div className="mb-6 flex justify-end gap-2 px-4">
            <button className="story-prev flex size-10 items-center justify-center rounded-md bg-primary/5 border text-primary">
              <ChevronLeft size={20} />
            </button>

            <button className="story-next flex size-10 items-center justify-center rounded-md bg-primary/5 border text-primary">
              <ChevronRight size={20} />
            </button>
          </div>
          <Swiper
            modules={[Navigation]}
            slidesPerView="auto"
            spaceBetween={14}
            navigation={{
              prevEl: ".story-prev",
              nextEl: ".story-next",
            }}
            className="story-swiper !overflow-visible px-4"
          >
            {stories.map((item) => (
              <SwiperSlide
                key={item.title}
                className="story-slide"
              >
                <article className="h-full flex flex-col">
                  <div className="h-[43vh] flex flex-col">
                    <div className="group  relative cursor-pointer  h-[405px] w-full overflow-hidden rounded-md ">
                      <div className="absolute top-3  z-50 left-3 bg-white rounded-full p-2 shadow">
                        <Image
                          src="./assets/logo/logo.png"
                          alt="degovan logo"
                          width={30}
                          height={30}
                          className="w-[30px] h-[30px] rotate-90 "
                        />
                      </div>

                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={400}
                        className="h-full w-full object-cover brightness-75 hover:brightness-95 transition-all duration-700"
                      />
                    </div>
                    <div className="mt-5 space-y-2">
                      <h3 className="text-lg  font-bold tracking-tighter text-neutral-800">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm  text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                  <Link
                    target="_blank"
                    href={item.link}
                    className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
                  >
                    Kunjungi Web <ChevronRight size={16} />
                  </Link>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
}
