import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, Input, SelectBox } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomePageLearnhtml from "../../components/HomePageLearnhtml";
import HomePageReadbooklight from "../../components/HomePageReadbooklight";
import HomePageSituplight from "../../components/HomePageSituplight";
import HomePageUIDesign from "../../components/HomePageUIDesign";
import FreeTrialArea from "../../components/FreeTrialArea";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function HomePagePage() {
  return (
    <>
      <Helmet>
        <title>Contextify</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="md:max-w-lg:flex flex flex-col md:w-[150%] sm:w-[370vw] lg:w-[200vw] items-center w-full gap-[258px] py-8 md:gap-[193px] sm:gap-[129px] sm:py-5 bg-gray-100">
        <Header className="w-[86%] md:w-full md:p-5" />
        <div className="self-stretch md:flex  md:h-[auto] md:flex-wrap">
          <div className="flex flex-col items-center overflow-auto">
            <div className="flex md:flex md:flex-wrap  self-stretch  justify-between items-center w-full gap-5 mx-auto md:p-5 max-w-[1424px]">
              <div className="flex flex-col w-[35%] md:w-full gap-[88px] md:gap-[66px] sm:gap-11">
                <div className="h-[140px] w-[89%] relative  relative w-full md:w-[89%]">
                  <div className="h-[62px] w-full bottom-[2.00px] right-0 left-0 m-auto bg-orange-50_01 absolute bottom-[2.00px] right-0 left-0 m-auto w-full h-[62px] bg-orange-50_01" />
                  <Text
                    size="21xl"
                    as="p"
                    className="w-[98%] h-max left-0 bottom-0 right-0 top-0 m-auto capitalize leading-[70px] absolute text-21xl"
                  >
                    Be in the Know.
                  </Text>
                </div>
                <div className="flex flex-col  items-start ml-2.5 md:ml-0">
                  <Text
                    size="8xl"
                    as="p"
                    className="w-[89%] md:w-full md:w-[89%] capitalize leading-8"
                  >
                    Contexttify is a hub puts information into context at the
                    click of a button
                  </Text>
                  <div className="flex sm:flex-col self-stretch mt-7 gap-6">
                    <Input
                      color="gray_300"
                      size="md"
                      variant="outline"
                      name="getstartedforfr"
                      placeholder={`Get Started For Free`}
                      className="sm:px-5 capitalize flex-grow rounded-[32px]"
                    />
                    <Button
                      size="10xl"
                      className="w-[65px] shadow-md rounded-[32px]"
                    >
                      <Img src="images/img_frame_white_a700.svg" />
                    </Button>
                  </div>
                  <Text size="9xl" as="p" className="mt-16 capitalize">
                    <span className="text-gray_800_01">
                      Already using Contextify?
                    </span>
                    <span className="text-black-900_02">&nbsp;</span>
                    <span className="text-deep_purple-A200">Sign In</span>
                  </Text>
                  <div className="flex sm:flex-col self-stretch justify-between items-center mt-[35px] gap-5 ">
                    <div className="flex justify-center w-[28%] sm:w-full w-full sm:w-[28%]">
                      <div className="flex justify-center w-full sm:w-[28%]">
                        <div className="flex justify-center flex-1">
                          <Img
                            src="images/img_ellipse.png"
                            alt="circleimage"
                            className="h-[61px] w-[61px] z-[1] rounded-[50%]"
                          />
                          <Img
                            src="images/img_ellipse_61x61.png"
                            alt="circleimage_one"
                            className="h-[61px] w-[61px] ml-[-24px] rounded-[50%]"
                          />
                        </div>
                        <Img
                          src="images/img_ellipse_1.png"
                          alt="circleimage_two"
                          className="h-[61px] w-[61px] ml-[-25px] rounded-[50%]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-1.5">
                      <Text size="15xl" as="p">
                        2,291
                      </Text>
                      <Text as="p" className="!text-black-900_87 opacity-0.5">
                        Happy Customers
                      </Text>
                    </div>
                    <div className="self-start h-[39px] w-[2px] sm:w-[39px] sm:h-[2px] mt-[11px] opacity-0.08 bg-black-900_61" />
                    <div className="flex flex-col items-start sm:w-[29%] w-full gap-2">
                      <Text size="15xl" as="p">
                        4.8/5
                      </Text>
                      <div className="flex self-stretch items-start gap-2.5">
                        <Img
                          src="images/img_group.svg"
                          alt="image_one"
                          className="h-[12px] mt-0.5"
                        />
                        <Text as="p" className="!text-black-900_87 opacity-0.5">
                          Rating
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="flex md:flex-col md:flex-wrap md:h-[auto] justify-between items-start w-[60%] md:w-full gap-5">
                <div className="h-[16px] w-[16px] mt-[100px] bg-deep_purple-A200 rounded-lg animate-bounce" />
                <div className="h-[624px] w-[92%] md:w-full relative">
                  <div className="flex flex-col items-end w-full top-[0.00px] right-0 left-0 m-auto absolute">
                    <div className="flex flex-col items-center w-[35%] md:w-full mr-[166px] p-[25px] md:mr-0 sm:p-5 z-[1] border-white-A700_3d border-[16px] border-solid bg-white-A700 rounded-[24px]">
                      <div className="h-[11px] w-[11px] mt-[3px] bg-teal-300 rounded-[5px]" />
                      <div className="h-[25px] w-[23px] z-[1] bg-teal-300 rounded-[50%]" />
                      <Heading
                        size="5xl"
                        as="h1"
                        className="mt-[-2px] tracking-[0.36px] text-center"
                      >
                        32000+
                      </Heading>
                      <Text
                        size="4xl"
                        as="p"
                        className="mt-[3px] !text-blue_gray-400 tracking-[0.21px] !font-inter text-center !font-medium"
                      >
                        Customers
                      </Text>
                      <Img
                        src="images/img_vector_deep_purple_a200.svg"
                        alt="vector_one"
                        className="h-[36px] w-full md:h-auto mt-[13px] mb-[19px]"
                      />
                    </div>
                    <div className="self-stretch h-[491px] md:h-auto mt-[-154px] relative">
                      <div className="flex md:flex-col justify-center items-start w-full">
                        <div className="md:self-stretch h-[491px] border-white-A700_3d border-[16px] border-solid bg-white-A700 flex-1 rounded-[24px]  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" />
                        <div className="flex justify-center w-[19%] md:w-full mt-[120px] ml-[-66px] md:ml-0">
                          <div className="flex w-full p-3.5 bg-white-A700 shadow-4xl">
                            <div className="flex items-center mt-1 mb-0.5">
                              <Img
                                src="images/img_group_orange_300.svg"
                                alt="image_two"
                                className="h-[46px] w-[46px] z-[1]"
                              />
                              <div className="flex flex-col self-end items-end ml-[-1px] gap-2">
                                <Heading
                                  size="6xl"
                                  as="h2"
                                  className="mr-2.5 md:mr-0 tracking-[0.39px] text-center"
                                >
                                  23
                                </Heading>
                                <Text
                                  size="lg"
                                  as="p"
                                  className="!text-blue_gray-600 tracking-[1.05px] !font-roboto text-center"
                                >
                                  COMPLETED
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col justify-between items-start w-[80%] left-[28.00px] top-[22%] gap-5 m-auto absolute sm:relative">
                        <Img
                          src="images/img_group_indigo_100.svg"
                          alt="image_three"
                          className="h-[20px] sm:w-full"
                        />
                        <div className="flex sm:flex-col justify-center w-[88%] sm:w-full mt-3 gap-[11px]">
                          <div className="flex w-full sm:w-full p-3.5 bg-white-A700 shadow-4xl   transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                            <div className="flex items-center mt-[3px] mb-0.5">
                              <Img
                                src="images/img_group_teal_a400.svg"
                                alt="image_four"
                                className="h-[46px] w-[46px] z-[1]"
                              />
                              <div className="flex flex-col items-start ml-[-1px] gap-1">
                                <Heading
                                  size="6xl"
                                  as="h3"
                                  className="self-end tracking-[0.39px] text-center"
                                >
                                  2034
                                </Heading>
                                <Text
                                  size="lg"
                                  as="p"
                                  className="!text-blue_gray-600 tracking-[1.05px] !font-roboto text-center"
                                >
                                  COMPLETED
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex w-full sm:w-full p-[17px] bg-white-A700 shadow-4xl">
                            <div className="flex justify-between items-center w-[82%] md:w-full ml-[3px] gap-5 md:ml-0">
                              <CircularProgressbar
                                value={58}
                                styles={{
                                  trail: { strokeWidth: 49 },
                                  path: {
                                    strokeLinecap: "square",
                                    transformOrigin: "center",
                                    transform: "rotate(45deg)",
                                    strokeWidth: 11,
                                  },
                                }}
                                className="h-[35px] w-[34%] border-deep_orange-50 border-4 border-solid"
                              />
                              <div className="flex flex-col items-end gap-1">
                                <Heading
                                  size="6xl"
                                  as="h4"
                                  className="tracking-[0.39px] text-center"
                                >
                                  234
                                </Heading>
                                <Text
                                  size="lg"
                                  as="p"
                                  className="!text-blue_gray-600 tracking-[1.05px] !font-roboto text-center"
                                >
                                  COMPLETED
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex w-full sm:w-full p-3.5 bg-white-A700 shadow-4xl   transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                            <div className="flex items-center mt-[3px] mb-0.5">
                              <Img
                                src="images/img_group_cyan_a400.svg"
                                alt="image_five"
                                className="h-[46px] w-[46px] z-[1]"
                              />
                              <div className="flex flex-col items-start ml-[-1px] gap-1">
                                <Heading
                                  size="6xl"
                                  as="h5"
                                  className="self-end tracking-[0.39px] text-center"
                                >
                                  5420
                                </Heading>
                                <Text
                                  size="lg"
                                  as="p"
                                  className="!text-blue_gray-600 tracking-[1.05px] !font-roboto text-center"
                                >
                                  COMPLETED
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end w-[90%] left-[28.00px] top-[17.89px] m-auto absolute">
                        <div className="flex justify-between items-center w-[91%] md:w-full gap-5 flex-wrap">
                          <Heading
                            size="8xl"
                            as="h6"
                            className="!text-blue_gray-800 tracking-[0.46px] text-center"
                          >
                            Dashboard
                          </Heading>
                          <Heading
                            size="lg"
                            as="p"
                            className="self-end mb-1 !text-gray-900_02 tracking-[0.21px] text-center"
                          >
                            Joniya Mendela
                          </Heading>
                        </div>
                        <Text
                          size="2xl"
                          as="p"
                          className="mt-[-1px] mr-[37px] md:mr-0 !text-blue_gray-400 tracking-[0.18px] !font-inter text-center !font-medium"
                        >
                          Develper
                        </Text>
                        <div className="flex self-stretch justify-between items-start mt-[3px] mr-[392px] gap-5 md:mr-0">
                          <Img
                            src="images/img_group_indigo_100_11x14.svg"
                            alt="image_six"
                            className="h-[11px]"
                          />
                          <div className="flex justify-between items-center w-[74%] mt-1.5 gap-5 flex-wrap">
                            <Text
                              size="lg"
                              as="p"
                              className="self-start h-[12px] tracking-[0.15px] !font-roboto text-center"
                            >
                              All
                            </Text>
                            <Text
                              size="xl"
                              as="p"
                              className="self-start !text-blue_gray-300 tracking-[0.16px] !font-roboto text-center"
                            >
                              Live
                            </Text>
                            <Text
                              size="xl"
                              as="p"
                              className="self-start !text-blue_gray-300 tracking-[0.16px] !font-roboto text-center"
                            >
                              Recent
                            </Text>
                            <Text
                              size="xl"
                              as="p"
                              className="self-end !text-blue_gray-300 tracking-[0.16px] !font-roboto text-center"
                            >
                              History
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_group_gray_100_05.png"
                          alt="image_seven"
                          className="w-[89%] mt-[5px] object-cover"
                        />
                      </div>
                      <Img
                        src="images/img_group_indigo_100_10x10.svg"
                        alt="image_eight"
                        className="h-[10px] w-[10px] bottom-[36%] left-[5%] m-auto absolute"
                      />
                      <div className="flex flex-col items-center bottom-[29%] left-[4%] m-auto absolute">
                        <Img
                          src="images/img_vector.svg"
                          alt="vector_three"
                          className="h-[10px] w-[11px] z-[1]"
                        />
                        <Img
                          src="images/img_vector_blue_gray_100.svg"
                          alt="vector_five"
                          className="h-[12px] w-full mt-[-9px]"
                        />
                      </div>
                      <div className="flex flex-col items-end w-[82%] md:h-[1px] gap-[23px] bottom-[9%] right-0 left-0 m-auto absolute">
                        <div className="flex flex-col w-[91%] md:w-full mr-3 gap-[35px] md:mr-0">
                          <div className="flex sm:flex-col justify-between items-center gap-5 flex-1">
                            <Text
                              size="xl"
                              as="p"
                              className="tracking-[0.16px] !font-inter"
                            >
                              Mary Adants
                            </Text>
                            <div className="flex self-start justify-between w-[71%] sm:w-full gap-5">
                              <Text
                                size="lg"
                                as="p"
                                className="!text-gray-600 tracking-[0.15px] !font-inter text-center"
                              >
                                321
                              </Text>
                              <Text
                                size="lg"
                                as="p"
                                className="!text-gray-600 tracking-[0.15px] !font-inter"
                              >
                                100.0%
                              </Text>
                              <Text
                                size="lg"
                                as="p"
                                className="!text-gray-600 tracking-[0.15px] !font-inter"
                              >
                                12.0%
                              </Text>
                              <div className="flex justify-between w-[27%] gap-5 flex-wrap">
                                <Text
                                  size="lg"
                                  as="p"
                                  className="!text-gray-600 tracking-[0.15px] !font-inter"
                                >
                                  8.0%
                                </Text>
                                <Text
                                  size="lg"
                                  as="p"
                                  className="!text-gray-600 tracking-[0.15px] !font-inter"
                                >
                                  73.2%
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-col justify-center items-center flex-1">
                            <Text
                              size="xl"
                              as="p"
                              className="tracking-[0.16px] !font-inter"
                            >
                              osacar wilson
                            </Text>
                            <Text
                              size="lg"
                              as="p"
                              className="self-end h-[13px] ml-[94px] sm:ml-0 !text-gray-600 tracking-[0.15px] !font-inter text-center"
                            >
                              43
                            </Text>
                            <Text
                              size="lg"
                              as="p"
                              className="self-end ml-[82px] sm:ml-0 !text-gray-600 tracking-[0.15px] !font-inter"
                            >
                              41.0%
                            </Text>
                            <Text
                              size="lg"
                              as="p"
                              className="self-end ml-[77px] sm:ml-0 !text-gray-600 tracking-[0.15px] !font-inter"
                            >
                              90%
                            </Text>
                            <div className="flex self-end justify-between sm:self-stretch ml-[69px] gap-5 sm:ml-0 flex-1 flex-wrap">
                              <Text
                                size="lg"
                                as="p"
                                className="!text-gray-600 tracking-[0.15px] !font-inter"
                              >
                                19.0%
                              </Text>
                              <Text
                                size="lg"
                                as="p"
                                className="!text-gray-600 tracking-[0.15px] !font-inter"
                              >
                                73.2
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col justify-between items-center gap-5 flex-1">
                            <Text
                              size="xl"
                              as="p"
                              className="tracking-[0.16px] !font-inter"
                            >
                              Den Mitchell
                            </Text>
                            <div className="flex sm:flex-col self-end justify-center w-[71%] sm:w-full">
                              <Text
                                size="lg"
                                as="p"
                                className="!text-gray-600 tracking-[0.15px] !font-inter text-center"
                              >
                                123
                              </Text>
                              <Text
                                size="lg"
                                as="p"
                                className="ml-[79px] sm:ml-0 !text-gray-600 tracking-[0.15px] !font-inter"
                              >
                                52.0%
                              </Text>
                              <Text
                                size="lg"
                                as="p"
                                className="ml-[75px] sm:ml-0 !text-gray-600 tracking-[0.15px] !font-inter"
                              >
                                42.9%
                              </Text>
                              <div className="flex justify-between w-[58%] sm:w-full ml-[62px] gap-5 sm:ml-0 flex-wrap">
                                <Text
                                  size="lg"
                                  as="p"
                                  className="!text-gray-600 tracking-[0.15px] !font-inter"
                                >
                                  4.0%
                                </Text>
                                <Text
                                  size="lg"
                                  as="p"
                                  className="!text-gray-600 tracking-[0.15px] !font-inter"
                                >
                                  73.2%
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-col self-stretch justify-end items-center p-[11px] bg-white-A700 shadow-3xl">
                          <Text
                            size="xl"
                            as="p"
                            className="self-end tracking-[0.16px] !font-inter"
                          >
                            Betto Compball
                          </Text>
                          <Text
                            size="lg"
                            as="p"
                            className="self-end ml-[84px] sm:ml-0 !text-gray-600 tracking-[0.15px] !font-roboto text-center"
                          >
                            321
                          </Text>
                          <Text
                            size="lg"
                            as="p"
                            className="self-end ml-[78px] sm:ml-0 !text-gray-600 tracking-[0.15px] !font-inter"
                          >
                            100.0%
                          </Text>
                          <Text
                            size="lg"
                            as="p"
                            className="self-end ml-[70px] sm:ml-0 !text-gray-600 tracking-[0.15px] !font-inter"
                          >
                            62.9%
                          </Text>
                          <div className="flex self-end justify-between w-[35%] sm:w-full ml-[62px] gap-5 sm:ml-0 flex-wrap">
                            <Text
                              size="lg"
                              as="p"
                              className="!text-gray-600 tracking-[0.15px] !font-inter"
                            >
                              8.0%
                            </Text>
                            <Text
                              size="lg"
                              as="p"
                              className="!text-gray-600 tracking-[0.15px] !font-inter"
                            >
                              73.2%
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end w-[34%] bottom-[0.00px] left-[9%] p-[18px] m-auto border-white-A700_3d border-[16px] border-solid bg-white-A700 shadow-xs absolute rounded-[24px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                    <div className="flex flex-col items-start w-full mb-1 gap-[17px]">
                      <div className="flex items-center flex-wrap">
                        <Heading
                          size="lg"
                          as="p"
                          className="self-end mb-0.5 !text-blue_gray-900_03"
                        >
                          Based Instagram
                        </Heading>
                        <Img
                          src="images/img_group_gray_50_08.svg"
                          alt="image_nine"
                          className="h-[27px] w-[27px] ml-[18px]"
                        />
                        <Img
                          src="images/img_group_gray_50_08_27x27.svg"
                          alt="image_ten"
                          className="h-[27px] w-[27px] ml-[5px]"
                        />
                      </div>
                      <CircularProgressbar
                        value={60}
                        styles={{
                          trail: { strokeWidth: 48 },
                          path: {
                            strokeLinecap: "square",
                            transformOrigin: "center",
                            transform: "rotate(143deg)",
                            strokeWidth: 23,
                          },
                        }}
                        className="h-[103px] w-[67%] ml-[38px] md:ml-0 border-amber-400_93 border-[18px] border-solid"
                      />
                      <div className="self-stretch h-[23px] relative">
                        <div className="h-[9px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-gradient absolute rounded" />
                        <div className="h-[23px] w-[23px] left-[34%] bottom-0 top-0 p-[3px] my-auto bg-deep_purple-A200 shadow-md absolute rounded-[11px]">
                          <div className="h-[5px] w-[5px] bg-white-A700 absolute rounded-sm" />
                          <div className="h-[17px] w-[17px] left-0 bottom-0 right-0 top-0 m-auto border-white-A700 border border-solid absolute rounded-lg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[12px] w-[12px] bottom-[12.00px] right-0 left-0 m-auto bg-deep_purple-A200 absolute rounded-md" />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-[21%] md:w-full mt-[107px] gap-[11px] md:p-5">
              <Text size="7xl" as="p" className="capitalize">
                trusted by 20,000+ clients
              </Text>
              <Img
                src="images/img_group.svg"
                alt="image_eleven"
                className="h-[12px]"
              />
            </div>
            <div className="flex flex-col self-stretch items-center mt-4">
              <div className="flex w-full">
                <div className="flex flex-col items-center  md:w-[98%] w-[98%] md:w-full gap-[31px] md:p-5">
                  <div className="flex justify-center w-[23%] md:w-[23%] ">
                    <div className="flex flex-col items-end w-full">
                      <div className="h-[50px] w-[52%] mr-[61px] md:mr-0 bg-orange-50_01" />
                      <div className="flex mt-[-42px]">
                        <div className="flex flex-col items-center">
                          <Text size="19xl" as="p" className="capitalize">
                            they trust us.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-full md:p-5 md:ml-0 md:mt-0 md:mb-0 md:pr-0 md:pl-0 md:pt-0 md:pb-0 ">
                    <div className="flex flex-col gap-[26px]">
                      <div class="w-full mx-auto sm:block sm:w-full z-[1] md:w-full md:p-[5%]">
                        <div class="flex md:flex-col justify-center items-center gap-[21px]">
                          <div class="md:self-stretch h-[101px] md:w-[200px]  md:ml-[45%] md:h-[50px] bg-white-A700 shadow-xs flex-1 relative rounded-[50px] md:flex-none">
                            <div class="flex justify-center md:w-full items-center w-full h-max gap-[7px] left-0 bottom-0 right-0 top-0 p-[31px] m-auto sm:p-5 bg-white-A700 shadow-xs absolute rounded-[50px]">
                              <Img
                                src="images/img_vector_black_900_02.svg"
                                alt="vector_eleven"
                                className="h-[38px] w-[35px] md:flex-wrap z-[1] sm:flex-none z-[1]"
                              />
                              <Img
                                src="images/img_vector_black_900_02_33x82.svg"
                                alt="vector_thirteen"
                                className="self-end h-[33px] md:flex-wrap  z-[1] sm:flex-none z-[1] "
                              />
                            </div>
                          </div>
                          <div className="h-[92px] w-[11%] md:w-[200px] md:ml-[55%]  md:h-auto bg-white-A700 shadow-xs relative rounded-[46px]">
                            <div className="flex justify-center w-full md:mt-[-45%] h-max left-0 bottom-0 right-0 top-0 p-[31px] m-auto sm:p-5 bg-white-A700 shadow-xs absolute rounded-[46px]">
                              <Img
                                src="images/img_format_wordmark.svg"
                                alt="formatwordmark"
                                className="h-[29px] md:flex wrap  z-[1] sm:flex-none z-[1]"
                              />
                            </div>
                          </div>
                          <div className="md:self-stretch h-[101px]  md:ml-[22%] md:w-[200px] md:h-auto bg-white-A700 flex-1 relative rounded-[50px] md:flex-none">
                            <div className="flex justify-center w-full h-max md:mt-[-55%] left-0 bottom-0 right-0 top-0 p-[31px] m-auto sm:p-5 bg-white-A700 absolute rounded-[50px]">
                              <Img
                                src="images/img_format_wordmark_green_600_01.svg"
                                alt="formatwordmark"
                                className="h-[38px] md:flex wrap  z-[1] sm:flex-none z-[1]"
                              />
                            </div>
                          </div>
                          <div className="h-[101px] w-[19%] md:w-[200px] md:ml-[55%] md:bg-transparent  md:h-[50px] bg-white-A700 shadow-5xl relative rounded-[50px]">
                            <div className="flex justify-center items-start w-full md:mt-[5%]  h-max gap-[15px] left-0 bottom-0 right-0 top-0 p-[30px] m-auto sm:p-5 bg-white-A700 shadow-5xl absolute rounded-[50px]">
                              <Img
                                src="images/img_vector_deep_purple_a200_01.svg"
                                alt="vector_nineteen"
                                className="h-[39px]"
                              />
                              <Img
                                src="images/img_vector_black_900_02_25x112.svg"
                                alt="vector"
                                className="h-[25px] mt-1 md:flex wrap  z-[1] sm:flex-none z-[1]"
                              />
                            </div>
                          </div>
                          <div className="md:self-stretch h-[81px] md:w-[200px] md:ml-[22%]  md:h-[50px] bg-white-A700 md:bg-transparent flex-1 relative rounded-[40px] md:flex-none">
                            <div className="flex justify-center w-full h-max left-0 md:mt-[-30.5%]  bottom-0 right-0 top-0 p-[30px] m-auto sm:p-5 bg-white-A700 absolute rounded-[40px]">
                              <Img
                                src="images/img_format_wordmark_light_blue_500.svg"
                                alt="formatwordmark"
                                className="h-[19px] md:flex wrap  z-[1] sm:flex-none z-[1]"
                              />
                            </div>
                          </div>
                          <div className="md:self-stretch h-[94px] md:w-[200px] md:mt-[-11.5%] md:ml-[45%] md:h-[50px] bg-white-A700 shadow-xs flex-1 relative rounded-[47px] md:flex-none">
                            <div className="flex justify-center w-full h-max left-0 bottom-0 right-0 top-0 p-[30px] m-auto sm:p-5 bg-white-A700 shadow-xs absolute rounded-[47px]">
                              <Img
                                src="images/img_format_wordmark_black_900_02.svg"
                                alt="formatwordmark"
                                className="h-[32px] md:flex wrap justify-center  z-[1]  sm:flex-none z-[1]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>



                      <div>
                        <div className="flex">
                          <div className="flex md:flex-col items-center w-[94%] md:w-full gap-[21px]">
                            <div className="flex md:flex-col w-[100%] md:w-full gap-[21px]">
                              <div className="h-[92px] w-full md:h-auto bg-white-A700 md:w-[200px]  md:ml-[45%] md:bg-transparent md:h-[50px] shadow-xs cursor-pointer relative rounded-[46px] hover:shadow-xs">
                                <div className="flex justify-center w-full h-full left-0 bottom-0 md:mt-[50%] right-0 top-0 p-[31px] m-auto sm:p-5 bg-white-A700 shadow-xs absolute rounded-[46px]">
                                  <Img
                                    src="images/img_format_wordmark_black_900_02_32x130.svg"
                                    alt="formatwordmark"
                                    className="h-[29px] "
                                  />
                                </div>
                              </div>
                              <div className="h-[92px] w-full -[101px] md:w-[200px]  md:ml-[65%] md:bg-transparent md:h-[50px] bg-white-A700 shadow-xs cursor-pointer relative rounded-[46px] hover:shadow-xs">
                                <div className="flex justify-center w-full h-max md:mt-[-40%] left-0 bottom-0 right-0 top-0 p-[31px] m-auto sm:p-5 bg-white-A700 shadow-xs absolute rounded-[46px]">
                                  <Img
                                    src="images/img_format_wordmark_black_900_02_29x130.svg"
                                    alt="formatwordmark"
                                    className="h-[29px]"
                                  />
                                </div>
                              </div>

                              <div className="h-[92px] w-full md:w-[200px] md:ml-[45%]  md:h-auto bg-white-A700 shadow-xs cursor-pointer relative rounded-[46px] hover:shadow-xs">
                                <div className="flex justify-center w-full h-max left-0 md:mt-[-75%] bottom-0 right-0 top-0 p-[31px] m-auto sm:p-5 bg-white-A700 shadow-xs absolute rounded-[46px]">
                                  <Img
                                    src="images/img_format_wordmark_deep_orange_a400_01.svg"
                                    alt="formatwordmark"
                                    className="h-[29px]"
                                  />
                                </div>
                              </div>

                              <div className="h-[92px] w-full md:ml-[22%] md:w-[200px] md:h-auto bg-white-A700 shadow-xs cursor-pointer relative rounded-[46px] hover:shadow-xs">
                                <div className="flex justify-center w-full h-max left-0 md:mt-[-85%] bottom-0 right-0 top-0 p-[31px] m-auto sm:p-5 bg-white-A700 shadow-xs absolute rounded-[46px]">
                                  <Img
                                    src="images/img_property_1_wordmark.svg"
                                    alt="propertyone"
                                    className="h-[29px]"
                                  />
                                </div>
                              </div>
                              <div className="h-[93px] w-full md:w-[200px] md:ml-[45%]  md:h-[50px] md:bg-transparent bg-white-A700 cursor-pointer relative rounded-[46px] hover:shadow-xs">
                                <div className="flex justify-center w-full h-max left-0 md:mt-[10%] bottom-0 right-0 top-0 p-[30px] m-auto sm:p-5 bg-white-A700 absolute rounded-[46px]">
                                  <Img
                                    src="images/img_format_wordmark_black_900_02_31x130.svg"
                                    alt="formatwordmark"
                                    className="h-[31px]"
                                  />
                                </div>
                              </div>
                              <div className="h-[88px] w-full h-[81px] md:w-[200px] md:ml-[22%] md:bg-transparent md:h-[50px] bg-white-A700 shadow-xs cursor-pointer relative rounded-[44px] hover:shadow-xs">
                                <div className="flex justify-center w-full h-max left-0 md:mt-[-28%] bottom-0 right-0 top-0 p-[31px] m-auto sm:p-5 bg-white-A700 shadow-xs absolute rounded-[44px]">
                                  <Img
                                    src="images/img_format_frame.svg"
                                    alt="image_one"
                                    className="h-[25px]"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="h-[92px] w-[15%] md:w-[200px] md:mt-[-11.5%] md:ml-[50%] md:bg-transparent md:h-[50px] bg-white-A700 shadow-xs relative rounded-[46px]">
                              <div className="flex justify-center items-center w-full md:mt-[0%] h-max gap-[5px] left-0 bottom-0 right-0 top-0 p-[30px] m-auto sm:p-5 bg-white-A700 shadow-xs absolute rounded-[46px]">
                                <Img
                                  src="images/img_vector_pink_a200.svg"
                                  alt="vector"
                                  className="self-end h-[26px] w-[27px]"
                                />
                                <Img
                                  src="images/img_vector_black_900_02_29x97.svg"
                                  alt="vector"
                                  className="h-[29px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              
              <div className="h-[1618px] md:flex md:flex-wrap md:gap-5 md:h-auto w-[93%] md:h-auto mt-[26px] relative">
                <div className="flex flex-col items-start w-[86%]">
                  <div className="flex flex-col self-stretch">
                    <div className="flex md:flex-col items-start">
                      <div className="flex md:flex-col items-start w-[45%] md:w-full md:p-5">
                        <Img
                          src="images/img_group_19834.png"
                          alt="image_twelve"
                          className="w-[73%] md:w-full object-cover"
                        />
                        <div className="h-[50px] w-[27%] mt-[130px] ml-[-99px] md:ml-0 bg-orange-50_01" />
                      </div>
                      <Text
                        size="19xl"
                        as="p"
                        className="mt-[122px] ml-[-313px] md:p-5 md:ml-0 capitalize"
                      >
                        one platform for all Your Research
                      </Text>
                    </div>
                    <Text
                      size="19xl"
                      as="p"
                      className="w-[48%] z-[1] md:w-full mt-[276px] ml-[100px] md:p-5 md:ml-0 capitalize leading-[50px]"
                    >
                      Manage your tasks online easily.
                    </Text>
                  </div>
                  <div className="h-[50px] w-[14%] mt-[-50px] ml-[100px] md:ml-0 bg-orange-50_01" />
                </div>
                <div className="flex flex-col items-center w-[34%] gap-12 left-[7%] top-[14%] m-auto absolute">
                  <div className="self-stretch">
                    <div className="flex justify-between items-start gap-5 p-4  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white-A700 hover:shadow-xs rounded-[24px]">
                      <div className="flex flex-col mt-[13px] ml-[3px] md:ml-0">
                        <Button
                          color="red_500"
                          size="5xl"
                          shape="circle"
                          className="w-[50px] !rounded-[25px]"
                        >
                          <Img src="images/img_group_249.png" />
                        </Button>
                      </div>
                      <div className="flex flex-col items-start mt-4 mr-0.5 md:mr-0 flex-1">
                        <Text size="12xl" as="p" className="capitalize">
                          appointments
                        </Text>
                        <Text
                          size="7xl"
                          as="p"
                          className="!text-black-900_87 opacity-0.5 leading-[27px]"
                        >
                          Many desktop publishing packages and web page editors
                          now use for them.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-[91%] md:w-full gap-[34px] md:p-5">
                    <div className="flex justify-between items-start  p-4 gap-5 flex-1  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white-A700 hover:shadow-xs rounded-[24px]">
                      <div className="flex flex-col">
                        <Button
                          color="green_500"
                          size="5xl"
                          shape="circle"
                          className="w-[50px] !rounded-[25px]"
                        >
                          <Img src="images/img_group_244.png" />
                        </Button>
                      </div>
                      <div className="flex flex-col items-start mt-0.5 flex-1">
                        <Text size="12xl" as="p" className="capitalize">
                          class bookings
                        </Text>
                        <Text
                          size="7xl"
                          as="p"
                          className="!text-black-900_87 opacity-0.5 leading-[27px]"
                        >
                          Many desktop publishing packages and web page editors
                          now use for them.
                        </Text>
                      </div>
                    </div>
                    <div className="flex justify-between items-start  p-4 gap-5 flex-1 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white-A700 hover:shadow-xs rounded-[24px]">
                      <div className="flex flex-col">
                        <Button
                          color="light_blue_A700"
                          size="5xl"
                          shape="circle"
                          className="w-[50px] !rounded-[25px]"
                        >
                          <Img src="images/img_group_239.png" />
                        </Button>
                      </div>
                      <div className="flex flex-col items-start mt-0.5 flex-1">
                        <Text size="12xl" as="p" className="capitalize">
                          fast support
                        </Text>
                        <Text
                          size="7xl"
                          as="p"
                          className="!text-black-900_87 opacity-0.5 leading-[27px]"
                        >
                          Many desktop publishing packages and web page editors
                          now use for them.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Text
                  size="7xl"
                  as="p"
                  className="w-[41%] bottom-[6%] left-[7%] m-auto !text-black-900_87 capitalize opacity-0.5 leading-[27px] absolute"
                >
                  Pellentesque blandit augue facilisis malesuada interdum
                  eleifend risus, commodo. Egestas senectus vehicula vel
                  consectetur eu. Sit pulvinar urna diam lacus fringilla eu
                  cursus.
                </Text>
                <div className="flex flex-col items-end w-[46%] gap-7 right-[0.00px] top-[16%] m-auto absolute">
                  <div className="self-stretch h-[358px] relative">
                    <div className="flex flex-col items-start w-[87%] left-[0.00px] top-[0.00px] m-auto absolute">
                      <div className="h-[12px] w-[12px] ml-[164px] md:ml-0 z-[1] bg-deep_purple-A200 rounded-md" />
                      <div className="flex sm:flex-col self-stretch items-start mt-[-11px]">
                        <div className="flex justify-end w-[45%] sm:w-full mt-[41px] p-5 sm:p-5 z-[1] bg-white-A700 shadow-xl rounded-[23px]  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                          <div className="flex flex-col w-full mt-3 mb-[9px] gap-[15px]">
                            <div className="flex items-start ml-1 md:ml-0 flex-wrap">
                              <Heading
                                size="md"
                                as="p"
                                className="mt-[5px] !text-[13.96px]"
                              >
                                Users Activity
                              </Heading>
                              <Text
                                size="xl"
                                as="p"
                                className="ml-[43px] !text-gray-500_03 !font-inter !text-[11.97px] !font-normal"
                              >
                                This Week
                              </Text>
                              <Img
                                src="images/img_polygon.svg"
                                alt="polygon_one"
                                className="h-[6px] mt-[5px] ml-[3px] rounded-[1px]"
                              />
                            </div>
                            <div className="flex justify-between items-start gap-5">
                              <div className="flex flex-col items-start gap-[19px]">
                                <Text
                                  size="s"
                                  as="p"
                                  className="!text-gray-500_06 !font-inter !text-[8.98px] !font-medium"
                                >
                                  300
                                </Text>
                                <Text
                                  size="s"
                                  as="p"
                                  className="!text-gray-500_06 !font-inter !text-[8.98px] !font-medium"
                                >
                                  200
                                </Text>
                                <Text
                                  size="s"
                                  as="p"
                                  className="!text-gray-500_06 !font-inter !text-[8.98px] !font-medium"
                                >
                                  100
                                </Text>
                                <Text
                                  size="s"
                                  as="p"
                                  className="!text-gray-500 !font-inter !text-[8.98px] !font-medium"
                                >
                                  0
                                </Text>
                              </div>
                              <div className="flex flex-col items-center mt-[5px] flex-1">
                                <div className="self-stretch h-px w-full z-[2] bg-blue_gray-50_01" />
                                <div className="self-stretch h-[94px] mt-[-1px] relative">
                                  <div className="w-[4%] h-max left-[12.30px] bottom-0 top-0 my-auto absolute">
                                    <div className="h-[93px] w-[7px] rounded-tr-[3px] rounded-tl-[3px] bg-amber-200_01" />
                                    <div className="h-[76px] w-[7px] mt-[-76px] rounded-tr-[3px] rounded-tl-[3px] bg-deep_purple-A200" />
                                  </div>
                                  <div className="h-px w-full top-[33%] right-0 left-0 m-auto bg-blue_gray-50_03 absolute" />
                                  <div className="h-px w-full bottom-[33%] right-0 left-0 m-auto bg-blue_gray-50_03 absolute" />
                                  <div className="w-[5%] bottom-[0.00px] left-[21%] m-auto absolute">
                                    <div className="h-[34px] w-[7px] rounded-tr-[3px] rounded-tl-[3px] bg-amber-200_01" />
                                    <div className="h-[25px] w-[7px] mt-[-24px] rounded-tr-[3px] rounded-tl-[3px] bg-deep_purple-A200" />
                                  </div>
                                  <div className="w-[6%] bottom-[0.00px] left-[35%] m-auto absolute">
                                    <div className="h-[71px] w-[7px] rounded-tr-[3px] rounded-tl-[3px] bg-amber-200_01" />
                                    <div className="h-[50px] w-[7px] mt-[-49px] rounded-tr-[3px] rounded-tl-[3px] bg-deep_purple-A200" />
                                  </div>
                                  <div className="w-[4%] bottom-[0.00px] right-0 left-0 m-auto absolute">
                                    <div className="h-[71px] w-[7px] rounded-tr-[3px] rounded-tl-[3px] bg-amber-200_01" />
                                    <div className="h-[50px] w-[7px] mt-[-49px] rounded-tr-[3px] rounded-tl-[3px] bg-deep_purple-A200" />
                                  </div>
                                  <div className="w-[6%] pt-[18px] bottom-[1.00px] right-[33%] m-auto rounded-tl-[3px] rounded-tr-[3px] bg-amber-200_01 absolute">
                                    <div className="h-[28px] w-[7px] rounded-tr-[3px] rounded-tl-[3px] bg-deep_purple-A200" />
                                  </div>
                                  <div className="w-[5%] bottom-[0.00px] right-[19%] m-auto absolute">
                                    <div className="h-[34px] w-[7px] rounded-tr-[3px] rounded-tl-[3px] bg-amber-200_01" />
                                    <div className="h-[16px] w-[7px] mt-[-15px] rounded-tr-[3px] rounded-tl-[3px] bg-deep_purple-A200" />
                                  </div>
                                  <div className="w-[4%] bottom-[0.00px] right-[9.70px] m-auto absolute">
                                    <div className="h-[71px] w-[7px] rounded-tr-[3px] rounded-tl-[3px] bg-amber-200_01" />
                                    <div className="h-[53px] w-[7px] mt-[-52px] rounded-tr-[3px] rounded-tl-[3px] bg-deep_purple-A200" />
                                  </div>
                                </div>
                                <div className="self-stretch h-px w-full z-[1] bg-blue_gray-50_03" />
                                <div className="flex mt-[3px] gap-[18px] flex-wrap">
                                  <Text
                                    size="xs"
                                    as="p"
                                    className="self-start !text-blue_gray-300_01 !font-inter !text-[7.98px]"
                                  >
                                    M
                                  </Text>
                                  <Text
                                    size="xs"
                                    as="p"
                                    className="self-start !text-blue_gray-300_01 !font-inter !text-[7.98px]"
                                  >
                                    T
                                  </Text>
                                  <Text
                                    size="xs"
                                    as="p"
                                    className="self-end !text-blue_gray-300_01 !font-inter !text-[7.98px]"
                                  >
                                    w
                                  </Text>
                                  <Text
                                    size="xs"
                                    as="p"
                                    className="self-start !text-blue_gray-300_01 !font-inter !text-[7.98px]"
                                  >
                                    T
                                  </Text>
                                  <Text
                                    size="xs"
                                    as="p"
                                    className="self-start !text-blue_gray-300_01 !font-inter !text-[7.98px]"
                                  >
                                    F
                                  </Text>
                                  <Text
                                    size="xs"
                                    as="p"
                                    className="self-start !text-blue_gray-300_01 !font-inter !text-[7.98px]"
                                  >
                                    S
                                  </Text>
                                  <Text
                                    size="xs"
                                    as="p"
                                    className="self-start !text-blue_gray-300_01 !font-inter !text-[7.98px]"
                                  >
                                    S
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sm:self-stretch ml-[-171px] p-[18px] sm:p-5 sm:ml-0 bg-white-A700 flex-1 rounded-[23px]">
                          <div className="flex flex-col mt-6 mr-[7px] gap-[25px] md:mr-0">
                            <div className="flex justify-between items-start gap-5">
                              <Text
                                size="10xl"
                                as="p"
                                className="mt-[7px] !text-blue_gray-700 !font-poppins !text-[21.94px]"
                              >
                                Overview
                              </Text>
                              <Button
                                size="xl"
                                className="sm:px-5 font-poppins font-medium shadow-md min-w-[104px] rounded-[16px]"
                              >
                                Monthly
                              </Button>
                            </div>
                            <div className="flex justify-between items-start gap-5">
                              <div className="flex flex-col items-start mt-0.5 gap-[29px]">
                                <Text
                                  size="7xl"
                                  as="p"
                                  className="h-[27px] !text-blue_gray-300_02 !font-poppins !text-[17.95px] !font-medium"
                                >
                                  10k
                                </Text>
                                <Text
                                  size="7xl"
                                  as="p"
                                  className="!text-blue_gray-300_02 !font-poppins !text-[17.95px] !font-medium"
                                >
                                  6k
                                </Text>
                                <Text
                                  size="7xl"
                                  as="p"
                                  className="!text-blue_gray-300_02 !font-poppins !text-[17.95px] !font-medium"
                                >
                                  5k
                                </Text>
                              </div>
                              <div className="h-[190px] md:h-auto flex-1 relative">
                                <div className="h-[162px] w-[2px] left-[12.96px] top-[0.00px] m-auto bg-gray-50 absolute" />
                                <div className="h-[162px] w-[2px] left-[26%] top-[0.00px] m-auto bg-gray-50 absolute" />
                                <div className="h-[162px] w-[2px] top-[0.00px] right-0 left-0 m-auto bg-gray-50 absolute" />
                                <div className="h-[162px] w-[2px] right-[28%] top-[0.00px] m-auto bg-gray-50 absolute" />
                                <div className="h-[162px] w-[2px] right-[19.83px] top-[0.00px] m-auto bg-gray-50 absolute" />
                                <div className="flex flex-col items-end w-full">
                                  <Text
                                    size="5xl"
                                    as="p"
                                    className="mr-[100px] md:mr-0 !font-poppins text-center !text-[15.96px] z-[1]"
                                  >
                                    5,560$
                                  </Text>
                                  <div className="self-stretch h-[172px] md:h-auto mt-[-15px] relative">
                                    <Img
                                      src="images/img_vector_172x322.png"
                                      alt="vector"
                                      className="h-[172px] w-full object-cover"
                                    />
                                    <div className="h-[138px] w-full md:h-auto top-[0.00px] right-0 left-0 m-auto absolute">
                                      <Img
                                        src="images/img_vector_deep_purple_a200_138x322.svg"
                                        alt="vector"
                                        className="h-[138px]"
                                      />
                                      <div className="w-[8%] right-1/4 top-[38%] p-1 m-auto bg-deep_purple-A200 absolute rounded-[10px]">
                                        <div className="h-[10px] w-[10px] bg-white-A700 rounded-[5px]" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Text
                                  size="xl"
                                  as="p"
                                  className="right-[33%] top-[18%] m-auto !font-poppins text-center !text-[11.97px] absolute"
                                >
                                  Ratings
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end w-[43%] bottom-[0.00px] right-[0.00px] m-auto absolute">
                      <div className="w-full p-[23px] sm:p-5 bg-white-A700 shadow-xl rounded-[23px]">
                        <div className="flex flex-col items-center">
                          <div className="flex self-stretch justify-between items-start gap-5">
                            <div className="flex items-start gap-[15px]">
                              <Button
                                color="gray_100_01"
                                size="3xl"
                                shape="circle"
                                className="w-[40px] !rounded-[20px]"
                              >
                                <Img src="images/img_group_260.png" />
                              </Button>
                              <Heading
                                size="2xl"
                                as="h6"
                                className="mt-1 !text-[17.95px]"
                              >
                                $4,250
                              </Heading>
                            </div>
                            <div className="flex justify-center w-[5%] gap-[3px]">
                              <div className="h-[2px] w-[2px] bg-blue_gray-100_04 rounded-[1px]" />
                              <div className="h-[2px] w-[2px] bg-blue_gray-100_04 rounded-[1px]" />
                              <div className="h-[2px] w-[2px] bg-blue_gray-100_04 rounded-[1px]" />
                            </div>
                          </div>
                          <Text
                            size="xl"
                            as="p"
                            className="mt-[-4px] !text-gray-500_07 !font-inter !text-[11.97px] !font-normal"
                          >
                            Earned this month
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[16px] w-[16px] mr-[19px] md:mr-0 bg-deep_purple-A200 rounded-lg" />
                </div>
                <div className="flex justify-end w-[86%] bottom-[38%] right-[6%] m-auto absolute">
                  <div className="w-full p-9 sm:p-5 bg-purple-900 shadow-sm rounded-[24px]">
                    <div className="flex md:flex-col justify-center w-full mb-1.5 gap-12 mx-auto max-w-[975px]">
                      <div className="flex flex-col items-center w-full gap-[9px]">
                        <Text
                          size="19xl"
                          as="p"
                          className="!text-white-A700 text-center"
                        >
                          110+
                        </Text>
                        <Text
                          as="p"
                          className="!text-white-A700 capitalize text-center leading-6"
                        >
                          Automation templates for creating your campaigns
                          quickly
                        </Text>
                      </div>
                      <div className="flex flex-col items-center w-full gap-[9px]">
                        <Text
                          size="19xl"
                          as="p"
                          className="!text-white-A700 text-center"
                        >
                          4M
                        </Text>
                        <Text
                          as="p"
                          className="!text-white-A700 capitalize text-center leading-6"
                        >
                          Automation templates for creating your campaigns
                          quickly
                        </Text>
                      </div>
                      <div className="flex flex-col items-center w-full gap-[9px]">
                        <Text
                          size="19xl"
                          as="p"
                          className="!text-white-A700 text-center"
                        >
                          99.99%
                        </Text>
                        <Text
                          as="p"
                          className="!text-white-A700 capitalize text-center leading-6"
                        >
                          Automation templates for creating your campaigns
                          quickly
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[468px] w-[46%] bottom-[0.00px] right-[0.00px] m-auto absolute">
                  <Img
                    src="images/img_group_yellow_400_01.svg"
                    alt="image_thirteen"
                    className="h-[394px] top-[0.00px] right-0 left-0 m-auto absolute"
                  />
                  <div className="flex sm:flex-col justify-end items-start w-[86%] bottom-[0.00px] right-[4.00px] m-auto absolute sm:relative">
                    <div className="sm:self-stretch p-[31px] sm:p-5 z-[1] bg-white-A700 shadow-xs flex-1 rounded-[24px]">
                      <div className="flex flex-col gap-[11px]">
                        <div className="flex justify-between items-center gap-5 flex-wrap">
                          <Heading
                            size="xl"
                            as="h6"
                            className="!text-black-900_01 !text-[16.78px]"
                          >
                            Today
                          </Heading>
                          <a href="#" className="self-start opacity-0.7">
                            <Text
                              size="3xl"
                              as="p"
                              className="!text-black-900_99_01 !font-inter text-right !text-[13.42px]"
                            >
                              See All
                            </Text>
                          </a>
                        </div>
                        <div className="flex flex-col gap-[13px]">
                          {/* <div className="h-[70px] md:w-full md:h-auto flex-1 relative md:flex-none">
                            <Img
                              src="images/img_vector_black_900_02_70x287.svg"
                              alt="ui_design_one"
                              className="h-[70px] rounded-[10px]"
                            />
                            <div className="flex justify-center items-start w-[91%] h-max gap-[13px] left-0 bottom-0 right-0 top-0 m-auto absolute">
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
                                  <Heading as="p" className="!text-[11.74px]">
                                    UI Design
                                  </Heading>
                                  <Text
                                    size="lg"
                                    as="p"
                                    className="self-start !text-deep_purple-A200 !font-inter text-right !text-[10.07px] !font-normal"
                                  >
                                    00:42:21
                                  </Text>
                                </div>
                                <div className="flex justify-between gap-5">
                                  <div className="flex gap-1">
                                    <Button
                                      color="red_50"
                                      size="xs"
                                      shape="round"
                                      className="font-inter font-medium min-w-[38px]"
                                    >
                                      Work
                                    </Button>
                                    <Text
                                      size="lg"
                                      as="p"
                                      className="flex justify-center items-center h-[20px] px-1.5 py-[3px] !text-purple-400 !font-inter !text-[10.07px] bg-gray-100_03 rounded-[5px]"
                                    >
                                      Rasion Project
                                    </Text>
                                  </div>
                                  <Img
                                    src="images/img_frame_gray_600_01.svg"
                                    alt="ui_design_three"
                                    className="h-[20px] w-[20px]"
                                  />
                                </div>
                                
                              </div>
                            </div>
                          </div> */}
                          <HomePageUIDesign className="flex justify-center items-center flex-1" />
                          <HomePageSituplight className="flex justify-center items-center flex-1" />
                          <HomePageLearnhtml className="flex justify-center items-center flex-1" />
                          <HomePageReadbooklight className="flex justify-center items-center flex-1" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-[43%] z-[1] sm:w-full mt-[47px] ml-[-98px] gap-[17px] sm:p-5 sm:ml-0">
                      <Button
                        color="white_A700"
                        size="11xl"
                        leftIcon={
                          <Img
                            src="images/img_group_amber_200_01.svg"
                            alt="Group"
                          />
                        }
                        className="gap-[17px] sm:px-5 !text-black-900_02 font-inter font-semibold shadow-xs min-w-[209px] rounded-[24px]"
                      >
                        Report analysis
                      </Button>
                      <div className="self-stretch ml-[60px] md:ml-0">
                        <Button
                          color="white_A700"
                          size="11xl"
                          leftIcon={
                            <Img src="images/img_frame.svg" alt="Frame" />
                          }
                          className="w-full gap-[13px] !text-black-900_02 font-inter font-semibold shadow-xs rounded-[24px]"
                        >
                          Timesheets make
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full mt-[150px] mx-auto md:p-5 max-w-[1240px]">
                <div className="flex md:flex-col justify-between items-center gap-5">
                  <div className="h-[452px] w-[49%] md:w-full md:h-auto relative">
                    <Img
                      src="images/img_group_purple_a100.svg"
                      alt="image_fourteen"
                      className="h-[394px]"
                    />
                    <div className="h-[16px] w-[16px] left-[8.00px] top-[17.00px] m-auto bg-deep_purple-A200 absolute rounded-lg" />
                    <div className="flex w-[60%] left-[28.00px] top-[10%] m-auto absolute">
                      <SelectBox
                        shape="round"
                        indicator={
                          <Img
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        getOptionLabel={(e) => (
                          <>
                            <div className="flex items-center">
                              <Img
                                src="images/img_vector_blue_gray_100_03.svg"
                                alt="Vector"
                              />
                              <span>{e.label}</span>
                            </div>
                          </>
                        )}
                        name="selectteam"
                        placeholder={`Select team members`}
                        options={dropDownOptions}
                        className="w-full sm:pb-5 sm:px-5 font-inter font-medium"
                      />
                    </div>
                    <div className="flex justify-end w-[32%] right-[12.00px] top-[7%] m-auto absolute">
                      <div className="flex flex-col items-start justify-center w-full gap-[17px] p-[18px] bg-white-A700 shadow-2xl rounded-[21px]">
                        <Text
                          size="lg"
                          as="p"
                          className="tracking-[0.21px] !font-inter !text-[10.29px]"
                        >
                          Task Progress
                        </Text>
                        <div className="flex flex-col md:flex-row sm:flex-col self-stretch mb-1 gap-3.5">
                          <div className="flex justify-center flex-1">
                            <div className="flex flex-col items-start w-full">
                              <div className="flex self-stretch justify-between gap-5 flex-wrap">
                                <Text
                                  size="s"
                                  as="p"
                                  className="tracking-[0.21px] !font-inter !text-[8.23px]"
                                >
                                  Copywriting
                                </Text>
                                <Text
                                  size="s"
                                  as="p"
                                  className="self-start !text-black-900_87 tracking-[0.21px] !font-inter !text-[8.23px] opacity-0.5"
                                >
                                  3/8
                                </Text>
                              </div>
                              <div className="self-stretch h-[3px] w-full mt-2 opacity-0.1 bg-yellow-400_63 rounded-[1px]" />
                              <div className="h-[3px] w-[38%] mt-[-3px] bg-yellow-400 rounded-[1px]" />
                            </div>
                          </div>
                          <div className="flex justify-center flex-1">
                            <div className="flex flex-col items-start w-full">
                              <div className="flex self-stretch justify-between items-center gap-5">
                                <Text
                                  size="s"
                                  as="p"
                                  className="w-[31%] tracking-[0.21px] !font-inter !text-[8.23px] leading-[14px]"
                                >
                                  Illustrations
                                </Text>
                                <Text
                                  size="s"
                                  as="p"
                                  className="!text-black-900_87 tracking-[0.21px] !font-inter text-right !text-[8.23px] opacity-0.5"
                                >
                                  6/10
                                </Text>
                              </div>
                              <div className="self-stretch h-[3px] w-full mt-[7px] opacity-0.1 bg-green-500_63 rounded-[1px]" />
                              <div className="h-[3px] w-[56%] mt-[-3px] bg-teal-300_01 rounded-[1px]" />
                            </div>
                          </div>
                          <div className="flex justify-center flex-1">
                            <div className="flex flex-col items-start w-full">
                              <div className="flex self-stretch justify-between gap-5">
                                <Text
                                  size="s"
                                  as="p"
                                  className="w-[25%] tracking-[0.21px] !font-inter !text-[8.23px] leading-[14px]"
                                >
                                  UI Design
                                </Text>
                                <Text
                                  size="s"
                                  as="p"
                                  className="h-[14px] w-[13px] !text-black-900_87 tracking-[0.21px] !font-inter text-right !text-[8.23px] opacity-0.5 leading-[14px]"
                                >
                                  2/7
                                </Text>
                              </div>
                              <div className="self-stretch h-[3px] w-full mt-1.5 opacity-0.1 bg-deep_purple-A200_63 rounded-[1px]" />
                              <div className="h-[3px] w-[45px] mt-[-3px] bg-deep_purple-A200 rounded-[1px]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[314px] w-[62%] md:h-auto bottom-[7%] left-[28.00px] m-auto absolute">
                      <Img
                        src="images/img_vector_white_a700_314x362.svg"
                        alt="vector"
                        className="h-[314px] rounded-[21px]"
                      />
                      <div className="flex flex-col items-center w-full h-max gap-3.5 left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <div className="flex flex-col w-[86%] md:w-full gap-[21px]">
                          <div>
                            <Input
                              color="black_900_02"
                              size="sm"
                              name="search"
                              placeholder={`Search`}
                              prefix={
                                <Img
                                  src="images/img_group_black_900_02.svg"
                                  alt="Group"
                                />
                              }
                              className="gap-[21px] sm:pr-5 font-inter bg-neutral-50 rounded-[16px]"
                            />
                          </div>
                          <div className="flex justify-center items-center gap-3.5">
                            <Img
                              src="images/img_group_31x31.png"
                              alt="image_fifteen"
                              className="w-[31px] object-cover"
                            />
                            <div className="flex self-end justify-between items-center mb-1.5 gap-5 flex-1 flex-wrap">
                              <Text
                                size="xl"
                                as="p"
                                className="!text-black-900_99 tracking-[0.44px] !font-inter !text-[11.54px] opacity-0.7"
                              >
                                Angela Smith
                              </Text>
                              <Text
                                size="lg"
                                as="p"
                                className="self-start !text-black-900_87 tracking-[0.27px] !font-inter text-right !text-[10.65px] !font-normal opacity-0.5"
                              >
                                16 task on progress
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex self-stretch justify-between items-center pr-6 gap-5 sm:pr-5 bg-white">
                          <div className="flex items-start">
                            <div className="h-full w-[2px] bg-deep_purple-A200" />
                            <Img
                              src="images/img_group_2.png"
                              alt="image_sixteen"
                              className="w-[31px] mt-2 ml-[22px] object-cover"
                            />
                            <Text
                              size="xl"
                              as="p"
                              className="mt-[17px] ml-3.5 !text-black-900_99 tracking-[0.44px] !font-inter !text-[11.54px] opacity-0.7"
                            >
                              Karen William
                            </Text>
                          </div>
                          <Text
                            size="lg"
                            as="p"
                            className="!text-black-900_87 tracking-[0.27px] !font-inter text-right !text-[10.65px] !font-normal opacity-0.5"
                          >
                            25 task on progress
                          </Text>
                        </div>
                        <div className="flex flex-col w-[87%] md:w-full gap-6">
                          <div className="flex justify-center items-center gap-3.5">
                            <Img
                              src="images/img_group_3.png"
                              alt="image_seventeen"
                              className="w-[31px] object-cover"
                            />
                            <div className="flex self-end justify-between items-center mb-1.5 gap-5 flex-1 flex-wrap">
                              <Text
                                size="xl"
                                as="p"
                                className="self-start !text-black-900_99 tracking-[0.44px] !font-inter !text-[11.54px] opacity-0.7"
                              >
                                Samantha William
                              </Text>
                              <Text
                                size="lg"
                                as="p"
                                className="self-end !text-black-900_87 tracking-[0.27px] !font-inter text-right !text-[10.65px] !font-normal opacity-0.5"
                              >
                                35 task on progress
                              </Text>
                            </div>
                          </div>
                          <div className="flex justify-between items-center gap-5">
                            <div className="flex items-center gap-3.5">
                              <div className="flex">
                                <div className="flex flex-col">
                                  <Img
                                    src="images/img_group_3.png"
                                    alt="image_eighteen"
                                    className="h-[31px] object-cover"
                                  />
                                  <Img
                                    src="images/img_group_4.png"
                                    alt="image_nineteen"
                                    className="h-[31px] mt-[-31px] object-cover"
                                  />
                                </div>
                              </div>
                              <Text
                                size="xl"
                                as="p"
                                className="self-end mb-[7px] !text-black-900_99 tracking-[0.44px] !font-inter !text-[11.54px] opacity-0.7"
                              >
                                Andy Hope
                              </Text>
                            </div>
                            <Text
                              size="lg"
                              as="p"
                              className="self-end mb-[7px] !text-black-900_87 tracking-[0.27px] !font-inter text-right !text-[10.65px] !font-normal opacity-0.5"
                            >
                              12 task on progress
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end w-[52%]  top-[50%] right-[2%] m-auto absolute">
                      <div className="w-full p-2 bg-white-A700 shadow-2xl rounded-[21px]">
                        <div className="flex flex-col mb-4">
                          <div className="flex justify-between items-start gap-5">
                            <Text
                              size="2xl"
                              as="p"
                              className="!font-inter !text-[12.76px] !font-medium"
                            >
                              Konsep design homepage
                            </Text>
                            <Img
                              src="images/img_group_blue_gray_200.svg"
                              alt="image_twenty"
                              className="h-[17px] w-[17px] mb-2.5"
                            />
                          </div>
                          <div className="flex items-center mt-[7px] gap-[3px]">
                            <Img
                              src="images/img_group_blue_gray_100_03.svg"
                              alt="image_twentyone"
                              className="h-[17px] w-[17px]"
                            />
                            <Text
                              size="s"
                              as="p"
                              className="self-start !text-black-900_87 tracking-[0.21px] !font-poppins !text-[8.51px] opacity-0.5"
                            >
                              Due Nov 24
                            </Text>
                          </div>
                          <Text
                            size="md"
                            as="p"
                            className="w-[95%] md:w-full mt-[9px] !text-black-900_99 !font-inter !text-[9.92px] !font-normal opacity-0.7 leading-[17px]"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam
                          </Text>
                          <div className="mt-[23px]">
                            <div className="flex flex-col gap-[11px]">
                              <div className="flex justify-between gap-5 flex-wrap">
                                <Text
                                  size="md"
                                  as="p"
                                  className="self-end tracking-[0.21px] !font-inter !text-[9.21px]"
                                >
                                  Project Progress
                                </Text>
                                <Text
                                  size="md"
                                  as="p"
                                  className="self-start tracking-[0.21px] !font-inter text-right !text-[9.21px]"
                                >
                                  32%
                                </Text>
                              </div>
                              <div className="h-[4px] bg-green-500_63 relative rounded-sm">
                                <div
                                  style={{ width: "36%" }}
                                  className="h-full bg-teal-300_01 absolute rounded-sm"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-3 gap-5">
                            <div className="flex justify-center items-center w-[51%] gap-[5px]">
                              <Img
                                src="images/img_group_gray_50_03.png"
                                alt="image_twentytwo"
                                className="w-[57%] object-cover"
                              />
                              <Text
                                size="s"
                                as="p"
                                className="self-end mb-1 !text-black-900_99 tracking-[0.35px] !font-poppins !text-[8.51px] opacity-0.7"
                              >
                                + 15 people
                              </Text>
                            </div>
                            <div className="flex justify-center w-[8%]">
                              <div className="h-[19px] w-[19px] md:h-auto relative">
                                <Img
                                  src="images/img_vector_white_a700.svg"
                                  alt="vector"
                                  className="h-[19px] w-[19px] rounded-[50%]"
                                />
                                <Text
                                  size="md"
                                  as="p"
                                  className="w-max bottom-[0.36px] right-0 left-0 m-auto !text-gray-400_04 tracking-[0.21px] !font-poppins !text-[9.92px] absolute"
                                >
                                  +
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex self-end justify-center w-[41%] md:w-full mb-24">
                    <div className="flex flex-col w-full gap-6">
                      <div>
                        <div className="flex flex-col items-start">
                          <div className="h-[50px] w-[28%] ml-[130px] md:ml-0 bg-orange-50_01" />
                          <Text
                            size="19xl"
                            as="p"
                            className="mt-[-50px] capitalize leading-[50px]"
                          >
                            keep track of all your progress.
                          </Text>
                        </div>
                      </div>
                      <Text
                        size="7xl"
                        as="p"
                        className="!text-black-900_87 capitalize opacity-0.5 leading-[27px]"
                      >
                        Pellentesque blandit augue facilisis malesuada interdum
                        eleifend risus, commodo. Egestas senectus vehicula vel
                        consectetur eu. Sit pulvinar urna diam lacus fringilla
                        eu cursus.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[2149px] z-[2] md:w-[100vw]  w-[95%] md:h-auto mt-[150px] relative">
                <div className="w-full h-[2149px] z-[2]">
                  <div className="flex md:flex-col items-center">
                    {/* ========================================================== */}
                    <div className="flex md:flex-wrap flex-col self-end w-[30%] md:w-full md:h-[auto] md:flex md:flex-wrap items-center mb-[670px]  gap-5 md:p-5 z-[1]">
                      <div className="flex justify-center flex-1">
                        <div className="flex justify-between items-start w-full gap-5 p-4 bg-white-A700 shadow-xs rounded-[24px]">
                          <div className="flex flex-col mt-3.5 ml-1 md:ml-0">
                            <Button
                              color="pink_400"
                              size="5xl"
                              shape="circle"
                              className="w-[50px] !rounded-[25px]"
                            >
                              <Img src="images/img_group_393.png" />
                            </Button>
                          </div>
                          <div className="flex flex-col items-start mt-3.5 mr-[3px] md:mr-0 flex-1">
                            <Text size="12xl" as="p" className="capitalize">
                              education system
                            </Text>
                            <Text
                              size="7xl"
                              as="p"
                              className="!text-black-900_87 opacity-0.5 leading-[27px]"
                            >
                              Many desktop publishing packages and web page
                              editors now use for them.
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center flex-1">
                        <div className="flex justify-between items-start w-full gap-5 p-4 bg-white-A700 shadow-xs rounded-[24px]">
                          <div className="flex flex-col mt-3.5 ml-1 md:ml-0">
                            <Button
                              color="deep_orange_A200"
                              size="5xl"
                              shape="circle"
                              className="w-[50px] !rounded-[25px]"
                            >
                              <Img src="images/img_group_385.png" />
                            </Button>
                          </div>
                          <div className="flex flex-col items-start mt-3 mr-[3px] md:mr-0 flex-1">
                            <Text size="12xl" as="p" className="capitalize">
                              officials & financial
                            </Text>
                            <Text
                              size="7xl"
                              as="p"
                              className="!text-black-900_87 opacity-0.5 leading-[27px]"
                            >
                              Many desktop publishing packages and web page
                              editors now use for them.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col items-start md:self-stretch ml-[-225px] md:p-5 md:ml-0 flex-1">
                      <div className="flex w-[39%] md:w-full mt-[63px] z-[1]">
                        <div className="flex flex-col w-full">
                          <div>
                            <div className="flex flex-col items-start">
                              <div className="h-[50px] w-[50%] ml-[138px] md:ml-0 bg-orange-50_01" />
                              <Text
                                size="19xl"
                                as="p"
                                className="mt-[-50px] capitalize leading-[50px]"
                              >
                                More connections, no more cancellations
                              </Text>
                            </div>
                          </div>
                          <Text
                            size="7xl"
                            as="p"
                            className="w-[83%] md:w-full mt-6 !text-black-900_87 capitalize opacity-0.5 leading-[27px]"
                          >
                            Pellentesque blandit augue facilisis malesuada
                            interdum eleifend risus, commodo. Egestas senectus
                            vehicula vel consectetur eu. Sit pulvinar urna diam
                            lacus fringilla eu cursus.
                          </Text>
                          <div className="flex mt-[3px]">
                            <Button
                              size="9xl"
                              className="sm:px-5 capitalize min-w-[160px] rounded-[30px]"
                            >
                              get started
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end md:self-stretch ml-[-80px] md:ml-0 flex-1">
                        <div className="flex flex-col items-start w-[72%] md:w-full mr-[102px] md:mr-0 z-[2]">
                          <div className="self-stretch h-[391px]  md:h-auto relative">
                            <Img
                              src="images/img_group_purple_a100_391x606.svg"
                              alt="image"
                              className="h-[391px] "
                            />
                            <div className="h-[16px] w-[16px] bottom-[16.00px] right-[30.00px] m-auto bg-deep_purple-A200 absolute rounded-lg" />
                          </div>
                          <Img
                            src="images/img_ellipse_59x59.png"
                            alt="circleimage"
                            className="h-[59px] w-[59px] mt-[-36px] ml-[177px] md:ml-0 z-[1] rounded-[50%]"
                          />
                        </div>
                        <div className="flex md:flex-col self-stretch justify-end items-start mt-[-145px]">
                          <div className="h-[45px] w-[44%] mt-[335px] z-[0] bg-orange-50_01" />
                          <Img
                            src="images/img_group_1000003855.png"
                            alt="image"
                            className="w-[56%] md:w-full ml-[-50px] md:ml-0 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_mask_group.png"
                    alt="image"
                    className="w-full md:h-auto mt-[-243px] mx-auto md:p-5 z-[1] object-cover max-w-[1288px]"
                  />
                </div>
                {/* ====================================================================== */}
                <div className="flex md:flex-wrap flex-col w-[30%] gap-5 right-[4%] top-[32%] m-auto absolute md:relative">
                  <div className="flex justify-center md:p-5 flex-1">
                    <div className="flex justify-between items-start w-full gap-5 p-4 bg-white-A700 shadow-xs rounded-[24px]">
                      <div className="flex flex-col mt-3.5 ml-1 md:ml-0">
                        <Button
                          color="blue_400_01"
                          size="5xl"
                          shape="circle"
                          className="w-[50px] !rounded-[25px]"
                        >
                          <Img src="images/img_group_239.png" />
                        </Button>
                      </div>
                      <div className="flex flex-col items-start mt-3.5 mr-[3px] md:mr-0 flex-1">
                        <Text size="12xl" as="p" className="capitalize">
                          beauty & wellness
                        </Text>
                        <Text
                          size="7xl"
                          as="p"
                          className="!text-black-900_87 opacity-0.5 leading-[27px]"
                        >
                          Many desktop publishing packages and web page editors
                          now use for them.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center md:p-5 flex-1">
                    <div className="flex justify-between items-start w-full gap-5 p-4 bg-white-A700 shadow-xs rounded-[24px]">
                      <div className="flex flex-col mt-3.5 ml-1 md:ml-0">
                        <Button
                          color="blue_400_02"
                          size="5xl"
                          shape="circle"
                          className="w-[50px] !rounded-[25px]"
                        >
                          <Img src="images/img_group_381.png" />
                        </Button>
                      </div>
                      <div className="flex flex-col items-start mt-[13px] mr-[3px] md:mr-0 flex-1">
                        <Text size="12xl" as="p" className="capitalize">
                          events & entertainment
                        </Text>
                        <Text
                          size="7xl"
                          as="p"
                          className="!text-black-900_87 opacity-0.5 leading-[27px]"
                        >
                          Many desktop publishing packages and web page editors
                          now use for them.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Text
                  size="19xl"
                  as="p"
                  className="w-[76%] left-[15%] top-[26%] m-auto capitalize text-center leading-[50px] absolute"
                >
                  <>
                    Contextify has the ability to serve
                    <br />
                    Several Use Cases
                  </>
                </Text>
                <div className="flex md:flex-col justify-end items-start w-[35%] right-[18%] top-[3%] ml-auto absolute md:relative">
                  <Img
                    src="images/img_ellipse_51x51.png"
                    alt="circleimage"
                    className="h-[51px] w-[51px] mt-[79px] z-[2] rounded-[50%]"
                  />
                  <div className="flex justify-end items-center md:self-stretch ml-[120px] md:p-5 md:ml-0 flex-1">
                    <div className="p-[15px] bg-white-A700  shadow-lg flex-1 rounded-[20px] z-[2]">
                      <div className="mb-3.5">
                        <div className="flex flex-col gap-2.5">
                          <div className="flex justify-between items-start gap-5">
                            <div className="flex items-center gap-[7px]">
                              <Button
                                color="orange_300_01"
                                size="lg"
                                shape="circle"
                                className="w-[30px] !rounded-[15px]"
                              >
                                <Img src="images/img_group_white_a700.svg" />
                              </Button>
                              <Heading
                                size="md"
                                as="p"
                                className="!text-[13.8px]"
                              >
                                Inbox
                              </Heading>
                            </div>
                            <Img
                              src="images/img_group_gray_400_02.svg"
                              alt="image_twentysix"
                              className="h-[9px] mt-[7px]"
                            />
                          </div>
                          <div>
                            <div className="p-[11px] bg-white-A700 rounded-[9px]">
                              <div className="mt-1">
                                <div className="flex flex-col gap-[13px]">
                                  <div className="flex justify-center flex-1">
                                    <div className="flex w-full p-2 bg-white-A700 rounded">
                                      <div className="flex items-center gap-3.5">
                                        <Button
                                          color="green_A200_01"
                                          size="lg"
                                          shape="circle"
                                          className="self-start w-[30px] !rounded-[15px]"
                                        >
                                          <Img src="images/img_group_white_a700_30x30.svg" />
                                        </Button>
                                        <div className="flex flex-col self-end items-start gap-1">
                                          <Heading
                                            size="xs"
                                            as="p"
                                            className="!text-gray-900_01 !text-[9.86px]"
                                          >
                                            New Message
                                          </Heading>
                                          <Text
                                            size="md"
                                            as="p"
                                            className="!text-gray-900_99 !font-inter !text-[9.86px] opacity-0.7"
                                          >
                                            Hey Alex, are you free now?
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex justify-center flex-1">
                                    <div className="flex w-full p-[9px] bg-white-A700 rounded">
                                      <div className="flex items-center gap-3.5">
                                        <Button
                                          color="red_400"
                                          size="lg"
                                          shape="circle"
                                          className="w-[30px] !rounded-[15px]"
                                        >
                                          <Img src="images/img_group_30x30.svg" />
                                        </Button>
                                        <div className="flex flex-col items-start gap-[3px]">
                                          <Heading
                                            size="xs"
                                            as="p"
                                            className="!text-gray-900_01 !text-[9.86px]"
                                          >
                                            New Email
                                          </Heading>
                                          <Text
                                            size="md"
                                            as="p"
                                            className="!text-gray-900_99 !font-inter !text-[9.86px] opacity-0.7"
                                          >
                                            Alex, your order replaced ID # 45321
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex justify-center flex-1">
                                    <div className="flex w-full p-2 bg-white-A700 rounded">
                                      <div className="flex items-center gap-3.5">
                                        <Button
                                          color="light_blue_A700"
                                          size="lg"
                                          shape="circle"
                                          className="w-[30px] !rounded-[15px]"
                                        >
                                          <Img src="images/img_group_1.svg" />
                                        </Button>
                                        <div className="flex flex-col self-end items-start gap-[3px]">
                                          <Heading
                                            size="xs"
                                            as="p"
                                            className="!text-gray-900_01 !text-[9.86px]"
                                          >
                                            Facebook Messagner
                                          </Heading>
                                          <Text
                                            size="md"
                                            as="p"
                                            className="!text-gray-900_99 !font-inter !text-[9.86px] opacity-0.7"
                                          >
                                            How can I see the tracking number?
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex justify-center flex-1">
                                    <div className="flex w-full p-2 bg-white-A700 rounded">
                                      <div className="flex items-center gap-3.5">
                                        <Button
                                          color="green_A200_01"
                                          size="lg"
                                          shape="circle"
                                          className="self-start w-[30px] !rounded-[15px]"
                                        >
                                          <Img src="images/img_group_white_a700_30x30.svg" />
                                        </Button>
                                        <div className="flex flex-col self-end items-start gap-1">
                                          <Heading
                                            size="xs"
                                            as="p"
                                            className="!text-gray-900_01 !text-[9.86px]"
                                          >
                                            New Message
                                          </Heading>
                                          <Text
                                            size="md"
                                            as="p"
                                            className="!text-gray-900_99 !font-inter !text-[9.86px] opacity-0.7"
                                          >
                                            How can I renew my subscription?
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_ellipse_2.png"
                      alt="circleimage"
                      className="self-end h-[51px] w-[51px] mb-[106px] ml-[-37px] rounded-[50%]"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full bottom-[0.00px] right-0 left-0 m-auto md:p-5 absolute max-w-[961px]">
                  <div className="flex flex-col items-end w-[75%] md:w-full ml-[147px] md:ml-0 z-[1]">
                    <div className="h-[50px] w-[33%] mr-[186px] md:mr-0 bg-orange-50_01" />
                    <Text
                      size="19xl"
                      as="p"
                      className="mt-[-50px] capitalize text-center leading-[50px]"
                    >
                      what our client think about us?
                    </Text>
                  </div>
                  <div className="flex md:flex-col items-center mt-[-48px]">
                    <div className="flex md:flex-col items-start md:self-stretch flex-1">
                      <div className="h-[16px] w-[16px] mt-[443px] z-[1] bg-purple-A100 rounded-lg" />
                      <div className="md:self-stretch h-[933px] w-[933px] md:w-full ml-[-2px] md:ml-0 flex-1 relative md:flex-none">
                        <div className="flex flex-col items-end w-[73%] bottom-[16%] left-[16%] m-auto z-[2] absolute">
                          <div className="h-[414px] w-[414px] mr-[51px] md:mr-0 border-indigo-500_0f border-[0.5px] border-solid rounded-[207px]" />
                          <div className="self-stretch h-[228px] md:h-auto mt-[-113px] relative">
                            <Img
                              src="images/img_vector_white_a700_228x571.svg"
                              alt="vector"
                              className="h-[228px] rounded-[10px]"
                            />
                            <div className="flex flex-col items-center w-[72%] gap-[7px] bottom-[14%] right-[100px] left-0 m-auto absolute">
                              <Text
                                size="7xl"
                                as="p"
                                className="!text-black-900_87 text-center opacity-0.5 leading-[27px]"
                              >
                                Build your financial literacy within a
                                transparent community. Follow other investors,
                                share insights with people from different
                                professional backgrounds, and never be alone.
                              </Text>
                              <Text size="12xl" as="p" className="text-center">
                                Jony Scotty
                              </Text>
                              <Text size="4xl" as="p" className="text-center">
                                UI Designer
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="h-[933px] w-[933px] left-0 bottom-0 right-0 top-0 m-auto border-indigo-500_07 border-[0.5px] border-solid absolute rounded-[466px]" />
                        <div className="flex md:flex-col justify-center items-center w-[86%] h-max right-[2.00px] bottom-0 top-0 my-auto absolute md:relative">
                          <div className="flex md:flex-col justify-center items-start md:self-stretch flex-1">
                            <div className="h-[16px] w-[16px] mt-[41px] z-[1] bg-deep_purple-A200 rounded-lg" />
                            <div className="md:self-stretch h-[665px] w-[665px] ml-[-15px] md:ml-0 border-indigo-500_07 border-[0.5px] border-solid flex-1 rounded-[332px]" />
                          </div>
                          <div className="flex flex-col w-[23%] md:w-full ml-[-69px] gap-[194px] md:gap-[145px] md:ml-0 sm:gap-[97px]">
                            <div className="w-[46%] md:w-full">
                              <div>
                                <div className="border-white-A700 border border-solid bg-purple-A100 rounded-[46px]">
                                  <Img
                                    src="images/img_ellipse_88x90.png"
                                    alt="circleimage_six"
                                    className="h-[88px] rounded-[50%]"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="ml-[108px] md:ml-0">
                              <div className="flex flex-col items-center justify-center border-white-A700 border border-solid bg-deep_purple-A200 rounded-[46px]">
                                <Img
                                  src="images/img_ellipse_87x87.png"
                                  alt="circleimage"
                                  className="h-[74px] w-[87px] rounded-[50%]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-col items-start w-[58%] h-max left-[14%] bottom-0 top-0 my-auto absolute sm:relative">
                          <div className="w-[16%] sm:w-full mt-[137px] z-[1]">
                            <div className="border-white-A700 border border-solid bg-purple-A100 shadow-6xl rounded-[46px]">
                              <Img
                                src="images/img_ellipse_89x89.png"
                                alt="circleimage"
                                className="h-[86px] w-[89px] rounded-[50%]"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start sm:self-stretch ml-[-29px] gap-[90px] md:gap-[67px] sm:gap-[45px] sm:ml-0 border-deep_purple-A200 border-[5px] border-solid flex-1 rounded-[240px]">
                            <div className="w-[12%] md:w-full ml-[118px] md:ml-0">
                              <div className="border-white-A700 border border-solid bg-deep_purple-A200 rounded-[31px]">
                                <div className="mt-1.5">
                                  <Img
                                    src="images/img_image.png"
                                    alt="image"
                                    className="h-[50px] rounded-[50%]"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="w-[36%] md:w-full mb-[153px] ml-[153px] md:ml-0">
                              <div className="border-white-A700 border-8 border-solid bg-deep_purple-A200 rounded-[84px]">
                                <div className="mt-0.5">
                                  <Img
                                    src="images/img_image_157x160.png"
                                    alt="image_thirty"
                                    className="h-[157px] rotate-[0deg] rounded-[50%]"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[16px] w-[16px] bottom-[10%] left-[19%] m-auto bg-deep_purple-A200 absolute rounded-lg" />
                        <div className="h-[16px] w-[16px] right-[15.00px] top-[23%] m-auto bg-deep_purple-A200 absolute rounded-lg" />
                      </div>
                    </div>
                    <div className="self-end h-[16px] w-[16px] mb-[170px] ml-[-2px] md:ml-0 z-[1] bg-purple-A100 rounded-lg" />
                  </div>
                </div>
                <div className="flex md:flex-col items-center w-[35%] gap-[11px] bottom-[47%] left-[36%] m-auto absolute md:relative">
                  <Text size="7xl" as="p" className="md:p-5 capitalize">
                    trusted by 20,000+ clients
                  </Text>
                  <Img
                    src="images/img_group.svg"
                    alt="image_thirtyone"
                    className="h-[12px] md:w-full"
                  />
                </div>
                {/* ==================================================================== */}
                <div className="flex w-[32%] left-[32%] md:flex-wrap  top-[32%] m-auto absolute">
                  <div className="flex justify-between items-start w-full gap-5 p-4 bg-white-A700 shadow-xs rounded-[24px]">
                    <div className="flex flex-col mt-3.5 ml-1 md:ml-0">
                      <Button
                        color="red_500"
                        size="5xl"
                        shape="circle"
                        className="w-[50px] !rounded-[25px]"
                      >
                        <Img src="images/img_group_249.png" />
                      </Button>
                    </div>
                    <div className="flex flex-col items-start mt-4 mr-[3px] md:mr-0 flex-1">
                      <Text size="12xl" as="p" className="capitalize">
                        sports & fitness
                      </Text>
                      <Text
                        size="7xl"
                        as="p"
                        className="!text-black-900_87 opacity-0.5 leading-[27px]"
                      >
                        Many desktop publishing packages and web page editors
                        now use for them.
                      </Text>
                    </div>
                  </div>
                </div>

                <div className="flex w-[32%] left-[32%] top-[39%] m-auto absolute">
                  <div className="flex justify-between items-start w-full gap-5 p-4 bg-white-A700 shadow-xs rounded-[24px]">
                    <div className="flex flex-col mt-3.5 ml-1 md:ml-0">
                      <Button
                        color="deep_purple_A200_05"
                        size="5xl"
                        shape="circle"
                        className="w-[50px] !rounded-[25px]"
                      >
                        <Img src="images/img_group_377.png" />
                      </Button>
                    </div>
                    <div className="flex flex-col items-start mt-3 mr-[3px] md:mr-0 flex-1">
                      <Text size="12xl" as="p" className="capitalize">
                        medical services
                      </Text>
                      <Text
                        size="7xl"
                        as="p"
                        className="!text-black-900_87 opacity-0.5 leading-[27px]"
                      >
                        Many desktop publishing packages and web page editors
                        now use for them.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <FreeTrialArea />
              <Footer />
              <Text className="mt-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
