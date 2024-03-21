import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const FrameComponent9 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-end pt-[0rem] px-[1.25rem] pb-[5.338rem] box-border max-w-full text-left text-[1.25rem] text-gray-600 font-junge mq800:pb-[2.25rem] mq800:box-border mq1125:pb-[3.5rem] mq1125:box-border">
      <div className="flex-1 rounded-21xl bg-thistle shadow-[0px_17px_44px_rgba(179,_179,_179,_0.25)] flex flex-col items-start justify-start pt-[5.75rem] pb-[7.375rem] pr-[4.625rem] pl-[4.75rem] box-border gap-[4.75rem] max-w-full z-[3] mq450:gap-[1.188rem_4.75rem] mq1350:pl-[2.375rem] mq1350:pr-[2.313rem] mq1350:box-border mq800:gap-[2.375rem_4.75rem] mq800:pt-[2.438rem] mq800:pb-[3.125rem] mq800:box-border mq1125:pt-[3.75rem] mq1125:pb-[4.813rem] mq1125:box-border">
        <img
          className="w-[87.5rem] h-[66.625rem] relative rounded-21xl hidden max-w-full"
          alt=""
          src="/background.svg"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.063rem] max-w-full">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[3rem] max-w-full mq800:gap-[1.5rem]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[3.25rem] min-w-[24.375rem] max-w-full mq800:gap-[1.625rem_3.25rem] mq800:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.063rem]">
                <div className="relative leading-[150%] capitalize inline-block min-w-[7.125rem] z-[1] mq450:text-[1rem] mq450:leading-[1.5rem]">
                  Full name *
                </div>
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[5rem] font-nunito text-[1.25rem] text-gray-500 z-[1]"
                  placeholder="John David"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#d3d3d3" },
                    "& .MuiInputBase-root": {
                      height: "80px",
                      backgroundColor: "#fff",
                      borderRadius: "20px",
                      fontSize: "20px",
                    },
                    "& .MuiInputBase-input": {
                      color: "#797979",
                      textTransform: "lowercase",
                    },
                  }}
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.063rem]">
                <div className="relative leading-[150%] capitalize inline-block min-w-[6.688rem] z-[1] mq450:text-[1rem] mq450:leading-[1.5rem]">
                  Company *
                </div>
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[5rem] font-nunito text-[1.25rem] text-gray-500 z-[1]"
                  placeholder="yourcompany name here"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#d3d3d3" },
                    "& .MuiInputBase-root": {
                      height: "80px",
                      backgroundColor: "#fff",
                      borderRadius: "20px",
                      fontSize: "20px",
                    },
                    "& .MuiInputBase-input": {
                      color: "#797979",
                      textTransform: "lowercase",
                    },
                  }}
                />
              </div>
              <div className="relative leading-[150%] capitalize inline-block min-w-[6rem] z-[1] mq450:text-[1rem] mq450:leading-[1.5rem]">
                Message *
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[3.25rem] min-w-[24.438rem] max-w-full mq800:gap-[1.625rem_3.25rem] mq800:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.063rem]">
                <div className="relative leading-[150%] capitalize inline-block min-w-[7.438rem] z-[1] mq450:text-[1rem] mq450:leading-[1.5rem]">
                  Your email *
                </div>
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[5rem] font-nunito text-[1.25rem] text-gray-500 z-[1]"
                  placeholder="example@yourmail.com"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#d3d3d3" },
                    "& .MuiInputBase-root": {
                      height: "80px",
                      backgroundColor: "#fff",
                      borderRadius: "20px",
                      fontSize: "20px",
                    },
                    "& .MuiInputBase-input": {
                      color: "#797979",
                      textTransform: "lowercase",
                    },
                  }}
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.125rem] box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[1.063rem] max-w-full">
                  <div className="relative leading-[150%] capitalize inline-block min-w-[5.375rem] z-[1] mq450:text-[1rem] mq450:leading-[1.5rem]">
                    Subject *
                  </div>
                  <div className="self-stretch rounded-xl bg-base-white box-border flex flex-row items-start justify-start pt-[1.938rem] px-[1.938rem] pb-[2rem] max-w-full z-[1] text-gray-500 font-nunito border-[1px] border-solid border-lightgray-100">
                    <div className="h-[5rem] w-[37.5rem] relative rounded-xl bg-base-white box-border hidden max-w-full border-[1px] border-solid border-lightgray-100" />
                    <div className="h-[1.063rem] w-[14.188rem] relative lowercase flex items-center shrink-0 z-[1] mq450:text-[1rem]">
                      How can we Help
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <textarea
            className="bg-base-white h-[18.75rem] w-auto [outline:none] self-stretch rounded-xl box-border flex flex-row items-start justify-start p-[1.938rem] font-nunito text-[1.25rem] text-gray-500 z-[1] border-[1px] border-solid border-lightgray-100"
            placeholder="Hello there,I would like to talk about how to..."
            rows={15}
            cols={62}
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[0.063rem] pl-[0rem]">
          <Button
            className="h-[4.688rem] w-[14.938rem] z-[1]"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#4b0082",
              borderRadius: "39px",
              "&:hover": { background: "#4b0082" },
              width: 239,
              height: 75,
            }}
          >
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent9;
