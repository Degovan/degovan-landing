export default function statisfied() {
  return (
    <div className="bg-[#0A2540] clipper-path -mt-52 ">
      <img
        src="./assets/background/globe.png"
        alt=""
        className="absolute -z-10 right-7 user-none"
      />
      <div className="border-l border-r border-gray-700 container pt-64 pb-80 max-w-5xl mx-auto grid grid-cols-1 gap-5 justify-center  space-y-8 w-full  h-[50vh]">
        <div className="space-y-5 lg:p-0 p-8 ">
          <div className="text-primary flex items-center gap-4">
            <div className="w-1 h-4 lg:-ml-0.5 ml-4 bg-primary"></div>
            <p>Client Satisfied</p>
          </div>
          <div className="pl-4 space-y-5">
            <h2 className="font-bold tracking-tighter lg:text-4xl text-3xl lg:max-w-lg max-w-xs text-white">
              We are happy to commit with our clients
            </h2>
            <p className="text-gray-400 lg:max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="flex gap-5"></div>
        </div>
      </div>
    </div>
  );
}
