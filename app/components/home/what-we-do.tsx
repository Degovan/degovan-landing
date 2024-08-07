export default function whatWeDo() {
  return (
    <div>
      <div className="border-l  border-r container max-w-7xl   mx-auto grid grid-cols-1 gap-5 justify-center pt-20 pb-44 space-y-8 w-full">
        <div className="lg:flex grid grid-cols-1 lg:p-0 p-10 lg:gap-5 gap-10 items-center justify-between ">
          <div className="space-y-5 lg:order-1 order-2">
            <div className="text-primary flex items-center gap-4">
              <div className="w-1 h-4 lg:-ml-0.5 ml-4 bg-primary"></div>
              <p>What we do</p>
            </div>
            <div className="pl-4 space-y-5">
              <h2 className="font-bold tracking-tighter lg:text-4xl text-3xl lg:max-w-lg max-w-xs text-gray-600">
                What we do, to build great things
              </h2>
              <p className="text-gray-400 max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="lg:order-2 order-1">
            <img
              src="./assets/path.svg"
              alt=""
              className="lg:max-w-full max-w-sm w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
