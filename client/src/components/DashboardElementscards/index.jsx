import React from "react";
import { Img, Text, Button } from "./..";

export default function DashboardElementscards({
  deep,
  minimal,
  title = "Cologne",
  whenyouenterint = "When you enter into any new area of science, you almost always find.",
  detalies = "Detalies",
  photoThree,
  colorFive,
  photoFive,
  photoSeven,
  colorSeven,
  ...props
}) {
  return (
    <div {...props}>
      <div className="w-full p-[11px] bg-white-A700 rounded-[10px]">
        <div className="flex flex-col items-start mt-[19px]">
          <div className="flex w-[38%] md:w-full gap-2.5">
            <div className="flex w-[40%]">
              <div className="w-full">
                {!!deep ? (
                  <Button color="indigo_50" shape="round" className="w-full font-dmsans !rounded-md">
                    {deep}
                  </Button>
                ) : null}
              </div>
            </div>
            <div className="flex-1">
              <div>
                {!!minimal ? (
                  <Button color="orange_50" shape="round" className="w-full font-dmsans !rounded-md">
                    {minimal}
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
          <Text size="9xl" as="p" className="mt-[15px]">
            {title}
          </Text>
          <Text size="4xl" as="p" className="w-[97%] md:w-full mt-[5px] !text-black-900_7e opacity-0.4 leading-5">
            {whenyouenterint}
          </Text>
          <div className="flex self-stretch items-center mt-[13px]">
            <Text size="4xl" as="p" className="self-start mt-1 !text-indigo-A700">
              {detalies}
            </Text>
            <div className="flex flex-col ml-[43px]">
              <div className="flex flex-col self-end items-end">
                {!!photoThree ? (
                  <Img src={photoThree} alt="photo_three" className="h-[44px] w-full md:h-auto object-cover" />
                ) : null}
                {!!colorFive ? <Img src={colorFive} alt="color_five" className="h-[12px] w-[11px] mt-[-12px]" /> : null}
              </div>
            </div>
            {!!photoThree ? (
              <Img src={photoThree} alt="photo_three" className="h-[44px] w-full md:h-auto object-cover" />
            ) : null}
            <div className="h-[44px] w-[19%] md:h-auto ml-[9px] relative">
              {!!colorFive ? <Img src={colorFive} alt="color_five" className="h-[12px] w-[11px] mt-[-12px]" /> : null}
              <Img
                src="images/img_icons_plus_plus.svg"
                alt="iconsplusplus"
                className="h-[24px] left-0 bottom-0 right-0 top-0 m-auto absolute"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
