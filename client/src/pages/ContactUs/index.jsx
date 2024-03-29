import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img, Heading, Input } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactUsPage() {


  // const { formData, setFormData } = useState({
  //   fullname: "",
  //   email: "",
  //   company: "",
  //   subject: "",
  //   message: ""
  // })

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  // const handleDivClick = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const respose = await fetch('http://localhost:5173/submit-form', {
  //       method: 'POST',
  //       headter: {
  //         'Contect-type': 'application/json'
  //       },
  //       body: JSON.stringify(formData)
  //     });
  //     if (respose.pf) {
  //       console.log('Form Submited successfull !');
  //       console.log('Submitted data:', formData);
  //       setFormData({
  //         name: '',
  //         email: '',
  //         company: '',
  //         subject: '',
  //         message: '',
  //       })
  //     } else {
  //       console.log('Something Wrong!');
  //     }
  //   } catch (error) {
  //     console.log('error submition form', error);
  //   }
  // }




  // <-------------------------------- ToogleFAQ--------------------------------------------->
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const toggleFAQ1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleFAQ2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleFAQ3 = () => {
    setIsOpen3(!isOpen3);
  };

  const toggleFAQ4 = () => {
    setIsOpen4(!isOpen4);
  };

  const toggleFAQ5 = () => {
    setIsOpen5(!isOpen5);
  };



  return (
    <>
      <Helmet>
        <title>Contextify</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center w-full pt-8 gap-[342px] md:gap-64 sm:gap-[171px] sm:pt-5 bg-gray-100" style={{ overflow: "hidden", flexWrap: "wrap" }}>
        <Header className="w-[86%] md:w-full md:p-5" />
        <div className="self-stretch" style={{ marginTop: "-10%" }}>
          <div className="flex flex-col items-center">
            <Text size="22xl" as="p" className="!text-gray-900 text-center">
              Get in touch today!
            </Text>
            <div className="flex md:flex-col w-full mt-[34px] gap-[27px] mx-auto md:p-5 max-w-[1193px]">
              <div className="flex w-full p-[34px] sm:p-5 border-gray-200_01 border border-solid bg-white-A700 shadow-8xl rounded-[40px]">
                <div className="flex sm:flex-col justify-between items-center w-full ml-1 gap-5 md:ml-0">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center justify-center p-[18px] bg-deep_purple-A100_01 rounded-[20px]">
                      <Img
                        src="images/img_icon.svg"
                        alt="mail_us_one"
                        className="h-[38px] mt-[5px] mb-1"
                      />
                    </div>
                    <Text
                      size="11xl"
                      as="p"
                      className="!text-blue_gray-900_02 capitalize"
                    >
                      Mail Us
                    </Text>
                  </div>
                  <a href="" className="w-[36%] sm:w-full leading-[157.4%]">
                    <Text
                      size="11xl"
                      as="p"
                      className="!text-gray-600_03 lowercase text-right"
                    >
                      saasup@gmail.co
                    </Text>
                  </a>
                </div>
              </div>
              <div className="flex w-full p-[34px] sm:p-5 border-gray-200_01 border border-solid bg-white-A700 shadow-8xl rounded-[40px]">
                <div className="flex sm:flex-col justify-between items-center w-full ml-1 gap-5 md:ml-0">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center justify-center p-[21px] sm:p-5 bg-pink-A100 rounded-[20px]">
                      <Img
                        src="images/img_iocn.svg"
                        alt="iocn_one"
                        className="h-[39px] w-[40px]"
                      />
                    </div>
                    <Heading
                      size="4xl"
                      as="h1"
                      className="!text-blue_gray-900_02 !font-nunito capitalize"
                    >
                      Call Us
                    </Heading>
                  </div>
                  <a href="">
                    <Text
                      size="11xl"
                      as="p"
                      className="!text-gray-600_03 !font-nunito lowercase text-right"
                    >
                      +001 6547 6589
                    </Text>
                  </a>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[2834px] md:h-auto mt-44 relative">
              <div className="w-full top-[0.00px] right-0 left-0 m-auto">

                <div className="w-full m-auto md:p-5 z-[1]" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div className="w-full px-14 py-[74px] md:p-5 bg-deep_purple-100 shadow-9xl rounded-[40px] mx-5 mt-[-10%] w-[70%]">
                    {/* <form onSubmit={handleSubmit}> */}
                    <div className="my-[18px]">
                      <div className="flex flex-col items-center pb-[26px] gap-[76px] md:gap-[57px] sm:gap-[38px] sm:pb-5">
                        <div className="flex flex-col self-stretch gap-[54px] sm:gap-[27px]">
                          <div className="flex md:flex-col justify-center gap-[47px]">
                            <div className="flex flex-col items-start w-full gap-[21px]">
                              <Text
                                size="9xl"
                                as="p"
                                className="!text-gray-900 capitalize"
                              >
                                Full name *
                              </Text>
                              <div className="self-stretch">
                                <Input
                                  shape="round"
                                  name="fullName"
                                  placeholder={`John David`}
                                  className="sm:px-5 font-nunito lowercase border-blue_gray-100_02 border border-solid"
                                // value={formData.fullname}
                                // onchange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="flex flex-col items-start w-full gap-[21px]">
                              <Text
                                size="9xl"
                                as="p"
                                className="!text-gray-900 capitalize"
                              >
                                Your email *
                              </Text>
                              <div className="self-stretch">
                                <Input
                                  shape="round"
                                  type="email"
                                  name="email"
                                  placeholder={`example@yourmail.com`}
                                  className="sm:px-5 font-nunito lowercase border-blue_gray-100_02 border border-solid"
                                // value={formData.email}
                                // onchange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex md:flex-col justify-center items-center gap-[50px]">
                            <div className="flex flex-col items-start w-full gap-[17px]">
                              <Text
                                size="9xl"
                                as="p"
                                className="!text-gray-900 capitalize"
                              >
                                Company *
                              </Text>
                              <div className="self-stretch">
                                <Input
                                  shape="round"
                                  type="text"
                                  name="name"
                                  placeholder={`yourcompany name here`}
                                  className="sm:px-5 font-nunito lowercase border-blue_gray-100_02 border border-solid"
                                // value={formData.company}
                                // onchange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="flex flex-col items-start w-full gap-[18px]">
                              <Text
                                size="9xl"
                                as="p"
                                className="!text-gray-900 capitalize"
                              >
                                Subject *
                              </Text>
                              <div className="self-stretch">
                                <Input
                                  shape="round"
                                  name="how_can_we_help"
                                  placeholder={`How can we Help`}
                                  className="sm:px-5 font-nunito lowercase border-blue_gray-100_02 border border-solid"
                                // value={formData.subject}
                                // onchange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start gap-[17px]">
                            <Text
                              size="9xl"
                              as="p"
                              className="!text-gray-900 capitalize"
                            >
                              Message *
                            </Text>
                            <div className="self-stretch">
                              <div className="flex p-[26px] sm:p-5 border-blue_gray-100_02 border border-solid bg-white-A700 rounded-[20px]">
                                <Text
                                  size="9xl"
                                  as="p"
                                  className="mb-[219px] ml-1 md:ml-0 !text-gray-600_03 !font-nunito lowercase"
                                // value={formData.message}
                                // onchange={handleChange}
                                >
                                  Hello there,I would like to talk about how
                                  to...
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <Button
                            size="11xl"
                            className="sm:px-5 font-nunito font-bold min-w-[239px] rounded-[37px]"
                          // onClick={handleDivClick}
                          >
                            Send Message
                          </Button>
                        </div>
                      </div>
                    </div>
                    {/* </form> */}
                  </div>
                </div>


                <div className="flex flex-col items-start mt-[-683px]">
                  <Img
                    src="images/img_group_19834.png"
                    alt="image_one"
                    className="w-[39%] object-cover"
                  />
                  <div className="flex self-stretch justify-end mt-[-582px] pl-14 pr-[98px] py-[98px] md:p-5 bg-gray-100">
                    <div className="flex flex-col w-[82%] h-[20%] md:w-full mt-[73px] mr-[73px] gap-[39px] md:mr-0">
                      <div className="flex justify-center w-full mx-auto md:p-5 max-w-[671px]">
                        <Heading
                          size="10xl"
                          as="h2"
                          className="!text-purple-900 !font-nunito text-center  mt-[-15%] h-[10px]"
                        >
                          Frequently Asked Questions
                        </Heading>
                      </div>
                      <div>


                        {/* toogle FAQ */}
                        <div className="flex flex-col pt-[145px] mt-[-10%] gap-[34px] md:pt-5">


                          <div className="flex justify-end w-full p-[22px] mx-auto md:p-5 bg-deep_purple-100 flex-1 max-w-[986px] rounded-[20px]">
                            <div className="flex md:flex-col justify-between items-center w-full gap-5">
                              <button onClick={toggleFAQ1} className="w-[60%] md:w-full !text-gray-900 leading-[110%] focus:outline-none">
                                1. Where is my order? Quisque molestie {isOpen1 ? '[-]' : '[+]'}
                              </button>
                              <div className="flex flex-col">
                                <Text
                                  size="15xl"
                                  as="p"
                                  className="flex justify-center items-center h-[59px] w-[59px] pl-[25px] pr-[5px] py-[13px] sm:pl-5 !text-white-A700 bg-purple-900 rounded-[29px]"
                                >
                                  
                                </Text>
                              </div>
                            </div>
                          </div>

                          {isOpen1 && (
                            <div className="flex justify-center w-full p-[22px] mx-auto md:p-5 bg-deep_purple-100 flex-1 max-w-[986px] rounded-[20px]">
                              <div className="flex md:flex-col justify-between items-center w-full gap-5">
                                <Text
                                  size="15xl"
                                  as="p"
                                  className="w-[60%] md:w-full !text-gray-900 leading-[110%]"
                                >
                                  Your answer for Where is my order?
                                </Text>
                                <div className="flex flex-col">
                                  <Text
                                    size="15xl"
                                    as="p"
                                    className="flex justify-center items-center h-[59px] w-[59px] pl-[25px] pr-[5px] py-[13px] sm:pl-5 !text-white-A700 bg-purple-900 rounded-[29px]"
                                  >
                                    
                                  </Text>
                                </div>
                              </div>
                            </div>
                          )}


                          <div className="flex justify-end w-full py-[25px] mx-auto md:p-5 sm:py-5 bg-deep_purple-100 flex-1 max-w-[976px] rounded-[20px]">
                            <div className="flex flex-col items-center w-[96%] md:w-full pb-[73px] gap-[9px] md:pb-5">
                              <div className="flex md:flex-col self-stretch justify-between items-center gap-5">
                                <button onClick={toggleFAQ2} className="self-end mb-2 !text-gray-900 focus:outline-none">
                                  2. How can I return an item purchased online? {isOpen2 ? '[-]' : '[+]'}
                                </button>
                                <div className="flex flex-col">
                                  <Text
                                    size="15xl"
                                    as="p"
                                    className="flex justify-center items-center h-[59px] w-[59px] pl-[25px] pr-[5px] py-[13px] sm:pl-5 !text-white-A700 bg-purple-900 rounded-[29px]"
                                  >
                                    
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>

                          {isOpen2 && (
                            <div className="flex justify-center w-full p-[22px] mx-auto md:p-5 bg-deep_purple-100 flex-1 max-w-[986px] rounded-[20px]">
                              <div className="flex md:flex-col justify-between items-center w-full gap-5">
                                <Text
                                  size="15xl"
                                  as="p"
                                  className="w-[60%] md:w-full !text-gray-900 leading-[110%]"
                                >
                                  The are going to use a passage of Lorem Ipsum,
                                  you need to be sure tdembarrassing hidden in the
                                  middle of text. All the Lorem generators on the
                                  Internet tend to repeat predefined chunks as
                                  necessary, making this the first true generator
                                  on the Internet.{" "}
                                </Text>
                                <div className="flex flex-col">
                                  <Text
                                    size="15xl"
                                    as="p"
                                    className="flex justify-center items-center h-[59px] w-[59px] pl-[25px] pr-[5px] py-[13px] sm:pl-5 !text-white-A700 bg-purple-900 rounded-[29px]"
                                  >
                                    
                                  </Text>
                                </div>
                              </div>
                            </div>
                          )}


                          <div className="flex justify-center p-[26px] sm:p-5 bg-deep_purple-100 flex-1 rounded-[20px]">
                            <div className="flex sm:flex-col justify-between items-center w-full gap-5 mx-auto max-w-[920px]">
                              <button onClick={toggleFAQ3} className="w-[60%] md:w-full !text-gray-900 leading-[110%] focus:outline-none">
                                3. Can I cancel or change my order? {isOpen2 ? '[-]' : '[+]'}
                              </button>
                              <div className="flex flex-col">
                                <Text
                                  size="15xl"
                                  as="p"
                                  className="flex justify-center items-center h-[59px] w-[59px] pl-[25px] pr-[5px] py-[13px] sm:pl-5 !text-white-A700 bg-purple-900 rounded-[29px]"
                                >
                                  
                                </Text>
                              </div>
                            </div>
                          </div>

                          {isOpen3 && (
                            <div className="flex justify-center w-full p-[22px] mx-auto md:p-5 bg-deep_purple-100 flex-1 max-w-[986px] rounded-[20px]">
                              <div className="flex md:flex-col justify-between items-center w-full gap-5">
                                <Text
                                  size="15xl"
                                  as="p"
                                  className="w-[60%] md:w-full !text-gray-900 leading-[110%]"
                                >
                                  Your answer for Where is my order?
                                </Text>
                                <div className="flex flex-col">
                                  <Text
                                    size="15xl"
                                    as="p"
                                    className="flex justify-center items-center h-[59px] w-[59px] pl-[25px] pr-[5px] py-[13px] sm:pl-5 !text-white-A700 bg-purple-900 rounded-[29px]"
                                  >
                                    
                                  </Text>
                                </div>
                              </div>
                            </div>
                          )}


                          <div className="flex justify-end w-full p-[25px] mx-auto md:p-5 bg-deep_purple-100 flex-1 max-w-[991px] rounded-[20px]">
                            <div className="flex md:flex-col justify-between items-center w-full gap-5">
                              <button onClick={toggleFAQ4} className="w-[60%] md:w-full !text-gray-900 leading-[110%] focus:outline-none">
                                4. I have a promotional or discount code? {isOpen2 ? '[-]' : '[+]'}
                              </button>
                              <div className="flex flex-col">
                                <Text
                                  size="15xl"
                                  as="p"
                                  className="flex justify-center items-center h-[59px] w-[59px] pl-[25px] pr-[5px] py-[13px] sm:pl-5 !text-white-A700 bg-purple-900 rounded-[29px]"
                                >
                                  
                                </Text>
                              </div>
                            </div>
                          </div>


                          {isOpen4 && (
                            <div className="flex justify-center w-full p-[22px] mx-auto md:p-5 bg-deep_purple-100 flex-1 max-w-[986px] rounded-[20px]">
                              <div className="flex md:flex-col justify-between items-center w-full gap-5">
                                <Text
                                  size="15xl"
                                  as="p"
                                  className="w-[60%] md:w-full !text-gray-900 leading-[110%]"
                                >
                                  Your answer for Where is my order?
                                </Text>
                                <div className="flex flex-col">
                                  <Text
                                    size="15xl"
                                    as="p"
                                    className="flex justify-center items-center h-[59px] w-[59px] pl-[25px] pr-[5px] py-[13px] sm:pl-5 !text-white-A700 bg-purple-900 rounded-[29px]"
                                  >
                                    
                                  </Text>
                                </div>
                              </div>
                            </div>
                          )}

                          <div className="flex justify-end w-full p-[26px] mx-auto md:p-5 bg-deep_purple-100 flex-1 max-w-[988px] rounded-[20px]">
                            <div className="flex md:flex-col justify-between items-center w-full gap-5">
                              <button onClick={toggleFAQ5} className="w-[60%] md:w-full !text-gray-900 leading-[110%] focus:outline-none">
                                5. Can I integrate my store with Facebook? {isOpen2 ? '[-]' : '[+]'}
                              </button>
                              <div className="flex flex-col">
                                <Text
                                  size="15xl"
                                  as="p"
                                  className="flex justify-center items-center h-[59px] w-[59px] pl-[25px] pr-[5px] py-[13px] sm:pl-5 !text-white-A700 bg-purple-900 rounded-[29px]"
                                >
                                  
                                </Text>
                              </div>
                            </div>
                          </div>

                          {isOpen5 && (
                            <div className="flex justify-center w-full p-[22px] mx-auto md:p-5 bg-deep_purple-100 flex-1 max-w-[986px] rounded-[20px]">
                              <div className="flex md:flex-col justify-between items-center w-full gap-5">
                                <Text
                                  size="15xl"
                                  as="p"
                                  className="w-[60%] md:w-full !text-gray-900 leading-[110%]"
                                >
                                  Your answer for Where is my order?
                                </Text>
                                <div className="flex flex-col">
                                  <Text
                                    size="15xl"
                                    as="p"
                                    className="flex justify-center items-center h-[59px] w-[59px] pl-[25px] pr-[5px] py-[13px] sm:pl-5 !text-white-A700 bg-purple-900 rounded-[29px]"
                                  >
                                    
                                  </Text>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              {/* footer */}
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
                    <a href="">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
