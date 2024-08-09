"use client";
import React, { useEffect, useState } from "react";
import Card from "@/app/components/contributors/list/card";
export default function list() {
  type Contributors = {
    name: string;
    photo: string;
    role: string;
    quotes: string;
  };

  const [data, setData] = useState<Contributors[]>([]);

  const getData = async () => {
    try {
      const response = await fetch(`${process.env.API_URL}contributors`);
      const result = await response.json();
      setData(result.data.contributors);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-white relative z-10">
      <div className="border-l  border-r container pt-20 pb-60 max-w-7xl   mx-auto grid grid-cols-1 gap-5 justify-center  space-y-8 w-full">
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
              name={item.name}
              photo={item.photo}
              role={item.role}
              quote={item.quotes}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
