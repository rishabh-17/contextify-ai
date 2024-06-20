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
      <div className="w-full md:w-full p-[13px] md:flex md:flex-wrap bg-neutral-100 rounded-[10px]">
        <div className="flex justify-center items-start gap-[13px]">
          <Button
            color="purple_400"
            size="2xl"
            shape="circle"
            className="w-[36px] !rounded-[18px]"
          >
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
                <Text
                  size="lg"
                  as="p"
                  className="flex justify-center items-center h-[20px] px-1.5 py-[3px] !text-pink-A200_01 !font-inter !text-[10.07px] bg-red-50 rounded-[5px]"
                >
                  {Work}
                </Text>{" "}
                <Button
                  
                  size="xs"
                  shape="round"
                  className="font-inter !text-deep_purple-A200 bg-purple-100 font-medium min-w-[54px]"
                >
                  {RasionProject}
                </Button>
              </div>
              <Img
                src="images/img_frame_gray_600_01.svg"
                alt="image"
                className="h-[20px] w-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
