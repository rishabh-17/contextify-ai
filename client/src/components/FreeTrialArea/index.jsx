import React from 'react'
import { Text, Button, Img, Heading, Input, SelectBox } from "../../components";

const index = () => {
  return (
    <div className="self-stretch h-[519px] mt-[168px]  bg-gray-50_01 relative">
    <div className="flex md:flex-col justify-end items-center w-[62%] bottom-[-350px] right-[-300px] m-auto absolute md:relative">
      <div className="flex self-end justify-end w-[36%] md:w-full mb-[140px] md:p-5 z-[1]">
        <div className="flex justify-end w-full p-[29px] sm:p-5 border-black-900_02 border-2 border-solid rounded-[40px]">
          <div className="flex self-end mr-2.5 md:mr-0">
            <Text as="p" className="capitalize">
              Start Your Free Trial Today
            </Text>
          </div>
        </div>
      </div>
      <Img
        src="images/img_polygon_amber_200.png"
        alt="polygon_three"
        className="w-[64%] z-[1] md:w-full ml-[-56px] md:ml-0 object-cover rounded-[69px]"
      />
    </div>
    <div className="flex md:flex-col justify-center w-full h-max left-[-840px] bottom-0 right-0 top-[-400px] m-auto absolute md:relative">
      <div className="flex md:flex-col justify-center items-start md:self-stretch md:p-5 flex-1">
        <Img
          src="images/img_polygon_deep_purple_a200.png"
          alt="polygon_five"
          className="w-[52%] md:w-full z-[1] opacity-90 object-cover rounded-[69px]"
        />
        <Text
          size="19xl"
          as="p"
          className="mt-[138px] ml-[-3px] md:ml-0 capitalize text-center"
        >
          try Contextify for free
        </Text>
      </div>
      <Img
        src="images/img_polygon_deep_orange_300.png"
        alt="polygon_seven"
        className="w-[32%]  md:w-full  ml-[-4px] md:ml-0 object-cover rounded-[69px]"
      />
    </div>
    <div className="flex md:flex-col items-center w-[64%] left-[-340px] top-[-450px] m-auto absolute md:relative">
      <Img
        src="images/img_polygon_purple_a100.png"
        alt="polygon_nine"
        className="w-[60%] md:w-full object-cover rounded-[69px]"
      />
      <Text
        size="8xl"
        as="p"
        className="w-[40%] md:w-full ml-[-87px] md:p-5 md:ml-0 capitalize text-center leading-8"
      >
        Contexttify is a hub puts information into context at the
        click of a button
      </Text>
    </div>
    <div className="h-[50px] w-[18%] left-[40%] top-[27%] m-auto bg-orange-50_01 absolute" />
  </div>

  )
}

export default index