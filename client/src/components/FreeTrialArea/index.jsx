import React from "react";
import { Text, Button, Img, Heading, Input, SelectBox } from "../../components";

const index = () => {
  return (
    <div className="self-stretch mt-[168px] bg-gray-50_01 relative h-[500px] overflow-hidden">
      <div className="flex md:flex-col justify-end items-center w-[62%] m-auto absolute bottom-[-50%] right-[-20%] md:relative">
        <Img
          src="images/img_polygon_amber_200.png"
          alt="polygon_three"
          className="w-[64%] z-[1] md:w-full md:ml-0 object-cover rounded-[69px]"
        />
      </div>
      <Img
        src="images/img_polygon_deep_purple_a200.png"
        alt="polygon_five"
        className="absolute top-[-100%] left-[-40%] w-[52%] md:w-full z-[1] opacity-90 object-cover rounded-[69px]"
      />
      <div className="flex md:flex-col justify-center w-full h-max m-auto absolute md:relative">
        <div className="flex md:flex-col justify-center items-center z-10 md:self-stretch md:p-5 flex-1">
          <div className="flex flex-col md:self-stretch md:p-5 w-[40%] align-middle justify-center items-center mt-[100px]">
            <Text
              size="19xl"
              as="p"
              className=" md:ml-0 capitalize text-center mb-4"
            >
              try Contextify for free
            </Text>
            <Text
              size="8xl"
              as="p"
              className="w-[100%] md:w-full md:p-5 md:ml-0 capitalize text-center leading-8  mb-8"
            >
              Contexttify is a hub puts information into context at the click of
              a button
            </Text>
            <div className="flex self-end justify-end w-full md:w-full mb-[140px] md:p-5 z-[1]">
              <div className="flex justify-center w-full p-[29px] sm:p-5 border-black-900_02 border-2 border-solid rounded-[40px]">
                <div className="flex self-end md:mr-0">
                  <Text as="p" className="capitalize  text-center">
                    Start Your Free Trial Today
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Img
          src="images/img_polygon_deep_orange_300.png"
          alt="polygon_seven"
          className=" absolute w-[32%]  md:w-full  ml-[-4px] md:ml-0 object-cover rounded-[69px]"
        />
      </div>
      <div className="flex md:flex-col items-center justify-center w-[64%] left-[-440px] top-[-450px] m-auto absolute md:relative">
        <Img
          src="images/img_polygon_purple_a100.png"
          alt="polygon_nine"
          className="w-[60%] md:w-full object-cover rounded-[69px]"
        />
      </div>
      <div className="h-[50px] w-[18%] top-[27%] left-[-20%] m-auto bg-orange-50_01 absolute" />
    </div>
  );
};

export default index;
