import { IconRocket } from "@irsyadadl/paranoid";
export default function hero() {
  return (
    <div>
      <div className="bg-gradient-to-t from-slate-200 to-white">
        <div className="border-r-2 border-dashed border-l container max-w-7xl  mx-auto grid grid-cols-1 gap-5 justify-center items-center w-full h-[700px]">
          <div>
            <div className="text-center space-y-8">
              <div className="flex justify-center">
                <div className="space-y-5">
                  <span className="text-primary lg:text-base text-sm  border border-primary/50 rounded-full px-5 py-1 text-center">
                    Tal'k is cheap show us your ideas 🧠
                  </span>
                  <h2 className="lg:text-6xl text-4xl font-semibold text-center mx-auto tracking-tighter text-gray-700 max-w-sm lg:max-w-2xl">
                    <span className="text-primary relative">We develop</span>{" "}
                    and commit to your ideas.
                  </h2>
                </div>
              </div>

              <div className="flex gap-5 justify-center">
                <button className="btn lg:text-lg text-sm flex gap-3 items-center bg-secondary text-white">
                  Let's make it happens <IconRocket />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
