import FrameComponent1 from "./FrameComponent1";

const FrameComponent8 = () => {
  return (
    <footer className="w-[88.5rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1rem] text-black1 font-junge">
      <div className="w-[75.5rem] flex flex-col items-start justify-start gap-[3.75rem] max-w-full mq800:gap-[1.875rem_3.75rem]">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1125:flex-wrap">
          <div className="w-[20.313rem] flex flex-row items-start justify-start gap-[4.063rem] max-w-full text-[1.688rem] text-indigo font-inter mq450:gap-[4.063rem_2rem]">
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.875rem]">
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.75rem]">
                  <h2 className="m-0 flex-1 relative text-inherit leading-[1.625rem] capitalize font-normal font-inherit z-[1] mq450:text-[1.375rem] mq450:leading-[1.313rem]">
                    Contextify
                  </h2>
                </div>
                <div className="flex flex-col items-start justify-start gap-[1.5rem] text-[1rem] text-black1 font-junge">
                  <div className="relative leading-[1.625rem] capitalize whitespace-nowrap">
                    help@contextify.com
                  </div>
                  <div className="relative leading-[1.625rem] capitalize inline-block min-w-[7.875rem] whitespace-nowrap">
                    +1 234 456 678 89
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[5.063rem] flex flex-col items-start justify-start gap-[1rem] text-[1rem] text-black1 font-junge">
              <h1 className="m-0 self-stretch relative text-[2rem] leading-[2.625rem] capitalize font-normal font-inherit text-center inline-block min-w-[5.063rem] mq450:text-[1.188rem] mq450:leading-[1.563rem] mq800:text-[1.625rem] mq800:leading-[2.125rem]">
                links
              </h1>
              <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
                <div className="relative leading-[1.625rem] capitalize inline-block min-w-[2.875rem]">
                  home
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.5rem] pl-[0.125rem]">
                <div className="relative leading-[1.625rem] capitalize inline-block min-w-[4.438rem]">
                  about us
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.625rem] pl-[0.125rem]">
                <div className="relative leading-[1.625rem] capitalize inline-block min-w-[4.313rem]">
                  bookings
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
                <div className="relative leading-[1.625rem] capitalize inline-block min-w-[2.063rem]">
                  blog
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.563rem] pl-[0rem] gap-[1rem]">
            <h1 className="m-0 relative text-[2rem] leading-[2.625rem] capitalize font-normal font-inherit inline-block min-w-[5rem] mq450:text-[1.188rem] mq450:leading-[1.563rem] mq800:text-[1.625rem] mq800:leading-[2.125rem]">
              legal
            </h1>
            <div className="relative leading-[1.625rem] capitalize inline-block min-w-[6.438rem]">
              terms of use
            </div>
            <div className="relative leading-[1.625rem] capitalize inline-block min-w-[6.375rem]">
              privacy policy
            </div>
            <div className="relative leading-[1.625rem] capitalize inline-block min-w-[6.25rem]">
              cookie policy
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.625rem] pl-[0rem] gap-[1rem]">
            <h1 className="m-0 relative text-[2rem] leading-[2.625rem] capitalize font-normal font-inherit inline-block min-w-[7.375rem] mq450:text-[1.188rem] mq450:leading-[1.563rem] mq800:text-[1.625rem] mq800:leading-[2.125rem]">
              product
            </h1>
            <div className="relative leading-[1.625rem] capitalize inline-block min-w-[4.75rem]">
              take tour
            </div>
            <div className="relative leading-[1.625rem] capitalize inline-block min-w-[4.438rem]">
              live chat
            </div>
            <div className="relative leading-[1.625rem] capitalize inline-block min-w-[3.875rem]">
              reveiws
            </div>
          </div>
          <FrameComponent1 />
        </div>
        <div className="w-[70.5rem] flex flex-row items-start justify-start py-[0rem] px-[2.938rem] box-border max-w-full mq1125:pl-[1.438rem] mq1125:pr-[1.438rem] mq1125:box-border">
          <div className="flex-1 box-border overflow-hidden flex flex-row items-start justify-center py-[2.438rem] pr-[1.25rem] pl-[3.938rem] max-w-full border-t-[1px] border-solid border-gainsboro-300 mq450:pl-[1.938rem] mq450:box-border">
            <div className="relative leading-[1.625rem] capitalize">
              Copyright 2022 Contextify inc. all rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent8;
