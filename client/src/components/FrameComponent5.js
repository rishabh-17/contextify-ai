import SymbolLibrary from "./SymbolLibrary";

const FrameComponent5 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-end max-w-full text-center text-[3.125rem] text-gray-600 font-junge">
      <div className="w-[90rem] flex flex-col items-start justify-start gap-[4.313rem] max-w-full mq450:gap-[1.063rem_4.313rem] mq825:gap-[2.125rem_4.313rem]">
        <div className="w-[88.625rem] flex flex-row items-start justify-start py-[0rem] px-[0.563rem] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1425:flex-wrap">
            <h1 className="m-0 w-[19.25rem] relative text-inherit leading-[110%] font-normal font-inherit inline-block shrink-0 min-w-[19.25rem] z-[1] mq450:text-[1.875rem] mq450:leading-[2.063rem] mq825:text-[2.5rem] mq825:leading-[2.75rem] mq1425:flex-1">{`The Power Trio `}</h1>
            <div className="w-[56.313rem] relative text-[1.125rem] leading-[1.875rem] text-left inline-block shrink-0 min-w-[56.313rem] max-w-full z-[1] text-black1 lg:min-w-full mq1425:flex-1">
              <p className="m-0">
                <span className="text-black1">{`1: `}</span>
                <span className="text-gray-500">{`Marie Curie `}</span>
                <span>{`is one of our talented and experienced makeup artists. She has been working in the beauty industry for over 10 years and has a passion for creating stunning looks for different occasions. `}</span>
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                <span>{`2: `}</span>
                <span className="text-gray-500">Odelia Chan</span>
                <span>{` is our amazing and creative content writer. She has a degree in journalism and a flair for writing engaging and informative articles. She covers topics such as makeup trends, product reviews, celebrity news, and more. She also edits and proofreads our content to ensure quality and accuracy. `}</span>
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                <span>{`3: `}</span>
                <span className="text-gray-500">Maria Garcia</span>
                <span className="text-black1">{` is our wonderful and friendly community manager. She has a background in social media and customer service and a love for makeup and beauty. `}</span>
              </p>
            </div>
          </div>
        </div>
        <SymbolLibrary
          propFlex="unset"
          propAlignSelf="stretch"
          propHeight="68.75rem"
        />
      </div>
    </div>
  );
};

export default FrameComponent5;
