import { IconRocket } from "@irsyadadl/paranoid";
export default function hero() {
  return (
    <div className="relative">
      <div className="bg-gradient-to-t from-slate-200 to-white">
        <div className="absolute inset-0 -z-10  bg-[linear-gradient(rgba(246,157,17,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(246,157,17,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="border-r-2 border-dashed border-l container max-w-7xl  mx-auto grid grid-cols-1 gap-5 justify-center items-center w-full h-[700px]">
          <div>
            <div className="text-center space-y-8">
              <div className="flex justify-center">
                <div className="space-y-5">
                  <div className="absolute inset-0 -z-10  bg-[linear-gradient(rgba(246,157,17,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(246,157,17,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
                  <span className="text-primary lg:text-base text-sm  border border-primary/50 rounded-full px-5 py-1 text-center">
                    Bicara itu mudah, tunjukkan ide Anda 🧠
                  </span>
                  <h2 className="lg:text-6xl text-3xl font-semibold text-center mx-auto tracking-tighter text-gray-700 max-w-sm lg:max-w-2xl">
                    <span className="text-primary relative">
                      Kami mengembangkan
                    </span>{" "}
                    dan berkomitmen pada ide Anda.
                  </h2>
                </div>
              </div>

              <div className="flex gap-5 justify-center">
                <button className="btn lg:text-sm  flex gap-3 items-center bg-secondary text-white">
                  Mari wujudkan bersama <IconRocket />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
