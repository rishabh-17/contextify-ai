import { useMemo } from "react";
import { Button } from "@mui/material";

const Component = ({
  background,
  advanced,
  prop,
  billedYearly,
  propBackgroundColor,
  propHeight,
  propColor,
  propMinWidth,
  propBorderTop,
  propColor1,
  propBorderTop1,
  propColor2,
  propColor3,
  propColor4,
  propColor5,
  propColor6,
  propColor7,
  propColor8,
  propColor9,
  propColor10,
  propColor11,
  propColor12,
  propColor13,
  propColor14,
  propColor15,
  propColor16,
}) => {
  const div1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const backgroundIconStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const advancedStyle = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  const lineDivStyle = useMemo(() => {
    return {
      borderTop: propBorderTop,
    };
  }, [propBorderTop]);

  const monthStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const lineDiv1Style = useMemo(() => {
    return {
      borderTop: propBorderTop1,
    };
  }, [propBorderTop1]);

  const unlimitedMembersUnlimitedContainerStyle = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const unlimitedMembersStyle = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const pStyle = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const unlimitedStyle = useMemo(() => {
    return {
      color: propColor5,
    };
  }, [propColor5]);

  const feedbackStyle = useMemo(() => {
    return {
      color: propColor6,
    };
  }, [propColor6]);

  const p1Style = useMemo(() => {
    return {
      color: propColor7,
    };
  }, [propColor7]);

  const weeklyTeamFeedbackStyle = useMemo(() => {
    return {
      color: propColor8,
    };
  }, [propColor8]);

  const p2Style = useMemo(() => {
    return {
      color: propColor9,
    };
  }, [propColor9]);

  const illustrationStyle = useMemo(() => {
    return {
      color: propColor10,
    };
  }, [propColor10]);

  const p3Style = useMemo(() => {
    return {
      color: propColor11,
    };
  }, [propColor11]);

  const teamFeedbackHistoryStyle = useMemo(() => {
    return {
      color: propColor12,
    };
  }, [propColor12]);

  const p4Style = useMemo(() => {
    return {
      color: propColor13,
    };
  }, [propColor13]);

  const personalFeedbackHistoryStyle = useMemo(() => {
    return {
      color: propColor14,
    };
  }, [propColor14]);

  const p5Style = useMemo(() => {
    return {
      color: propColor15,
    };
  }, [propColor15]);

  const slackIntegrationStyle = useMemo(() => {
    return {
      color: propColor16,
    };
  }, [propColor16]);

  return (
    <div
      className="flex-1 rounded-11xl bg-indigo flex flex-col items-start justify-start pt-[3.375rem] px-[2.125rem] pb-[2.75rem] box-border gap-[2.188rem] min-w-[20.938rem] max-w-full text-left text-[2.5rem] text-base-white font-junge mq450:gap-[1.063rem_2.188rem]"
      style={div1Style}
    >
      <img
        className="w-[27.938rem] h-[52.938rem] relative rounded-11xl hidden max-w-full"
        alt=""
        src={background}
        style={backgroundIconStyle}
      />
      <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.438rem] gap-[2.188rem] mq450:gap-[1.063rem_2.188rem]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[0.313rem] px-[0rem] pb-[0rem]">
            <h1
              className="m-0 relative text-inherit leading-[110%] font-normal font-inherit z-[1] mq450:text-[1.5rem] mq450:leading-[1.625rem] mq800:text-[2rem] mq800:leading-[2.188rem]"
              style={advancedStyle}
            >
              {advanced}
            </h1>
          </div>
          <Button
            className="h-[3.375rem] w-[6.75rem] z-[1]"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#5236ff",
              fontSize: "18",
              background: "#efecff",
              borderRadius: "39px",
              "&:hover": { background: "#efecff" },
              width: 108,
              height: 54,
            }}
          >
            Popular
          </Button>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.417rem]">
          <div
            className="self-stretch h-[0.063rem] relative box-border z-[1] border-t-[1px] border-solid border-blueviolet-100"
            style={lineDivStyle}
          />
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.563rem] pl-[1.25rem]">
            <div
              className="relative leading-[110%] z-[1] mq450:text-[1rem] mq450:leading-[2.188rem]"
              style={monthStyle}
            >
              <span>{prop}</span>
              <span className="text-[1.25rem]"> / month</span>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[3.25rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
            <Button
              className="h-[2.688rem] flex-1 z-[1]"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "20",
                background: "#6950ff",
                borderRadius: "43px",
                "&:hover": { background: "#6950ff" },
                height: 43,
              }}
            >
              {billedYearly}
            </Button>
          </div>
          <div
            className="self-stretch h-[0.063rem] relative box-border z-[1] border-t-[1px] border-solid border-blueviolet-100"
            style={lineDiv1Style}
          />
        </div>
      </div>
      <div
        className="self-stretch h-[21.938rem] relative text-[1.25rem] text-gray-500 text-center inline-block z-[1] font-nunito mq450:text-[1rem]"
        style={unlimitedMembersUnlimitedContainerStyle}
      >
        <p className="m-0" style={unlimitedMembersStyle}>
          Unlimited members
        </p>
        <p className="m-0" style={pStyle}></p>
        <p className="m-0">
          <b className="font-nunito" style={unlimitedStyle}>
            Unlimited
          </b>
          <span style={feedbackStyle}> feedback</span>
        </p>
        <p className="m-0" style={p1Style}></p>
        <p className="m-0" style={weeklyTeamFeedbackStyle}>
          Weekly team Feedback Friday
        </p>
        <p className="m-0" style={p2Style}></p>
        <p className="m-0">
          <span>{`Custom Kudos `}</span>
          <b className="font-nunito" style={illustrationStyle}>
            +9 illustration
          </b>
        </p>
        <p className="m-0" style={p3Style}></p>
        <p className="m-0" style={teamFeedbackHistoryStyle}>
          Team feedback history (30 items)
        </p>
        <p className="m-0" style={p4Style}></p>
        <p className="m-0" style={personalFeedbackHistoryStyle}>
          Personal feedback history (6 items)
        </p>
        <p className="m-0" style={p5Style}></p>
        <p className="m-0" style={slackIntegrationStyle}>
          Slack integration
        </p>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[0.063rem] pl-[0rem]">
        <Button
          className="h-[4.688rem] w-[12.5rem] z-[1]"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#242331",
            fontSize: "18",
            background: "#fff",
            borderRadius: "39px",
            "&:hover": { background: "#fff" },
            width: 200,
            height: 75,
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Component;
