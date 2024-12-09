import React from "react";
import { Img, Button, Text, Heading } from "./..";

export default function HomePageSituplight({
  p100xsitup = "100x Sit-Up",
  time = "00:14:06",
  personal = "Personal",
  workout = "Workout",
  ...props
}) {
  return (
    <div {...props}>
      <div className="w-full md:flex md:flex-wrap md:w-full p-[13px] bg-neutral-100 rounded-[10px]">
        <div className="flex justify-center items-start gap-[13px]">
          <Button color="orange_300_02" size="2xl" shape="circle" className="w-[36px] !rounded-[18px]">
            <Img src="images/img_barbell.svg" />
          </Button>
          <div className="flex flex-col gap-1.5 flex-1">
            <div className="flex justify-between items-center gap-5 flex-wrap">
              <Heading as="h1" className="!text-[11.74px]">
                {p100xsitup}
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
                <Button color="lime_50" size="xs" shape="round" className="font-inter font-medium min-w-[54px]">
                  {workout}
                </Button>
              </div>
              <Img src="images/img_frame_gray_600_01.svg" alt="image" className="h-[20px] w-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
