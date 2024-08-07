import Image from "next/image";
import Hero from "@/app/components/home/hero";
import WhatWeDo from "@/app/components/home/what-we-do";
import Services from "@/app/components/home/services";
import Statisfied from "@/app/components/home/statisfied";
import Client from "@/app/components/home/client";
import Testimonial from "@/app/components/home/testimonial";
import Faq from "@/app/components/home/faq";
export default function Home() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <Services />
      <Statisfied />
      <Client />
      <Testimonial />
      <Faq />
    </div>
  );
}
