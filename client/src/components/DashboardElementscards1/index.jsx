import React from "react";
import { Img, Text, Button } from "./..";

export default function DashboardElementscards1({
  taipei = "Taipei",
  glasgow = "Glasgow",
  belgrade,
  imageOne = "images/img_image_120x286.png",
  titleTwo = "Melbourne",
  whenyouenterint = "When you enter into any new area of science, you almost always find.",
  detaliesTwo = "Details",
  photoNine,
  colorNine,
  colorEleven,
  ...props
}) {
  return (
    <div {...props}>
      <div className="self-stretch p-5 bg-white-A700 rounded-[10px]">
        <div className="flex flex-col items-start mt-2.5">
          <div className="flex w-[59%] md:w-full gap-2.5">
            <div className="flex w-[25%]">
              <div className="w-full">
                <Button color="yellow_100" shape="round" className="w-full font-dmsans !rounded-md">
                  {taipei}
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div>
                <Button color="orange_50" shape="round" className="w-full font-dmsans !rounded-md">
                  {glasgow}
                </Button>
              </div>
            </div>
            <div className="flex">
              <div className="flex">
                {!!belgrade ? (
                  <Text
                    size="lg"
                    as="p"
                    className="flex justify-center items-center h-[24px] p-1 !font-dmsans text-center !font-normal bg-cyan-50 rounded-md"
                  >
                    {belgrade}
                  </Text>
                ) : null}
              </div>
            </div>
          </div>
          <div className="self-stretch mt-[15px]">
            <Img src={imageOne} alt="image_one" className="h-[120px] w-full md:h-auto object-cover rounded-[10px]" />
          </div>
          <Text size="9xl" as="p" className="mt-2.5 !font-dmsans">
            {titleTwo}
          </Text>
          <Text
            size="4xl"
            as="p"
            className="w-[85%] md:w-full mt-1 !text-black-900_7e !font-dmsans opacity-0.4 leading-5"
          >
            {whenyouenterint}
          </Text>
          <div className="flex self-stretch justify-between items-center mt-[5px] gap-5">
            <Text size="4xl" as="p" className="self-end mb-[9px] !text-indigo-A700 !font-dmsans">
              {detaliesTwo}
            </Text>
            <div className="flex justify-center w-[33%]">
              <div className="flex justify-between w-full gap-5">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    {!!photoNine ? <Img src={photoNine} alt="photo_nine" className="object-cover" /> : null}
                    {!!colorNine ? (
                      <Img src={colorNine} alt="color_nine" className="self-end h-[12px] w-[11px] ml-[-9px]" />
                    ) : null}
                  </div>
                </div>
                <div className="h-[44px] w-full md:h-auto relative">
                  {!!colorNine ? (
                    <Img src={colorNine} alt="color_nine" className="self-end h-[12px] w-[11px] ml-[-9px]" />
                  ) : null}
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
      </div>
    </div>
  );
}
