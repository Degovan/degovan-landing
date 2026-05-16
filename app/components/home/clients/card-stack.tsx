import Image from "next/image";

export default function CardStack({
  img,
  name,
}: {
  img: string;
  name: string;
}) {
  return (
    <div className="px-8 ml-5 py-2 gap-3 rounded-md border flex justify-center items-center">
      <Image
        src={img}
        alt={name}
        width={30}
        height={30}
        className=""
      />
      <div>
        <span className="text-sm">{name}</span>
      </div>
    </div>
  );
}
