"use client";
import { useEffect, useState } from "react";
import Card from "@/app/components/projects/list/card";

type Portfolio = {
  name: string;
  images: string;
};

export default function List() {
  const [data, setData] = useState<Portfolio[]>([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://backend.degovan.my.id/api/portfolios"
      );
      const result = await response.json();
      setData(result.data.portfolios);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-white relative z-10">
      <div className="border-l  border-r container pt-20 pb-60 max-w-7xl mx-auto grid grid-cols-1 gap-5 justify-center space-y-8 w-full">
        <div className="space-y-5 lg:p-0 p-8 ">
          <div className="pl-4 space-y-5">
            <p className="text-gray-400 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="grid break-inside-avoid overflow-hidden lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-5 lg:gap-5 gap-10 justify-center">
          {data.map((item) => (
            <Card
              key={item.name}
              title={item.name}
              img={item.images}
              description="lorem "
            />
          ))}
        </div>
      </div>
    </div>
  );
}
