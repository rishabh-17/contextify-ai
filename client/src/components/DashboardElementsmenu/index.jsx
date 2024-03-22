import React from "react";
import { Img } from "./..";

export default function DashboardElementsmenu({ ...props }) {
  return (
    <div {...props}>
      <div className="self-stretch">
        <div className="flex flex-col items-center gap-[42px] p-[13px] rounded-tr-[20px] rounded-br-[20px] bg-gray-100">
          <Img src="images/img_vector_purple_900.svg" alt="vector_one" className="h-[36px] w-[36px] mt-[7px]" />
          <Img src="images/img_vector_black_900_02_70x287.svg" alt="color_one" className="h-px w-full rounded-[1px]" />
          <div className="flex flex-col mb-[22px]">
            <Img src="images/img_icon_1.svg" alt="iconone_one" className="h-[26px]" />
            <Img src="images/img_icon_2.svg" alt="icontwo_one" className="h-[26px] mt-[70px]" />
            <Img src="images/img_icon_3.svg" alt="iconthree_one" className="h-[26px] mt-[70px]" />
            <Img src="images/img_icon_4.svg" alt="iconfour_one" className="h-[26px] mt-[70px]" />
            <Img src="images/img_icon_5.svg" alt="iconfive_one" className="h-[26px] mt-[70px]" />
            <Img src="images/img_icon_6.svg" alt="iconsix_one" className="h-[26px] mt-[70px]" />
            <Img src="images/img_icon_7.svg" alt="iconseven_one" className="h-[26px] mt-[70px]" />
            <Img src="images/img_icon_8.svg" alt="iconeight_one" className="h-[26px] mt-[195px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
