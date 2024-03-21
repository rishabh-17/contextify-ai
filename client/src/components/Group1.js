const Group1 = ({ group, officialsFinancial }) => {
  return (
    <div className="w-[26rem] rounded-3xl bg-base-white shadow-[0px_54.5px_64.09px_rgba(205,_205,_205,_0.16)] flex flex-row items-start justify-start pt-[1.875rem] pb-[1rem] pr-[1.188rem] pl-[1.25rem] box-border gap-[1.25rem] max-w-full text-left text-[1.5rem] text-black1 font-junge mq450:flex-wrap">
      <div className="h-[9.375rem] w-[26rem] relative rounded-3xl bg-base-white shadow-[0px_54.5px_64.09px_rgba(205,_205,_205,_0.16)] hidden max-w-full" />
      <img
        className="h-[3.125rem] w-[3.125rem] relative object-contain z-[1]"
        alt=""
        src={group}
      />
      <div className="flex-1 flex flex-col items-start justify-start min-w-[12.5rem]">
        <h3 className="m-0 relative text-inherit leading-[1.875rem] capitalize font-normal font-inherit shrink-0 [debug_commit:f6aba90] z-[1] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
          {officialsFinancial}
        </h3>
        <div className="self-stretch h-[4.625rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border text-[1.063rem] text-gray-1800">
          <div className="mt-[-0.437rem] flex-1 relative leading-[1.688rem] shrink-0 [debug_commit:f6aba90] z-[1]">
            Many desktop publishing packages and web page editors now use for
            them.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group1;
