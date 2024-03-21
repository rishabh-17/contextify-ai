import { Button } from "@mui/material";

const XGBoost = () => {
  return (
    <div className="w-[88.063rem] flex flex-row items-start justify-end py-[0rem] px-[1.75rem] box-border max-w-full text-left text-[1.063rem] text-black1 font-junge">
      <div className="flex-1 flex flex-col items-start justify-start gap-[2.375rem] max-w-full mq825:gap-[1.188rem_2.375rem]">
        <div className="w-[81.438rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="flex flex-col items-end justify-start gap-[1.375rem] max-w-full">
            <div className="flex flex-row items-start justify-end py-[0rem] px-[0.25rem]">
              <div className="flex flex-row items-start justify-start gap-[0.688rem] mq450:flex-wrap">
                <div className="relative leading-[1.875rem] capitalize">
                  trusted by 20,000+ clients
                </div>
                <div className="h-[1.344rem] w-[4.813rem] flex flex-col items-start justify-start pt-[0.563rem] px-[0rem] pb-[0rem] box-border">
                  <img
                    className="self-stretch h-[0.781rem] relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/group-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start max-w-full text-[3rem]">
              <div className="flex flex-row items-start justify-start relative max-w-full">
                <div className="h-[3.125rem] w-[8.563rem] absolute !m-[0] top-[-0.625rem] right-[3.813rem] bg-papayawhip" />
                <h1 className="m-0 relative text-inherit leading-[3.125rem] capitalize font-normal font-inherit z-[1] mq450:text-[1.813rem] mq450:leading-[1.875rem] mq825:text-[2.375rem] mq825:leading-[2.5rem]">
                  they trust us.
                </h1>
              </div>
              <h1 className="m-0 relative text-inherit leading-[3.125rem] capitalize font-normal font-inherit z-[2] ml-[-20.437rem] mq450:text-[1.813rem] mq450:leading-[1.875rem] mq825:text-[2.375rem] mq825:leading-[2.5rem]">
                they trust us.
              </h1>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-end justify-center gap-[1.313rem]">
          <div className="h-[6.313rem] rounded-[247.02px] bg-base-white shadow-[0px_54.5px_64.09px_rgba(205,_205,_205,_0.16)] flex flex-row items-start justify-start pt-[1.95rem] pb-[1.987rem] pr-[2.588rem] pl-[2.6rem] box-border z-[1]">
            <img
              className="h-[2.375rem] w-[8.125rem] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/formatwordmark.svg"
            />
          </div>
          <div className="w-[9.25rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.375rem] box-border">
            <Button
              className="self-stretch h-[5.75rem] z-[1]"
              variant="contained"
              sx={{
                background: "#fff",
                borderRadius: "247.02137756347656px",
                "&:hover": { background: "#fff" },
                height: 92,
              }}
            />
          </div>
          <Button
            className="h-[6.313rem] w-[13.313rem] z-[1]"
            disableElevation={true}
            variant="contained"
            sx={{
              background: "#fff",
              borderRadius: "247.02137756347656px",
              "&:hover": { background: "#fff" },
              width: 213,
              height: 101,
            }}
          />
          <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem] box-border min-w-[10.063rem]">
            <Button
              className="self-stretch h-[6.313rem] z-[1]"
              variant="contained"
              sx={{
                background: "#fff",
                borderRadius: "247.02137756347656px",
                "&:hover": { background: "#fff" },
                height: 101,
              }}
            />
          </div>
          <div className="w-[13.313rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.688rem] box-border">
            <Button
              className="self-stretch h-[5.063rem] z-[1]"
              disableElevation={true}
              variant="contained"
              sx={{
                background: "#fff",
                borderRadius: "247.02137756347656px",
                "&:hover": { background: "#fff" },
                height: 81,
              }}
            />
          </div>
          <div className="w-[13.313rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.313rem] box-border">
            <Button
              className="self-stretch h-[5.875rem] z-[1]"
              variant="contained"
              sx={{
                background: "#fff",
                borderRadius: "247.02137756347656px",
                "&:hover": { background: "#fff" },
                height: 94,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default XGBoost;
