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
  const faqs = [
    {
      id: 1,
      question: "Apa itu Degovan?",
      answer:
        "Degovan adalah layanan yang membantu bisnis dan individu menyelesaikan berbagai kebutuhan project digital melalui tim freelance profesional yang terkurasi.",
    },
    {
      id: 2,
      question: "Layanan apa saja yang tersedia di Degovan?",
      answer:
        "Kami menyediakan layanan seperti desain UI/UX, pengembangan website, pembuatan konten, branding, digital marketing, dan dukungan operasional sesuai kebutuhan project.",
    },
    {
      id: 3,
      question: "Bagaimana proses kerja sama dengan Degovan?",
      answer:
        "Proses kerja dimulai dari diskusi kebutuhan project, penyusunan strategi, pemilihan tim yang sesuai, pengerjaan project, review hasil, hingga final delivery.",
    },
    {
      id: 4,
      question: "Apakah saya bisa menyesuaikan kebutuhan project?",
      answer:
        "Ya, setiap project dapat disesuaikan dengan kebutuhan, target, timeline, dan budget Anda. Kami akan membantu menyusun solusi yang paling relevan.",
    },
    {
      id: 5,
      question: "Berapa lama waktu pengerjaan sebuah project?",
      answer:
        "Durasi pengerjaan bergantung pada kompleksitas project. Setelah kebutuhan dianalisis, kami akan memberikan estimasi timeline yang jelas sebelum project dimulai.",
    },
    {
      id: 6,
      question: "Apakah Degovan hanya melayani project besar?",
      answer:
        "Tidak. Kami dapat membantu berbagai skala project, mulai dari kebutuhan kecil seperti desain konten hingga project yang lebih kompleks seperti pengembangan website atau sistem digital.",
    },
    {
      id: 7,
      question: "Apakah saya bisa melakukan revisi?",
      answer:
        "Ya, revisi dapat dilakukan sesuai kesepakatan di awal project. Kami menyediakan ruang feedback agar hasil akhir sesuai dengan kebutuhan dan ekspektasi Anda.",
    },
    {
      id: 8,
      question: "Bagaimana cara memulai project dengan Degovan?",
      answer:
        "Anda dapat menghubungi kami melalui kontak yang tersedia, lalu tim kami akan membantu memahami kebutuhan Anda dan memberikan rekomendasi proses kerja terbaik.",
    },
  ];
  // const { faq, fetchFAQs } = useStore();

  // useEffect(() => {
  //   fetchFAQs();
  // }, [fetchFAQs]);

  return (
    <div className="w-full border-t-2 border-dashed  bg-[#F6F9FC] relative">
      <div className="absolute -top-56 md:block hidden z-20 right-20">
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
            {faqs.map((item) => (
              <Accordion
                key={item.id}
                type="single"
                collapsible
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-gray-600 text-left decoration-transparent text-lg font-semibold tracking-tighter">
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
