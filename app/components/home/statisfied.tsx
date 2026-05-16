"use client";
import { Globe } from "@/components/ui/globe";

export default function statisfied() {
  return (
    <div className="bg-[#0A2540] overflow-hidden lg:clipper-path clipper-path-mobile relative -mt-52 ">
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute lg:top-32 top-[20rem] -right-10 le lg:-right-24 w-[800px] h-[800px] lg:w-[700px] lg:h-[700px] pointer-events-none">
          <Globe className="w-full h-full lg:opacity-50 opacity-50" />
        </div>
      </div>
      <div className="border-l border-r border-gray-700 container max-w-7xl lg:pt-64 pt-32 pb-28  mx-auto grid grid-cols-1 gap-5 justify-center  space-y-8 w-full relative z-10">
        <div className="space-y-5 lg:p-0 p-8 ">
          <div className="text-blue-400 flex items-center gap-4">
            <div className="w-1 h-4 lg:-ml-0.5 ml-4 bg-blue-400"></div>
            <p>Client Satisfaction</p>
          </div>
          <div className="pl-4 space-y-5">
            <h2 className="font-bold tracking-tighter lg:text-4xl text-3xl lg:max-w-lg max-w-lg text-white">
              Kami senang berkomitmen dengan klien kami
            </h2>
            <p className="text-gray-400 lg:max-w-sm">
              Kepuasan klien adalah prioritas utama kami. Kami bangga telah
              membantu berbagai bisnis mencapai tujuan digital mereka dengan
              solusi yang tepat dan dukungan yang berkelanjutan.
            </p>
          </div>
          <div className="lg:flex grid grid-cols-2 gap-5 pt-8">
            <div className="text-white flex items-center gap-4">
              <div className="w-0.5 h-4 lg:-ml-0.5 -mt-4 ml-4 bg-blue-400"></div>
              <div>
                <p className="font-bold tracking-tighter text-2xl">20+</p>
                <p className="text-xs max-w-sm">
                  Proyek berhasil diselesaikan dengan kepuasan klien
                </p>
              </div>
            </div>
            <div className="text-white flex items-center gap-4">
              <div className="w-0.5 h-4 lg:-ml-0.5 -mt-4 ml-4 bg-blue-400"></div>
              <div>
                <p className="font-bold tracking-tighter text-2xl">100%</p>
                <p className="text-xs max-w-sm">
                  Tingkat kepuasan klien terhadap layanan kami
                </p>
              </div>
            </div>
            <div className="text-white flex items-center gap-4">
              <div className="w-0.5 h-4 lg:-ml-0.5 -mt-4 ml-4 bg-blue-400"></div>
              <div>
                <p className="font-bold tracking-tighter text-2xl">12</p>
                <p className="text-xs max-w-sm">
                  Tahun pengalaman dalam industri teknologi
                </p>
              </div>
            </div>
            <div className="text-white flex items-center gap-4">
              <div className="w-0.5 h-4 lg:-ml-0.5 -mt-4 ml-4 bg-blue-400"></div>
              <div>
                <p className="font-bold tracking-tighter text-2xl">90%</p>
                <p className="text-xs max-w-sm">
                  Klien kembali menggunakan layanan kami
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
