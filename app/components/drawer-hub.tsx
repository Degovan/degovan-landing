'use client";';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { useRouter } from "next/navigation";
export default function DrawerHub({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();

  return (
    <>
      <Drawer
        open={isOpen}
        onOpenChange={onOpenChange}
      >
        <DrawerTrigger className="sr-only"></DrawerTrigger>
        <DrawerContent className="container max-w-2xl mx-auto py-20 px-10 ">
          <DrawerHeader>
            <DrawerTitle className="sr-only"></DrawerTitle>
            <DrawerDescription className="sr-only"></DrawerDescription>
            <div className="h-[200px] relative  flex flex-col  items-center justify-center gap-8">
              <div className="absolute lg:-top-52 -top-56">
                <DotLottieReact
                  src="https://lottie.host/ffd2c99b-ab1d-439f-bed9-4fe38432cc6c/vX5tT5t7m1.lottie"
                  loop
                  autoplay
                />
              </div>
              <h2 className="text-2xl font-bold text-neutral-700 tracking-tighter max-w-[500px] text-center">
                Sudah siapkah, mendiskusikan Idemu? kepada kami!
              </h2>
              <p className="text-sm text-neutral-500 max-w-2xl text-center">
                {" "}
                Apakah Anda memiliki pertanyaan atau ingin mendiskusikan proyek
                Anda? Jangan ragu untuk menghubungi kami. Tim kami siap membantu
                Anda dengan solusi terbaik untuk kebutuhan pengembangan website
                Anda. Klik tombol di bawah ini untuk memulai percakapan dengan
                kami melalui WhatsApp, dan mari kita wujudkan ide-ide Anda
                bersama-sama!
              </p>
              <div className="flex lg:flex-wrap flex-col  items-center gap-2 justify-center w-full">
                <button
                  className="bg-green-500 text-white w-full px-4 py-2 rounded-md hover:bg-green-400 "
                  onClick={() => router.push("https://wa.me/6285853656272")}
                >
                  Hubungi lewat WhatsApp
                </button>
                <button
                  disabled
                  className="bg-blue-500/10 text-white w-full px-4 py-2 rounded-md hover:bg-blue-600/20 transition-colors"
                  onClick={() => router.push("mailto:info@degovan.com")}
                >
                  Kirim via Email
                </button>
              </div>
            </div>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
}
