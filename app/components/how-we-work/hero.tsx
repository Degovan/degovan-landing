import { IconMouse } from "@irsyadadl/paranoid";

export default function hero() {
  return (
    <div>
      <div className="bg-[#F6F9FC] relative">
        <h1 className="absolute left-72 lg:block hidden text-[15rem] -mb-28 opacity-20 tracking-tighter font-bold font-outline-2 text-transparent">
          INTELEGENT
        </h1>
        <h1 className="absolute top-36 lg:block hidden right-0 text-[15rem] -mb-28 opacity-35 tracking-tighter font-bold font-outline-2 text-transparent">
          CARRY
        </h1>
        <div className="border-r-2 relative border-dashed border-l-2 container max-w-7xl  mx-auto grid grid-cols-1 gap-5 justify-start items-center w-full h-[700px]">
          <div>
            <div className="text-left space-y-8">
              <div className="flex justify-center text-center px-5 py-1">
                <div className="space-y-5">
                  <div className="space-y-3">
                    <span className="text-gray-500 lg:text-base text-sm rounded-full  ">
                      How We Work
                    </span>
                    <h2 className="lg:text-6xl text-4xl uppercase font-bold text-center tracking-tighter max-w-lg leading-normal text-gray-700  ">
                      WORK{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-200 to-blue-800 animate-gradient-8s ">
                        SMART
                      </span>{" "}
                      NOT{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-l from-orange-500 via-orange-200 to-red-500  animate-gradient-10s">
                        HARD
                      </span>{" "}
                    </h2>
                  </div>
                  <button className="text-lg flex gap-3 items-center mx-auto text-primary">
                    Scroll down{" "}
                    <span className="animate-bounce">
                      <IconMouse />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h1 className="absolute bottom-0 lg:block hidden text-[15rem] -mb-28 opacity-35 tracking-tighter font-bold font-outline-2 text-transparent">
            PROCESS
          </h1>
        </div>
      </div>
    </div>
  );
}
