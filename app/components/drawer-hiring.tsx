'use client";';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { useRouter } from "next/navigation";

export default function DrawerHiring({
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
        <DrawerContent className="container max-w-2xl mx-auto  ">
          <DrawerHeader>
            <DrawerTitle className="sr-only"></DrawerTitle>
            <DrawerDescription className="sr-only"></DrawerDescription>
            <div className="relative  flex flex-col  items-center py-10 px-10 justify-center gap-8">
              <h2 className="text-2xl font-bold max-w-[400px] text-neutral-700 tracking-tighter ] text-center">
                Saat ini kami tidak mencari kontributor baru
              </h2>
              <p className="text-sm text-neutral-500 max-w-2xl text-center">
                {" "}
                Terima kasih atas minat Anda untuk bergabung dengan tim kami
                sebagai{" "}
              </p>
              <div className="flex lg:flex-wrap flex-col  items-center gap-2 justify-center w-full">
                <button
                  disabled
                  className="bg-blue-500/10 cursor-not-allowed text-white w-full px-4 py-2 rounded-md hover:bg-blue-600/20 transition-colors"
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
