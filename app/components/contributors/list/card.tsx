import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Card({
  name,
  photo,
  role,
  socials,
}: {
  name: string;
  photo: string;
  role: string;
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
  };
}) {
  return (
    <div className="max-w-[400px] cursor-pointer transition-all border bg-white group overflow-hidden relative">
      <div className="overflow-hidden relative bg-neutral-100 ">
        <Image
          src={photo}
          width={300}
          height={500}
          className="w-[400px] h-[300px] object-cover duration-300 transition-transform relative z-10 transform translate-y-0 group-hover:-translate-y-3"
          alt={name}
        />
      </div>
      <div className="p-5 text-center relative z-10 space-y-2 duration-300 transition-transform  bg-white transform -translate-y-1 group-hover:-translate-y-8">
        <h2 className="font-semibold tracking-tighter text-lg text-gray-600">
          {name}
        </h2>
        <button className="px-3 cursor-default mt-4 py-1 text-gray-600 ">
          {" "}
          <p className="text-gray-400  text-sm">{role}</p>
        </button>

        <div className="flex gap-5 justify-center items-center">
          <Link
            href={socials.github}
            target="_blank"
            aria-label="social-github"
            className="text-neutral-500 hover:underline"
          >
            <Github size={20} />
          </Link>
          <Link
            href={socials.linkedin}
            target="_blank"
            aria-label="social-linkedin"
            className="text-neutral-500 hover:underline"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href={socials.instagram}
            target="_blank"
            aria-label="social-instagram"
            className="text-neutral-500 hover:underline"
          >
            <Instagram size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
