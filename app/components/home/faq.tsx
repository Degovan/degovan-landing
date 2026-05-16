"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";
import { useStore } from "@/store";

export default function faq() {
  const { faq, fetchFAQs } = useStore();

  useEffect(() => {
    fetchFAQs();
  }, [fetchFAQs]);

  return (
    <div className="w-full border-t-2 border-dashed  bg-[#F6F9FC] relative">
      <div className="absolute -top-56 md:block hidden right-20">
        <h2 className="text-[20rem] font-bold opacity-5 text-black">FAQ</h2>
      </div>
      <div className="border-l border-r border-dashed relative z-10 container max-w-7xl pt-28 pb-28  mx-auto grid grid-cols-1 gap-5 justify-center  space-y-8  w-full">
        <div className="space-y-5 lg:p-0 p-8 ">
          <div className="text-primary flex items-center gap-4">
            <div className="w-1 h-4 lg:-ml-0.5 ml-4 bg-primary"></div>
            <p>FAQ</p>
          </div>
          <div className="pl-4 space-y-5">
            <h2 className="font-bold tracking-tighter lg:text-4xl text-3xl lg:max-w-sm max-w-xs text-gray-700">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-gray-400 ">
              Temukan jawaban atas pertanyaan umum tentang layanan kami. Jika
              Anda memiliki pertanyaan lain yang tidak tercantum di sini, jangan
              ragu untuk menghubungi kami dan tim kami akan dengan senang hati
              membantu Anda.
            </p>
          </div>
          <div className="px-5">
            {faq.map((item) => (
              <Accordion
                key={item.id}
                type="single"
                collapsible
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-gray-600 decoration-transparent text-lg font-semibold tracking-tighter">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
