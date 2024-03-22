import { useMemo } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Navbar = ({
  dataLinkWidth,
  dataLinkPosition,
  dataLinkAlignSelf,
  dataLinkTop,
  frameDivWidth,
  frameDivRight,
}) => {
  const groupStyle = useMemo(() => {
    return {
      width: dataLinkWidth,
      position: dataLinkPosition,
      alignSelf: dataLinkAlignSelf,
      top: dataLinkTop,
    };
  }, [dataLinkWidth, dataLinkPosition, dataLinkAlignSelf, dataLinkTop]);

  const rectangleStyle = useMemo(() => {
    return {
      width: frameDivWidth,
      right: frameDivRight,
    };
  }, [frameDivWidth, frameDivRight]);

  const navigate = useNavigate();

  return (
    <header
      className="w-[92.813rem] flex flex-row items-start justify-center py-[2rem] px-[1.25rem] box-border relative gap-[33.188rem] max-w-full text-left text-[1.688rem] text-blueviolet-200 font-junge mq450:gap-[33.188rem_4.125rem] mq825:gap-[33.188rem_8.313rem] mq1425:gap-[33.188rem_16.563rem]"
      style={groupStyle}
    >
      <div
        className="h-full w-[calc(100%_-_45px)] absolute !m-[0] top-[0rem] right-[2.813rem] bottom-[0rem] left-[0rem]"
        style={rectangleStyle}
      />
      <div className="w-[9.438rem] flex flex-col items-start justify-start pt-[1.125rem] px-[0rem] pb-[0rem] box-border">
        <div className="self-stretch flex flex-row items-start justify-start relative">
          <img
            className="h-[2.438rem] w-[7.313rem] absolute !m-[0] top-[-0.5rem] left-[-2.812rem] overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/frame.svg"
          />
          <h2
            className="m-0 flex-1 relative text-inherit leading-[1.625rem] capitalize font-normal font-inherit whitespace-nowrap z-[2]"
            onClick={() => navigate("/")}
          >
            Contextify
          </h2>
        </div>
      </div>
      <div className="w-[32.063rem] flex flex-row items-start justify-start gap-[1.313rem] max-w-full mq825:w-[11.313rem]">
        <nav className="m-0 flex-1 flex flex-col items-start justify-start pt-[1.063rem] px-[0rem] pb-[0rem] box-border max-w-full mq825:hidden">
          <nav className="m-0 self-stretch flex flex-row items-start justify-start gap-[1.188rem] text-left text-[1rem] text-base-white font-junge">
            <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.813rem] pl-[0rem]">
              <div
                className="relative leading-[1.625rem] capitalize inline-block min-w-[2.875rem] z-[1]"
                onClick={() => navigate("/")}
              >
                home
              </div>
            </div>
            <div className="flex-[0.8875] flex flex-col items-start justify-start py-[0rem] pr-[0.563rem] pl-[0rem]">
              <div
                className="relative leading-[1.625rem] capitalize inline-block min-w-[4.438rem] whitespace-nowrap z-[1]"
                onClick={() => navigate("/about")}
              >
                about us
              </div>
            </div>
            <div
              className="relative leading-[1.625rem] capitalize inline-block min-w-[3.25rem] z-[1]"
              onClick={() => navigate("/pricing")}
            >
              pricing
            </div>
            <div
              className="flex-1 relative leading-[1.625rem] capitalize inline-block min-w-[5.25rem] whitespace-nowrap z-[1]"
              onClick={() => navigate("/contact-us")}
            >
              Contact Us
            </div>
          </nav>
        </nav>
        <Button
          className="h-[3.75rem] w-[10rem] z-[1]"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#6640ff",
            fontSize: "16",
            background: "#fff",
            borderRadius: "150px",
            "&:hover": { background: "#fff" },
            width: 160,
            height: 60,
          }}
        >
          Get Free Trial
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
