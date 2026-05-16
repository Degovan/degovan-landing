import {
  Search,
  Lightbulb,
  Users,
  RefreshCw,
  CheckCircle,
  HeadphonesIcon,
} from "lucide-react";

export default function process() {
  const processes = [
    {
      icons: Search,
      number: "01",
      title: "Project Discovery",
      description:
        "Kami memulai dengan memahami kebutuhan, tujuan, dan visi project Anda secara menyeluruh. Proses ini membantu kami menentukan solusi, strategi, dan tim terbaik untuk mencapai hasil yang maksimal.",
    },
    {
      icons: Lightbulb,
      number: "02",
      title: "Strategic Planning",
      description:
        "Setelah brief diterima, kami menyusun workflow project secara detail, mulai dari timeline, pembagian peran, milestone, hingga tools kolaborasi untuk memastikan setiap proses berjalan efektif.",
    },
    {
      icons: Users,
      number: "03",
      title: "Team Execution",
      description:
        "Project dikerjakan oleh tim freelance terkurasi sesuai keahlian masing-masing — mulai dari design, content, development, hingga operational support — dengan koordinasi yang terarah dan quality control yang konsisten.",
    },
    {
      icons: RefreshCw,
      number: "04",
      title: "Review & Refinement",
      description:
        "Kami melakukan evaluasi berkala dan membuka ruang feedback agar setiap hasil dapat disempurnakan sesuai kebutuhan, memastikan output akhir benar-benar sesuai ekspektasi.",
    },
    {
      icons: CheckCircle,
      number: "05",
      title: "Final Delivery",
      description:
        "Setiap project diselesaikan dengan standar profesional, tepat waktu, dan siap digunakan. Kami fokus pada hasil akhir yang tidak hanya selesai, tetapi juga memberikan impact nyata.",
    },
    {
      icons: HeadphonesIcon,
      number: "06",
      title: "Ongoing Support",
      description:
        "Kami percaya kerja sama tidak berhenti saat project selesai. Dukungan lanjutan tersedia untuk revisi, maintenance, atau pengembangan berikutnya sesuai kebutuhan Anda.",
    },
  ];
  return (
    <div className="bg-white relative z-10 ">
      <div className="border-l  border-r container pt-20 pb-60 max-w-7xl mx-auto grid grid-cols-1 gap-5 justify-center  space-y-8 w-full">
        <div className="text-primary flex items-center gap-4">
          <div className="w-1 h-4 lg:-ml-0.5 ml-4 bg-primary"></div>
          <p>Execution Plans</p>
        </div>
        <div className="px-10">
          <p className="text-gray-500 text-sm">
            Kami bekerja dengan sistem yang terstruktur, fleksibel, dan
            berorientasi pada hasil. Dengan dukungan tim freelance profesional
            dari berbagai bidang, kami memastikan setiap project dikerjakan
            secara efisien, tepat waktu, dan sesuai standar kualitas terbaik.
          </p>
        </div>
        <div className="items-center grid grid-cols-1 gap-20 lg:grid-cols-2 border-t px-10 py-10">
          {processes.map((process, index) => (
            <div
              key={index}
              className=" p-5 rounded-md transition-shadow duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 border flex items-center justify-center rounded-md font-bold mb-3">
                <process.icons className="w-5 h-5 text-primary text-lg" />
              </div>
              <h3 className="font-semibold text-lg tracking-tighter text-neutral-600 mb-3">
                {process.title}
              </h3>
              <p className="text-gray-500 text-sm text-wrap">
                {process.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-primary flex items-center lg:flex-row flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="lg:w-2 w-1 h-4 lg:-ml-0.5 ml-4 bg-primary"></div>
            <p>Flexible Team. Structured Process. Professional Results.</p>
          </div>
          <div className="px-10">
            <p className="text-gray-500 text-sm">
              Kami bekerja dengan sistem yang terstruktur, fleksibel, dan
              berorientasi pada hasil. Dengan dukungan tim freelance profesional
              dari berbagai bidang, kami memastikan setiap project dikerjakan
              secara efisien, tepat waktu, dan sesuai standar kualitas terbaik.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
