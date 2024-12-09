import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text } from "../../components";
import SignUpComponentSetDivider from "../../components/SignUpComponentSetDivider";
import SignUpComponentSetProperty1 from "../../components/SignUpComponentSetProperty1";

export default function SignupcomponentsetPage() {
  return (
    <>
      <Helmet>
        <title>Sign Up for Contextify - Create Your Account Today</title>
        <meta
          name="description"
          content="Join Contextify by signing up. Take the first step towards leveraging our digital marketing tools. Easy sign-up with Google or Apple."
        />
      </Helmet>

      {/* language selection section */}
      <div className="flex w-full justify-center bg-gray-100 px-14 py-[186px] md:p-5">
        {/* main content section */}
        <div className="mb-[110px] flex w-[66%] flex-col items-center gap-[31px] md:w-full">
          {/* header section */}
          <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
            <div className="flex items-center pl-2">
              <Text as="p" className="self-end !text-blue_gray-900">
                English (united States)
              </Text>
              <Img src="images/img_property_1_arrow.svg" alt="propertyone_one" className="h-[24px] w-[24px]" />
            </div>

            {/* signup prompt section */}
            <div className="flex items-center gap-2">
              <div className="flex">
                <Text size="s" as="p" className="self-start !text-gray-700 underline">
                  <span className="text-blue_gray-900">Don’t have an account?</span>
                  <span className="text-gray-900_01">&nbsp;&nbsp;</span>
                </Text>
              </div>
              <Button
                size="xs"
                className="min-w-[131px] rounded-md border border-solid border-gray-900_01 !text-gray-900_01 sm:px-5"
              >
                Sign up
              </Button>
            </div>
          </div>
          <div className="container-xs flex flex-col items-center gap-[30px] rounded-[20px] border border-solid border-gray-700_59 p-10 md:p-5">
            {/* login intro section */}
            <div className="flex w-[73%] flex-col items-center md:w-full">
              <div className="h-[40px] w-[40px] rounded-[20px] bg-gray-400_01" />
              <Text size="4xl" as="p" className="mt-[7px] !text-blue_gray-900">
                Login{" "}
              </Text>
              <Text as="p" className="text-center !text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus{" "}
              </Text>
            </div>
            <div className="flex flex-col gap-8 self-stretch">
              {/* login form section */}
              <div className="flex flex-col gap-[23px]">
                <SignUpComponentSetProperty1 labelOne="Email" className="flex flex-col gap-[5px]" />
                <SignUpComponentSetProperty1
                  iconone="images/img_icon.svg"
                  hidetext="Hide"
                  className="flex flex-col gap-1"
                />
                <Button
                  color="purple_900"
                  shape="round"
                  className="w-full border border-solid border-blue_gray-100 lowercase sm:px-5"
                >
                  login
                </Button>
              </div>

              {/* social login divider section */}
              <SignUpComponentSetDivider className="flex items-center gap-[23px] sm:flex-col" />

              {/* social login buttons section */}
              <div className="flex flex-col gap-4">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
