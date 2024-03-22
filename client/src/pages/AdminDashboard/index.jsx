import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button } from "../../components";

export default function AdminDashboardPage() {
  return (
    <>
      <Helmet>
        <title>Contextify</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full bg-gray-100">
        <div className="flex md:flex-col items-center w-[97%] md:w-full gap-[47px] md:p-5">
          <div className="h-[900px] w-[21%] md:w-full relative">
            <div className="h-[879px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-gray-50_04 absolute" />
            <div className="h-[879px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-gray-50_04 absolute" />
            <div className="h-[880px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-gray-50_04 absolute" />
            <div className="h-[900px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto absolute">
              <Img src="images/img_background.png" alt="background" className="h-[900px] w-full object-cover" />
              <div className="flex flex-col items-end w-[73%] gap-[73px] left-[28.00px] top-[5%] m-auto md:gap-[54px] sm:gap-9 absolute">
                <div className="flex self-stretch justify-between items-center gap-5">
                  <Img src="images/img_vector_purple_900.svg" alt="vector_one" className="h-[36px] w-[36px]" />
                  <Text size="9xl" as="p" className="self-end !text-purple-900">
                    Contextify
                  </Text>
                </div>
                <div className="flex flex-col self-start items-start">
                  <Text size="4xl" as="p" className="!text-purple-900 tracking-[-0.07px] !font-roboto">
                    Overview
                  </Text>
                  <Text size="2xl" as="p" className="mt-[49px] !text-purple-900 !font-roboto">
                    Opportunities
                  </Text>
                  <Text size="2xl" as="p" className="mt-[33px] !text-purple-900 !font-roboto">
                    My competitors
                  </Text>
                  <Text size="2xl" as="p" className="mt-[49px] !text-purple-900 !font-roboto">
                    Briefs
                  </Text>
                  <Text size="2xl" as="p" className="mt-[45px] ml-2 md:ml-0 !text-purple-900 !font-roboto">
                    Saved
                  </Text>
                  <Text size="2xl" as="p" className="mt-[201px] !text-purple-900 !font-roboto">
                    Settings
                  </Text>
                  <Text size="2xl" as="p" className="mt-[34px] ml-2 md:ml-0">
                    Help
                  </Text>
                  <a href="#" className="mt-[51px]">
                    <Text size="2xl" as="p" className="!text-gray-600_02 !font-roboto">
                      Log out
                    </Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:self-stretch gap-9 flex-1">
            <header className="gap-[41px]">
              <div>
                <div className="flex flex-col gap-0.5">
                  <div className="flex sm:flex-col justify-between items-start gap-5">
                    <div className="flex justify-center items-center w-[27%] sm:w-full mb-0.5 gap-2.5">
                      <Button color="gray_50_04" size="5xl" className="rounded-[12px]">
                        <Img src="images/img_group_107.svg" />
                      </Button>
                      <Text size="9xl" as="p" className="self-end mb-[11px]">
                        Team Lutalika
                      </Text>
                      <div className="flex w-[15%] p-[3px] bg-deep_purple-A200_03 rounded-[19px]">
                        <div className="h-[23px] w-[71%] md:h-auto mt-[5px] mb-[3px] relative">
                          <Img src="images/img_rectangle_7.svg" alt="image" className="h-[23px] w-full rounded" />
                          <Img
                            src="images/img_polygon_2_black_900.svg"
                            alt="polygontwo_one"
                            className="h-[4px] bottom-[8.28px] right-0 left-0 m-auto absolute rounded-[1px]"
                          />
                        </div>
                      </div>
                      <Img
                        src="images/img_vector_deep_purple_a200_03.svg"
                        alt="vector_three"
                        className="self-start h-[23px] w-[24px] mt-3"
                      />
                    </div>
                    <div className="flex justify-center items-center w-[22%] sm:w-full">
                      <Img src="images/img_images_1.png" alt="imagesone_one" className="object-cover rounded-[12px]" />
                      <Text size="9xl" as="p" className="ml-2.5 !text-purple-900">
                        Zahra hasht..
                      </Text>
                      <div className="h-[23px] w-[13%] md:h-auto ml-[23px] relative">
                        <Img src="images/img_rectangle_7.svg" alt="image_one" className="h-[23px] w-full rounded" />
                        <Img
                          src="images/img_polygon_2_black_900.svg"
                          alt="polygonone_one"
                          className="h-[4px] top-[8.66px] right-0 left-0 m-auto absolute rounded-[1px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="h-px bg-gray-50_04" />
                </div>
              </div>
              <div className="flex md:flex-col justify-between items-center gap-5">
                <div className="flex self-end items-start gap-[15px]">
                  <Text size="17xl" as="p" className="!text-gray-700 !font-alatsi">
                    <span className="text-gray-700 font-junge">Project statisti</span>
                    <span className="text-gray-700 tracking-[-0.90px] font-junge">cs</span>
                  </Text>
                  <Button color="deep_purple_A200_03" size="2xl" className="rounded-[19px]">
                    <Img src="images/img_group_13.svg" />
                  </Button>
                </div>
                <div className="flex sm:flex-col gap-2">
                  <Button
                    color="deep_purple_A200_ab"
                    size="6xl"
                    className="sm:px-5 tracking-[-0.07px] font-neuton font-bold opacity-0.9 min-w-[92px] rounded-[26px]"
                  >
                    30 days
                  </Button>
                  <Button
                    color="gray_50_ab"
                    size="6xl"
                    className="sm:px-5 tracking-[-0.07px] font-neuton font-bold opacity-0.9 min-w-[92px] rounded-[26px]"
                  >
                    90 days
                  </Button>
                  <Button
                    color="gray_50_ab"
                    size="6xl"
                    className="sm:px-5 tracking-[-0.07px] font-neuton font-bold opacity-0.9 min-w-[95px] rounded-[26px]"
                  >
                    6 monts
                  </Button>
                  <Button
                    color="gray_50_ab"
                    size="6xl"
                    className="sm:px-5 tracking-[-0.07px] font-neuton font-bold opacity-0.9 min-w-[101px] rounded-[26px]"
                  >
                    12 monts
                  </Button>
                </div>
              </div>
            </header>
            <div className="flex md:flex-col justify-center items-center gap-[17px]">
              <div className="h-[407px] w-full mt-[3px] p-[23px] sm:p-5 border-gray-50_04 border border-solid bg-blue_gray-50_04 relative rounded-[32px]">
                <div className="flex flex-col items-end h-max left-[7%] bottom-0 top-0 my-auto absolute">
                  <Text size="lg" as="p" className="!text-gray-500_04 !font-roboto">
                    40,000,000
                  </Text>
                  <Text size="lg" as="p" className="mt-11 !text-gray-500_04 !font-roboto">
                    30,000,000
                  </Text>
                  <Text size="lg" as="p" className="mt-11 !text-gray-500_04 !font-roboto">
                    20,000,000
                  </Text>
                  <Text size="lg" as="p" className="mt-8 !text-gray-500_04 !font-roboto">
                    10,000,000
                  </Text>
                  <Text size="lg" as="p" className="mt-[21px] !text-gray-500_04 !font-roboto">
                    0
                  </Text>
                </div>
                <div className="flex justify-between w-[82%] bottom-[12%] right-[7%] gap-5 m-auto absolute">
                  <div className="flex self-start justify-between w-[23%] gap-5 flex-wrap">
                    <Text size="lg" as="p" className="!text-gray-500_04 !font-roboto">
                      Feb
                    </Text>
                    <Text size="lg" as="p" className="!text-gray-500_04 !font-roboto">
                      Mar
                    </Text>
                  </div>
                  <div className="flex self-end flex-wrap">
                    <Text size="lg" as="p" className="self-end !text-gray-500_04 !font-roboto">
                      Apr
                    </Text>
                    <Text size="lg" as="p" className="self-start ml-[49px] !text-gray-500_04 !font-roboto">
                      May
                    </Text>
                    <Text size="lg" as="p" className="self-start ml-[39px] !text-gray-500_04 !font-roboto">
                      Jun
                    </Text>
                  </div>
                  <Text size="lg" as="p" className="self-start h-[12px] !text-gray-500_04 !font-roboto">
                    Jul
                  </Text>
                </div>
                <div className="flex flex-col w-[96%] gap-[25px] top-[23.59px] right-0 left-0 m-auto absolute">
                  <div className="flex justify-between items-center gap-5 flex-wrap">
                    <Text size="9xl" as="p" className="self-end mb-[5px] tracking-[-0.40px] !font-roboto">
                      Total visits
                    </Text>
                    <Text size="16xl" as="p" className="!text-deep_purple-A200_03 !font-roboto !font-medium">
                      42,43M
                    </Text>
                  </div>
                  <div className="h-px bg-gray-400_02" />
                </div>
                <div className="h-[236px] w-[83%] bottom-[16%] right-[11%] m-auto absolute">
                  <div className="flex justify-between items-center w-full h-max left-0 bottom-0 right-0 top-0 gap-5 m-auto absolute">
                    <div className="h-full w-px bg-gray-200" />
                    <div className="h-[230px] w-px bg-gray-200" />
                  </div>
                  <div className="h-[235px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="flex justify-between w-[51%] h-max left-[20%] bottom-0 top-0 gap-5 my-auto absolute">
                      <div className="h-full w-px bg-gray-200" />
                      <div className="h-full w-px bg-gray-200" />
                      <div className="h-full w-px bg-gray-200" />
                    </div>
                    <div className="h-[231px] w-px right-[19%] bottom-0 top-0 my-auto bg-gray-200 absolute" />
                    <div className="flex flex-col items-end w-full bottom-[-0.01px] right-0 left-0 m-auto absolute">
                      <div className="flex flex-col self-stretch items-end">
                        <div className="h-[49px] w-[26%] md:h-auto mr-[25px] md:mr-0 z-[1] relative">
                          <Img src="images/img_group_17.svg" alt="image_two" className="h-[49px]" />
                          <div className="flex flex-col items-center top-[8.35px] right-0 left-0 m-auto absolute">
                            <Text size="2xl" as="p" className="!text-gray-50_02 !font-roboto">
                              24,000,033
                            </Text>
                            <Text size="2xl" as="p" className="!text-white-A700_99 !font-roboto opacity-0.7">
                              Visitors
                            </Text>
                          </div>
                        </div>
                        <div className="self-stretch h-[74px] md:h-auto mt-[-41px] relative">
                          <Img
                            src="images/img_vector_2.png"
                            alt="vectortwo_one"
                            className="h-[74px] w-full object-cover"
                          />
                          <div className="h-[15px] w-[16px] bottom-[14.33px] right-[17%] m-auto border-white-A700 border-4 border-solid bg-deep_purple-A200_03 absolute rounded-lg" />
                        </div>
                      </div>
                      <div className="h-[138px] w-[4px] mt-[-13px] mr-[66px] md:mr-0 z-[1] bg-gray-400_02" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-col gap-1">
                  <div className="flex sm:flex-col justify-center items-start gap-6">
                    <div className="h-[212px] w-full sm:w-full relative">
                      <div className="h-[137px] w-[73%] bottom-[0.00px] right-0 left-0 m-auto bg-purple-A100_90 backdrop-opacity-[0.6] blur-[46.00px] absolute rounded-[32px]" />
                      <div className="h-[186px] w-full bg-light_blue-300 absolute rounded-[32px]" />
                      <div className="h-[190px] w-full top-[0.00px] right-0 left-0 m-auto absolute">
                        <Img
                          src="images/img_mask_group_purple_a100_01.svg"
                          alt="image_three"
                          className="h-[190px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                        <div className="flex flex-col items-end w-[83%] left-[16.08px] top-[16.87px] m-auto absolute">
                          <div className="flex flex-col self-stretch items-start gap-[23px]">
                            <div className="flex self-stretch justify-between items-center ml-[19px] gap-5 md:ml-0">
                              <Button color="white_A700_05" size="5xl" className="w-[52px] rounded-[16px]">
                                <Img src="images/img_group_37.svg" />
                              </Button>
                              <div className="flex self-end items-start mb-3 gap-0.5">
                                <Img
                                  src="images/img_polygon_2.svg"
                                  alt="polygontwo"
                                  className="h-[6px] rounded-[1px]"
                                />
                                <Text size="2xl" as="p" className="!text-white-A700 !font-roboto">
                                  12%
                                </Text>
                              </div>
                            </div>
                            <Text size="16xl" as="p" className="!text-gray-50_04 !font-roboto !font-medium">
                              42,34%
                            </Text>
                          </div>
                          <div className="h-[31px] w-[32px] mt-[-4px] mr-3 md:mr-0 opacity-0.02 bg-deep_purple-A200_5c rounded-[16px]" />
                        </div>
                        <Img
                          src="images/img_vector_gray_50_04.svg"
                          alt="vector_five"
                          className="h-[17px] bottom-[21%] right-[23%] m-auto absolute"
                        />
                        <Text
                          size="4xl"
                          as="p"
                          className="bottom-[21%] left-[16.08px] m-auto !text-gray-50_9b !font-roboto !font-medium opacity-0.72 absolute"
                        >
                          Bounce Rate
                        </Text>
                      </div>
                    </div>
                    <div className="h-[190px] w-full md:h-auto sm:w-full mt-0.5 relative">
                      <div className="flex items-start mt-[37px] mr-[25px] gap-0.5 md:mr-0">
                        <Img
                          src="images/img_polygon_2.svg"
                          alt="polygontwo_five"
                          className="h-[6px] mt-[3px] rounded-[1px]"
                        />
                        <Text size="2xl" as="p" className="!font-roboto">
                          12%
                        </Text>
                      </div>
                      <div className="w-full h-max left-0 bottom-0 right-0 top-0 p-4 m-auto bg-gray-50_04 absolute rounded-[32px]">
                        <div className="flex justify-between items-center mb-[23px] gap-5">
                          <div className="flex flex-col items-start gap-6">
                            <Button
                              color="gray_400_0a"
                              size="5xl"
                              className="w-[52px] ml-[18px] md:ml-0 rounded-[16px]"
                            >
                              <Img src="images/img_group_48.svg" />
                            </Button>
                            <div className="flex flex-col items-start gap-1">
                              <Text size="16xl" as="p" className="!text-blue_gray-900 !font-roboto !font-medium">
                                42,34%
                              </Text>
                              <Text
                                size="4xl"
                                as="p"
                                className="!text-blue_gray-900_9b !font-roboto !font-medium opacity-0.72"
                              >
                                Pages per visit
                              </Text>
                            </div>
                          </div>
                          <div className="flex self-end mb-2.5 p-[3px] bg-deep_purple-A200_03 rounded-lg">
                            <Img src="images/img_group_13.svg" alt="vector_seven" className="h-[10px] w-[10px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col justify-center gap-6">
                    <div className="w-full sm:w-full p-3.5 bg-gray-50_04 rounded-[32px]">
                      <div className="flex flex-col mb-6 gap-[23px]">
                        <div className="flex justify-between items-center ml-[19px] gap-5 md:ml-0">
                          <Button color="gray_400_0a" size="5xl" className="w-[52px] rounded-[16px]">
                            <Img src="images/img_group_60.svg" />
                          </Button>
                          <div className="flex self-end items-start mb-[11px] gap-2">
                            <Img
                              src="images/img_polygon_2_deep_orange_a400.svg"
                              alt="polygontwo"
                              className="h-[6px] mt-[3px] rounded-[1px]"
                            />
                            <Text size="2xl" as="p" className="!font-roboto">
                              2,1%
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col self-center gap-1.5">
                          <Text size="16xl" as="p" className="!text-blue_gray-900 !font-roboto !font-medium">
                            326.60K
                          </Text>
                          <Text
                            size="4xl"
                            as="p"
                            className="!text-blue_gray-900_9b !font-roboto !font-medium opacity-0.72"
                          >
                            Total Monthly Visit
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-full">
                      <div className="h-[190px] md:h-auto bg-gray-50_04 relative rounded-[32px]">
                        <div className="flex flex-col w-[83%] mt-4 ml-4 gap-[23px] md:ml-0">
                          <div className="flex justify-between items-center ml-[19px] gap-5 md:ml-0">
                            <Button color="white_A700_05" size="5xl" className="w-[52px] rounded-[16px]">
                              <Img src="images/img_group_76.svg" />
                            </Button>
                            <div className="flex self-end items-start mb-[11px] gap-[5px]">
                              <Img
                                src="images/img_polygon_2_green_800.svg"
                                alt="polygontwo_nine"
                                className="h-[6px] rounded-[1px]"
                              />
                              <Text size="2xl" as="p" className="!font-roboto">
                                12%
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-start gap-[3px]">
                            <Text size="16xl" as="p" className="!text-blue_gray-900 !font-roboto !font-medium">
                              42,34%
                            </Text>
                            <Text
                              size="4xl"
                              as="p"
                              className="!text-blue_gray-900_9b !font-roboto !font-medium opacity-0.72"
                            >
                              Bounce Rate
                            </Text>
                          </div>
                        </div>
                        <div className="w-full h-max left-0 bottom-0 right-0 top-0 p-4 m-auto bg-gray-50_04 absolute rounded-[32px]">
                          <div className="flex flex-col mb-[23px] gap-[21px]">
                            <div className="flex justify-between items-center ml-[19px] gap-5 md:ml-0">
                              <Button color="gray_400_05_01" size="5xl" className="w-[52px] rounded-[16px]">
                                <Img src="images/img_group_69.svg" />
                              </Button>
                              <div className="flex self-end items-start mb-[13px] gap-[5px]">
                                <Img
                                  src="images/img_polygon_2_deep_orange_a400_6x13.svg"
                                  alt="polygontwo"
                                  className="h-[6px] mt-0.5 rounded-[1px]"
                                />
                                <Text size="2xl" as="p" className="!font-roboto">
                                  2,4%
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-start gap-1.5">
                              <Text size="16xl" as="p" className="!text-blue_gray-900 !font-roboto !font-medium">
                                00:03:27
                              </Text>
                              <Text
                                size="4xl"
                                as="p"
                                className="!text-blue_gray-900_9b !font-roboto !font-medium opacity-0.72"
                              >
                                Avg.Visit Duration
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
            <div className="flex md:flex-col gap-5">
              <div className="flex justify-end w-full p-2.5 bg-blue_gray-50_04 rounded-[32px]">
                <div className="flex flex-col items-start w-full mt-[23px] mr-4 md:mr-0">
                  <Text size="9xl" as="p" className="tracking-[-0.40px] !font-roboto">
                    Traffic Sources
                  </Text>
                  <div className="self-stretch h-px mt-[29px] bg-gray-400_02" />
                  <div className="flex sm:flex-col self-stretch justify-between items-center mt-[7px] gap-5">
                    <div className="flex flex-col items-start w-[61%] sm:w-full gap-[13px]">
                      <div className="flex self-stretch justify-between gap-5 p-1.5 bg-blue_gray-50_02 flex-wrap rounded-[12px]">
                        <Text
                          size="2xl"
                          as="p"
                          className="ml-[39px] md:ml-0 !text-gray-500_02 tracking-[-0.24px] !font-roboto"
                        >
                          sourse
                        </Text>
                        <Text
                          size="2xl"
                          as="p"
                          className="self-start mr-[45px] md:mr-0 !text-gray-400_05 tracking-[-0.24px] !font-roboto"
                        >
                          Traffic sourse,%
                        </Text>
                      </div>
                      <div className="flex flex-col w-[79%] md:w-full ml-[19px] gap-3.5 md:ml-0">
                        <div className="flex justify-between gap-5">
                          <div className="flex self-end justify-center items-center w-[31%] gap-3">
                            <div className="self-start h-[12px] w-[18px] bg-light_blue-300 rounded-sm" />
                            <Text size="2xl" as="p" className="tracking-[-0.24px] !font-roboto">
                              Direct{" "}
                            </Text>
                          </div>
                          <Text size="2xl" as="p" className="self-start h-[15px] tracking-[-0.24px] !font-roboto">
                            50
                          </Text>
                        </div>
                        <div className="flex justify-between gap-5">
                          <div className="flex self-end justify-center items-center w-[32%] gap-[9px]">
                            <div className="self-start h-[12px] w-[18px] bg-purple-A100_01 rounded-sm" />
                            <Text size="2xl" as="p" className="tracking-[-0.24px] !font-roboto">
                              Search
                            </Text>
                          </div>
                          <Text size="2xl" as="p" className="self-start h-[15px] tracking-[-0.24px] !font-roboto">
                            50
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="w-[30%] sm:w-full">
                      <div className="p-[9px] bg-gray-100_06 rounded-[65px]">
                        <div className="flex flex-col items-start border-light_blue-300 border-[13px] border-solid rounded-[55px]">
                          <div className="flex flex-col items-end w-[81%] md:w-full">
                            <div className="flex justify-end w-[8%] md:w-full mr-[27px] md:mr-0 z-[1]">
                              <div className="h-[4px] w-[4px] bg-gray-50_04 rounded-sm" />
                              <div className="h-[4px] w-[4px] ml-[-4px] bg-gray-50_04 rounded-sm" />
                            </div>
                            <div className="self-stretch mt-[-2px] z-[2]">
                              <div className="flex justify-center items-center">
                                <Img src="images/img_ellipse_10.svg" alt="sourse_two" className="h-[97px] z-[1]" />
                                <div className="flex flex-col self-end items-center mb-3 ml-[-31px]">
                                  <Text size="16xl" as="p" className="!font-roboto !font-medium">
                                    50%
                                  </Text>
                                  <Text size="2xl" as="p" className="!text-gray-500_01 tracking-[-0.24px] !font-roboto">
                                    Direct{" "}
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-end w-[11%] md:w-full mt-[-2px] mr-[25px] md:mr-0">
                              <div className="h-[4px] w-[4px] z-[1] bg-gray-50_04 rounded-sm" />
                              <div className="h-[4px] w-[4px] ml-[-2px] bg-gray-50_04 rounded-sm" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end w-full p-2.5 bg-blue_gray-50_04 rounded-[32px]">
                <div className="flex flex-col items-start w-full mt-[23px] mr-4 md:mr-0">
                  <Text size="9xl" as="p" className="tracking-[-0.40px] !font-roboto">
                    Traffic Sources
                  </Text>
                  <div className="self-stretch h-px mt-[29px] bg-gray-400_02" />
                  <div className="flex sm:flex-col self-stretch justify-between items-center mt-[7px] gap-5">
                    <div className="flex flex-col items-start w-[61%] sm:w-full gap-[13px]">
                      <div className="flex self-stretch justify-between gap-5 p-1.5 bg-blue_gray-50_02 flex-wrap rounded-[12px]">
                        <Text
                          size="2xl"
                          as="p"
                          className="ml-[39px] md:ml-0 !text-gray-500_02 tracking-[-0.24px] !font-roboto"
                        >
                          sourse
                        </Text>
                        <Text
                          size="2xl"
                          as="p"
                          className="self-start mr-[45px] md:mr-0 !text-gray-400_05 tracking-[-0.24px] !font-roboto"
                        >
                          Traffic sourse,%
                        </Text>
                      </div>
                      <div className="flex flex-col w-[79%] md:w-full ml-[19px] gap-3.5 md:ml-0">
                        <div className="flex justify-between gap-5">
                          <div className="flex self-end justify-center items-center w-[31%] gap-3">
                            <div className="self-start h-[12px] w-[18px] bg-light_blue-300 rounded-sm" />
                            <Text size="2xl" as="p" className="tracking-[-0.24px] !font-roboto">
                              Direct{" "}
                            </Text>
                          </div>
                          <Text size="2xl" as="p" className="self-start h-[15px] tracking-[-0.24px] !font-roboto">
                            50
                          </Text>
                        </div>
                        <div className="flex justify-between gap-5">
                          <div className="flex self-end justify-center items-center w-[32%] gap-[9px]">
                            <div className="self-start h-[12px] w-[18px] bg-purple-A100_01 rounded-sm" />
                            <Text size="2xl" as="p" className="tracking-[-0.24px] !font-roboto">
                              Search
                            </Text>
                          </div>
                          <Text size="2xl" as="p" className="self-start h-[15px] tracking-[-0.24px] !font-roboto">
                            50
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="w-[30%] sm:w-full">
                      <div className="p-[9px] bg-gray-100_06 rounded-[65px]">
                        <div className="flex flex-col items-start border-light_blue-300 border-[13px] border-solid rounded-[55px]">
                          <div className="flex flex-col items-end w-[81%] md:w-full">
                            <div className="flex justify-end w-[8%] md:w-full mr-[27px] md:mr-0 z-[1]">
                              <div className="h-[4px] w-[4px] bg-gray-50_04 rounded-sm" />
                              <div className="h-[4px] w-[4px] ml-[-4px] bg-gray-50_04 rounded-sm" />
                            </div>
                            <div className="self-stretch mt-[-2px] z-[2]">
                              <div className="flex justify-center items-center">
                                <Img src="images/img_ellipse_10.svg" alt="image" className="h-[97px] z-[1]" />
                                <div className="flex flex-col self-end items-center mb-3 ml-[-31px]">
                                  <Text size="16xl" as="p" className="!font-roboto !font-medium">
                                    50%
                                  </Text>
                                  <Text size="2xl" as="p" className="!text-gray-500_01 tracking-[-0.24px] !font-roboto">
                                    Direct{" "}
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-end w-[11%] md:w-full mt-[-2px] mr-[25px] md:mr-0">
                              <div className="h-[4px] w-[4px] z-[1] bg-gray-50_04 rounded-sm" />
                              <div className="h-[4px] w-[4px] ml-[-2px] bg-gray-50_04 rounded-sm" />
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
      </div>
    </>
  );
}
