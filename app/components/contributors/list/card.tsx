import Image from "next/image";

export default function card({
  name,
  photo,
  role,
  quote,
}: {
  name: string;
  photo: string;
  role: string;
  quote: string;
}) {
  return (
    <div className="card cursor-pointer p-1 lg:h-[350px] md:h-[430px]  break-inside-avoid transition-all border bg-white group overflow-hidden relative">
      <div className="p-1 overflow-hidden relative border bg-[#EFF4F8] ">
        <Image
          src={photo}
          width={300}
          height={400}
          className="w-full bg-cover aspect-[3/2] duration-300 transition-transform relative z-10 transform translate-y-0 group-hover:-translate-y-3"
          alt={name}
        />
        <div className="blur-lg transition-opacity  duration-500 group-hover:opacity-50 opacity-0 absolute bg-gradient-to-tr rounded-full top-3 left-8  from-primary via-blue-500 to-secondary w-[100px] h-[100px]"></div>
        <div className="blur-lg transition-opacity duration-500 group-hover:opacity-50 opacity-0  absolute bg-gradient-to-tr rounded-full top-11 right-8 from-secondary via-yellow-600 to-primary w-[100px] h-[100px]"></div>
      </div>
      <div className="p-5 relative z-10 space-y-2 duration-300 transition-transform  bg-white transform -translate-y-1 group-hover:-translate-y-8">
        <h2 className="font-semibold tracking-tighter lg:text-xl text-lg text-gray-600">
          {name}
        </h2>
        <button className="px-3 cursor-default  py-1 text-gray-600 rounded-md bg-gray-100">
          {" "}
          <p className="text-gray-400  text-sm">{role}</p>
        </button>
        <p className="text-gray-400  text-sm">{quote}</p>
        <div className="transition-all duration-300 absolute group-hover:translate-y-0 opacity-0 group-hover:opacity-100 group-hover:relative transform translate-y-2">
          <button className="text-primary">See profile</button>
        </div>
      </div>
    </div>
  );
}
