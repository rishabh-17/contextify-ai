import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../../components";

export default function OnePage() {
  return (
    <>
      <Helmet>
        <title>Contextify</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center w-full pb-[98px] gap-[39px] md:pb-5">
        <div className="flex flex-col items-center w-[47%] md:w-full gap-[31px] md:p-5">
          <Button
            color="deep_purple_50_02"
            size="11xl"
            className="sm:px-5 !text-purple-900 font-nunito font-bold min-w-[164px] rounded-[37px]"
          >
            Our values
          </Button>
          <Text size="20xl" as="p" className="!text-gray-900 text-center leading-[110%]">
            <>
              The story and values behind
              <br /> our company
            </>
          </Text>
        </div>
        <div className="self-stretch">
          <div className="justify-center gap-[52px] grid-cols-[repeat(auto-fill,_minmax(620px_,_1fr))] grid">
            <div className="flex justify-center w-full p-[27px] sm:p-5 bg-gray-50_01 rounded-[30px]">
              <div className="flex md:flex-col justify-between items-start w-full gap-5 my-3">
                <div className="w-[21%] md:w-full p-[39px] sm:p-5 bg-purple-900 rounded-[23px]">
                  <Img
                    src="images/img_icon_white_a700.svg"
                    alt="image"
                    className="h-[71px] w-full md:h-auto my-[5px]"
                  />
                </div>
                <div className="flex flex-col items-start w-[73%] md:w-full gap-1.5">
                  <Heading size="7xl" as="h1" className="!text-gray-900 !font-nunito">
                    Innovation
                  </Heading>
                  <Text size="11xl" as="p" className="!text-gray-600_03 leading-[157.4%]">
                    Long established fact that a readeed to will be distracted by the readable content of a page when
                    looking at its layout
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full p-[27px] sm:p-5 bg-gray-50_01 rounded-[30px]">
              <div className="flex md:flex-col justify-between items-start w-full gap-5 my-3">
                <div className="w-[21%] md:w-full p-[35px] sm:p-5 bg-purple-900 rounded-[23px]">
                  <Img
                    src="images/img_icon_white_a700_64x58.svg"
                    alt="icon_one"
                    className="h-[64px] w-full md:h-auto mt-[9px] mb-4"
                  />
                </div>
                <div className="flex flex-col items-start w-[73%] md:w-full gap-1.5">
                  <Heading size="7xl" as="h2" className="!text-gray-900 !font-nunito">
                    Team work
                  </Heading>
                  <Text size="11xl" as="p" className="!text-gray-600_03 !font-nunito leading-[157.4%]">
                    Long established fact that a readeed to will be distracted by the readable content of a page when
                    looking at its layout
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full p-[27px] sm:p-5 bg-gray-50_01 rounded-[30px]">
              <div className="flex md:flex-col justify-between items-start w-full gap-5 my-3">
                <div className="w-[21%] md:w-full p-[42px] md:p-5 bg-purple-900 rounded-[23px]">
                  <Img
                    src="images/img_icon_white_a700_62x44.svg"
                    alt="icon_one"
                    className="h-[62px] w-full md:h-auto mt-[7px] mb-1.5"
                  />
                </div>
                <div className="flex flex-col items-start w-[73%] md:w-full gap-1.5">
                  <Heading size="7xl" as="h3" className="!text-gray-900 !font-nunito">
                    Excellence
                  </Heading>
                  <Text size="11xl" as="p" className="!text-gray-600_03 !font-nunito leading-[157.4%]">
                    Long established fact that a readeed to will be distracted by the readable content of a page when
                    looking at its layout
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full p-[27px] sm:p-5 bg-gray-50_01 rounded-[30px]">
              <div className="flex md:flex-col justify-between items-center w-full gap-5 my-3">
                <div className="w-[21%] md:w-full p-10 sm:p-5 bg-purple-900 rounded-[23px]">
                  <Img
                    src="images/img_icon_indigo_a100.svg"
                    alt="icon_one"
                    className="h-[51px] w-full md:h-auto my-3.5"
                  />
                </div>
                <div className="flex flex-col items-start w-[73%] md:w-full gap-[3px]">
                  <Heading size="7xl" as="h4" className="!text-gray-900 !font-nunito">
                    Responsibility
                  </Heading>
                  <Text size="11xl" as="p" className="!text-gray-600_03 !font-nunito leading-[157.4%]">
                    Long established fact that a readeed to will be distracted by the readable content of a page when
                    looking at its layout
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
