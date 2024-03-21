import { useMemo } from "react";

const AnalyticsContainer = ({
  dataVisualizationType,
  analyticsDescription,
  analyticsTypeDescription,
  analyticsFeatureName,
  bgWidth,
  bgMinWidth,
  bgLeft,
  propLeft,
  propWidth,
  propLeft1,
  propWidth1,
}) => {
  const analyticsStyle = useMemo(() => {
    return {
      width: bgWidth,
      minWidth: bgMinWidth,
    };
  }, [bgWidth, bgMinWidth]);

  const realtimeAnalyticsStyle = useMemo(() => {
    return {
      left: bgLeft,
    };
  }, [bgLeft]);

  const userAnalyticsStyle = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  const funnelOptimizationStyle = useMemo(() => {
    return {
      left: propLeft1,
      width: propWidth1,
    };
  }, [propLeft1, propWidth1]);

  return (
    <div className="self-stretch h-[21.688rem] relative text-left text-[1.25rem] text-gray-500 font-nunito">
      <div
        className="absolute top-[0rem] left-[4.019rem] leading-[110%] font-semibold text-mediumblue inline-block w-[5.313rem] min-w-[5.313rem] mq450:text-[1rem] mq450:leading-[1.125rem]"
        style={analyticsStyle}
      >
        {dataVisualizationType}
      </div>
      <div className="absolute top-[3.688rem] left-[0rem] bg-base-white w-[87.438rem] h-[6rem]">
        <div className="absolute top-[0rem] left-[0rem] bg-base-white w-full h-full hidden" />
        <div
          className="absolute top-[2.125rem] left-[4.081rem] inline-block w-[10.544rem] z-[1] mq450:text-[1rem]"
          style={realtimeAnalyticsStyle}
        >
          {analyticsDescription}
        </div>
      </div>
      <div className="absolute top-[9.75rem] left-[0rem] bg-whitesmoke-100 w-[87.438rem] h-[6rem]">
        <div className="absolute top-[0rem] left-[0rem] bg-whitesmoke-100 w-full h-full hidden" />
        <div
          className="absolute top-[2.063rem] left-[4.019rem] inline-block w-[8.225rem] z-[1] mq450:text-[1rem]"
          style={userAnalyticsStyle}
        >
          {analyticsTypeDescription}
        </div>
      </div>
      <div className="absolute top-[15.688rem] left-[0rem] bg-base-white w-[87.438rem] h-[6rem] z-[1]">
        <div className="absolute top-[0rem] left-[0rem] bg-base-white w-full h-full hidden" />
        <div
          className="absolute top-[2.125rem] left-[4.019rem] inline-block w-[11.363rem] z-[2] mq450:text-[1rem]"
          style={funnelOptimizationStyle}
        >
          {analyticsFeatureName}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsContainer;
