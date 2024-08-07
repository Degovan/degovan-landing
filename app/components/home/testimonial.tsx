import React from "react";
import Marquee from "react-fast-marquee";
export default function testimonial() {
  return (
    <div className="bg-[#FFFFFF] border-t-2  border-dashed">
      <div className="border-l  border-r container max-w-7xl pt-48 pb-60   mx-auto grid grid-cols-1 gap-5 justify-center  space-y-8 w-full">
        <div className="space-y-5 lg:p-0 p-8 ">
          <div className="text-primary flex items-center gap-4">
            <div className="w-1 h-4 lg:-ml-0.5 ml-4 bg-primary"></div>
            <p>Testimonial</p>
          </div>
          <div className="pl-4 space-y-5">
            <h2 className="font-bold tracking-tighter lg:text-4xl text-3xl lg:max-w-sm max-w-xs text-gray-600">
              What our clients and customers have to say
            </h2>
            <p className="text-gray-400 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="p-5">
          <Marquee
            gradient={true}
            speed={50}
            direction="left"
            pauseOnHover={true}
          >
            <div className="ml-5 bg-white border px-5 py-5 max-w-[450px] rounded-[10px] ">
              <p className="text-gray-500 text-sm mb-8">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                dolor, quod quasi voluptate ex quaerat magni.
              </p>
              <div className="flex gap-3 justify-start items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 "></div>
                <p>John Doe</p>
              </div>
            </div>
            <div className="ml-5 bg-white border px-5 py-5 max-w-[450px] rounded-[10px] ">
              <p className="text-gray-500 text-sm  mb-8">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                dolor, quod quasi voluptate ex quaerat magni.
              </p>
              <div className="flex gap-3 justify-start items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 "></div>
                <p>John Doe</p>
              </div>
            </div>
            <div className="ml-5 bg-white border px-5 py-5 max-w-[450px] rounded-[10px] ">
              <p className="text-gray-500 text-sm  mb-8">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                dolor, quod quasi voluptate ex quaerat magni.
              </p>
              <div className="flex gap-3 justify-start items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 "></div>
                <p>John Doe</p>
              </div>
            </div>
          </Marquee>
          <Marquee
            gradient={true}
            speed={50}
            className="mt-5"
            direction="right"
            pauseOnHover={true}
          >
            <div className="ml-5 bg-white border px-5 py-5 max-w-[450px] rounded-[10px] ">
              <p className="text-gray-500 text-sm mb-8">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                dolor, quod quasi voluptate ex quaerat magni.
              </p>
              <div className="flex gap-3 justify-start items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 "></div>
                <p>John Doe</p>
              </div>
            </div>
            <div className="ml-5 bg-white border px-5 py-5 max-w-[450px] rounded-[10px] ">
              <p className="text-gray-500 text-sm  mb-8">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                dolor, quod quasi voluptate ex quaerat magni.
              </p>
              <div className="flex gap-3 justify-start items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 "></div>
                <p>John Doe</p>
              </div>
            </div>
            <div className="ml-5 bg-white border px-5 py-5 max-w-[450px] rounded-[10px] ">
              <p className="text-gray-500 text-sm  mb-8">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                dolor, quod quasi voluptate ex quaerat magni.
              </p>
              <div className="flex gap-3 justify-start items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 "></div>
                <p>John Doe</p>
              </div>
            </div>
          </Marquee>
          <Marquee
            gradient={true}
            speed={50}
            direction="left"
            className="mt-5"
            pauseOnHover={true}
          >
            <div className="ml-5 bg-white border px-5 py-5 max-w-[450px] rounded-[10px] ">
              <p className="text-gray-500 text-sm mb-8">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                dolor, quod quasi voluptate ex quaerat magni.
              </p>
              <div className="flex gap-3 justify-start items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 "></div>
                <p>John Doe</p>
              </div>
            </div>
            <div className="ml-5 bg-white border px-5 py-5 max-w-[450px] rounded-[10px] ">
              <p className="text-gray-500 text-sm  mb-8">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                dolor, quod quasi voluptate ex quaerat magni.
              </p>
              <div className="flex gap-3 justify-start items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 "></div>
                <p>John Doe</p>
              </div>
            </div>
            <div className="ml-5 bg-white border px-5 py-5 max-w-[450px] rounded-[10px] ">
              <p className="text-gray-500 text-sm  mb-8">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                dolor, quod quasi voluptate ex quaerat magni.
              </p>
              <div className="flex gap-3 justify-start items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 "></div>
                <p>John Doe</p>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
