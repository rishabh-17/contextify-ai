import React from "react";
import { Text, Img } from "./..";

export default function ClientDashboardNavigation({ hidebgcopyOne, prop, products = "Dashboard", ...props }) {
  return (
    <div {...props}>
      {!!hidebgcopyOne ? <div className="h-full w-[4px] rounded-sm bg-purple-900" /> : null}
      <div className="flex flex-1 rounded-md bg-purple-900">
        <div className="ml-1 flex w-[67%] items-start gap-1.5 md:ml-0 md:w-full md:p-5">
          <div className="relative h-[40px] w-[40px] md:h-auto">
            {!!prop ? (
              <Text size="2xl" as="p" className="ml-2 text-center !text-white-A700 md:ml-0">
                {prop}
              </Text>
            ) : null}
            <Img
              src="images/img_dashboard_2_svgrepo_com.svg"
              alt="dashboardtwo"
              className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[40px] w-full"
            />
          </div>
          <Text size="md" as="p" className="mt-2 tracking-[0.30px] !text-white-A700">
            {products}
          </Text>
        </div>
      </div>
    </div>
  );
}
