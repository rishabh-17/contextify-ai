import React from "react";
// import './About.css';
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Contextify</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className=" md:max-w-lg:flex flex flex-col md:w-[200%] sm:w-[370vw] lg:w-[200vw] items-center w-full gap-[258px] py-8 md:gap-[193px] sm:gap-[129px] sm:py-5 bg-gray-100">
        <Header className="w-[86%] md:w-full md:p-5" />
        <div className="self-stretch" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
          <div className="flex flex-col items-center">
            <Text size="22xl" as="p" className="!text-gray-900">
              About Contextify
            </Text>
            <Text
              size="13xl"
              as="p"
              className="mt-3.5 !text-gray-600_03 text-center"
            >
              Discover the Power of Contextify!
            </Text>



            <div className="hjsadkj md:flex-wrap w-auto sm:" style={{
              display: "flex",
              width: "100%",
              overflow: "hidden",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
              margin: "50px 0px",
            }}>
              <Img
                src="images/img_photo.png"
                alt="photo_one"
                className="h-[583px] w-full md:h-96 w-full object-cover rounded-2xl md:h-auto md:w-1/2"
              />
              <Img
                src="images/img_photo_583x476.png"
                alt="photo_three"
                className="h-[583px] w-full md:h-96 w-full object-cover rounded-2xl md:h-auto md:w-1/2"
              />
            </div>



            <div className="h-96 w-full object-cover rounded-2xl md:h-auto md:w-1/2">
              <div className="flex ml-[5px] md:ml-0 z-[1]" style={
                {
                  textAlign: "left",
                  width: "50%",
                }
              }>
                <Heading size="10xl" as="h1" className="ddddoooo !text-gray-900 !font-nunito text-center">
                  What we do
                </Heading>
              </div>
              <div className="flex md:flex-col items-start w-[92%] md:w-full md:p-5" style={{}}>
                {/* <Img
                  src="images/img_group_19834.png"
                  alt="image_one"
                  className="w-[38%] md:w-full object-cover"
                /> */}
                <Text
                  size="11xl"
                  as="p"
                  className="w-[62%] md:w-full ml-[30%] md:ml-0 !text-gray-600_03 !font-nunito leading-[157.4%]"
                  style={{
                    display: "flex"
                  }}
                >
                  <>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using.
                    <br />
                    <br />
                    Content here&#39;, making it look like readable English.
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for &#39;lorem ipsum&#39; will uncover many web sites still
                    in their infancy.{" "}
                  </>
                </Text>
              </div>
            </div>

            <div className="flex flex-col  ">
              <div className="flex w-full">
                <div className="flex flex-col items-center w-[98%] md:w-full gap-[31px] md:p-5  sm:flel-wrap md:flex-wrap">


                  <div className="flex justify-center w-[20%] md:w-full" >
                    <div className="flex flex-col items-center w-full sm:w-[20%] md:w-auto">
                      <div className="h-12 w-52 md:w-[52%] bg-orange-50_01" />
                      <div className="flex mt-[-42px]">
                        <div className="flex flex-col items-center" >
                          <Text size="19xl" as="p" className="capitalize">
                            Our Trusted Partners
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-full md:p-5 md:ml-0 md:mt-0 md:mb-0 md:pr-0 md:pl-0 md:pt-0 md:pb-0 ">
                    <div className="flex flex-col gap-[26px]">
                      <div className="w-full mx-auto sm:block sm:w-full   z-[1] md:w-full md:p-[5%]">
                        <div className="flex md:flex-col justify-center items-center gap-[21px]">
                          <div className="md:self-stretch h-[101px] md:w-full md:h-auto bg-white-A700 shadow-xs flex-1 relative rounded-[50px] md:flex-none">
                            <div className="flex justify-center md:w-full items-center w-full h-max gap-[7px] left-0 bottom-0 right-0 top-0 p-[31px] m-auto sm:p-5 bg-white-A700 shadow-xs absolute rounded-[50px]">
                              <Img
                                src="images/img_vector_black_900_02.svg"
                                alt="vector_eleven"
                                className="h-[38px] w-[35px] md:flex-wrap z-[1] sm:flex-none z-[1]"
                              />
                              <Img
                                src="images/img_vector_black_900_02_33x82.svg"
                                alt="vector_thirteen"
                                className="self-end h-[33px] md:flex wrap  z-[1] sm:flex-none z-[1] "
                              />
                            </div>
                          </div>
                          <div className="h-[92px] w-[11%] md:w-full md:h-auto bg-white-A700 shadow-xs relative rounded-[46px]">
                            <div className="flex justify-center w-full h-max left-0 bottom-0 right-0 top-0 p-[31px] m-auto sm:p-5 bg-white-A700 shadow-xs absolute rounded-[46px]">
                              <Img
                                src="images/img_format_wordmark.svg"
                                alt="formatwordmark"
                                className="h-[29px] md:flex wrap  z-[1] sm:flex-none z-[1]"
                              />
                            </div>
                          </div>
                          <div className="md:self-stretch h-[101px] md:w-full md:h-auto bg-white-A700 flex-1 relative rounded-[50px] md:flex-none">
                            <div className="flex justify-center w-full h-max left-0 bottom-0 right-0 top-0 p-[31px] m-auto sm:p-5 bg-white-A700 absolute rounded-[50px]">
                              <Img
                                src="images/img_format_wordmark_green_600_01.svg"
                                alt="formatwordmark"
                                className="h-[38px] md:flex wrap  z-[1] sm:flex-none z-[1]"
                              />
                            </div>
                          </div>
                          <div className="h-[101px] w-[19%] md:w-full md:h-auto bg-white-A700 shadow-5xl relative rounded-[50px]">
                            <div className="flex justify-center items-start w-full h-max gap-[15px] left-0 bottom-0 right-0 top-0 p-[30px] m-auto sm:p-5 bg-white-A700 shadow-5xl absolute rounded-[50px]">
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
                          <div className="md:self-stretch h-[81px] md:w-full md:h-auto bg-white-A700 flex-1 relative rounded-[40px] md:flex-none">
                            <div className="flex justify-center w-full h-max left-0 bottom-0 right-0 top-0 p-[30px] m-auto sm:p-5 bg-white-A700 absolute rounded-[40px]">
                              <Img
                                src="images/img_format_wordmark_light_blue_500.svg"
                                alt="formatwordmark"
                                className="h-[19px] md:flex wrap  z-[1] sm:flex-none z-[1]"
                              />
                            </div>
                          </div>
                          <div className="md:self-stretch h-[94px] md:w-full md:h-auto bg-white-A700 shadow-xs flex-1 relative rounded-[47px] md:flex-none">
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
                              <div className="h-[92px] w-full md:h-auto bg-white-A700 shadow-xs cursor-pointer relative rounded-[46px] hover:shadow-xs">
                                <div className="flex justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-[31px] m-auto sm:p-5 bg-white-A700 shadow-xs absolute rounded-[46px]">
                                  <Img
                                    src="images/img_format_wordmark_black_900_02_32x130.svg"
                                    alt="formatwordmark"
                                    className="h-[29px] "
                                  />
                                </div>
                              </div>
                              <div className="h-[92px] w-full md:h-auto bg-white-A700 shadow-xs cursor-pointer relative rounded-[46px] hover:shadow-xs">
                                <div className="flex justify-center w-full h-max left-0 bottom-0 right-0 top-0 p-[31px] m-auto sm:p-5 bg-white-A700 shadow-xs absolute rounded-[46px]">
                                  <Img
                                    src="images/img_format_wordmark_black_900_02_29x130.svg"
                                    alt="formatwordmark"
                                    className="h-[29px]"
                                  />
                                </div>
                              </div>

                              <div className="h-[92px] w-full md:h-auto bg-white-A700 shadow-xs cursor-pointer relative rounded-[46px] hover:shadow-xs">
                                <div className="flex justify-center w-full h-max left-0 bottom-0 right-0 top-0 p-[31px] m-auto sm:p-5 bg-white-A700 shadow-xs absolute rounded-[46px]">
                                  <Img
                                    src="images/img_format_wordmark_deep_orange_a400_01.svg"
                                    alt="formatwordmark"
                                    className="h-[29px]"
                                  />
                                </div>
                              </div>

                              <div className="h-[92px] w-full md:h-auto bg-white-A700 shadow-xs cursor-pointer relative rounded-[46px] hover:shadow-xs">
                                <div className="flex justify-center w-full h-max left-0 bottom-0 right-0 top-0 p-[31px] m-auto sm:p-5 bg-white-A700 shadow-xs absolute rounded-[46px]">
                                  <Img
                                    src="images/img_property_1_wordmark.svg"
                                    alt="propertyone"
                                    className="h-[29px]"
                                  />
                                </div>
                              </div>
                              <div className="h-[93px] w-full md:h-auto bg-white-A700 cursor-pointer relative rounded-[46px] hover:shadow-xs">
                                <div className="flex justify-center w-full h-max left-0 bottom-0 right-0 top-0 p-[30px] m-auto sm:p-5 bg-white-A700 absolute rounded-[46px]">
                                  <Img
                                    src="images/img_format_wordmark_black_900_02_31x130.svg"
                                    alt="formatwordmark"
                                    className="h-[31px]"
                                  />
                                </div>
                              </div>
                              <div className="h-[88px] w-full md:h-auto bg-white-A700 shadow-xs cursor-pointer relative rounded-[44px] hover:shadow-xs">
                                <div className="flex justify-center w-full h-max left-0 bottom-0 right-0 top-0 p-[31px] m-auto sm:p-5 bg-white-A700 shadow-xs absolute rounded-[44px]">
                                  <Img
                                    src="images/img_format_frame.svg"
                                    alt="image_one"
                                    className="h-[25px]"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="h-[92px] w-[15%] md:w-full md:h-auto bg-white-A700 shadow-xs relative rounded-[46px]">
                              <div className="flex justify-center items-center w-full h-max gap-[5px] left-0 bottom-0 right-0 top-0 p-[30px] m-auto sm:p-5 bg-white-A700 shadow-xs absolute rounded-[46px]">
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



              {/* our missition */}
              <div
                className="sdfg"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  marginTop: "",
                }}
              >
                <div
                  className="w-full p-3.5"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="flex md:flex-col justify-center items-center w-full mx-auto my-20 max-w-[1372px]">
                    <div className="flex flex-col items-start w-[45%] md:w-full gap-5">
                      <Heading
                        size="10xl"
                        as="h1"
                        className="!text-gray-900 pl-[15%] !font-nunito"
                      >
                        Our Mission
                      </Heading>
                      <Text
                        size="11xl"
                        as="p"
                        className="w-[100%] md:w-[80%] pl-[15%] md:ml-0 !text-gray-600_03 !font-nunito leading-[157.4%]"
                      >
                        <>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          Pharetra
                          <br />
                          Ld eu aliquet diam lorem viverra at justo. Nulla odio
                          nequefjf gravida in pharetra egestas. Ac id sagittis
                          at morbi interdum nibh diam sagittis et.
                          <br />
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          Pharetra
                          <br /> id eu aliquet diam lorem viverra at justo.
                          Nulla odio nequesg gravida in pharetra egestas.
                        </>
                      </Text>
                    </div>
                    <div class="md:self-stretch md:ml-0 flex-1 flex flex-col items-center ml-[-4px] md:ml-0">
                      <div class="bg-gray-400_02 w-full md:w-[70%] sm::w-[70%] rounded-[60px]">
                        <Img
                          src="images/img_photo_378x760.png"
                          alt="photo_one"
                          class="h-[378px] w-full md:w-full h-auto object-cover rounded-[60px]"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              {/* our value */}

              <Helmet>
                <title>Contextify</title>
                <meta
                  name="description"
                  content="Web site created using create-react-app"
                />
              </Helmet>

              <div
                className="flex h-[10vh] flex-col items-center w-full gap-6 md:h-[130vh]   pb-[98px] gap-[39px] md:pb-5"
                
              >
                <div className="flex flex-col items-center w-[47%] md:w-full gap-[31px] md:p-5">
                  <Button
                    color="deep_purple_50_02"
                    size="11xl"
                    className="sm:px-5 !text-purple-900 font-nunito font-bold min-w-[164px] rounded-[37px]"
                  >
                    Our values
                  </Button>
                  <Text
                    size="20xl"
                    as="p"
                    className="!text-gray-900 text-center leading-[110%]"
                  >
                    <>
                      The story and values behind
                      <br /> our company
                    </>
                  </Text>
                </div>
                  <div className="stretch1111  flex  flex-col items-center gap-6  md:h-[100vh]">
                    <div className="justify-center gap-[52px] grid-cols-[repeat(auto-fill,_minmax(620px_,_1fr))] grid :w-[70%]">

                      <div className="flex justify-center w-full p-[27px] sm:p-5 bg-gray-50_01 rounded-[30px] flex justify-center w-full p-5 bg-gray-50_01 rounded-lg">
                        <div className="flex md:flex-col justify-between items-start w-full gap-5 my-3">
                          <div class="w-[21%] md:w-full p-[39px] md:ml-[20%] sm:ml-[40%] sm:w-[20%] sm:p-5 bg-purple-900 rounded-[23px] md:w-1/5 md:w-[50%] md:ml-[50%] flex justify-center items-center p-5 bg-purple-900 rounded-md">

                            <Img
                              src="images/img_icon_white_a700.svg"
                              alt="image"
                              className="h-[71px] w-full md:h-auto my-[5px]  md:h-16   h-auto my-2"
                            />
                          </div>
                          <div className="flex flex-col items-start w-[73%] md:w-full gap-1.5">
                            <Heading
                              size="7xl"
                              as="h1"
                              className="!text-gray-900 !font-nunito w-[100%] md:w-[80%] pl-[15%]"
                            >
                              Innovation
                            </Heading>
                            <Text
                              size="11xl"
                              as="p"
                              className="!text-gray-600_03 leading-[157.4%] w-[100%] md:w-[80%] pl-[15%] sm:ml-[10%] sm:w-[80%]  "
                            >
                              Long established fact that a readeed to will be
                              distracted by the readable content of a page when
                              looking at its layout
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center w-full p-[27px] sm:p-5 bg-gray-50_01 rounded-[30px]flex justify-center w-full p-[27px] sm:p-5 bg-gray-50_01 rounded-[30px] flex justify-center w-full p-5 bg-gray-50_01 rounded-lg">
                        <div className="flex md:flex-col justify-between items-start w-full gap-5 my-3">
                          <div className="w-[21%] md:w-full p-[35px] md:ml-[20%] sm:ml-[40%] sm:w-[20%] sm:p-5 bg-purple-900 rounded-[23px] w-[21%] md:w-full p-[39px]  sm:ml-[50%] sm:p-5 bg-purple-900 rounded-[23px] md:w-1/5 md:w-[50%] md:ml-[50%] flex justify-center items-center p-5 bg-purple-900 rounded-md">
                            <Img
                              src="images/img_icon_white_a700_64x58.svg"
                              alt="icon_one"
                              className="h-[64px] w-full  md:h-auto my-[5px]  md:h-16   h-auto my-2"
                            />
                          </div>
                          <div className="flex flex-col items-start w-[73%] md:w-full gap-1.5">
                            <Heading
                              size="7xl"
                              as="h2"
                              className="!text-gray-900 !font-nunito w-[100%] md:w-[80%] pl-[15%]"
                            >
                              Team work
                            </Heading>
                            <Text
                              size="11xl"
                              as="p"
                              className="!text-gray-600_03 !font-nunito leading-[157.4%]  w-[100%] md:w-[80%] pl-[15%]"
                            >
                              Long established fact that a readeed to will be
                              distracted by the readable content of a page when
                              looking at its layout
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center w-full p-[27px] sm:p-5 bg-gray-50_01 rounded-[30px]flex justify-center w-full p-[27px] sm:p-5 bg-gray-50_01 rounded-[30px] flex justify-center w-full p-5 bg-gray-50_01 rounded-lg">
                        <div className="flex md:flex-col justify-between items-start w-full gap-5 my-3">
                          <div className="w-[21%] md:w-full p-[35px] sm:ml-[40%] sm:w-[20%]  md:ml-[20%] sm:p-5 bg-purple-900 rounded-[23px] w-[21%] md:w-full p-[39px]  sm:ml-[50%] sm:p-5 bg-purple-900 rounded-[23px] md:w-1/5 md:w-[50%] md:ml-[50%] flex justify-center items-center p-5 bg-purple-900 rounded-md">
                            <Img
                              src="images/img_icon_white_a700_62x44.svg"
                              alt="icon_one"
                              className="h-[62px] w-full md:h-auto mt-[7px] mb-1.5 md:h-auto my-[5px]  md:h-16   h-auto my-2"
                            />
                          </div>
                          <div className="flex flex-col items-start w-[73%] md:w-full gap-1.5">
                            <Heading
                              size="7xl"
                              as="h3"
                              className="!text-gray-900 !font-nunito w-[100%] md:w-[80%] md:pl-[15%]"
                            >
                              Excellence
                            </Heading>
                            <Text
                              size="11xl"
                              as="p"
                              className="!text-gray-600_03 !font-nunito leading-[157.4%]  w-[100%] md:w-[80%] pl-[15%]"
                            >
                              Long established fact that a readeed to will be
                              distracted by the readable content of a page when
                              looking at its layout
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center w-full p-[27px] sm:p-5 bg-gray-50_01 rounded-[30px]flex justify-center w-full p-[27px] sm:p-5 bg-gray-50_01 rounded-[30px] flex justify-center w-full p-5 bg-gray-50_01 rounded-lg">
                        <div className="flex md:flex-col justify-between items-center w-full gap-5 my-3">
                          <div className="w-[21%] md:w-full p-[35px] sm:ml-[0%] sm:w-[20%] md:ml-[-10%] sm:p-5 bg-purple-900 rounded-[23px] w-[21%] md:w-full p-[39px]  sm:ml-[50%] sm:p-5 bg-purple-900 rounded-[23px] md:w-1/5 md:w-[50%] md:ml-[50%] flex justify-center items-center p-5 bg-purple-900 rounded-md">
                            <Img
                              src="images/img_icon_indigo_a100.svg"
                              alt="icon_one"
                              className="h-[51px] w-full md:h-auto my-3.5 md:h-auto my-[5px]  md:h-16   h-auto my-2"
                            />
                          </div>
                          <div className="flex flex-col items-start w-[73%] md:w-full gap-[3px]">
                            <Heading
                              size="7xl"
                              as="h4"
                              className="!text-gray-900 !font-nunito w-[100%] md:w-[80%] pl-[15%]"
                            >
                              Responsibility
                            </Heading>
                            <Text
                              size="11xl"
                              as="p"
                              className="!text-gray-600_03 !font-nunito leading-[157.4%]  w-[100%] md:w-[80%] pl-[15%]"
                            >
                              Long established fact that a readeed to will be
                              distracted by the readable content of a page when
                              looking at its layout
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  {/* </div> */}
                </div>
              </div>



              {/* Team */}
              <div className="Team">
                <Button
                  color="deep_purple_50_02"
                  size="11xl"
                  className="lolo  mt-[811px] sm:px-5 font-nunito font-bold z-[1] min-w-[155px] rounded-[37px]"
                >
                  Our Team
                </Button>
                <div className="self-stretch h-[1754px] md:h-auto mt-[-2px] relative">
                  <div className="flex flex-col items-start md:flex-row md:items-center flex flex-col items-start w-[38%] bottom-[-0.08px] right-[0.00px] m-auto absolute">
                    {/* circule */}
                    <div
                      className="h-[273px] w-[273px] ml-[33px] md:ml-0 z-[1] bg-purple-400 shadow-7xl rounded-[136px]"
                      style={{
                        zIndex: "0",
                        overflow: "hidden",
                        margin: "-3px -8%",
                      }}
                    />
                    <Img
                      src="images/img_group_1000003855.png"
                      alt="image_four"
                      className="h-[1308px] w-full md:h-auto mt-[-150px] object-cover"
                    />
                  </div>
                  <div className="flex md:flex-col items-start w-[79%]">
                    <Img
                      src="images/img_vector_purple_900_1078x472.png"
                      alt="vector"
                      className="w-[37%] md:w-full object-cover rounded-[148px]"
                      style={{ margin: "-26% -10%" }}
                    />
                    <Text
                      size="20xl"
                      as="p"
                      className="mt-[33px] ml-[150px] md:p-5 md:ml-0 !text-gray-900 text-center"
                    >
                      Meet the team behind Contextify!
                    </Text>
                  </div>
                  <Text
                    size="20xl"
                    as="p"
                    className="w-[22%] bottom-[43%] left-[9.00px] m-auto !text-gray-900 text-center leading-[110%] absolute md:ml-[15%] md:w-[50px]"
                  >
                    The Power Trio{" "}
                  </Text>
                  <Text
                    size="11xl"
                    as="p"
                    className="w-[64%] bottom-[34%] right-[2%] m-auto !text-gray-600_03 leading-[30px] absolute   md:mr-[15%]  md:w-[50%]"
                  >
                    <span className="text-black-900_02 text-lg">1:&nbsp;</span>
                    <span className="text-gray-600_03 text-lg">
                      Marie Curie&nbsp;
                    </span>
                    <span className="text-black-900_02 text-lg ">
                      <>
                        is one of our talented and experienced makeup artists. She
                        has been working in the beauty industry for over 10 years
                        and has a passion for creating stunning looks for
                        different occasions. <br />
                        <br />
                        2:&nbsp;
                      </>
                    </span>
                    <span className="text-gray-600_03 text-lg">Odelia Chan</span>
                    <span className="text-black-900_02 text-lg">&nbsp;</span>
                    <span className="text-black-900_02 text-lg">
                      <>
                        is our amazing and creative content writer. She has a
                        degree in journalism and a flair for writing engaging and
                        informative articles. She covers topics such as makeup
                        trends, product reviews, celebrity news, and more. She
                        also edits and proofreads our content to ensure quality
                        and accuracy. <br />
                        <br />
                        3:&nbsp;
                      </>
                    </span>
                    <span className="text-gray-600_03 text-lg">Maria Garcia</span>
                    <span className="text-black-900_02 text-lg ">
                      &nbsp;is our wonderful and friendly community manager. She
                      has a background in social media and customer service and a
                      love for makeup and beauty.&nbsp;
                    </span>
                  </Text>
                  <div className="h-[519px] w-full bottom-[-0.08px] right-0 left-0 m-auto bg-gray-50_01 absolute">
                    <div className="flex md:flex-col justify-end items-center w-[62%] bottom-[0.00px] right-[0.00px] m-auto absolute md:relative">
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
                        alt="polygon_one"
                        className="w-[64%] md:w-full ml-[-56px] md:ml-0 object-cover rounded-[69px]"
                      />
                    </div>
                    <div
                      className="flex md:flex-col justify-center w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute md:relative"
                      style={{ overflow: "hidden" }}
                    >
                      <div className="flex md:flex-col justify-center items-start md:self-stretch md:p-5 flex-1">
                        <Img
                          src="images/img_polygon_deep_purple_a200.png"
                          alt="polygon_three"
                          className="w-[47%] md:w-full z-[1] object-cover rounded-[69px]"
                          style={{}}
                        />
                        <Text
                          size="19xl"
                          as="p"
                          className="mt-[138px] ml-[-3px] md:ml-0 capitalize text-center"
                          style={{ backgroundColor: "white", width: "100%" }}
                        >
                          try Contextify for free
                        </Text>
                      </div>
                      <Img
                        src="images/img_polygon_deep_orange_300.png"
                        alt="polygon_five"
                        className="w-[32%] md:w-full ml-[-4px] md:ml-0 object-cover rounded-[69px]"
                      />
                    </div>
                    <div className="flex md:flex-col items-center w-[64%] left-[0.00px] top-[0.00px] m-auto absolute md:relative">
                      <Img
                        src="images/img_polygon_purple_a100.png"
                        alt="polygon_seven"
                        className="w-[60%] md:w-full object-cover rounded-[69px]"
                        style={{ margin: "-10% -50%", innerHeight: "20" }}
                      />
                    </div>
                    <Text
                      size="8xl"
                      as="p"
                      className="w-[88%] md:w-full ml-[-87px] md:p-5 md:ml-0 capitalize text-center leading-8"
                      style={{ overflow: "hidden", backgroundColor: "white" }}
                    >
                      Contexttify is a hub puts information into context at the
                      click of a button
                    </Text>
                    <div className="h-[50px] w-[18%] left-[40%] top-[27%] m-auto bg-orange-50_01 absolute" />
                  </div>
                  <div className="w-[22%] right-[20%] top-[21%] m-auto absolute">
                    <div className="h-[250px] w-[250px] md:h-auto relative">
                      <Img
                        src="images/img_user_1_1.png"
                        alt="user1one_one"
                        className="h-[250px] w-[250px] rounded-[50%]"
                      />
                      <Button
                        color="purple_400_a7"
                        size="md"
                        shape="round"
                        className="left-[0.00px] bottom-0 top-0 my-auto font-inter font-light opacity-0.85 min-w-[112px] absolute"
                      >
                        Odelia Chan
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center w-[20%] gap-5 top-[12%] right-0 left-0 m-auto absolute">
                    <div className="w-[89%] md:w-full pb-[41px] md:pb-5 md:p-5">
                      <div className="h-[250px] w-[250px] md:h-auto relative">
                        <Img
                          src="images/img_user_1_1_250x250.png"
                          alt="user1one_three"
                          className="h-[250px] w-[250px] rounded-[50%]"
                        />
                        <Text
                          as="p"
                          className="flex justify-center items-center h-max pl-2.5 pr-[5px] left-[0.00px] bottom-0 top-0 py-1 my-auto !text-gray-100_02 !font-inter text-center !font-light opacity-0.85 bg-purple-400_a7 absolute rounded-[5px]"
                        >
                          Marie Curie
                        </Text>
                      </div>
                    </div>
                    <div className="w-[89%] md:w-full pb-[41px] md:pb-5 md:p-5">
                      <div className="h-[250px] w-[250px] md:h-auto relative">
                        <Img
                          src="images/img_user_1_1_1.png"
                          alt="user1one_five"
                          className="h-[250px] w-[250px] rounded-[50%]"
                        />
                        <Button
                          color="purple_400_a7"
                          size="md"
                          shape="round"
                          className="left-[0.00px] bottom-0 top-0 my-auto !text-blue_gray-50 font-inter font-light opacity-0.85 min-w-[125px] absolute"
                        >
                          Paula Roberta
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
              <Text className="self-start mt-[25px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
