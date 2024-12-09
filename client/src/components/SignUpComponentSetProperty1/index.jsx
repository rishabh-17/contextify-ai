import React from "react";
import { Input, Text, Img } from "./..";

export default function SignUpComponentSetProperty1({ labelOne = "Password", iconone, hidetext, ...props }) {
  return (
    <div {...props}>
      <div className="flex items-start justify-between gap-5 self-stretch pr-2">
        <Text as="p" className="!text-gray-700">
          {labelOne}
        </Text>
        <div className="flex items-start gap-[9px]">
          {!!iconone ? <Img src={iconone} alt="icon_one" className="h-[24px] w-[24px]" /> : null}
          {!!hidetext ? (
            <Text size="s" as="p" className="text-right !text-gray-700_cc">
              {hidetext}
            </Text>
          ) : null}
        </div>
      </div>
      <Input color="gray_700_59" shape="round" name="password" className="self-stretch sm:px-5" />
    </div>
  );
}
