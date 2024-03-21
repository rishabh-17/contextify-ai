import { Button } from "@mui/material";

const GroupComponent1 = () => {
  return (
    <section className="w-[69.338rem] !m-[0] absolute top-[79.438rem] left-[-34.562rem] flex flex-col items-start justify-start pt-[0rem] pb-[53.213rem] pr-[7.213rem] pl-[34.563rem] box-border gap-[18.813rem] max-w-full text-center text-[3.125rem] text-gray-600 font-nunito">
      <div className="w-[34.775rem] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem]">
        <div className="absolute top-[4.876rem] left-[25.699rem] rounded-138xl-5 bg-blueviolet-400 w-[12.838rem] h-[61.094rem] [transform:_rotate(45deg)] [transform-origin:0_0]" />
        <div className="absolute top-[0.001rem] left-[8.636rem] rounded-138xl-5 bg-blueviolet-400 w-[12.838rem] h-[61.094rem] [transform:_rotate(45deg)] [transform-origin:0_0] z-[1]" />
        <div className="absolute top-[29.501rem] left-[23.261rem] rounded-138xl-5 bg-blueviolet-400 w-[12.838rem] h-[61.094rem] [transform:_rotate(45deg)] [transform-origin:0_0] z-[2]" />
      </div>
      <h1 className="m-0 w-[19.25rem] relative text-inherit leading-[110%] font-extrabold font-inherit inline-block z-[3] mq450:text-[1.875rem] mq450:leading-[2.063rem] mq825:text-[2.5rem] mq825:leading-[2.75rem]">
        What we do
      </h1>
      <div className="self-stretch flex flex-row items-start justify-end max-w-full">
        <div className="flex flex-row items-start justify-center gap-[1.313rem] max-w-full lg:flex-wrap">
          <div className="h-[6.313rem] rounded-[247.02px] bg-base-white shadow-[0px_54.5px_64.09px_rgba(205,_205,_205,_0.16)] flex flex-row items-start justify-start pt-[1.95rem] pb-[1.988rem] pr-[2.588rem] pl-[2.6rem] box-border min-w-[13.313rem] z-[4] lg:flex-1">
            <img
              className="h-[2.375rem] w-[8.125rem] relative overflow-hidden shrink-0 lg:flex-1"
              loading="lazy"
              alt=""
              src="/formatwordmark.svg"
            />
          </div>
          <div className="w-[9.25rem] flex flex-col items-start justify-start pt-[0.188rem] px-[0rem] pb-[0rem] box-border">
            <Button
              className="self-stretch h-[5.75rem] z-[4]"
              variant="contained"
              sx={{
                background: "#fff",
                borderRadius: "247.02137756347656px",
                "&:hover": { background: "#fff" },
                height: 92,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent1;
