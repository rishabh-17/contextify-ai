import { Button } from "@mui/material";
import Group6 from "./Group6";
import Component from "./Component";

const FrameComponent4 = () => {
  return (
    <div className="self-stretch flex flex-row items-end justify-start py-[0rem] px-[0rem] box-border gap-[17.313rem] max-w-full text-center text-[4.688rem] text-gray-600 font-junge mq450:gap-[17.313rem_2.188rem] mq1350:flex-wrap mq1350:gap-[17.313rem_8.625rem] mq800:gap-[17.313rem_4.313rem]">
      <div className="w-[90rem] flex flex-col items-start justify-start gap-[13.375rem] shrink-0 [debug_commit:f6aba90] mq450:gap-[3.313rem_13.375rem] mq800:gap-[6.688rem_13.375rem]">
        <Group6
          dataLinkWidth="unset"
          dataLinkPosition="sticky"
          dataLinkAlignSelf="stretch"
          dataLinkTop="0"
          frameDivWidth="100%"
          frameDivRight="0rem"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[1.188rem] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[2.5rem] max-w-full mq800:gap-[1.25rem_2.5rem]">
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
              <div className="w-[40.125rem] flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.313rem] pl-[1.25rem]">
                  <h1 className="m-0 w-[15.188rem] relative text-inherit leading-[5.188rem] font-normal font-inherit inline-block mq450:text-[2.813rem] mq450:leading-[3.063rem] mq800:text-[3.75rem] mq800:leading-[4.125rem]">
                    Pricing
                  </h1>
                </div>
                <h3 className="m-0 self-stretch relative text-[1.563rem] leading-[157.4%] font-normal font-inherit text-gray-500 mq450:text-[1.25rem] mq450:leading-[1.938rem]">
                  <p className="m-0">{`Lorem ipsum dolor sit amet consectetur adipiscing elit `}</p>
                  <p className="m-0">interdum ullamcorper sed pharetra sene.</p>
                </h3>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[1.875rem] max-w-full z-[3] text-left text-[2.5rem] mq1350:flex-wrap">
              <div className="flex-1 rounded-11xl bg-thistle flex flex-col items-start justify-start pt-[3.375rem] px-[2.125rem] pb-[5.25rem] box-border gap-[2.188rem] min-w-[20.938rem] max-w-full mq450:gap-[1.063rem_2.188rem]">
                <img
                  className="w-[27.938rem] h-[47rem] relative rounded-11xl hidden max-w-full"
                  alt=""
                  src="/background.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.438rem] box-border gap-[2.188rem] max-w-full mq450:gap-[1.063rem_2.188rem]">
                  <div className="w-[22.875rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[0.313rem] px-[0rem] pb-[0rem]">
                      <h1 className="m-0 relative text-inherit leading-[110%] font-normal font-inherit inline-block min-w-[5.938rem] z-[1] mq450:text-[1.5rem] mq450:leading-[1.625rem] mq800:text-[2rem] mq800:leading-[2.188rem]">
                        Basic
                      </h1>
                    </div>
                    <Button
                      className="h-[3.375rem] w-[7.438rem] z-[1]"
                      disableElevation={true}
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#797979",
                        fontSize: "18",
                        background: "#fff",
                        borderRadius: "39px",
                        "&:hover": { background: "#fff" },
                        width: 119,
                        height: 54,
                      }}
                    >
                      Save 30%
                    </Button>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[1.417rem]">
                    <div className="self-stretch h-[0.063rem] relative box-border z-[1] border-t-[1px] border-solid border-lightgray-100" />
                    <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.563rem] pl-[1.25rem]">
                      <div className="relative leading-[110%] z-[1] mq450:text-[1rem] mq450:leading-[2.188rem]">
                        <span>$7.99</span>
                        <span className="text-[1.25rem]"> / month</span>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[3.75rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                      <Button
                        className="h-[2.688rem] flex-1 z-[1]"
                        disableElevation={true}
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "#c68915",
                          fontSize: "20",
                          background: "#ffeecc",
                          borderRadius: "43px",
                          "&:hover": { background: "#ffeecc" },
                          height: 43,
                        }}
                      >
                        Billed as $96 per year
                      </Button>
                    </div>
                    <div className="self-stretch h-[0.063rem] relative box-border z-[1] border-t-[1px] border-solid border-lightgray-100" />
                  </div>
                </div>
                <div className="self-stretch h-[13.5rem] relative text-[1.25rem] text-center inline-block z-[1] text-gray-500 mq450:text-[1rem]">
                  <p className="m-0">Unlimited members</p>
                  <p className="m-0"></p>
                  <p className="m-0">
                    <span className="text-gray-600">Unlimited</span>
                    <span> feedback</span>
                  </p>
                  <p className="m-0"></p>
                  <p className="m-0">Weekly team Feedback Friday</p>
                  <p className="m-0"></p>
                  <p className="m-0">
                    <span>{`Custom Kudos `}</span>
                    <span className="text-gray-600">+9 illustration</span>
                  </p>
                  <p className="m-0"></p>
                  <p className="m-0">Team feedback history</p>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[0.063rem] pl-[0rem]">
                  <Button
                    className="h-[4.688rem] w-[12.5rem] z-[1]"
                    disableElevation={true}
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "#242331",
                      fontSize: "18",
                      borderColor: "#d3d3d3",
                      borderRadius: "39px",
                      "&:hover": { borderColor: "#d3d3d3" },
                      width: 200,
                      height: 75,
                    }}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
              <Component
                background="/background.svg"
                advanced="Advanced"
                prop="$10.99"
                billedYearly="Billed as $199 per year
"
              />
              <Component
                background="/background.svg"
                advanced="Pro"
                prop="$15.99"
                billedYearly="Billed as $243 per year
"
                propBackgroundColor="#dbcce6"
                propHeight="52.688rem"
                propColor="#242331"
                propMinWidth="3.938rem"
                propBorderTop="1px solid #d3d3d3"
                propColor1="#242331"
                propBorderTop1="1px solid #d3d3d3"
                propColor2="unset"
                propColor3="#797979"
                propColor4="#797979"
                propColor5="#5236ff"
                propColor6="#797979"
                propColor7="#797979"
                propColor8="#797979"
                propColor9="#797979"
                propColor10="#5236ff"
                propColor11="#797979"
                propColor12="#797979"
                propColor13="#797979"
                propColor14="#797979"
                propColor15="#797979"
                propColor16="#797979"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[87.875rem] w-[25.5rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[37.25rem] box-border max-w-full">
        <div className="self-stretch h-[93.688rem] relative rounded-129xl shrink-0 [debug_commit:f6aba90] flex items-center justify-center">
          <img
            className="self-stretch h-full max-w-full overflow-hidden shrink-0 [debug_commit:f6aba90] object-contain absolute left-[-43.875rem] top-[0rem] w-full [transform:scale(4.443)]"
            alt=""
            src="/frame-11.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
