import Image from "next/image";
import Hero from "@/app/components/home/hero";
import WhatWeDo from "@/app/components/home/what-we-do";
import Services from "@/app/components/home/services";
import Statisfied from "@/app/components/home/statisfied";
export default function Home() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <Services />
      <Statisfied />
    </div>
  );
}
