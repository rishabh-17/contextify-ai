import Group6 from "./Navbar";

const ContainerDiv = () => {
  return (
    <section className="self-stretch flex flex-row items-end justify-start pt-[0rem] pb-[2.044rem] px-[0rem] box-border gap-[22.063rem] max-w-full text-center text-[4.688rem] text-gray-600 font-junge mq450:gap-[22.063rem_2.75rem] mq1350:flex-wrap mq1350:gap-[22.063rem_11rem] mq800:gap-[22.063rem_5.5rem]">
      <div className="w-[90rem] flex flex-col items-end justify-start gap-[19.438rem] shrink-0 [debug_commit:f6aba90] mq450:gap-[4.875rem_19.438rem] mq800:gap-[9.688rem_19.438rem]">
        <Group6
          dataLinkWidth="unset"
          dataLinkPosition="sticky"
          dataLinkAlignSelf="stretch"
          dataLinkTop="0"
          frameDivWidth="100%"
          frameDivRight="0rem"
        />
        <div className="w-[85.563rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="w-[74.563rem] flex flex-col items-start justify-start gap-[2.688rem] max-w-full mq800:gap-[1.313rem_2.688rem]">
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
              <h1 className="m-0 w-[43.438rem] relative text-inherit leading-[5.188rem] font-normal font-inherit inline-block shrink-0 max-w-full mq450:text-[2.813rem] mq450:leading-[3.063rem] mq800:text-[3.75rem] mq800:leading-[4.125rem]">
                Get in touch today!
              </h1>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[1.688rem] max-w-full text-left text-[1.375rem] text-gray-700 mq1125:flex-wrap">
              <div className="flex-[0.9723] rounded-21xl bg-base-white shadow-[0px_24px_33px_rgba(181,_181,_181,_0.25)] box-border flex flex-row items-start justify-between py-[2.125rem] pr-[3.25rem] pl-[2.375rem] min-w-[23.688rem] max-w-full gap-[1.25rem] border-[1px] border-solid border-gainsboro-100 mq450:min-w-full mq450:flex-1 mq800:flex-wrap mq800:justify-center mq800:pr-[1.625rem] mq800:box-border">
                <div className="h-[5.188rem] w-[11.188rem] flex flex-row items-start justify-start gap-[1rem]">
                  <div className="self-stretch flex-[0.5663] rounded-xl bg-mediumslateblue-100 flex flex-row items-start justify-start pt-[1.438rem] px-[1.125rem] pb-[1.375rem]">
                    <div className="h-[5.188rem] w-[5.188rem] relative rounded-xl bg-mediumslateblue-100 hidden" />
                    <img
                      className="h-[2.375rem] w-[2.813rem] relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem]">
                    <h3 className="m-0 relative text-inherit leading-[4.438rem] capitalize font-normal font-inherit inline-block min-w-[5rem] mq450:text-[1.125rem] mq450:leading-[3.563rem]">
                      Mail Us
                    </h3>
                  </div>
                </div>
                <div className="w-[11.188rem] flex flex-col items-start justify-start pt-[0.406rem] px-[0rem] pb-[0rem] box-border text-right text-gray-500">
                  <h3 className="m-0 self-stretch h-[4.375rem] relative text-inherit leading-[157.4%] lowercase font-normal font-inherit inline-block mq450:text-[1.125rem] mq450:leading-[1.75rem]">
                    saasup@gmail.co
                  </h3>
                </div>
              </div>
              <div className="flex-1 rounded-21xl bg-base-white shadow-[0px_24px_33px_rgba(181,_181,_181,_0.25)] box-border flex flex-col items-start justify-center py-[2.125rem] px-[2.375rem] min-w-[23.688rem] max-w-full font-nunito border-[1px] border-solid border-gainsboro-100 mq450:min-w-full">
                <div className="w-[30.25rem] flex flex-row items-center justify-between gap-[1.25rem] max-w-full mq800:flex-wrap">
                  <div className="h-[5.188rem] flex flex-row items-center justify-start py-[0rem] pr-[0.063rem] pl-[0rem] box-border gap-[1rem]">
                    <img
                      className="h-[5.188rem] w-[5.188rem] relative"
                      loading="lazy"
                      alt=""
                      src="/icon-1.svg"
                    />
                    <h3 className="m-0 relative text-inherit leading-[4.438rem] capitalize font-bold font-inherit inline-block min-w-[4.625rem] mq450:text-[1.125rem] mq450:leading-[3.563rem]">
                      Call Us
                    </h3>
                  </div>
                  <div className="w-[10.625rem] relative leading-[2.188rem] lowercase text-gray-500 text-right inline-block whitespace-nowrap mq450:text-[1.125rem] mq450:leading-[1.75rem]">
                    +001 6547 6589
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[44.5rem] w-[20.75rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[3.625rem] box-border max-w-full mq1350:pb-[2.375rem] mq1350:box-border mq800:pb-[1.563rem] mq800:box-border">
        <div className="self-stretch h-[83.938rem] relative rounded-129xl shrink-0 [debug_commit:f6aba90] flex items-center justify-center">
          <img
            className="self-stretch h-full max-w-full overflow-hidden shrink-0 [debug_commit:f6aba90] object-contain absolute left-[-43.687rem] top-[0rem] w-full [transform:scale(5.213)]"
            alt=""
            src="/frame-13.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContainerDiv;
