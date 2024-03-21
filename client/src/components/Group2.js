import { useMemo } from "react";

const Group2 = ({ group, educationSystem, propRight }) => {
  const manyDesktopPublishingStyle = useMemo(() => {
    return {
      right: propRight,
    };
  }, [propRight]);

  return (
    <div className="w-[26rem] rounded-3xl bg-base-white shadow-[0px_54.5px_64.09px_rgba(205,_205,_205,_0.16)] flex flex-row items-start justify-start pt-[1.875rem] px-[1.25rem] pb-[4.375rem] box-border gap-[1.25rem] max-w-full text-left text-[1.5rem] text-black1 font-junge mq450:flex-wrap">
      <div className="h-[9.375rem] w-[26rem] relative rounded-3xl bg-base-white shadow-[0px_54.5px_64.09px_rgba(205,_205,_205,_0.16)] hidden max-w-full" />
      <img
        className="h-[3.125rem] w-[3.125rem] relative z-[1]"
        alt=""
        src={group}
      />
      <div className="flex flex-row items-start justify-start relative">
        <h3 className="m-0 relative text-inherit leading-[1.875rem] capitalize font-normal font-inherit z-[1] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
          {educationSystem}
        </h3>
        <div
          className="w-[19.188rem] absolute !m-[0] right-[-6.562rem] bottom-[-4.625rem] text-[1.063rem] leading-[1.688rem] text-gray-1800 flex items-center z-[2]"
          style={manyDesktopPublishingStyle}
        >
          Many desktop publishing packages and web page editors now use for
          them.
        </div>
      </div>
    </div>
  );
};

export default Group2;
