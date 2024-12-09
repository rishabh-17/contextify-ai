import React from "react";

const sizes = {
  "5xl": "text-4xl font-normal md:text-[34px] sm:text-[32px]",
  "6xl": "text-5xl font-normal md:text-[44px] sm:text-[38px]",
  "7xl": "text-[49px] font-normal md:text-[45px] sm:text-[39px]",
  "8xl": "text-[50px] font-normal md:text-[46px] sm:text-[40px]",
  "2xl": "text-[25px] font-normal md:text-[23px] sm:text-[21px]",
  "3xl": "text-[27px] font-normal md:text-[25px] sm:text-[23px]",
  "4xl": "text-[32px] font-normal md:text-3xl sm:text-[28px]",
  xs: "text-base font-normal",
  lg: "text-[22px] font-normal",
  s: "text-lg font-normal",
  xl: "text-2xl font-light md:text-[22px]",
  "9xl": "text-[75px] font-normal md:text-5xl",
  md: "text-xl font-medium",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-junge ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
