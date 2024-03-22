import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading } from "../../components";

export default function ThreePage() {
  return (
    <>
      <Helmet>
        <title>Contextify</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full p-3.5">
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
    </>
  );
}
