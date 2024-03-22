import React from "react";
import { Text, Button, Img } from "./..";

export default function DashboardElementscards2({
  imageThree = "images/img_image_340x326.png",
  lost = "Lost",
  toronto = "Toronto",
  green,
  titleThree = "Casablanca",
  description = (
    <>
      When you enter into any new area
      <br />
      of science, you almost always find.
    </>
  ),
  ...props
}) {
  return (
    <div {...props}>
      <div className="self-stretch h-[340px] md:h-auto relative">
        <Img src={imageThree} alt="image_three" className="h-[340px] w-full object-cover rounded-[10px]" />
        <div className="flex flex-col items-start w-[79%] h-max left-[20.00px] bottom-0 top-0 my-auto absolute">
          <div className="flex w-[70%] md:w-full gap-2.5">
            <div className="flex w-[25%]">
              <div className="w-full">
                <Button color="indigo_50" shape="round" className="w-full font-dmsans !rounded-md">
                  {lost}
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div>
                <Button color="orange_50" shape="round" className="w-full font-dmsans !rounded-md">
                  {toronto}
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div>
                {!!green ? (
                  <Button color="green_50" shape="round" className="w-full font-dmsans !rounded-md">
                    {green}
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
          <Text size="9xl" as="p" className="mt-[185px] !text-white-A700 !font-dmsans">
            {titleThree}
          </Text>
          <Text size="4xl" as="p" className="mt-1 !text-white-A700 !font-dmsans leading-5">
            {description}
          </Text>
        </div>
      </div>
    </div>
  );
}
