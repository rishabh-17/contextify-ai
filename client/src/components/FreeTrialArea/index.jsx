import React from "react";
import { Text, Button, Img, Heading, Input, SelectBox } from "../../components";

const index = () => {
  return (
    <div className="flex flex-col justify-center w-full mt-[168px] bg-gray-50_01 relative h-[500px] overflow-hidden">
      <Text size="19xl" as="p" className=" md:ml-0 capitalize text-center mb-4">
        try Contextify for free
      </Text>
      <Text
        size="8xl"
        as="p"
        className="w-[100%] md:w-full md:p-5 md:ml-0 capitalize text-center leading-8  mb-8"
      >
        Contexttify is a hub puts information into context at the click of a
        button
      </Text>
      <div className="justify-center w-fit p-[29px] sm:p-5 border-black-900_02 border-2 border-solid rounded-[40px] mx-auto">
        <Text as="p" className="capitalize  text-center">
          Start Your Free Trial Today
        </Text>
      </div>
    </div>
  );
};

export default index;
