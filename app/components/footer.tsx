import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@irsyadadl/paranoid";
import Link from "next/link";
export default function footer() {
  return (
    <div>
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos quidem earum officia.
              </p>
            </div>
            <div className="text-gray-400 flex gap-5">
              <Link href="">
                <IconBrandInstagram />
              </Link>
              <Link href="">
                <IconBrandWhatsapp />
              </Link>
              <Link href="">
                <IconBrandGithub />
              </Link>
              <Link href="">
                <IconBrandLinkedin />
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-between gap-5 p-5">
            <div className="">
              <h3 className="font-semibold tracking-tighter text-white">
                Index
              </h3>
              <div className="space-y-2 mt-5 text-gray-400 text-sm">
                <Link
                  className="block"
                  href=""
                >
                  Home
                </Link>
                <Link
                  className="block"
                  href=""
                >
                  How we work
                </Link>
                <Link
                  className="block"
                  href=""
                >
                  Projects
                </Link>
                <Link
                  className="block"
                  href=""
                >
                  Contributors
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold tracking-tighter text-white">
                Additional
              </h3>
              <div className="space-y-2 mt-5 text-gray-400 text-sm">
                <Link
                  className="block"
                  href=""
                >
                  Articles
                </Link>
                <Link
                  target="_blank"
                  className="block"
                  href="http://wa.me/6282335623028"
                >
                  Call us (Whatsapp)
                </Link>
                <Link
                  className="block"
                  href=""
                >
                  Templates
                </Link>
                <Link
                  className="block"
                  href=""
                >
                  Testimonial
                </Link>
                <Link
                  className="block"
                  href=""
                >
                  Privacy
                </Link>
                <Link
                  className="block"
                  href=""
                >
                  Term
                </Link>
              </div>
            </div>
            <div></div>
          </div>
          <div className="w-full space-y-5 p-5">
            <div className="space-y-3">
              <p className="text-primary">Information</p>
              <h1 className="font-bold text-3xl max-w-sm tracking-tighter text-white">
                {" "}
                Let's make your ideas happens with us
              </h1>
            </div>
            <button className="btn bg-primary text-white">Work with us</button>
            <div className="space-y-2">
              <p className="text-gray-500 text-xs">
                Copyright © Degovan Inc. 2021 - 2024. All rights reserved
              </p>
              <p className="text-gray-500 text-xs">
                All design and code by Sesepuh Degovan.
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
