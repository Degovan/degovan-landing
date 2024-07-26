import React from "react";

export default function Services() {
  return (
    <div className="bg-[#F6F9FC]">
      <div className="border-l  border-r container pt-20 pb-60  max-w-5xl mx-auto grid grid-cols-1 gap-5 justify-center  space-y-8 w-full">
        <div className="space-y-5 lg:p-0 p-8 ">
          <div className="text-primary flex items-center gap-4">
            <div className="w-1 h-4 lg:-ml-0.5 ml-4 bg-primary"></div>
            <p>Services</p>
          </div>
          <div className="pl-4 space-y-5">
            <h2 className="font-bold tracking-tighter lg:text-4xl text-3xl lg:max-w-sm max-w-xs text-gray-600">
              The services we offer to you
            </h2>
            <p className="text-gray-400 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-5 lg:gap-5 gap-10 justify-center">
          <div className="card p-1 border bg-white">
            <img
              src="./assets/card/web.png"
              className="w-full"
              alt=""
            />
            <div className="p-5 space-y-3">
              <h2 className="font-semibold tracking-tighter lg:text-2xl text-xl text-gray-600">
                Develop websites
              </h2>
              <p className="text-gray-400  text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="card p-1 border bg-white">
            <img
              src="./assets/card/mobile.png"
              className="w-full"
              alt=""
            />
            <div className="p-5 space-y-3">
              <h2 className="font-semibold tracking-tighter lg:text-2xl text-xl text-gray-600">
                Develop mobile apps
              </h2>
              <p className="text-gray-400  text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="card p-1 border bg-white">
            <img
              src="./assets/card/mobile.png"
              className="w-full"
              alt=""
            />
            <div className="p-5 space-y-3">
              <h2 className="font-semibold tracking-tighter lg:text-2xl text-xl text-gray-600">
                Redevelop apps
              </h2>
              <p className="text-gray-400  text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
