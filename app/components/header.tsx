"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HeaderProps } from "../utils/menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconBarsThree } from "@irsyadadl/paranoid";

const Header: React.FC<HeaderProps> = ({ logo, menu }) => {
  const [openSheet, setOpenSheet] = useState(false);

  return (
    <div className="w-full sticky top-0 bg-white border-b z-40">
      <div className="container max-w-7xl  py-4 px-3 mx-auto border-r-2 border-dashed flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <img
            src={logo}
            alt="logo Degovan"
            className="w-[30px] h-[30px]"
          />
          <h2 className="font-semibold tracking-tighter text-lg text-gray-700">
            Degovan
          </h2>
        </div>
        <div>
          <ul className="flex gap-5 items-center lg:mr-4 mr-2">
            {menu.map((item) => (
              <li
                key={item.label}
                className="lg:block hidden"
              >
                <Link
                  href={item.path}
                  className="uppercase text-sm text-gray-600 font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button className="px-5 py-2 rounded-md  border uppercase text-sm shadow text-gray-600 font-medium">
                Let's talk
              </button>
            </li>
            <li className="lg:hidden flex">
              <Sheet
                open={openSheet}
                onOpenChange={setOpenSheet}
              >
                <SheetTrigger>
                  <IconBarsThree />
                </SheetTrigger>
                <SheetContent>
                  <div className="space-y-5 p-5 pt-10">
                    {menu.map((item) => (
                      <Link
                        key={item.label}
                        href={item.path}
                        onClick={() => {
                          setOpenSheet(false);
                        }}
                        className="uppercase block hover:text-primary text-lg text-gray-500 font-medium"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
