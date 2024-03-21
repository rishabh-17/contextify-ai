const Group3 = () => {
  return (
    <div className="w-[16.5rem] !m-[0] absolute top-[40.313rem] right-[6.25rem] rounded-[23.93px] bg-base-white shadow-[0px_54.3px_63.92px_rgba(205,_205,_205,_0.16)] flex flex-row items-start justify-start py-[1.5rem] pr-[1.5rem] pl-[1.563rem] box-border gap-[0.938rem] z-[6] text-left text-[1.125rem] text-black1 font-inter">
      <div className="h-[6.125rem] w-[16.5rem] relative rounded-[23.93px] bg-base-white shadow-[0px_54.3px_63.92px_rgba(205,_205,_205,_0.16)] hidden" />
      <div className="h-[2.5rem] w-[2.5rem] relative">
        <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-aliceblue-200 w-full h-full z-[1]" />
        <img
          className="absolute top-[0.563rem] left-[0.563rem] w-[1.313rem] h-[1.313rem] object-cover z-[2]"
          alt=""
          src="/image@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.563rem]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-end">
              <div className="h-[0.125rem] w-[0.688rem] relative">
                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-silver-200 w-[0.125rem] h-[0.125rem] z-[1]" />
                <div className="absolute top-[0rem] left-[0.313rem] rounded-[50%] bg-silver-200 w-[0.125rem] h-[0.125rem] z-[1]" />
                <div className="absolute top-[0rem] left-[0.563rem] rounded-[50%] bg-silver-200 w-[0.125rem] h-[0.125rem] z-[1]" />
              </div>
            </div>
            <b className="w-[5.25rem] relative inline-block whitespace-nowrap z-[1]">
              $4,250
            </b>
          </div>
          <div className="relative text-[0.75rem] text-lightslategray-400 inline-block min-w-[6.5rem] z-[1]">
            Earned this month
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group3;
