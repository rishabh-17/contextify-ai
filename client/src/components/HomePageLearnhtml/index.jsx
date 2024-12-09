import React from "react";
import { Img, Text, Button, Heading } from "./..";

export default function HomePageLearnhtml({
  learnhtmlcss = "Learn HTML & CSS",
  time = "00:24:52",
  personal = "Personal",
  autolayout = "Coding",
  ...props
}) {
  return (
    <div {...props}>
      <div className="w-full p-[13px] md:flex md:flex-wrap md:w-full bg-neutral-100 rounded-[10px]">
        <div className="flex justify-center items-start gap-[13px]">
          <Button color="pink_A200_01" size="2xl" shape="circle" className="w-[36px] !rounded-[18px]">
            <Img src="images/img_code_slash_1.svg" />
          </Button>
          <div className="flex flex-col gap-[7px] flex-1">
            <div className="flex justify-between items-center gap-5 flex-wrap">
              <Heading as="h1" className="!text-[11.74px]">
                {learnhtmlcss}
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
                  className="flex justify-center items-center h-[20px] px-1.5 py-[3px] !text-pink-A200_01 !font-inter !text-[10.07px] bg-red-50 rounded-[5px]"
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
