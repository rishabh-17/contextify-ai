import { Button } from "@mui/material";
import AnalyticsContainer from "./AnalyticsContainer";
import Advance from "./Advance";

const Background = () => {
  return (
    <form className="m-0 absolute top-[21.375rem] left-[1.25rem] rounded-31xl bg-lavender-200 w-[87.5rem] h-[94.188rem] max-w-full z-[4] mq1125:h-auto mq1125:min-h-[1507]">
      <div className="absolute top-[6.438rem] left-[6.063rem] text-[1.688rem] leading-[1.625rem] capitalize font-inter text-indigo text-left hidden w-[8.313rem] h-[0.819rem] mq450:text-[1.375rem] mq450:leading-[1.313rem]">
        Contextify
      </div>
      <div className="absolute top-[0rem] left-[0rem] rounded-31xl bg-lavender-200 w-full h-full hidden" />
      <img
        className="absolute top-[11.219rem] left-[0rem] w-[87.375rem] h-[0.063rem] object-contain z-[1]"
        alt=""
        src="/line.svg"
      />
      <div className="absolute top-[13.563rem] left-[0rem] w-full flex flex-col items-start justify-start gap-[2.313rem] max-w-full z-[5]">
        <AnalyticsContainer
          dataVisualizationType="Analytics"
          analyticsDescription="Realtime analytics
"
          analyticsTypeDescription="User analytics
"
          analyticsFeatureName="
Funnel optimization"
        />
        <AnalyticsContainer
          dataVisualizationType="Report"
          analyticsDescription="Automated "
          analyticsTypeDescription="AI data predictions"
          analyticsFeatureName="Advanced charts"
          bgWidth="5.275rem"
          bgMinWidth="unset"
          bgLeft="4rem"
          propLeft="4rem"
          propWidth="17.75rem"
          propLeft1="4rem"
          propWidth1="10.438rem"
        />
        <div className="self-stretch h-[21.688rem] relative">
          <div className="absolute top-[0rem] left-[4rem] text-[1.25rem] leading-[110%] font-semibold font-nunito text-mediumblue text-left inline-block min-w-[4.688rem] mq450:text-[1rem] mq450:leading-[1.125rem]">
            Security
          </div>
          <div className="absolute top-[3.688rem] left-[0rem] bg-base-white w-[87.438rem] h-[6rem]">
            <div className="absolute top-[0rem] left-[0rem] bg-base-white w-full h-full hidden" />
            <div className="absolute top-[2.125rem] left-[4.063rem] text-[1.25rem] leading-[1.7rem] font-nunito text-gray-500 text-left z-[1] mq450:text-[1rem]">
              Real-time team reports
            </div>
          </div>
          <div className="absolute top-[9.75rem] left-[0rem] bg-whitesmoke-100 w-[87.438rem] h-[6rem]">
            <div className="absolute top-[0rem] left-[0rem] bg-whitesmoke-100 w-full h-full hidden" />
            <div className="absolute top-[2.063rem] left-[4rem] text-[1.25rem] font-nunito text-gray-500 text-left z-[1] mq450:text-[1rem]">
              {" "}
              Easy-to-share results
            </div>
          </div>
          <div className="absolute top-[15.688rem] left-[0rem] bg-base-white w-[87.438rem] h-[6rem] z-[1]">
            <div className="absolute top-[0rem] left-[0rem] bg-base-white w-full h-full hidden" />
            <div className="absolute top-[2.125rem] left-[4.019rem] text-[1.25rem] leading-[1.7rem] font-nunito text-gray-500 text-left z-[2] mq450:text-[1rem]">
              Team goal setting
            </div>
          </div>
        </div>
      </div>
      <h1 className="m-0 absolute top-[4.563rem] left-[4.063rem] text-[2.5rem] leading-[110%] font-normal font-junge text-gray-600 text-left z-[5] mq450:text-[1.5rem] mq450:leading-[1.625rem] mq800:text-[2rem] mq800:leading-[2.188rem]">
        Features
      </h1>
      <div className="absolute top-[3.313rem] left-[28.688rem] w-[55rem] flex flex-row items-start justify-center gap-[8.75rem] max-w-full z-[6] mq1125:flex-wrap">
        <div className="h-[87.75rem] w-[15rem] relative">
          <Button
            className="absolute top-[83.063rem] left-[1.25rem]"
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#242331",
              fontSize: "18",
              borderColor: "#d3d3d3",
              borderRadius: "39px",
              "&:hover": { borderColor: "#d3d3d3" },
              width: 200,
              height: 75,
            }}
          >
            Get Started
          </Button>
          <img
            className="absolute h-[70.09%] w-[12.08%] top-[18.3%] right-[44.17%] bottom-[11.61%] left-[43.75%] max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/option-mark.svg"
          />
          <div className="absolute top-[3.188rem] left-[3.5rem] text-[1.25rem] leading-[110%] font-junge text-gray-600 text-left inline-block min-w-[7.938rem] mq450:text-[1rem] mq450:leading-[1.125rem]">
            $7.99 / month
          </div>
          <h1 className="m-0 absolute top-[0rem] left-[4.375rem] text-[2.5rem] leading-[110%] font-normal font-junge text-gray-600 text-left inline-block min-w-[5.938rem] mq450:text-[1.5rem] mq450:leading-[1.625rem] mq800:text-[2rem] mq800:leading-[2.188rem]">
            Basic
          </h1>
        </div>
        <Advance
          optionMark="/option-mark-1.svg"
          month="$10.99 / month"
          adv="Adv"
        />
        <Advance
          optionMark="/option-mark-2.svg"
          month="$15.99 / month"
          adv="Pro"
          propTop="18.73%"
          propBottom="11.4%"
          propLeft="5.438rem"
          propMinWidth="3.938rem"
        />
      </div>
    </form>
  );
};

export default Background;
