const Group5 = ({ group, prop }) => {
  return (
    <div className="bg-base-white shadow-[0px_4px_53px_rgba(170,_170,_170,_0.25)] flex flex-row items-start justify-start pt-[1.375rem] pb-[1.188rem] pr-[2.063rem] pl-[3.625rem] z-[1] text-center text-[0.625rem] text-dimgray-100 font-roboto">
      <div className="h-[5.25rem] w-[10.5rem] relative bg-base-white shadow-[0px_4px_53px_rgba(170,_170,_170,_0.25)] hidden z-[1]" />
      <div className="flex flex-col items-start justify-start pt-[2.125rem] px-[0rem] pb-[0rem]">
        <div className="flex flex-row items-start justify-start relative">
          <img
            className="h-[2.925rem] w-[2.925rem] absolute !m-[0] top-[-2.3rem] left-[-2.837rem] z-[1]"
            alt=""
            src={group}
          />
          <div className="w-[4.25rem] relative tracking-[0.11em] leading-[93.19%] font-medium inline-block min-w-[4.25rem] z-[2]">
            COMPLETED
          </div>
        </div>
      </div>
      <div className="w-[4.375rem] relative text-[1.625rem] tracking-[0.02em] leading-[93.19%] font-semibold font-inter text-black1 inline-block min-w-[4.375rem] z-[1] ml-[-3.812rem] mq450:text-[1.313rem] mq450:leading-[1.188rem]">
        {prop}
      </div>
    </div>
  );
};

export default Group5;
