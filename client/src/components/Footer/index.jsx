import React from "react";
import { Text, Button, Img } from "../../components";
import { useNavigate } from "react-router-dom";
const index = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full mt-[156px] mx-auto md:p-5 max-w-[1240px]">
      <div className="flex flex-wrap sm:flex-col justify-between items-start gap-5">
        <div className="flex shrink justify-center">
          <div className="flex flex-col w-full gap-6">
            <div
              className="jhsufdj w-full flex items-center pt-0"
              onClick={() => navigate("/")}
            >
              <Img
                src="images/logo.png"
                // src="images/img_frame_purple_900.svg"
                alt="image"
                className="my-auto h-[80px] w-[80px] pt-0 mt-0"
              />
              <h2 className="text-2xl font-bold text-purple-900">Contextify</h2>
            </div>
            <div className="flex items-start gap-2">
              <Img
                src="images/img_frame_purple_900_24x24.svg"
                alt="image_three"
                className="h-[24px] w-[24px]"
              />
              <Text as="p" className="capitalize">
                support@contextify.com
              </Text>
            </div>
            {/* <div className="flex items-center gap-2">
              <Img
                src="images/img_frame_24x24.svg"
                alt="image_four"
                className="h-[24px] w-[24px]"
              />
              <Text as="p" className="self-start capitalize">
                +1 234 456 678 89
              </Text>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col items-start gap-[22px]  md:items-center">
          <Text size="16xl" as="p" className="capitalize text-center">
            links
          </Text>
          <Text
            as="p"
            className="capitalize cursor-pointer"
            onClick={() => navigate("/")}
          >
            home
          </Text>
          <Text
            as="p"
            className="capitalize cursor-pointer"
            onClick={() => navigate("/about")}
          >
            about us
          </Text>
          <Text
            as="p"
            className="capitalize cursor-pointer"
            onClick={() => navigate("/contactus")}
          >
            contact us
          </Text>
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
        </div>
        <div className="flex flex-col items-start gap-[21px]">
          <Text size="16xl" as="p" className="capitalize">
            product
          </Text>
          <Text as="p" className="capitalize">
            take tour
          </Text>

          <Text as="p" className="capitalize">
            reviews
          </Text>
          <Text as="p" className="capitalize">
            Support
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
            <div
              className={`flex justify-between items-center gap-5 p-2.5 border-gray-300 border-solid bg-white-A700 rounded-[40px] ${
                localStorage.getItem("subscribed") ? "" : " border-2"
              } `}
            >
              {!localStorage.getItem("subscribed") && (
                <input
                  className=" border-0 border-transparent focus:border-transparent focus:ring-0"
                  placeholder="your email"
                />
              )}

              <div className="flex">
                {localStorage.getItem("subscribed") ? (
                  <h3 className="text-[#32a852] text-xl font-bold ">
                    Already Subscribed
                  </h3>
                ) : (
                  <Button
                    size="9xl"
                    className="sm:px-5 capitalize min-w-[160px] rounded-[30px]"
                    onClick={() => {
                      localStorage.setItem("subscribed", "true");
                      window.location.reload();
                    }}
                  >
                    Subscribe
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1050px] mt-2 ml-[8%] h-px bg-deep_purple-100" />
      <Text className="text-center">
        Copyright 2024 Contextify inc. all rights reserved
      </Text>
    </div>
  );
};

export default index;
