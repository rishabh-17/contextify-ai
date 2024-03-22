import React from "react";

const sizes = {
  "3xl": "text-xl font-semibold",
  "2xl": "text-[17px] font-bold",
  "5xl": "text-2xl font-semibold md:text-[22px]",
  "4xl": "text-[22px] font-bold",
  "7xl": "text-3xl font-bold md:text-[28px] sm:text-[26px]",
  "6xl": "text-[26px] font-semibold md:text-2xl sm:text-[22px]",
  "9xl": "text-[40px] font-extrabold md:text-[38px] sm:text-4xl",
  "8xl": "text-[31px] font-semibold md:text-[29px] sm:text-[27px]",
  xl: "text-base font-semibold",
  s: "text-[11px] font-semibold",
  md: "text-[13px] font-semibold",
  xs: "text-[9px] font-bold",
  lg: "text-sm font-semibold",
  "10xl": "text-[50px] font-extrabold md:text-[46px] sm:text-[40px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900_02 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
