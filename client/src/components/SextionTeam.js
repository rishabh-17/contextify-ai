const SextionTeam = () => {
  return (
    <div className="w-[89.75rem] overflow-hidden flex flex-row items-start justify-end pt-[0.125rem] px-[13.375rem] pb-[3.188rem] box-border gap-[2.313rem] max-w-full z-[1] lg:flex-wrap lg:justify-center lg:pl-[6.688rem] lg:pr-[6.688rem] lg:box-border mq825:gap-[2.313rem_1.125rem] mq825:pt-[1.25rem] mq825:px-[3.313rem] mq825:pb-[2.063rem] mq825:box-border">
      <div className="w-[15.625rem] flex flex-col items-start justify-start gap-[3.813rem] mq450:gap-[1.875rem_3.813rem]">
        <div className="self-stretch rounded-231xl flex flex-row items-start justify-start pt-[6.938rem] px-[0rem] pb-[6.875rem] bg-cover bg-no-repeat bg-[top]">
          <img
            className="h-[15.625rem] w-[15.625rem] relative rounded-231xl object-cover hidden"
            alt=""
            src="/user1-1@2x.png"
          />
          <button className="cursor-pointer [border:none] p-[0.313rem] bg-darkorchid rounded-8xs overflow-hidden flex flex-row items-start justify-start opacity-[0.85] whitespace-nowrap z-[1] hover:bg-mediumorchid">
            <div className="w-[5.688rem] relative text-[1rem] font-light font-inter text-lavenderblush-200 text-center flex items-center justify-center min-w-[5.688rem]">
              {" "}
              Marie Curie
            </div>
          </button>
        </div>
        <div className="self-stretch rounded-231xl flex flex-row items-start justify-start pt-[6.938rem] px-[0rem] pb-[6.875rem] bg-cover bg-no-repeat bg-[top]">
          <img
            className="h-[15.625rem] w-[15.625rem] relative rounded-231xl object-cover hidden"
            alt=""
            src="/user1-1@2x.png"
          />
          <button className="cursor-pointer [border:none] py-[0.313rem] px-[0.625rem] bg-darkorchid rounded-8xs overflow-hidden flex flex-row items-start justify-start opacity-[0.85] whitespace-nowrap z-[1] hover:bg-mediumorchid">
            <div className="w-[6.563rem] relative text-[1rem] font-light font-inter text-ghostwhite-400 text-center flex items-center justify-center min-w-[6.563rem]">
              Paula Roberta
            </div>
          </button>
        </div>
      </div>
      <div className="w-[15.625rem] flex flex-col items-start justify-start pt-[9.688rem] px-[0rem] pb-[0rem] box-border mq450:pt-[6.313rem] mq450:box-border">
        <div className="self-stretch flex flex-row items-start justify-start relative">
          <div className="h-[17.063rem] w-[17.063rem] absolute !m-[0] top-[-3.187rem] right-[-2.375rem] rounded-[50%] bg-darkorchid shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]" />
          <div className="flex-1 rounded-231xl flex flex-row items-start justify-start py-[6.938rem] px-[0rem] gap-[0.625rem] bg-[url('/public/user1-1@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
            <img
              className="h-[15.625rem] w-[15.625rem] relative rounded-231xl object-cover hidden"
              alt=""
              src="/user1-1@2x.png"
            />
            <button className="cursor-pointer [border:none] py-[0.313rem] px-[0.625rem] bg-darkorchid rounded-8xs overflow-hidden flex flex-row items-start justify-start opacity-[0.85] whitespace-nowrap z-[1] hover:bg-mediumorchid">
              <div className="w-[5.75rem] relative text-[1rem] font-light font-inter text-base-white text-center flex items-center justify-center min-w-[5.75rem]">
                Odelia Chan
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="h-[32.313rem] flex-1 hidden max-w-full" />
      <div className="h-[3.125rem] w-[0rem] hidden" />
    </div>
  );
};

export default SextionTeam;
