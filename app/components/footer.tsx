"use client";

import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@irsyadadl/paranoid";

import DrawerHub from "./drawer-hub";

import { useState } from "react";
import Link from "next/link";
export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <DrawerHub
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      />
      <div className="border-t w-full relative bg-[#0A2540]">
        <div className="relative z-10 max-w-7xl container pt-20 mx-auto flex lg:flex-row flex-col border-gray-700 border-l-2 border-r-2 border-dashed  gap-5 justify-between items-center  space-y-8 w-full lg:h-[40vh]">
          <div className="p-5 space-y-5 w-full">
            <div className="space-y-3">
              <img
                src="./assets/logo/logo.png"
                className="w-[40px] h-[40px]"
                alt=""
              />
              <div>
                <h2 className="font-semibold text-2xl tracking-tighter text-gray-100">
                  Degovan
                </h2>
              </div>
            </div>
            <div className="space-y-5">
              <p className="max-w-sm text-sm text-gray-500">
                Mewujudkan ide digital Anda menjadi kenyataan dengan solusi
                teknologi yang inovatif dan berkualitas.
              </p>
            </div>
            <div className="text-gray-400 flex gap-5">
              <Link
                href="https://www.instagram.com/degovan.it/"
                target="_blank"
              >
                <IconBrandInstagram />
              </Link>
              <Link
                href="http://wa.me/6285853656272"
                target="_blank"
              >
                <IconBrandWhatsapp />
              </Link>
              <Link
                href="https://github.com/Degovan"
                target="_blank"
              >
                <IconBrandGithub />
              </Link>
              <Link
                href="https://id.linkedin.com/company/degovan"
                target="_blank"
              >
                <IconBrandLinkedin />
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-between gap-5 p-5">
            <div className="">
              <h3 className="font-semibold tracking-tighter text-white">
                Indeks
              </h3>
              <div className="space-y-2 mt-5 text-gray-400 text-sm">
                <Link
                  className="block"
                  href="/"
                >
                  Beranda
                </Link>
                <Link
                  className="block"
                  href="/how-we-work"
                >
                  Cara Kerja Kami
                </Link>
                <Link
                  className="block"
                  href="/contributors"
                >
                  Kontributor
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold tracking-tighter text-white">
                Tambahan
              </h3>
              <div className="space-y-2 mt-5 text-gray-400 text-sm">
                <Link
                  className="block"
                  href=""
                >
                  Artikel
                </Link>
                <Link
                  target="_blank"
                  className="block"
                  href="http://wa.me/6282335623028"
                >
                  Hubungi Kami (Whatsapp)
                </Link>
                <Link
                  className="block"
                  href=""
                >
                  Template
                </Link>
                <Link
                  className="block"
                  href=""
                >
                  Testimoni
                </Link>
                <Link
                  className="block"
                  href=""
                >
                  Privasi
                </Link>
                <Link
                  className="block"
                  href=""
                >
                  Ketentuan
                </Link>
              </div>
            </div>
            <div></div>
          </div>
          <div className="w-full space-y-5 p-5">
            <div className="space-y-3">
              <p className="text-primary">Informasi</p>
              <h1 className="font-bold text-3xl max-w-sm tracking-tighter text-white">
                {" "}
                Mari wujudkan ide Anda bersama kami
              </h1>
            </div>
            <button
              onClick={(e) => setIsOpen(true)}
              className="btn bg-primary text-white"
            >
              Bekerja dengan Kami
            </button>
            <div className="space-y-2">
              <p className="text-gray-500 text-xs">
                Hak Cipta © Degovan 2021 - 2026. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Semua desain dan kode oleh Sesepuh Degovan.
              </p>
            </div>
          </div>
        </div>

        <div className=" border-gray-700 border-l-2 border-r-2 border-dashed container max-w-7xl overflow-hidden   mx-auto flex  gap-5 justify-center items-center  space-y-8 w-full h-[20vh]">
          <h2 className="animate-gradient-20s lg:text-[17rem] text-[7rem] select-none font-bold tracking-tighter bg-clip-text bg-gradient-to-r text-transparent uppercase lg:-mb-32 -mb-52 from-transparent via-white/50 opacity-45 to-transparent">
            degovan
          </h2>
        </div>
      </div>
    </div>
  );
}
