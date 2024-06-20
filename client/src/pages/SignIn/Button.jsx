import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[20px]",
};
const variants = {
  fill: {
    deep_purple_50: "bg-deep_purple-50 text-deep_purple-A400",
    white_A700: "bg-white-A700 text-blue_gray-900",
    purple_900: "bg-purple-900 text-white-A700",
  },
};
const sizes = {
  sm: "h-[60px] px-[29px] text-base",
  lg: "h-[72px] px-[34px] text-lg",
  xl: "h-[75px] px-[34px] text-lg",
  "2xl": "h-[80px] px-[35px] text-[22px]",
  xs: "h-[40px] px-[30px] text-xl",
  md: "h-[64px] px-[35px] text-[22px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
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
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "lg", "xl", "2xl", "xs", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["deep_purple_50", "white_A700", "purple_900"]),
};

export { Button };
