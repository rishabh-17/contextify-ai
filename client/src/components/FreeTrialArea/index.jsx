import React from "react";
import { Text, Button, Img, Heading, Input, SelectBox } from "../../components";
import { TypeAnimation } from "react-type-animation";
const index = () => {
  return (
    <div className="flex flex-col justify-center w-full mt-[168px] bg-purple-900 text-[#fff] relative h-[500px] overflow-hidden shadow-md">
      <h2 size="19xl" as="p" className=" md:ml-0 capitalize text-center mb-4">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Try Contextify for Free",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Convert Information into Context",
            1000,
            "Trusted by 2000+ Users",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "3em", display: "inline-block", color: "white" }}
          repeat={Infinity}
        />
      </h2>
      <Text
        size="8xl"
        as="p"
        className="w-[100%] md:w-full md:p-5 md:ml-0 capitalize text-center leading-8 text-[#fff] mb-8"
      >
        Contexttify is a hub puts information into context at the click of a
        button
      </Text>
      <div className="justify-center w-fit p-[29px] sm:p-5 border-white border-2 border-solid  rounded-[40px] mx-auto">
        <Text as="p" className="capitalize text-center text-[#fff]">
          Start Your Free Trial Today
        </Text>
      </div>
    </div>
  );
};

export default index;
