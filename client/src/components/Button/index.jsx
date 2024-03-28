import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[5px]",
};
const variants = {
  fill: {
    green_500: "bg-green-500",
    gray_100_01: "bg-gray-100_01",
    purple_400: "bg-purple-400",
    red_50: "bg-red-50 text-pink-A200_01",
    orange_300_02: "bg-orange-300_02",
    lime_50: "bg-lime-50 text-orange-300_02",
    pink_A200_01: "bg-pink-A200_01",
    green_A400: "bg-green-A400",
    pink_400: "bg-pink-400",
    deep_orange_A200: "bg-deep_orange-A200",
    blue_400_01: "bg-blue-400_01",
    blue_400_02: "bg-blue-400_02",
    orange_300_01: "bg-orange-300_01",
    red_400: "bg-red-400",
    deep_purple_A200_05: "bg-deep_purple-A200_05",
    deep_purple_A200_02: "bg-deep_purple-A200_02 text-white-A700",
    gray_50_04: "bg-gray-50_04",
    deep_purple_A200_03: "bg-deep_purple-A200_03",
    deep_purple_A200_ab: "bg-deep_purple-A200_ab text-gray-50_04",
    gray_400_05_01: "bg-gray-400_05_01",
    purple_900: "bg-purple-900 text-white-A700",
    red_500: "bg-red-500",
    light_blue_A700: "bg-light_blue-A700",
    white_A700: "bg-white-A700 text-deep_purple-A200",
    green_A200_01: "bg-green-A200_01",
    deep_purple_50_02: "bg-deep_purple-50_02 text-deep_purple-A400",
    purple_400_a7: "bg-purple-400_a7 text-white-A700",
    yellow_100_01: "bg-yellow-100_01 text-lime-800",
    deep_purple_50: "bg-deep_purple-50 text-deep_purple-A400",
    white_A700_05: "bg-white-A700_05",
    gray_400_0a: "bg-gray-400_0a",
    cyan_50: "bg-cyan-50 text-black-900_02",
    gray_100_04: "bg-gray-100_04 text-gray-600_01",
    gray_50_ab: "bg-gray-50_ab text-blue_gray-900",
    green_50: "bg-green-50 text-black-900_02",
    yellow_100: "bg-yellow-100 text-black-900_02",
    indigo_50: "bg-indigo-50 text-black-900_02",
    orange_50: "bg-orange-50 text-black-900_02",
  },
  outline: {
    blue_gray_100_02: "border-blue_gray-100_02 border border-solid text-gray-900",
  },
};
const sizes = {
  "10xl": "h-[65px] px-[18px]",
  xl: "h-[33px] px-[23px] text-[13px]",
  "3xl": "h-[40px] px-[9px]",
  "8xl": "h-[57px] px-[21px] text-lg",
  md: "h-[29px] px-2.5 text-base",
  "7xl": "h-[54px] px-[21px] text-lg",
  "4xl": "h-[43px] pl-7 pr-8 text-xl",
  "6xl": "h-[52px] px-6 text-sm",
  "2xl": "h-[36px] px-2",
  xs: "h-[20px] px-[5px] text-[10px]",
  lg: "h-[30px] px-1.5",
  "9xl": "h-[60px] px-[29px] text-base",
  "11xl": "h-[73px] px-6 text-base",
  "5xl": "h-[50px] px-[13px]",
  sm: "h-[24px] px-1.5 text-[10px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "purple_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf([
    "10xl",
    "xl",
    "3xl",
    "8xl",
    "md",
    "7xl",
    "4xl",
    "6xl",
    "2xl",
    "xs",
    "lg",
    "9xl",
    "11xl",
    "5xl",
    "sm",
  ]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "green_500",
    "gray_100_01",
    "purple_400",
    "red_50",
    "orange_300_02",
    "lime_50",
    "pink_A200_01",
    "green_A400",
    "pink_400",
    "deep_orange_A200",
    "blue_400_01",
    "blue_400_02",
    "orange_300_01",
    "red_400",
    "deep_purple_A200_05",
    "deep_purple_A200_02",
    "gray_50_04",
    "deep_purple_A200_03",
    "deep_purple_A200_ab",
    "gray_400_05_01",
    "purple_900",
    "red_500",
    "light_blue_A700",
    "white_A700",
    "green_A200_01",
    "deep_purple_50_02",
    "purple_400_a7",
    "yellow_100_01",
    "deep_purple_50",
    "white_A700_05",
    "gray_400_0a",
    "cyan_50",
    "gray_100_04",
    "gray_50_ab",
    "green_50",
    "yellow_100",
    "indigo_50",
    "orange_50",
    "blue_gray_100_02",
  ]),
};

export { Button };
