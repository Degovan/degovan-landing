import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function faq() {
  return (
    <div className="w-full border-t-2 border-dashed  bg-[#F6F9FC] relative">
      <div className="absolute -top-56 md:block hidden right-20">
        <h2 className="text-[20rem] font-bold opacity-5 text-black">FAQ</h2>
      </div>
      <div className="border-l border-r border-dashed relative z-10 container max-w-7xl pt-28 pb-28  mx-auto grid grid-cols-1 gap-5 justify-center  space-y-8  w-full">
        <div className="space-y-5 lg:p-0 p-8 ">
          <div className="text-primary flex items-center gap-4">
            <div className="w-1 h-4 lg:-ml-0.5 ml-4 bg-primary"></div>
            <p>FAQ</p>
          </div>
          <div className="pl-4 space-y-5">
            <h2 className="font-bold tracking-tighter lg:text-4xl text-3xl lg:max-w-sm max-w-xs text-gray-700">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="px-5">
            <Accordion
              type="single"
              collapsible
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-gray-600 decoration-transparent text-lg font-semibold tracking-tighter">
                  Is it accessible?
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veritatis eum accusamus cum delectus et dolorem praesentium.
                  Et dolor nihil, harum maxime amet accusamus assumenda corrupti
                  repellendus fugiat expedita aliquam asperiores.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              collapsible
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-gray-600 decoration-transparent text-lg font-semibold tracking-tighter">
                  Is it cheap?
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veritatis eum accusamus cum delectus et dolorem praesentium.
                  Et dolor nihil, harum maxime amet accusamus assumenda corrupti
                  repellendus fugiat expedita aliquam asperiores.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              collapsible
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-gray-600 decoration-transparent text-lg font-semibold tracking-tighter">
                  Is it use modern framework?
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veritatis eum accusamus cum delectus et dolorem praesentium.
                  Et dolor nihil, harum maxime amet accusamus assumenda corrupti
                  repellendus fugiat expedita aliquam asperiores.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              collapsible
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-gray-600 decoration-transparent text-lg font-semibold tracking-tighter">
                  Can use legacy framework or native?
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veritatis eum accusamus cum delectus et dolorem praesentium.
                  Et dolor nihil, harum maxime amet accusamus assumenda corrupti
                  repellendus fugiat expedita aliquam asperiores.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              collapsible
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-gray-600 decoration-transparent text-lg font-semibold tracking-tighter">
                  money back guarantee?
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veritatis eum accusamus cum delectus et dolorem praesentium.
                  Et dolor nihil, harum maxime amet accusamus assumenda corrupti
                  repellendus fugiat expedita aliquam asperiores.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
