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
import "./index.css";
import company1 from "../../assets/images/company1.png";
import company2 from "../../assets/images/company2.png";
import company3 from "../../assets/images/company3.png";
import company4 from "../../assets/images/company4.png";
import company5 from "../../assets/images/company5.png";
import company6 from "../../assets/images/company6.png";
import company7 from "../../assets/images/company7.png";
import company8 from "../../assets/images/company8.png";
import company9 from "../../assets/images/company9.png";
import company10 from "../../assets/images/company10.png";
import company11 from "../../assets/images/company11.png";
import section1Image from "../../assets/images/section1Image.png";
import section3Image from "../../assets/images/section3Image.png";
import section4Image from "../../assets/images/section4Image.png";
import section5Image from "../../assets/images/section5Image.png";
import section6Image from "../../assets/images/section6Image.png";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function HomePagePage() {
  return (
    <>
      <div style={{ width: "100%", height: "max-content" }}>
        <Helmet>
          <title>Contextify</title>
          <meta
            name="description"
            content="Contextify puts information into context at the click of a button."
          />
        </Helmet>
        <div>
          <Header />

          <div
            className="setion1"
            style={{
              width: "100%",
              height: "max-content",
              padding: " 0px 20px",
            }}
          >
            <div className="flex md:flex md:flex-wrap  self-stretch  justify-between items-center w-full gap-5 mx-auto md:p-5 max-w-[1424px] md:w-[90%] jnjdcx4">
              <div className="flex flex-col w-[56%] md:w-full gap-[70px] ascc564">
                <div className="h-[140px] w-[89%] relative  relative w-full md:w-[89%]">
                  <div className="h-[62px] w-full right-0 left-0 m-auto bg-orange-50_01 m-auto w-full h-[62px] bg-orange-50_01" />
                  <Text
                    size="21xl"
                    as="p"
                    className="w-[98%] h-max left-0 bottom-0 right-0 top-0 m-auto capitalize leading-[70px] absolute text-21xl"
                  >
                    Be in the Know.
                  </Text>
                </div>
                <div className="flex flex-col  items-start ml-2.5 md:ml-0 md:w-[90%]">
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

              {/* .................................................... */}

              <div className="flex md:flex-col md:flex-wrap md:h-[auto] justify-between items-start w-[40%] md:w-full gap-5">
                <div className="h-[16px] w-[16px] mt-[100px] bg-deep_purple-A200 rounded-lg animate-bounce ascc564" />

                <img src={section1Image} alt="section1Image" width={"100%"} />
              </div>
            </div>
          </div>

          <div
            className="setion2"
            style={{ width: "100%", height: "max-content" }}
          >
            <div className="flex justify-center items-center w-full md:w-[21%] mt-[107px] gap-[11px] p-5 md:p-0">
              <Text
                size="7xl"
                as="p"
                className="capitalize text-center md:text-left"
              >
                Trusted by 20,000+ clients
              </Text>
              <Img
                src="images/img_group.svg"
                alt="image_eleven"
                className="h-[12px]"
              />
            </div>

            <div className="flex w-full sm:mt-[30%]">
              <div className="flex flex-col items-center  md:w-[98%] w-[98%] md:w-full gap-[31px] md:p-5  sm:flel-wrap md:flex-wrap">
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

                <div style={{ width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      width: "100%",
                      gap: "27px",
                      justifyContent: "center",
                      paddingBottom: "3vh",
                    }}
                  >
                    <img src={company1} alt="company1" />
                    <img src={company2} alt="company2" />
                    <img src={company3} alt="company3" />
                    <img src={company4} alt="company4" />
                    <img src={company5} alt="company5" />
                    <img src={company6} alt="company6" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      width: "100%",
                      gap: "27px",
                      justifyContent: "center",
                    }}
                  >
                    <img src={company7} alt="company7" />
                    <img src={company8} alt="company8" />
                    <img src={company9} alt="company9" />
                    <img src={company10} alt="company10" />
                    <img src={company11} alt="company11" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="setion3"
            style={{ width: "100%", height: "max-content" }}
          >
            <Text
              size="19xl"
              as="p"
              className="mt-[122px] ml-[-313px] md:p-5 md:ml-0 capitalize"
            >
              one platform for all Your Research
            </Text>

            <div
              className="sdbv5"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                width: "100%",
              }}
            >
              <div className="flex flex-col items-center w-[34%] gap-12 m-auto  ascc564">
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

              {/* .................................................................................................. */}

              <div className="flex flex-col items-end w-[46%] gap-7 right-[0.00px] top-[16%] m-auto ascc564 afds86 ">
                <img src={section3Image} alt="section3Image" />
                <div className="h-[16px] w-[16px] mr-[19px] md:mr-0 bg-deep_purple-A200 rounded-lg" />
              </div>
            </div>

            <div className="flex justify-end w-[86%]  right-[6%] m-auto ">
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
                      Automation templates for creating your campaigns quickly
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
                      Automation templates for creating your campaigns quickly
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
                      Automation templates for creating your campaigns quickly
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="setion4"
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              marginTop: "30px",
              padding: "0px 20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                width: "45%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                top: "-12%",
              }}
              className="sfd64"
            >
              <Text
                size="19xl"
                as="p"
                className="w-[100%]  capitalize leading-[50px]"
              >
                Manage your tasks online easily.
              </Text>
              <Text
                size="7xl"
                as="p"
                className="w-[100%]    !text-black-900_87 capitalize opacity-0.5 leading-[27px] "
              >
                Pellentesque blandit augue facilisis malesuada interdum eleifend
                risus, commodo. Egestas senectus vehicula vel consectetur eu.
                Sit pulvinar urna diam lacus fringilla eu cursus.
              </Text>
            </div>

            <div className="h-[468px] w-[54%] m-auto  sfd64">
              <img src={section4Image} alt="section4Image" />
            </div>
          </div>

          <div
            className="setion5"
            style={{
              width: "100%",
              height: "max-content",
              display: "flex",
              padding: "0px 20px",
            }}
          >
            <div className="flex  justify-between items-center gap-5 md:flex md:flex-wrap  md:gap-0 md:w-full md:h-auto md:p-[-15] ">
              <div className="h-[452px] w-[49%] md:w-full md:h-auto relative sdvf">
                <img src={section5Image} alt="section5Image" />
              </div>
              <div className="flex self-end justify-center w-[41%] md:w-full mb-24 md:flex-wrap md:mb-0">
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
                    consectetur eu. Sit pulvinar urna diam lacus fringilla eu
                    cursus.
                  </Text>
                </div>
              </div>
            </div>
          </div>

          <div
            className="setion6"
            style={{ height: "80vh", margin: "0px 30px", padding: "0px 20px" }}
          >
            <div
              style={{ display: "flex", width: "100%", height: "max-content" }}
            >
              <div className="flex md:flex-col items-start md:self-stretch  md:p-5 md:ml-0 flex-1">
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
                      Pellentesque blandit augue facilisis malesuada interdum
                      eleifend risus, commodo. Egestas senectus vehicula vel
                      consectetur eu. Sit pulvinar urna diam lacus fringilla eu
                      cursus.
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
                  <img src={section6Image} alt="section6Image" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="setion7"
            style={{
              height: "max-content",
              width: "100%",
              display: "flex",
              gap: "25px",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                width: "364px",
              }}
            >
              <div
                className="flex justify-center flex-1"
                style={{ height: "50%" }}
              >
                <div
                  className="flex justify-between  items-start w-full gap-5 p-4  shadow-xs rounded-[24px]"
                  style={{
                    minHeight: "208px",
                    maxHeight: "max-content",
                    background: "white",
                  }}
                >
                  <div className="flex flex-col">
                    <Button
                      color="pink_400"
                      size="5xl"
                      shape="circle"
                      className="w-[50px] !rounded-[25px]"
                    >
                      <Img src="images/img_group_393.png" />
                    </Button>
                  </div>
                  <div className="flex flex-col items-start mr-[3px] md:mr-0 flex-1">
                    <Text size="12xl" as="p" className="capitalize">
                      education system
                    </Text>
                    <Text
                      size="7xl"
                      as="p"
                      className="!text-black-900_87 opacity-0.5 leading-[27px]"
                    >
                      Many desktop publishing packages and web page editors now
                      use for them.
                    </Text>
                  </div>
                </div>
              </div>
              {/* ....................................................................................... */}

              <div
                className="flex justify-center flex-1"
                style={{ height: "50%" }}
              >
                <div
                  className="flex justify-between items-start w-full gap-5 p-4 bg-white-A700 shadow-xs rounded-[24px]"
                  style={{ minHeight: "208px", maxHeight: "max-content" }}
                >
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
                      Many desktop publishing packages and web page editors now
                      use for them.
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                width: "364px",
              }}
            >
              <div
                className="flex  md:flex-wrap m-auto"
                style={{ height: "50%" }}
              >
                <div
                  className="flex justify-between items-start w-full gap-5 p-4 bg-white-A700 shadow-xs rounded-[24px]"
                  style={{ minHeight: "208px", maxHeight: "max-content" }}
                >
                  <div className="flex flex-col">
                    <Button
                      color="red_500"
                      size="5xl"
                      shape="circle"
                      className="w-[50px] !rounded-[25px]"
                    >
                      <Img src="images/img_group_249.png" />
                    </Button>
                  </div>
                  <div className="flex flex-col items-start flex-1">
                    <Text size="12xl" as="p" className="capitalize">
                      sports & fitness
                    </Text>
                    <Text
                      size="7xl"
                      as="p"
                      className="!text-black-900_87 opacity-0.5 leading-[27px]"
                    >
                      Many desktop publishing packages and web page editors now
                      use for them.
                    </Text>
                  </div>
                </div>
              </div>

              <div
                className="flex d:flex-wrap  m-auto  "
                style={{ height: "50%" }}
              >
                <div
                  className="flex justify-between items-start w-full gap-5 p-4 bg-white-A700 shadow-xs rounded-[24px]"
                  style={{ minHeight: "208px", maxHeight: "max-content" }}
                >
                  <div className="flex flex-col">
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
                      Many desktop publishing packages and web page editors now
                      use for them.
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                width: "364px",
              }}
            >
              <div className="flex justify-center flex-1">
                <div
                  className="flex justify-between items-start w-full gap-5 p-4 bg-white-A700 shadow-xs rounded-[24px]"
                  style={{ minHeight: "208px", maxHeight: "max-content" }}
                >
                  <div className="flex flex-col md:ml-0">
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
                      Many desktop publishing packages and web page editors now
                      use for them.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex justify-center flex-1">
                <div
                  className="flex justify-between items-start w-full gap-5 p-4 bg-white-A700 shadow-xs rounded-[24px]"
                  style={{ minHeight: "208px", maxHeight: "max-content" }}
                >
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
                      Many desktop publishing packages and web page editors now
                      use for them.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="setion8"
            style={{ height: "max-content", width: "100%", marginTop: "25px" }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                className="flex items-center w-[35%]  m-auto"
                style={{ flexDirection: "column" }}
              >
                <Text size="7xl" as="p" className="md:p-5 capitalize">
                  trusted by 20,000+ clients
                </Text>
                <Img
                  src="images/img_group.svg"
                  alt="image_thirtyone"
                  className="h-[12px] md:w-full"
                />
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Text
                size="19xl"
                as="p"
                className="flex md:flex-col items-center  capitalize text-center "
                style={{ width: "45%" }}
              >
                what our client think about us?
              </Text>
            </div>

            {/* <div className="flex md:flex-col sm:flex-col items-center mt-[-48px]">
              <div className="flex md:flex-col sm:flex-col sm:self-stretch  items-start md:self-stretch flex-1">
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
            </div> */}
          </div>

          <FreeTrialArea />
          <Footer />
          <Text className="mt-[30px]" />
        </div>
      </div>
    </>
  );
}
