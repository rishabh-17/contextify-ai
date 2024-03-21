import { useMemo } from "react";

const FrameComponent3 = ({
  propWidth,
  propMarginLeft,
  propPadding,
  propLineHeight,
  propPadding1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const helpcontextifycomStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  const frameDiv3Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className="h-[8.688rem] w-[13.063rem] flex flex-col items-start justify-start gap-[1.375rem] text-left text-[1rem] text-black1 font-junge"
      style={frameDivStyle}
    >
      <div className="self-stretch flex-1 flex flex-row items-start justify-start text-[1.688rem] text-indigo font-inter">
        <img
          className="h-[2.438rem] w-[7.5rem] relative overflow-hidden shrink-0"
          alt=""
          src="/frame-8.svg"
        />
        <div
          className="flex-1 flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] ml-[-3.875rem]"
          style={frameDiv1Style}
        >
          <h2 className="m-0 self-stretch relative text-inherit leading-[1.625rem] capitalize font-normal font-inherit z-[1] mq450:text-[1.375rem] mq450:leading-[1.313rem]">
            Contextify
          </h2>
        </div>
      </div>
      <div
        className="flex flex-row items-start justify-start py-[0rem] pr-[0.563rem] pl-[0rem] gap-[0.5rem]"
        style={frameDiv2Style}
      >
        <div className="h-[1.563rem] flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem] box-border">
          <img
            className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
            alt=""
            src="/frame-9.svg"
          />
        </div>
        <div
          className="relative leading-[1.875rem] capitalize whitespace-nowrap"
          style={helpcontextifycomStyle}
        >
          help@contextify.com
        </div>
      </div>
      <div
        className="flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] gap-[0.5rem]"
        style={frameDiv3Style}
      >
        <div className="h-[1.563rem] flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem] box-border">
          <img
            className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
            alt=""
            src="/frame-10.svg"
          />
        </div>
        <div className="relative leading-[1.625rem] capitalize inline-block min-w-[7.875rem] whitespace-nowrap">
          +1 234 456 678 89
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
