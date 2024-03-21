import { Button } from "@mui/material";

const FrameComponent1 = () => {
  return (
    <div className="w-[21.25rem] flex flex-col items-start justify-start gap-[1rem] max-w-full text-left text-[1rem] text-black1 font-junge">
      <h1 className="m-0 relative text-[2rem] leading-[2.625rem] capitalize font-normal font-inherit mq450:text-[1.188rem] mq450:leading-[1.563rem] mq825:text-[1.625rem] mq825:leading-[2.125rem]">
        Newsletter
      </h1>
      <div className="relative leading-[1.625rem] capitalize inline-block min-w-[7.688rem]">
        Stay up to date
      </div>
      <div className="self-stretch rounded-81xl bg-base-white box-border flex flex-row items-start justify-between py-[0.625rem] pr-[0.75rem] pl-[1.375rem] max-w-full gap-[1.25rem] text-darkgray-400 border-[2px] border-solid border-gainsboro-200 mq450:flex-wrap">
        <div className="h-[5rem] w-[21.25rem] relative rounded-81xl bg-base-white box-border hidden max-w-full border-[2px] border-solid border-gainsboro-200" />
        <div className="flex flex-col items-start justify-start pt-[1.063rem] px-[0rem] pb-[0rem]">
          <div className="relative leading-[1.625rem] inline-block min-w-[5rem] z-[1]">{`Your email `}</div>
        </div>
        <Button
          className="h-[3.75rem] w-[10rem] z-[1]"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#4b0082",
            borderRadius: "50px",
            "&:hover": { background: "#4b0082" },
            width: 160,
            height: 60,
          }}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default FrameComponent1;
