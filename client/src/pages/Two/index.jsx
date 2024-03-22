import React from "react";
import { Helmet } from "react-helmet";
import { Img } from "../../components";

export default function TwoPage() {
  return (
    <>
      <Helmet>
        <title>Contextify</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col justify-center w-full gap-10">
        <div className="md:self-stretch md:p-5 flex-1">
          <Img
            src="images/img_photo.png"
            alt="photo_one"
            className="h-[583px] w-full md:h-auto object-cover rounded-[50px]"
          />
        </div>
        <div className="w-[35%] md:w-full md:p-5">
          <Img
            src="images/img_photo_583x476.png"
            alt="photo_three"
            className="h-[583px] w-full md:h-auto object-cover rounded-[50px]"
          />
        </div>
      </div>
    </>
  );
}
