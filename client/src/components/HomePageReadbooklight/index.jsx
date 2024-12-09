import React from "react";
import { Img, Text, Button, Heading } from "./..";

export default function HomePageReadbooklight({
  read10pages = "Read 10 pages of book",
  time = "00:21:09",
  personal = "Personal",
  autolayout = "Reading",
  ...props
}) {
  return (
    <div {...props}>
      <div className="w-full p-[13px] md:flex md:flex-wrap md:w-full bg-neutral-100 rounded-[10px]">
        <div className="flex justify-center items-start gap-[13px]">
          <Button color="green_A400" size="2xl" shape="circle" className="w-[36px] !rounded-[18px]">
            <Img src="images/img_book.svg" />
          </Button>
          <div className="flex flex-col mt-1 gap-1.5 flex-1">
            <div className="flex justify-between items-center gap-5 flex-wrap">
              <Heading as="h1" className="!text-[11.74px]">
                {read10pages}
              </Heading>
              <Text
                size="lg"
                as="p"
                className="self-start !text-deep_purple-A200 !font-inter text-right !text-[10.07px] !font-normal"
              >
                {time}
              </Text>
            </div>
            <div className="flex justify-between gap-5">
              <div className="flex gap-[5px]">
                <Button color="gray_100_04" size="xs" shape="round" className="font-inter font-medium min-w-[55px]">
                  {personal}
                </Button>
                <Text
                  size="lg"
                  as="p"
                  className="flex justify-center items-center h-[20px] px-[7px] py-[3px] !text-green-A400 !font-inter !text-[10.07px] bg-cyan-50_01 rounded-[5px]"
                >
                  {autolayout}
                </Text>
              </div>
              <Img src="images/img_frame_gray_600_01.svg" alt="image" className="h-[20px] w-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
