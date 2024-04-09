import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PricingPage() {
  return (
    <>
      <Helmet>
        <title>Contextify</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col sm:p-[20%] md:flex md:flex-wrap md:w-[200%]  items-center w-full gap-[249px] py-7 md:gap-[186px] sm:gap-[124px] sm:py-5 bg-gray-100 md:max-w-lg:flex flex flex-col sm:w-[398vw] lg:w-[200vw] items-center w-full gap-[258px] py-8 md:gap-[193px] sm:gap-[129px] sm:py-5 bg-gray-100">
        <Header className="w-[86%] md:w-full mt-1 md:p-5" />
        <div className="self-stretch">
          <div className="flex flex-col items-center md:flex flex-wrap">
            <Text size="22xl" as="p" className="!text-gray-900 text-center">
              Pricing
            </Text>
            <Text
              size="13xl"
              as="p"
              className="w-[45%] md:w-full mt-[7px] md:p-5 !text-gray-600_03 text-center leading-[157.4%]"
            >
              <>
                Lorem ipsum dolor sit amet consectetur adipiscing elit <br />
                interdum ullamcorper sed pharetra sene.
              </>
            </Text>
            <div className="self-stretch md:w-[200vw] sm:w-[350vw] lg:w-[200vw] h-[auto] md:h-auto mt-[39px] relative   ">
              <div className="flex z-[1] mb-[45%] md:flex sm:mb-[75%] sm:flex w-[67%]">
                <div className="flex flex-col items-start md:p-5 flex-1 md:flex flex-col">
                  <div className="w-[83%] md:w-full ml-[19px] md:ml-0 z-[1]">
                    <div className="p-[34px] sm:p-5 bg-deep_purple-100 rounded-[30px]">
                      <div className="flex flex-col items-center mt-5 mb-[50px] gap-[35px]">
                        <div className="flex self-stretch justify-between items-center pr-3 gap-5">
                          <Text
                            size="18xl"
                            as="p"
                            className="self-start !text-gray-900"
                          >
                            Basic
                          </Text>
                          <Button
                            color="white_A700"
                            size="7xl"
                            className="sm:px-5 !text-gray-600_03 min-w-[119px] rounded-[27px]"
                          >
                            Save 30%
                          </Button>
                        </div>
                        <div className="flex flex-col self-stretch gap-[42px]">
                          <div className="flex flex-col items-center gap-[18px] p-4 border-blue_gray-100_02 border-t-[0.5px] border-solid">
                            <Heading
                              size="9xl"
                              as="h1"
                              className="!text-gray-900 !font-nunito"
                            >
                              <span className="text-gray-900 font-junge font-normal">
                                $7.99
                              </span>
                              <span className="text-gray-900 font-junge text-xl font-normal">
                                &nbsp;/ month
                              </span>
                            </Heading>
                            <Button
                              color="yellow_100_01"
                              size="4xl"
                              className="mb-[7px] sm:px-5 font-nunito font-semibold min-w-[258px] rounded-[21px]"
                            >
                              Billed as $96 per year
                            </Button>
                          </div>
                          <div>
                            <Text
                              size="11xl"
                              as="p"
                              className="!text-gray-600_03 !font-nunito text-center leading-[244.4%]"
                            >
                              <span className="text-gray-600_03 font-junge text-xl">
                                <>
                                  Unlimited members
                                  <br />
                                  <br />
                                </>
                              </span>
                              <span className="text-gray-900 font-junge text-xl">
                                Unlimited
                              </span>
                              <span className="text-gray-600_03 font-junge text-xl">
                                <>
                                  &nbsp;feedback
                                  <br />
                                  <br />
                                  Weekly team Feedback Friday
                                  <br />
                                  <br />
                                  Custom Kudos&nbsp;
                                </>
                              </span>
                              <span className="text-gray-900 font-junge text-xl">
                                <>
                                  +9 illustration
                                  <br />
                                </>
                              </span>
                              <span className="text-gray-600_03 font-junge text-xl">
                                <>
                                  <br />
                                  Team feedback history
                                </>
                              </span>
                            </Text>
                          </div>
                        </div>
                        <Button
                          color="blue_gray_100_02"
                          size="11xl"
                          variant="outline"
                          className="sm:px-5 font-nunito font-bold min-w-[200px] rounded-[37px]"
                        >
                          Get Started
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_group_19834.png"
                    alt="image"
                    className="h-[1308px] w-full md:h-auto mt-[-40px] object-cover md:h-[0px] md:w-[0px]"
                  />
                </div>
                <div className="flex z-[1] flex-col items-center md:flef-wrap w-[51%] md:w-full gap-20 md:gap-[60px] md:p-5 sm:gap-10">
                  <div className="w-[91%] md:w-full p-[34px] sm:p-5 bg-purple-900 rounded-[30px]">
                    <div className="flex flex-col items-center mt-5 mb-2.5 gap-[35px]">
                      <div className="flex self-stretch justify-between items-center pr-[5px] gap-5">
                        <Text
                          size="18xl"
                          as="p"
                          className="self-start !text-white-A700"
                        >
                          Advanced
                        </Text>
                        <Button
                          color="deep_purple_50"
                          size="7xl"
                          className="sm:px-5 min-w-[108px] rounded-[27px]"
                        >
                          Popular
                        </Button>
                      </div>
                      <div className="flex flex-col self-stretch gap-[42px]">
                        <div className="flex flex-col items-center gap-[18px] p-4 border-deep_purple-A200_02 border-t-[0.5px] border-solid">
                          <Heading
                            size="9xl"
                            as="h2"
                            className="!text-white-A700 !font-nunito"
                          >
                            <span className="text-white-A700 font-junge font-normal">
                              $10.99
                            </span>
                            <span className="text-white-A700 font-junge text-xl font-normal">
                              &nbsp;/ month
                            </span>
                          </Heading>
                          <Button
                            color="deep_purple_A200_02"
                            size="4xl"
                            className="mb-[7px] sm:px-5 font-nunito font-semibold min-w-[274px] rounded-[21px]"
                          >
                            Billed as $199 per year
                          </Button>
                        </div>
                        <div>
                          <Text
                            size="11xl"
                            as="p"
                            className="!text-gray-600_03 !font-nunito text-center leading-[244.4%]"
                          >
                            <span className="text-white-A700 text-xl">
                              <>
                                Unlimited members
                                <br />
                                <br />
                              </>
                            </span>
                            <span className="text-white-A700 text-xl font-bold">
                              Unlimited
                            </span>
                            <span className="text-white-A700 text-xl">
                              <>
                                &nbsp;feedback
                                <br />
                                <br />
                                Weekly team Feedback Friday
                                <br />
                                <br />
                                Custom Kudos&nbsp;
                              </>
                            </span>
                            <span className="text-white-A700 text-xl font-bold">
                              <>
                                +9 illustration
                                <br />
                              </>
                            </span>
                            <span className="text-white-A700 text-xl">
                              <>
                                <br />
                                Team feedback history (30 items)
                                <br />
                                <br />
                                Personal feedback history (6 items)
                                <br />
                                <br />
                                Slack integration
                              </>
                            </span>
                          </Text>
                        </div>
                      </div>
                      <Button
                        color="white_A700"
                        size="11xl"
                        className="sm:px-5 !text-gray-900 font-nunito font-bold min-w-[200px] md: rounded-[37px]"
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                  <div className="flex">
                    <Text size="18xl" as="p" className="!text-gray-900">
                      Compare pricing packages
                    </Text>
                  </div>
                </div>
              </div>

              <Img
                src="images/img_group_1000003855.png"
                alt="image_one"
                className="h-[1308px] w-[27%] bottom-[1%] right-[0.00px] m-auto  object-cover absolute"
              />
              <div className="w-full  bottom-[0.00px] right-0 left-0 m-auto md:p-5 bg-deep_purple-50_01 absolute max-w-[1400px] rounded-[50px]">
                <div className="my-12 md:flex flex-wrap md:mb-[-87%] h-[auto] md:w-full sm:w-[380vw] lg:w-[200vw]" >
                  <div className="flex flex-col items-center gap-[52px] sm:gap-[26px] sm:w-[350vw] lg:w-[200vw] md:mb-[0%]">
                    <div className="flex md:flex-col justify-between items-center  w-[88%] md:items-start md:w-full gap-5">
                      <Text
                        size="18xl"
                        as="p"
                        className="self-end mb-[7px] !text-gray-900 "
                      >
                        Features
                      </Text>
                      <div className="flex flex-col items-center w-[65%] md:w-full gap-0.5">
                        <div className="flex justify-between w-[94%] md:w-full gap-5 flex-wrap">
                          <Text size="18xl" as="p" className="!text-gray-900">
                            Basic
                          </Text>
                          <Text size="18xl" as="p" className="!text-gray-900">
                            Adv
                          </Text>
                          <Text size="18xl" as="p" className="!text-gray-900">
                            Pro
                          </Text>
                        </div>
                        <div className="flex self-stretch justify-between gap-5 flex-wrap">
                          <Text size="9xl" as="p" className="!text-gray-900">
                            $7.99 / month
                          </Text>
                          <Text size="9xl" as="p" className="!text-gray-900">
                            $10.99 / month
                          </Text>
                          <Text size="9xl" as="p" className="!text-gray-900">
                            $15.99 / month
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col self-stretch items-end pt-9 gap-[50px] sm:pt-5">
                      <div className="flex flex-col self-stretch gap-[20px]">
                        <div className="w-[1398px] h-px bg-deep_purple-100" />
                        <div className="flex flex-col items-start gap-8 flex-1">
                          <Heading
                            size="3xl"
                            as="h3"
                            className="ml-16 md:ml-0 !text-deep_purple-A400 !font-nunito"
                          >
                            Analytics
                          </Heading>
                          <div className="self-stretch">
                            <div className="flex justify-between items-center gap-5 p-7 sm:p-5 bg-white-A700 flex-wrap">
                              <Text
                                size="9xl"
                                as="p"
                                className="mt-1.5 mb-[5px] ml-[37px] md:ml-0 !text-gray-600_03 !font-nunito"
                              >
                                Realtime analytics
                              </Text>
                              <Img
                                src="images/img_tick.svg"
                                alt="realtime"
                                className="h-[28px] w-[28px]"
                              />
                              <Img
                                src="images/img_tick.svg"
                                alt="realtime"
                                className="self-start h-[28px] w-[28px] mt-[5px]"
                              />
                              <Img
                                src="images/img_tick.svg"
                                alt="realtime"
                                className="self-end h-[28px] w-[28px] mr-[118px] md:mr-0"
                              />
                            </div>
                            <div className="flex md:flex-col items-start p-[29px] sm:p-5 bg-gray-50_01 flex-wrap">
                              <Text
                                size="9xl"
                                as="p"
                                className="mt-[3px] mb-[5px] ml-[35px] md:ml-0 !text-gray-600_03 !font-nunito"
                              >
                                User analytics
                              </Text>
                              <Img
                                src="images/img_close.svg"
                                alt="user"
                                className="h-[28px] w-[28px] md:w-full mt-[3px] ml-[354px] md:ml-0"
                              />
                              <Img
                                src="images/img_tick.svg"
                                alt="user"
                                className="h-[28px] w-[28px] md:w-full mt-[3px] ml-[313px] md:ml-0"
                              />
                              <Img
                                src="images/img_tick.svg"
                                alt="user"
                                className="h-[28px] w-[28px] md:w-full ml-[312px] md:ml-0"
                              />
                            </div>
                            <div className="flex justify-between items-start mt-[-1px] gap-5 p-[29px] sm:p-5 bg-white-A700 flex-wrap">
                              <Text
                                size="9xl"
                                as="p"
                                className="mt-[5px] mb-1 ml-10 md:ml-0 !text-gray-600_03 !font-nunito"
                              >
                                Funnel optimization
                              </Text>
                              <Img
                                src="images/img_close.svg"
                                alt="image"
                                className="h-[28px] w-[28px] ml-[-8px] mt-[3px]"
                              />
                              <Img
                                src="images/img_tick.svg"
                                alt="image_one"
                                className="h-[28px] w-[28px] mt-[3px]"
                              />
                              <Img
                                src="images/img_tick.svg"
                                alt="image_two"
                                className="h-[28px] w-[28px] mr-[117px] md:mr-0"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-start gap-8 flex-1">
                          <Heading
                            size="3xl"
                            as="h4"
                            className="ml-16 md:ml-0 !text-deep_purple-A400 !font-nunito"
                          >
                            Report
                          </Heading>
                          <div className="self-stretch">
                            <div className="flex md:flex-col justify-between items-start gap-5 p-[27px] sm:p-5 bg-white-A700">
                              <Text
                                size="9xl"
                                as="p"
                                className="mt-[5px] ml-[37px] md:ml-0 !text-gray-600_03 !font-nunito"
                              >
                                Automated{" "}
                              </Text>
                              <div className="flex justify-between items-end w-[60%] md:w-full mb-1.5 mr-[119px] gap-5 md:mr-0">
                                <Img
                                  src="images/img_close.svg"
                                  alt="close_one"
                                  className="h-[28px] w-[28px] ml-[100px] mt-2"
                                />
                                <Img
                                  src="images/img_tick.svg"
                                  alt="tick_one"
                                  className="h-[28px] w-[28px] "
                                />
                                <Img
                                  src="images/img_tick.svg"
                                  alt="tick_three"
                                  className="h-[28px] w-[28px]"
                                />
                              </div>
                            </div>
                            <div className="flex justify-between items-start gap-5 p-[26px] sm:p-5 bg-gray-50_01 flex-wrap">
                              <Text
                                size="9xl"
                                as="p"
                                className="mt-[7px] mb-2 ml-[38px] md:ml-0 !text-gray-600_03 !font-nunito"
                              >
                                AI data predictions
                              </Text>
                              <Img
                                src="images/img_tick.svg"
                                alt="tick_five"
                                className="h-[28px] w-[28px] ml-[5px] mt-[5px]"
                              />
                              <Img
                                src="images/img_close.svg"
                                alt="close_three"
                                className="h-[28px] w-[28px]"
                              />
                              <Img
                                src="images/img_tick.svg"
                                alt="tick_seven"
                                className="h-[28px] w-[28px] mt-[7px] mr-[120px] md:mr-0"
                              />
                            </div>
                            <div className="flex justify-between items-start mt-[-1px] gap-5 p-[26px] sm:p-5 bg-white-A700 flex-wrap">
                              <Text
                                size="9xl"
                                as="p"
                                className="mt-1.5 mb-[9px] ml-[38px] md:ml-0 !text-gray-600_03 !font-nunito"
                              >
                                Advanced charts
                              </Text>
                              <Img
                                src="images/img_close.svg"
                                alt="close_five"
                                className="h-[28px] w-[28px] ml-[25px]"
                              />
                              <Img
                                src="images/img_close.svg"
                                alt="close_seven"
                                className="h-[28px] w-[28px]"
                              />
                              <Img
                                src="images/img_tick.svg"
                                alt="tick_nine"
                                className="h-[28px] w-[28px] mt-[7px] mr-[120px] md:mr-0"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-start gap-8 flex-1">
                          <Heading
                            size="3xl"
                            as="h5"
                            className="ml-16 md:ml-0 !text-deep_purple-A400 !font-nunito"
                          >
                            Security
                          </Heading>
                          <div className="self-stretch">
                            <div className="flex md:flex-col items-start p-[27px] sm:p-5 bg-white-A700 flex-wrap">
                              <Text
                                size="9xl"
                                as="p"
                                className="mt-[7px] mb-1.5 ml-[38px] md:ml-0 !text-gray-600_03 !font-nunito"
                              >
                                Real-time team reports
                              </Text>
                              <Img
                                src="images/img_close.svg"
                                alt="close_one"
                                className="h-[28px] w-[28px] md:w-full mt-1.5 ml-[278px] md:ml-0"
                              />
                              <Img
                                src="images/img_tick.svg"
                                alt="tick_one"
                                className="h-[28px] w-[28px] md:w-full ml-[313px] md:ml-0"
                              />
                              <Img
                                src="images/img_tick.svg"
                                alt="tick_three"
                                className="h-[28px] w-[28px] md:w-full ml-[312px] md:ml-0"
                              />
                            </div>
                            <div className="flex justify-between items-start gap-5 p-[26px] sm:p-5 bg-gray-50_01 flex-wrap">
                              <Text
                                size="9xl"
                                as="p"
                                className="mt-[7px] mb-2 ml-[43px] md:ml-0 !text-gray-600_03 !font-nunito"
                              >
                                Easy-to-share results
                              </Text>
                              <Img
                                src="images/img_tick.svg"
                                alt="tick_five"
                                className="h-[28px] w-[28px] ml-[-12px] mt-1"
                              />
                              <Img
                                src="images/img_tick.svg"
                                alt="tick_seven"
                                className="h-[28px] w-[28px]"
                              />
                              <Img
                                src="images/img_tick.svg"
                                alt="tick_nine"
                                className="h-[28px] w-[28px] mt-[7px] mr-[120px] md:mr-0"
                              />
                            </div>
                            <div className="flex justify-between items-start mt-[-1px] gap-5 p-[26px] sm:p-5 bg-white-A700 flex-wrap">
                              <Text
                                size="9xl"
                                as="p"
                                className="mt-2 mb-[7px] ml-[38px] md:ml-0 !text-gray-600_03 !font-nunito"
                              >
                                Team goal setting
                              </Text>
                              <Img
                                src="images/img_close.svg"
                                alt="close_three"
                                className="h-[28px] w-[28px] ml-[23px] mt-1"
                              />
                              <Img
                                src="images/img_tick.svg"
                                alt="tick_eleven"
                                className="h-[28px] w-[28px]"
                              />
                              <Img
                                src="images/img_tick.svg"
                                alt="tick_thirteen"
                                className="h-[28px] w-[28px] mt-[7px] mr-[120px] md:mr-0"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col justify-between w-[66%] md:w-full mr-[60px] gap-5 md:mr-0">
                        <Button
                          color="blue_gray_100_02"
                          size="11xl"
                          variant="outline"
                          className="sm:px-5 font-nunito font-bold min-w-[200px] rounded-[37px]"
                        >
                          Get Started
                        </Button>
                        <Button
                          size="11xl"
                          className="sm:px-5 font-nunito font-bold min-w-[200px] rounded-[37px]"
                        >
                          Get Started
                        </Button>
                        <Button
                          color="blue_gray_100_02"
                          size="11xl"
                          variant="outline"
                          className="sm:px-5 font-nunito font-bold min-w-[200px] rounded-[37px] "
                        >
                          Get Started
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[31%] right-[20.00px] top-[0.00px] m-auto absolute">
                <div className="p-[34px] sm:p-5 bg-deep_purple-100 rounded-[30px]">
                  <div className="flex flex-col items-center mt-5 mb-[3px] gap-[35px]">
                    <div className="flex self-stretch justify-between items-center gap-5">
                      <Text size="18xl" as="p" className="!text-gray-900">
                        Pro
                      </Text>
                    </div>
                    <div className="flex flex-col self-stretch gap-[42px]">
                      <div className="flex flex-col items-center gap-[18px] p-4 border-blue_gray-100_02 border-t-[0.5px] border-solid">
                        <Heading
                          size="9xl"
                          as="h6"
                          className="!text-gray-900 !font-nunito"
                        >
                          <span className="text-gray-900 font-junge font-normal">
                            $15.99
                          </span>
                          <span className="text-gray-900 font-junge text-xl font-normal">
                            &nbsp;/ month
                          </span>
                        </Heading>
                        <Button
                          color="yellow_100_01"
                          size="4xl"
                          className="mb-[7px] sm:px-5 font-nunito font-semibold min-w-[274px] rounded-[21px]"
                        >
                          Billed as $243 per year
                        </Button>
                      </div>
                      <div>
                        <Text
                          size="11xl"
                          as="p"
                          className="!text-gray-600_03 !font-nunito text-center leading-[244.4%]"
                        >
                          <span className="text-gray-600_03 text-xl">
                            <>
                              Unlimited members
                              <br />
                              <br />
                            </>
                          </span>
                          <span className="text-deep_purple-A400 text-xl font-bold">
                            Unlimited
                          </span>
                          <span className="text-gray-600_03 text-xl">
                            <>
                              &nbsp;feedback
                              <br />
                              <br />
                              Weekly team Feedback Friday
                              <br />
                              <br />
                              Custom Kudos&nbsp;
                            </>
                          </span>
                          <span className="text-deep_purple-A400 text-xl font-bold">
                            <>
                              +9 illustration
                              <br />
                            </>
                          </span>
                          <span className="text-gray-600_03 text-xl">
                            <>
                              <br />
                              Team feedback history (30 items)
                              <br />
                              <br />
                              Personal feedback history (6 items)
                              <br />
                              <br />
                              Slack integration
                            </>
                          </span>
                        </Text>
                      </div>
                    </div>
                    <Button
                      color="blue_gray_100_02"
                      size="11xl"
                      variant="outline"
                      className="sm:px-5 font-nunito font-bold min-w-[200px] rounded-[37px] sm:w-[auto]"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:mt-[70em]">
            <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
}
