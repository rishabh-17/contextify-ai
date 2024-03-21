import { useMemo } from "react";

const SitUpLight = ({
  group,
  xSitUp,
  workout,
  prop,
  propMinWidth,
  propBackgroundColor,
  propColor,
  propMinWidth1,
  propAlignSelf,
  propWidth,
}) => {
  const xSitUpStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const autoLayoutVerticalStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const workoutStyle = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth1,
    };
  }, [propColor, propMinWidth1]);

  const divStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div className="self-stretch flex flex-row items-start justify-between pt-[0.837rem] pb-[0.794rem] pr-[0.875rem] pl-[0.838rem] relative gap-[1.25rem] z-[1] text-left text-[0.731rem] text-black1 font-inter mq825:flex-wrap">
      <div className="h-full w-full absolute !m-[0] bottom-[-0.031rem] left-[0rem] rounded-[10.07px] bg-gray-1600" />
      <div className="flex flex-row items-start justify-start gap-[0.844rem] mq450:flex-wrap">
        <img
          className="h-[2.306rem] w-[2.306rem] relative z-[1]"
          alt=""
          src={group}
        />
        <div className="flex flex-col items-start justify-start gap-[0.406rem]">
          <div
            className="relative leading-[1.063rem] font-semibold inline-block min-w-[4.25rem] z-[1]"
            style={xSitUpStyle}
          >
            {xSitUp}
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.362rem] text-[0.631rem] text-gray-400">
            <div className="rounded-[5.03px] bg-whitesmoke-200 overflow-hidden flex flex-row items-start justify-start pt-[0.263rem] px-[0.419rem] pb-[0.262rem] z-[1]">
              <div className="relative leading-[0.75rem] font-medium inline-block min-w-[2.625rem]">
                Personal
              </div>
            </div>
            <div
              className="rounded-[5.03px] bg-seashell overflow-hidden flex flex-row items-start justify-start pt-[0.263rem] px-[0.419rem] pb-[0.262rem] z-[1] text-sandybrown"
              style={autoLayoutVerticalStyle}
            >
              <div
                className="relative leading-[0.75rem] font-medium inline-block min-w-[2.563rem]"
                style={workoutStyle}
              >
                {workout}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[2.725rem] w-[2.631rem] flex flex-col items-end justify-start gap-[0.406rem] text-right text-[0.631rem] text-blueviolet-300">
        <div
          className="self-stretch relative leading-[1.063rem] inline-block min-w-[2.625rem] whitespace-nowrap z-[1]"
          style={divStyle}
        >
          {prop}
        </div>
        <img
          className="w-[1.256rem] h-[1.256rem] relative overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/frame-4.svg"
        />
      </div>
    </div>
  );
};

export default SitUpLight;
