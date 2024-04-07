import React from "react";

const sizes = {
  "20xl": "text-[50px] font-normal md:text-[46px] sm:text-[40px]",
  xs: "text-[7px] font-normal",
  lg: "text-[10px] font-medium",
  "19xl": "text-5xl font-normal md:text-[44px] sm:text-[38px]",
  "18xl": "text-[40px] font-normal md:text-[38px] sm:text-4xl",
  xl: "text-[11px] font-medium",
  "14xl": "text-[27px] font-normal md:text-[25px] sm:text-[23px]",
  "15xl": "text-3xl font-normal md:text-[28px] sm:text-[26px]",
  "17xl": "text-4xl font-normal md:text-[34px] sm:text-[32px]",
  "16xl": "text-[32px] font-normal md:text-3xl sm:text-[28px]",
  "9xl": "text-xl font-normal",
  "10xl": "text-[21px] font-medium",
  "11xl": "text-[22px] font-normal",
  "12xl": "text-2xl font-normal md:text-[22px]",
  "13xl": "text-[25px] font-normal md:text-[23px] sm:text-[21px]",
  "5xl": "text-[15px] font-medium",
  "6xl": "text-base font-normal",
  "7xl": "text-[17px] font-normal",
  "8xl": "text-lg font-normal",
  "2xl": "text-xs font-normal",
  "3xl": "text-[13px] font-normal",
  "4xl": "text-sm font-normal",
  s: "text-[8px] font-normal",
  "22xl": "text-[75px] font-normal md:text-5xl",
  md: "text-[9px] font-medium",
  "21xl": "text-[68px] font-normal md:text-5xl",
};

const Text = ({ children, className = "", as, size = "6xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_02 font-junge ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
