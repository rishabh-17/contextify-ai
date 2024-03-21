import { useMemo } from "react";
import { Button } from "@mui/material";

const Advance = ({
  optionMark,
  month,
  adv,
  propTop,
  propBottom,
  propLeft,
  propMinWidth,
}) => {
  const optionMarkIconStyle = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  const advStyle = useMemo(() => {
    return {
      left: propLeft,
      minWidth: propMinWidth,
    };
  }, [propLeft, propMinWidth]);

  return (
    <div className="h-[87.75rem] w-[15rem] relative text-left text-[1.25rem] text-gray-600 font-junge">
      <Button
        className="absolute top-[83.063rem] left-[1.25rem]"
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "18",
          background: "#4b0082",
          borderRadius: "39px",
          "&:hover": { background: "#4b0082" },
          width: 200,
          height: 75,
        }}
      >
        Get Started
      </Button>
      <img
        className="absolute h-[69.87%] w-[11.67%] top-[18.23%] right-[44.17%] bottom-[11.89%] left-[44.17%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={optionMark}
        style={optionMarkIconStyle}
      />
      <div className="absolute top-[3.188rem] left-[3.125rem] leading-[110%] mq450:text-[1rem] mq450:leading-[1.125rem]">
        {month}
      </div>
      <h1
        className="m-0 absolute top-[0rem] left-[5.125rem] text-[2.5rem] leading-[110%] font-normal font-inherit inline-block min-w-[4.563rem] mq450:text-[1.5rem] mq450:leading-[1.625rem] mq800:text-[2rem] mq800:leading-[2.188rem]"
        style={advStyle}
      >
        {adv}
      </h1>
    </div>
  );
};

export default Advance;
