import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading } from "../../components";
import Header from "../../components/Header";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Contextify</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center w-full gap-[258px] py-8 md:gap-[193px] sm:gap-[129px] sm:py-5 bg-gray-100">
        <Header className="w-[86%] md:w-full md:p-5" />
        <div className="self-stretch">
          <div className="flex flex-col items-center">
            <Text size="22xl" as="p" className="!text-gray-900">
              About Contextify
            </Text>
            <Text size="13xl" as="p" className="mt-3.5 !text-gray-600_03 text-center">
              Discover the Power of Contextify!
            </Text>
            <div className="hjsadkj" style={{
              display: "flex",
              width: "100%",
              overflow: "hidden",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
              margin: "50px 0px"
            }}>
              <Img
                src="images/img_photo.png"
                alt="photo_one"
                className="h-[583px] w-full md:h-auto object-cover rounded-[50px]"
              />
              <Img
                src="images/img_photo_583x476.png"
                alt="photo_three"
                className="h-[583px] w-full md:h-auto object-cover rounded-[50px]"
              />
            </div>
            <div className="flex flex-col  ">

              <div className="self-stretch h-[1316px] md:h-auto relative">
                <div className="flex flex-col w-full">
                  <div className="flex ml-[5px] md:ml-0 z-[1]">
                    <Heading size="10xl" as="h1" className="!text-gray-900 !font-nunito text-center">
                      What we do
                    </Heading>
                  </div>
                  <div className="flex md:flex-col items-start mt-[-60px] overflow-auto">
                    <div className="flex md:flex-col items-start w-[92%] md:w-full md:p-5">
                      <Img
                        src="images/img_group_19834.png"
                        alt="image_one"
                        className="w-[38%] md:w-full object-cover"
                      />
                      <Text
                        size="11xl"
                        as="p"
                        className="w-[62%] md:w-full ml-[-57px] md:ml-0 !text-gray-600_03 !font-nunito leading-[157.4%]"
                      >
                        <>
                          It is a long established fact that a reader will be distracted by the readable content of a
                          page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                          normal distribution of letters, as opposed to using.
                          <br />
                          <br />
                          Content here&#39;, making it look like readable English. Many desktop publishing packages and
                          web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem
                          ipsum&#39; will uncover many web sites still in their infancy.{" "}
                        </>
                      </Text>
                    </div>
                    <div className="flex justify-center items-center w-[14%] md:w-full mt-[487px] ml-[-84px] gap-[5px] p-[30px] md:p-5 md:ml-0 bg-white-A700 shadow-xs rounded-[46px]">
                      <Img
                        src="images/img_vector_pink_a200.svg"
                        alt="vector_one"
                        className="self-end h-[26px] w-[27px]"
                      />
                      <Img src="images/img_vector_black_900_02_29x97.svg" alt="vector_three" className="h-[29px]" />
                    </div>
                  </div>
                </div>
                <div className="w-[16%] left-[10%] top-[38%] m-auto absolute">
                  <div className="flex justify-center p-[31px] sm:p-5 bg-white-A700 rounded-[46px]">
                    <Img
                      src="images/img_format_wordmark_black_900_02_29x130.svg"
                      alt="formatwordmark"
                      className="h-[29px]"
                    />
                  </div>
                  <div className="flex justify-center mt-[-92px] p-[31px] sm:p-5 bg-white-A700 rounded-[46px]">
                    <Img
                      src="images/img_format_wordmark_black_900_02_29x130.svg"
                      alt="formatwordmark"
                      className="h-[29px]"
                    />
                  </div>
                </div>
                <div className="w-[12%] left-[0.00px] top-[37%] m-auto absolute">
                  <div className="flex bg-white-A700 shadow-xs rounded-[47px]">
                    <Img
                      src="images/img_format_wordmark_black_900_02_32x130.svg"
                      alt="formatwordmark"
                      className="h-[32px] mt-[29px] mb-[30px]"
                    />
                  </div>
                </div>
                <div className="flex sm:flex-col items-center w-[28%] gap-[21px] left-[4%] top-[28%] m-auto absolute sm:relative">
                  <div className="sm:self-stretch h-[101px] md:h-auto sm:w-full sm:p-5 bg-white-A700 shadow-xs flex-1 relative rounded-[50px] sm:flex-none">
                    <div className="flex justify-center items-center w-full h-max gap-[7px] left-0 bottom-0 right-0 top-0 p-[31px] m-auto sm:p-5 bg-white-A700 shadow-xs absolute rounded-[50px]">
                      <Img src="images/img_vector_black_900_02.svg" alt="vector_nine" className="h-[38px] w-[38px]" />
                      <Img
                        src="images/img_vector_black_900_02_33x82.svg"
                        alt="vector_eleven"
                        className="self-end h-[33px]"
                      />
                    </div>
                  </div>
                  <div className="h-[92px] w-[41%] md:h-auto sm:w-full sm:p-5 bg-white-A700 shadow-xs relative rounded-[46px]">
                    <div className="flex justify-center w-full h-max left-0 bottom-0 right-0 top-0 p-[31px] m-auto sm:p-5 bg-white-A700 shadow-xs absolute rounded-[46px]">
                      <Img src="images/img_format_wordmark.svg" alt="formatwordmark" className="h-[29px]" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start w-[46%] right-[19%] top-[20%] m-auto absolute">
                  <div className="h-[50px] w-[40%] ml-[129px] md:ml-0 bg-orange-50_01" />
                  <Text size="19xl" as="p" className="capitalize">
                    Our Trusted Partners
                  </Text>
                </div>
                <div className="h-[92px] w-[20%] md:h-auto left-[28%] top-[38%] m-auto bg-white-A700 shadow-xs absolute rounded-[46px]">
                  <Img
                    src="images/img_format_wordmark_deep_orange_a400_01.svg"
                    alt="formatwordmark"
                    className="h-[29px]  mt-[]"
                  />

                </div>
                <div className="flex md:flex-col justify-end items-center w-[53%] gap-[21px] right-[10%] top-[38%] m-auto absolute md:relative">
                  <div className="h-[92px] w-full md:h-auto md:p-5 bg-white-A700 shadow-xs relative rounded-[46px]">
                    <div className="flex justify-center w-full h-max left-0 bottom-0 right-0 top-0 p-[31px] m-auto sm:p-5 bg-white-A700 shadow-xs absolute rounded-[46px]">
                      <Img src="images/img_property_1_wordmark.svg" alt="propertyone" className="h-[29px]" />
                    </div>
                  </div>
                  <div className="h-[93px] w-full md:h-auto md:p-5 bg-white-A700 relative rounded-[46px]">

                    <div className="flex justify-center w-full h-max left-0 bottom-0 right-0 top-0 p-[30px] m-auto sm:p-5 bg-white-A700 absolute rounded-[46px]">
                      <Img
                        src="images/img_format_wordmark_black_900_02_31x130.svg"
                        alt="formatwordmark"
                        className="h-[31px]"
                      />
                    </div>
                  </div>
                  <div className="h-[88px] w-full md:h-auto md:p-5 bg-white-A700 shadow-xs relative rounded-[44px]">
                    <div className="flex justify-center w-full h-max left-0 bottom-0 right-0 top-0 p-[31px] m-auto sm:p-5 bg-white-A700 shadow-xs absolute rounded-[44px]">
                      <Img src="images/img_format_frame.svg" alt="image_three" className="h-[25px]" />
                    </div>
                  </div>
                </div>

                <div className="flex md:flex-col justify-end items-center w-[51%] gap-[21px] right-[28.00px] top-[28%] m-auto absolute md:relative">
                  <div className="h-[101px] w-[36%] md:w-full md:h-auto md:p-5 bg-white-A700 shadow-5xl relative rounded-[50px]">

                    <div className="flex justify-center items-start w-full h-max gap-[15px] left-0 bottom-0 right-0 top-0 p-[30px] m-auto sm:p-5 bg-white-A700 shadow-5xl absolute rounded-[50px]">
                      <Img src="images/img_vector_black_900_02_25x112.svg" alt="vector" className="h-[25px] mt-1" />
                    </div>
                  </div>
                  <div className="md:self-stretch h-[81px] md:w-full md:h-auto md:p-5 bg-white-A700 flex-1 relative rounded-[40px] md:flex-none">
                    <div className="flex justify-center w-full h-max left-0 bottom-0 right-0 top-0 p-[30px] m-auto sm:p-5 bg-white-A700 absolute rounded-[40px]">
                      <Img
                        src="images/img_format_wordmark_light_blue_500.svg"
                        alt="formatwordmark"
                        className="h-[19px]"
                      />
                    </div>
                  </div>
                  <div className="md:self-stretch h-[94px] md:w-full md:h-auto md:p-5 bg-white-A700 shadow-xs flex-1 relative rounded-[47px] md:flex-none">
                    <div className="flex justify-center w-full h-max left-0 bottom-0 right-0 top-0 p-[30px] m-auto sm:p-5 bg-white-A700 shadow-xs absolute rounded-[47px]">
                      <Img
                        src="images/img_format_wordmark_black_900_02.svg"
                        alt="formatwordmark"
                        className="h-[32px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-[101px] w-[22%] md:h-auto left-[32%] top-[28%] m-auto bg-white-A700 absolute rounded-[50px]">
                  <div className="flex justify-center w-full h-max left-0 bottom-0 right-0 top-0 p-[31px] m-auto sm:p-5 bg-white-A700 absolute rounded-[50px]">
                    <Img src="images/img_format_wordmark_green_600_01.svg" alt="formatwordmark" className="h-[38px]" />
                  </div>
                </div>
                <div className="w-full p-3.5" style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"-50%"}}>
                  <div className="flex md:flex-col justify-center items-center w-full mx-auto my-20 max-w-[1372px]">
                    <div className="flex flex-col items-start w-[45%] md:w-full gap-5">
                      <Heading size="10xl" as="h1" className="!text-gray-900 !font-nunito">
                        Our Mission
                      </Heading>
                      <Text size="11xl" as="p" className="!text-gray-600_03 !font-nunito leading-[157.4%]">
                        <>
                          Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra
                          <br />
                          Ld eu aliquet diam lorem viverra at justo. Nulla odio nequefjf gravida in pharetra egestas. Ac id
                          sagittis at morbi interdum nibh diam sagittis et.
                          <br />
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra
                          <br /> id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.
                        </>
                      </Text>
                    </div>
                    <div className="md:self-stretch ml-[-4px] md:ml-0 flex-1">
                      <div className="bg-gray-400_02 rounded-[60px]">
                        <Img
                          src="images/img_photo_378x760.png"
                          alt="photo_one"
                          className="h-[378px] w-full md:h-auto object-cover rounded-[60px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                color="deep_purple_50_02"
                size="11xl"
                className="mt-[811px] sm:px-5 font-nunito font-bold z-[1] min-w-[155px] rounded-[37px]"
              >
                Our Team
              </Button>
              <div className="self-stretch h-[1754px] md:h-auto mt-[-2px] relative">
                <div className="flex flex-col items-start w-[38%] bottom-[-0.08px] right-[0.00px] m-auto absolute">
                  <div className="h-[273px] w-[273px] ml-[33px] md:ml-0 z-[1] bg-purple-400 shadow-7xl rounded-[136px]" />
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
                  />
                  <Text size="20xl" as="p" className="mt-[33px] ml-[-124px] md:p-5 md:ml-0 !text-gray-900 text-center">
                    Meet the team behind Contextify!
                  </Text>
                </div>
                <Text
                  size="20xl"
                  as="p"
                  className="w-[22%] bottom-[43%] left-[9.00px] m-auto !text-gray-900 text-center leading-[110%] absolute"
                >
                  The Power Trio{" "}
                </Text>
                <Text
                  size="11xl"
                  as="p"
                  className="w-[64%] bottom-[34%] right-[2%] m-auto !text-gray-600_03 leading-[30px] absolute"
                >
                  <span className="text-black-900_02 text-lg">1:&nbsp;</span>
                  <span className="text-gray-600_03 text-lg">Marie Curie&nbsp;</span>
                  <span className="text-black-900_02 text-lg">
                    <>
                      is one of our talented and experienced makeup artists. She has been working in the beauty industry
                      for over 10 years and has a passion for creating stunning looks for different occasions. <br />
                      <br />
                      2:&nbsp;
                    </>
                  </span>
                  <span className="text-gray-600_03 text-lg">Odelia Chan</span>
                  <span className="text-black-900_02 text-lg">&nbsp;</span>
                  <span className="text-black-900_02 text-lg">
                    <>
                      is our amazing and creative content writer. She has a degree in journalism and a flair for writing
                      engaging and informative articles. She covers topics such as makeup trends, product reviews,
                      celebrity news, and more. She also edits and proofreads our content to ensure quality and
                      accuracy. <br />
                      <br />
                      3:&nbsp;
                    </>
                  </span>
                  <span className="text-gray-600_03 text-lg">Maria Garcia</span>
                  <span className="text-black-900_02 text-lg">
                    &nbsp;is our wonderful and friendly community manager. She has a background in social media and
                    customer service and a love for makeup and beauty.&nbsp;
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
                  <div className="flex md:flex-col justify-center w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute md:relative">
                    <div className="flex md:flex-col justify-center items-start md:self-stretch md:p-5 flex-1">
                      <Img
                        src="images/img_polygon_deep_purple_a200.png"
                        alt="polygon_three"
                        className="w-[47%] md:w-full z-[1] object-cover rounded-[69px]"
                      />
                      <Text size="19xl" as="p" className="mt-[138px] ml-[-3px] md:ml-0 capitalize text-center">
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
                    />
                    <Text
                      size="8xl"
                      as="p"
                      className="w-[38%] md:w-full ml-[-87px] md:p-5 md:ml-0 capitalize text-center leading-8"
                    >
                      Contexttify is a hub puts information into context at the click of a button
                    </Text>
                  </div>
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
              <div className="w-full mt-24 mx-auto md:p-5 max-w-[1240px]">
                <div className="flex md:flex-col justify-between items-start gap-5">
                  <div className="flex justify-between items-start w-[29%] md:w-full gap-5">
                    <div className="flex justify-center w-[56%]">
                      <div className="flex flex-col items-start w-full gap-[25px]">
                        <div className="flex w-[91%] md:w-full">
                          <div className="flex items-center w-full">
                            <Img src="images/img_frame_purple_900.svg" alt="image_five" className="h-[39px]" />
                            <Text
                              size="14xl"
                              as="p"
                              className="self-end ml-[-71px] !text-purple-900 !font-inter capitalize"
                            >
                              Contextify
                            </Text>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Img
                            src="images/img_frame_purple_900_24x24.svg"
                            alt="image_six"
                            className="h-[24px] w-[24px]"
                          />
                          <Text as="p" className="self-end capitalize">
                            help@contextify.com
                          </Text>
                        </div>
                        <div className="flex items-center gap-2">
                          <Img src="images/img_frame_24x24.svg" alt="image_seven" className="h-[24px] w-[24px]" />
                          <Text as="p" className="self-start capitalize">
                            +1 234 456 678 89
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[22px]">
                      <Text size="16xl" as="p" className="capitalize text-center">
                        links
                      </Text>
                      <Text as="p" className="capitalize">
                        home
                      </Text>
                      <Text as="p" className="capitalize">
                        about us
                      </Text>
                      <Text as="p" className="capitalize">
                        bookings
                      </Text>
                      <Text as="p" className="capitalize">
                        blog
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start mt-1 gap-[21px]">
                    <Text size="16xl" as="p" className="capitalize">
                      legal
                    </Text>
                    <Text as="p" className="capitalize">
                      terms of use
                    </Text>
                    <a href="#">
                      <Text as="p" className="capitalize">
                        privacy policy
                      </Text>
                    </a>
                    <Text as="p" className="capitalize">
                      cookie policy
                    </Text>
                  </div>
                  <div className="flex flex-col items-start gap-[21px]">
                    <Text size="16xl" as="p" className="capitalize">
                      product
                    </Text>
                    <Text as="p" className="capitalize">
                      take tour
                    </Text>
                    <Text as="p" className="capitalize">
                      live chat
                    </Text>
                    <Text as="p" className="capitalize">
                      reveiws
                    </Text>
                  </div>
                  <div className="flex flex-col items-start w-[27%] md:w-full gap-5">
                    <Text size="16xl" as="p" className="capitalize">
                      Newsletter
                    </Text>
                    <Text as="p" className="capitalize">
                      Stay up to date
                    </Text>
                    <div className="self-stretch">
                      <div className="flex justify-between items-start gap-5 p-2.5 border-gray-300 border-2 border-solid bg-white-A700 rounded-[40px]">
                        <Text as="p" className="mt-[18px] ml-[13px] md:ml-0 !text-gray-500_05">
                          Your email{" "}
                        </Text>
                        <div className="flex">
                          <Button size="9xl" className="sm:px-5 capitalize min-w-[160px] rounded-[30px]">
                            Subscribe
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Text className="self-start mt-[61px]" />
            </div>
          </div>
        </div>
      </div >
    </>
  );
}
