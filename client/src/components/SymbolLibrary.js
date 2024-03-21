import { useMemo } from "react";
import { Button } from "@mui/material";

const SymbolLibrary = ({ propFlex, propAlignSelf, propHeight }) => {
  const symbolLibraryStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  const fontSelectorStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className="h-[32.438rem] flex-1 relative bg-whitesmoke-100 overflow-hidden max-w-full text-center text-[1.125rem] text-black1 font-junge"
      style={symbolLibraryStyle}
    >
      <div
        className="absolute top-[-4.812rem] left-[52.125rem] w-[37.875rem] h-[72rem]"
        style={fontSelectorStyle}
      >
        <img
          className="absolute top-[7.688rem] left-[0rem] rounded-50xl w-[66.763rem] h-[66.763rem] object-contain"
          alt=""
          src="/polygon-1.svg"
        />
        <img
          className="absolute top-[0rem] left-[8.938rem] rounded-50xl w-[66.763rem] h-[66.763rem] object-contain mix-blend-multiply z-[1]"
          alt=""
          src="/polygon-2.svg"
        />
      </div>
      <Button
        className="absolute top-[18.688rem] left-[34.375rem] z-[1]"
        disableElevation={true}
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#000",
          fontSize: "16",
          borderColor: "#000",
          borderRadius: "100px",
          "&:hover": { borderColor: "#000" },
          width: 340,
          height: 80,
        }}
      >
        Start Your Free Trial Today
      </Button>
      <div className="absolute top-[13.438rem] left-[32.375rem] leading-[2rem] capitalize whitespace-pre-wrap inline-block w-[25.313rem] z-[1]">
        Contexttify is a hub puts information into context at the click of a
        button
      </div>
      <h1 className="m-0 absolute top-[8.813rem] left-[28.688rem] text-[3rem] leading-[3.125rem] capitalize font-normal font-inherit z-[2] mq450:text-[1.813rem] mq450:leading-[1.875rem] mq825:text-[2.375rem] mq825:leading-[2.5rem]">
        try Contextify for free
      </h1>
      <div className="absolute top-[-37.262rem] left-[0rem] w-[46.25rem] h-[74.45rem]">
        <img
          className="absolute top-[0rem] left-[-28.95rem] rounded-50xl w-[66.763rem] h-[66.763rem] object-contain"
          alt=""
          src="/polygon-3.svg"
        />
        <div className="absolute top-[46.075rem] left-[36.375rem] bg-papayawhip w-[9.875rem] h-[3.125rem] z-[1]" />
        <img
          className="absolute top-[7.688rem] left-[-37.887rem] rounded-50xl w-[66.763rem] h-[66.763rem] object-contain mix-blend-multiply z-[3]"
          alt=""
          src="/polygon-4.svg"
        />
      </div>
    </div>
  );
};

export default SymbolLibrary;
