import React from 'react'
import { Text, Button, Img } from "../../components";
const index = () => {
  return (
    <div className="w-full mt-[156px] mx-auto md:p-5 max-w-[1240px]">
              <div className="flex md:flex-col justify-between items-start gap-5">
                <div className="flex justify-between items-start w-[29%] md:w-full gap-5">
                  <div className="flex justify-center w-[56%]">
                    <div className="flex flex-col w-full gap-6">
                      <div className="h-[39px] relative">
                        <Img
                          src="images/img_frame_purple_900.svg"
                          alt="image_two"
                          className="h-[39px] left-[0.00px] bottom-0 top-0 my-auto absolute"
                        />
                        <Text
                          size="14xl"
                          as="p"
                          className="bottom-[-0.98px] right-[0.00px] m-auto !text-purple-900 !font-inter capitalize absolute"
                        >
                          Contextify
                        </Text>
                      </div>
                      <div className="flex items-start gap-2">
                        <Img
                          src="images/img_frame_purple_900_24x24.svg"
                          alt="image_three"
                          className="h-[24px] w-[24px]"
                        />
                        <Text as="p" className="capitalize">
                          help@contextify.com
                        </Text>
                      </div>
                      <div className="flex items-center gap-2">
                        <Img
                          src="images/img_frame_24x24.svg"
                          alt="image_four"
                          className="h-[24px] w-[24px]"
                        />
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
                      <Text
                        as="p"
                        className="mt-[18px] ml-[13px] md:ml-0 !text-gray-500_05"
                      >
                        Your email{" "}
                      </Text>
                      <div className="flex">
                        <Button
                          size="9xl"
                          className="sm:px-5 capitalize min-w-[160px] rounded-[30px]"
                        >
                          Subscribe
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[1050px] mt-2 ml-[8%] h-px bg-deep_purple-100" />
              <Text className="mt-[35px] ml-[38%]">
                Copyright 2022 Contextify inc. all rights reserved
              </Text>
            </div>
  )
}

export default index