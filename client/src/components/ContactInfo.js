import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const ContactInfo = () => {
  return (
    <section className="w-[83.838rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-center text-[3.125rem] text-indigo font-nunito">
      <div className="w-[62.375rem] flex flex-col items-start justify-start gap-[3.125rem] max-w-full mq800:gap-[1.563rem_3.125rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
          <h1 className="m-0 w-[41.938rem] relative text-inherit leading-[110%] font-extrabold font-inherit inline-block z-[4] mq450:text-[1.875rem] mq450:leading-[2.063rem] mq800:text-[2.5rem] mq800:leading-[2.75rem]">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.125rem] max-w-full text-left text-[1.875rem] text-gray-600 font-junge mq800:gap-[1.063rem_2.125rem]">
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.375rem] box-border max-w-full">
            <TextField
              className="[border:none] bg-[transparent] h-[6.938rem] flex-1 font-junge text-[1.875rem] text-gray-600 max-w-full z-[4]"
              placeholder="1. Where is my order? Quisque molestie"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "111px",
                  backgroundColor: "#dbcce6",
                  borderRadius: "20px",
                  fontSize: "30px",
                },
                "& .MuiInputBase-input": { color: "#242331" },
              }}
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.688rem] box-border max-w-full">
            <div className="flex-1 rounded-xl bg-thistle flex flex-col items-start justify-center py-[1.563rem] pr-[0rem] pl-[2.438rem] box-border max-w-full z-[4]">
              <div className="self-stretch flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[4.563rem] box-border gap-[0.563rem] max-w-full">
                <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] max-w-full mq1125:flex-wrap">
                  <h2 className="m-0 relative text-inherit leading-[110%] font-normal font-inherit inline-block max-w-full mq450:text-[1.125rem] mq450:leading-[1.25rem] mq800:text-[1.5rem] mq800:leading-[1.625rem]">
                    2. How can I return an item purchased online?
                  </h2>
                  <img
                    className="h-[3.688rem] w-[3.688rem] relative object-contain"
                    loading="lazy"
                    alt=""
                    src="/@2x.png"
                  />
                </div>
                <h3 className="m-0 w-[50rem] relative text-[1.375rem] leading-[157.4%] font-normal font-nunito text-gray-500 inline-block max-w-full mq450:text-[1.125rem] mq450:leading-[1.75rem]">{`The are going to use a passage of Lorem Ipsum, you need to be sure tdembarrassing hidden in the middle of text. All the Lorem generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. `}</h3>
              </div>
            </div>
          </div>
          <TextField
            className="[border:none] bg-[transparent] self-stretch h-[6.938rem] font-junge text-[1.875rem] text-gray-600 z-[4]"
            placeholder="3. Can I cancel or change my order?"
            variant="outlined"
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "111px",
                backgroundColor: "#dbcce6",
                borderRadius: "20px",
                fontSize: "30px",
              },
              "& .MuiInputBase-input": { color: "#242331" },
            }}
          />
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.188rem] pl-[0.219rem] box-border max-w-full">
            <TextField
              className="[border:none] bg-[transparent] h-[6.938rem] flex-1 font-junge text-[1.875rem] text-gray-600 max-w-full z-[4]"
              placeholder="4. I have a promotional or discount code?"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "111px",
                  backgroundColor: "#dbcce6",
                  borderRadius: "20px",
                  fontSize: "30px",
                },
                "& .MuiInputBase-input": { color: "#242331" },
              }}
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.313rem] box-border max-w-full">
            <TextField
              className="[border:none] bg-[transparent] h-[6.938rem] flex-1 font-junge text-[1.875rem] text-gray-600 max-w-full z-[4]"
              placeholder="5. Can I integrate my store with Facebook?"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "111px",
                  backgroundColor: "#dbcce6",
                  borderRadius: "20px",
                  fontSize: "30px",
                },
                "& .MuiInputBase-input": { color: "#242331" },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
