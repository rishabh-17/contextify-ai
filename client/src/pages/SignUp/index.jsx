import React from "react";
import { Helmet } from "react-helmet";
import {CheckBox} from "../../components";
import { Button } from "pages/SignIn/Button";
import { Text } from "pages/SignIn/Text";
import { Img } from "pages/SignIn/Img";
import SignUpComponentSetDivider from "../../components/SignUpComponentSetDivider";
import SignUpComponentSetProperty1 from "../../components/SignUpComponentSetProperty1";

export default function SignUpPage() {
  return (
    <>
      <Helmet>
        <title>Create Your Contextify Account - Get Started Now</title>
        <meta
          name="description"
          content="Ready to explore Contextify? Create your account in minutes and agree to our Terms of Use and Privacy Policy. Sign up with Google or Apple."
        />
      </Helmet>

      {/* language selection section */}
      <div className="flex w-full justify-center bg-gray-100 px-14 pt-[20px] md:p-5">
        <div className="mt-[20px] flex w-[68%] flex-col items-center  md:w-full">
          {/* login prompt section */}
          <div className="flex items-center justify-between gap-2 self-stretch sm:flex-col">
            <div className="flex items-center pl-2">
              <Text as="p" className="self-end !text-blue_gray-900">
                English (united States)
              </Text>
              <Img src="images/img_property_1_arrow.svg" alt="propertyone_one" className="h-[24px] w-[24px]" />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                <Text size="s" as="p" className="self-end !text-gray-700 underline">
                  <span className="text-blue_gray-900">Already have an account?</span>
                  <span className="text-gray-900_01">&nbsp;&nbsp;</span>
                </Text>
              </div>
              <Button
                size="xs"
                className="min-w-[131px] rounded-md border border-solid border-gray-900_01 !text-gray-900_01 sm:px-5"
              >
                Login
              </Button>
            </div>
          </div>

          {/* signup form section */}
          <div className="container-xs flex flex-col items-center gap-[10px] rounded-[32px] border border-solid border-gray-700_59 pt-1 md:p-5">
            <div className="flex w-[73%] flex-col items-center gap-1 md:w-full">
              <div className="h-[40px] w-[40px] rounded-[20px] bg-gray-400_01" />
              <a href="#">
                <Text size="4xl" as="p" className="!text-blue_gray-900">
                  Create an account
                </Text>
              </a>
              <Text as="p" className="text-center !text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus{" "}
              </Text>
            </div>
            <div className="flex flex-col gap-8 self-stretch">
              <div className="flex flex-col gap-[23px]">
                <SignUpComponentSetProperty1 labelOne="Username" className="flex flex-col gap-1" />
                <SignUpComponentSetProperty1 labelOne="Email" className="flex flex-col gap-[5px]" />
                <SignUpComponentSetProperty1
                  iconone="images/img_icon.svg"
                  hidetext="Hide"
                  className="flex flex-col gap-1"
                />
                <CheckBox
                  name="property1checkb"
                  label="By creating an account, I agree to our Terms of use and 
Privacy Policy "
                  id="property1checkb"
                  className="gap-2 py-[7px] pr-[31px] text-left text-base text-blue_gray-900 sm:pr-5"
                />
                <Button
                  color="purple_900"
                  shape="round"
                  className="w-full border border-solid border-blue_gray-100 lowercase sm:px-5"
                >
                  cREATE AN ACCOUNT
                </Button>
              </div>

              {/* social media divider section */}
              {/* <SignUpComponentSetDivider className="flex items-center gap-[23px] sm:flex-col" /> */}

              {/* social media buttons section */}
              {/* <div className="flex flex-col gap-4">
                <Button
                  shape="round"
                  leftIcon={
                    <Img src="images/img_social_media_logo.svg" alt="Social media logo" className="h-[24px] w-[24px]" />
                  }
                  className="w-full gap-4 border border-solid border-blue_gray-900 sm:px-5"
                >
                  Continue with Google
                </Button>
                <Button
                  shape="round"
                  leftIcon={<Img src="images/img_user_blue_gray_900.svg" alt="user" className="h-[32px] w-[32px]" />}
                  className="w-full gap-4 border border-solid border-blue_gray-900 sm:px-5"
                >
                  Continue with Apple
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
