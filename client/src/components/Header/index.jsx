import React from "react";
import { Button, Text, Img } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="w-full">
        <div className="flex md:flex-col justify-between items-center gap-5">
          <div className="h-[39px] w-[14%] md:w-full relative">
            <Img
              src="images/img_frame_purple_900.svg"
              alt="image"
              className="h-[39px] left-[0.00px] bottom-0 top-0 my-auto absolute"
            />
            <Text
              size="14xl"
              as="p"
              className="bottom-[-0.45px] right-[0.00px] m-auto !text-deep_purple-A200_04 capitalize absolute"
            >
              Contextify
            </Text>
          </div>
          <div className="flex sm:flex-col items-center">
            <a href="home" target="_blank" rel="noreferrer">
              <Text as="p" className="!text-white-A700 capitalize">
                home
              </Text>
            </a>
            <a href="#" className="self-start mt-[18px] ml-8 sm:ml-0">
              <Text as="p" className="!text-white-A700 capitalize">
                about us
              </Text>
            </a>
            <a href="pricing" target="_blank" rel="noreferrer" className="ml-7 sm:ml-0">
              <Text as="p" className="!text-white-A700 capitalize">
                pricing
              </Text>
            </a>
            <a href="#" className="ml-[19px] sm:ml-0">
              <Text as="p" className="!text-white-A700 capitalize">
                Contact Us
              </Text>
            </a>
            <div className="flex ml-[21px] sm:ml-0">
              <Button color="white_A700" size="9xl" className="sm:px-5 capitalize min-w-[160px] rounded-[30px]">
                Get Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
