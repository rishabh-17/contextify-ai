import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Input } from "../../components";
import DashboardElementscards from "../../components/DashboardElementscards";
import DashboardElementscards1 from "../../components/DashboardElementscards1";
import DashboardElementscards2 from "../../components/DashboardElementscards2";
import DashboardElementsmenu from "../../components/DashboardElementsmenu";

export default function DashboardPage() {
  const [searchBarValue6, setSearchBarValue6] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Contextify</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full bg-gray-100">
        <div className="flex md:flex-col items-center w-[98%] md:w-full gap-10 md:p-5">
          <DashboardElementsmenu className="w-[6%] md:w-full" />
          <div className="flex flex-col md:self-stretch gap-[29px] flex-1">
            <header className="flex sm:flex-col justify-between items-center w-[96%] md:w-full gap-5">
              <Input
                size="xs"
                shape="square"
                name="search"
                placeholder={`Search `}
                value={searchBarValue6}
                onChange={(e) => setSearchBarValue6(e)}
                prefix={<Img src="images/img_search.svg" alt="search" className="cursor-pointer" />}
                suffix={
                  searchBarValue6?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue6("")} height={24} width={24} fillColor="#000000ff" />
                  ) : null
                }
                className="self-end w-[29%] sm:w-full mb-[9px] gap-2 sm:pr-5 text-black-900_7e font-dmsans"
              />
              <div className="w-[3%] sm:w-full">
                <div className="flex flex-col items-end">
                  <Img src="images/img_photo_44x44.png" alt="photo_one" className="h-[44px] w-[44px] rounded-[50%]" />
                  <div className="h-[12px] w-[12px] mt-[-10px] bg-green-600 rounded-md" />
                </div>
              </div>
            </header>
            <div>
              <div className="flex md:flex-col justify-center gap-10">
                <div className="flex flex-col w-[50%] md:w-full gap-1">
                  <div className="flex md:flex-col justify-between items-start gap-5">
                    <DashboardElementscards
                      deep="Deep"
                      minimal="Minimal"
                      photoThree="images/img_photo_2.png"
                      colorFive="images/img_color_indigo_a700.svg"
                      photoFive="images/img_photo_2.png"
                      photoSeven="images/img_photo_2.png"
                      colorSeven="images/img_color_indigo_a700.svg"
                      className="flex justify-center items-center w-[47%] md:w-full"
                    />
                    <DashboardElementscards
                      deep="Lost"
                      title="Bengaluru"
                      whenyouenterint="Your business is in a continual battle for your customers’ recognition whether you know it or not."
                      detalies="Details"
                      className="flex justify-center items-center w-[47%] md:w-full"
                    />
                  </div>
                  <div className="flex md:flex-col justify-between items-start gap-5">
                    <DashboardElementscards1
                      belgrade="Belgrade"
                      photoNine="images/img_photo_2.png"
                      colorNine="images/img_color_indigo_a700.svg"
                      colorEleven="images/img_color_indigo_a700.svg"
                      className="w-[47%] md:w-full mb-9"
                    />
                    <div className="w-[47%] md:w-full">
                      <DashboardElementscards2 green="Green" />
                    </div>
                  </div>
                  <div className="flex md:flex-col justify-between items-center gap-5">
                    <DashboardElementscards
                      deep="Lost"
                      minimal="Designer"
                      title="Kuala Lumpur"
                      whenyouenterint="Your business is in a continual battle for your customers’ recognition whether you know it or not."
                      detalies="Details"
                      photoThree="images/img_photo_2.png"
                      colorFive="images/img_color_indigo_a700.svg"
                      photoFive="images/img_photo_2.png"
                      photoSeven="images/img_photo_2.png"
                      colorSeven="images/img_color_indigo_a700.svg"
                      className="flex justify-center items-center w-[47%] md:w-full"
                    />
                    <DashboardElementscards
                      deep="Tulsa"
                      minimal="Columbus"
                      title="Bristol"
                      className="flex self-end justify-center items-center w-[47%] md:w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:self-stretch gap-10 flex-1">
                  <div className="flex flex-col gap-10">
                    <DashboardElementscards1
                      taipei="Dogs"
                      glasgow="Behance"
                      imageOne="images/img_image_1.png"
                      titleTwo="Kathmandu"
                      whenyouenterint="When you enter into any new area "
                      detaliesTwo="Detalies"
                      className="flex justify-center items-center flex-1"
                    />
                    <DashboardElementscards
                      deep="Harare"
                      minimal="Alexandria"
                      title="Brisbane"
                      className="flex justify-center items-center flex-1"
                    />
                  </div>
                  <div>
                    <DashboardElementscards2
                      imageThree="images/img_image_264x326.png"
                      toronto="Designer"
                      titleThree="Indianapolis"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:self-stretch gap-10 flex-1">
                  <DashboardElementscards deep="Mens" title="Memphis" />
                  <DashboardElementscards2
                    imageThree="images/img_image_376x326.png"
                    lost="Text"
                    toronto="Khartoum"
                    green="Detroit"
                    titleThree="Louisville"
                    description="<>When you enter into any new area <br />of science, you almost always find.</>"
                  />
                  <DashboardElementscards deep="Milan" minimal="Edinburgh" title="Helsinki" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
