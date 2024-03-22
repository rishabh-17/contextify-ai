import React from "react";
import { Img, Button, Text, Heading } from "./..";

export default function HomePageSituplight({
  p100xsitup = "UI Design",
  time = "00:42:21",
  Work = "Work",
  RasionProject = "Rasion Project",
  ...props
}) {
  return (
    <div {...props}>
      <div className="w-full p-[13px] bg-white rounded-[10px]">
        <div className="flex justify-center items-start gap-[13px]">
          <Button color="purple_400" size="2xl" shape="circle" className="w-[36px] !rounded-[18px]">
          <Img src="images/img_desktop.svg" />  
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
                  {Work}
                </Button>
                <Button color="lime_50" size="xs" shape="round" className="font-inter font-medium min-w-[54px]">
                  {RasionProject}
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
