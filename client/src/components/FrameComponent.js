import FrameComponent1 from "./FrameComponent1";

const FrameComponent = () => {
  return (
    <footer className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1rem] text-black1 font-junge">
      <div className="w-[77.5rem] flex flex-col items-start justify-start gap-[5.75rem] max-w-full mq450:gap-[1.438rem_5.75rem] mq825:gap-[2.875rem_5.75rem]">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] lg:flex-wrap">
          <div className="w-[12.5rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border text-[1.688rem] text-indigo font-inter">
            <div className="self-stretch flex flex-col items-start justify-start gap-[2rem]">
              <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[0.313rem]">
                <div className="w-[9.438rem] flex flex-row items-start justify-start relative">
                  <img
                    className="h-[2.438rem] w-[7.5rem] absolute !m-[0] bottom-[-0.5rem] left-[-2.75rem] overflow-hidden shrink-0"
                    alt=""
                    src="/frame-8.svg"
                  />
                  <h2 className="m-0 flex-1 relative text-inherit leading-[1.625rem] capitalize font-normal font-inherit z-[1] mq450:text-[1.375rem] mq450:leading-[1.313rem]">
                    Contextify
                  </h2>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-[1rem] text-black1 font-junge">
                <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem]">
                  <div className="h-[1.563rem] flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem] box-border">
                    <img
                      className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-9.svg"
                    />
                  </div>
                  <div className="relative leading-[1.625rem] capitalize whitespace-nowrap">
                    help@contextify.com
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.5rem]">
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
            </div>
          </div>
          <div className="w-[6.625rem] flex flex-col items-start justify-start py-[0rem] pr-[1.563rem] pl-[0rem] box-border gap-[1rem]">
            <h1 className="m-0 self-stretch relative text-[2rem] leading-[2.625rem] capitalize font-normal font-inherit text-center inline-block min-w-[5.063rem] mq450:text-[1.188rem] mq450:leading-[1.563rem] mq825:text-[1.625rem] mq825:leading-[2.125rem]">
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
          <div className="flex flex-col items-start justify-start py-[0rem] pr-[2.125rem] pl-[0rem] gap-[1rem]">
            <h1 className="m-0 relative text-[2rem] leading-[2.625rem] capitalize font-normal font-inherit inline-block min-w-[5rem] mq450:text-[1.188rem] mq450:leading-[1.563rem] mq825:text-[1.625rem] mq825:leading-[2.125rem]">
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
          <div className="flex flex-col items-start justify-start py-[0rem] pr-[2.188rem] pl-[0rem] gap-[1rem]">
            <h1 className="m-0 relative text-[2rem] leading-[2.625rem] capitalize font-normal font-inherit inline-block min-w-[7.375rem] mq450:text-[1.188rem] mq450:leading-[1.563rem] mq825:text-[1.625rem] mq825:leading-[2.125rem]">
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
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.5rem] pl-[1.25rem] box-border max-w-full">
          <div className="w-[64.625rem] box-border overflow-hidden shrink-0 flex flex-row items-start justify-center py-[2.438rem] pr-[1.25rem] pl-[3.938rem] max-w-full border-t-[1px] border-solid border-gainsboro-300 mq450:pl-[1.938rem] mq450:box-border">
            <div className="relative leading-[1.625rem] capitalize">
              Copyright 2022 Contextify inc. all rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
