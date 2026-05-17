import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function DrawerHub({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
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
            <div className="h-[200px]  flex flex-col  items-center justify-center gap-8">
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
              <div className=" flex items-center gap-5 justify-center w-full">
                <button className="bg-green-500/80 text-white w-full px-4 py-2 rounded-md hover:bg-green-600">
                  Hubungi WhatsApp
                </button>
                <button className="bg-blue-500/80 text-white w-full px-4 py-2 rounded-md hover:bg-blue-600">
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
