import React from "react";
import { Text, Img } from "./..";

export default function ClientDashboardNavigation1({
  subscription = "images/img_clock.svg",
  products = "Subscription",
  ...props
}) {
  return (
    <div {...props}>
      <div className="ml-7 flex items-center gap-4 self-end md:ml-0">
        <Img src={subscription} alt="subscription" className="h-[26px]" />
        <Text size="md" as="p" className="tracking-[0.30px]">
          {products}
        </Text>
      </div>
    </div>
  );
}
