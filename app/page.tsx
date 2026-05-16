import {
  Hero,
  WhatWeDo,
  Services,
  Statisfied,
  Client,
  Testimonial,
  Faq,
} from "@/app/components";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <Services />
      <Statisfied />
      {/* <Client /> */}
      <Testimonial />
      {/* <Faq /> */}
    </div>
  );
}
