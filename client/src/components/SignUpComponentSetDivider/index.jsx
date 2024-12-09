import React from "react";
import { Text } from "./..";

export default function SignUpComponentSetDivider({ or = "OR", ...props }) {
  return (
    <div {...props}>
      <div className="h-[2px] flex-1 bg-gray-700_3f sm:self-stretch" />
      <Text size="s" as="p" className="!text-gray-700">
        {or}
      </Text>
      <div className="h-[2px] flex-1 bg-gray-700_3f sm:self-stretch" />
    </div>
  );
}
