import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Icon,
  IconButton,
} from "@mui/material";
import SitUpLight from "./SitUpLight";

const GradientFillEffect = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[1.5rem] pb-[8.875rem] box-border max-w-full text-left text-[3rem] text-black1 font-junge mq825:pb-[2.438rem] mq825:box-border mq1425:pb-[3.75rem] mq1425:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[8.813rem] max-w-full mq450:gap-[1.125rem_8.813rem] mq825:gap-[2.188rem_8.813rem] mq1425:gap-[4.375rem_8.813rem]">
        <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[1.188rem] box-border max-w-full">
          <div className="w-[60.563rem] flex flex-col items-start justify-start gap-[5.125rem] max-w-full lg:gap-[2.563rem_5.125rem] mq825:gap-[1.25rem_5.125rem]">
            <h1 className="m-0 relative text-inherit leading-[3.125rem] capitalize font-normal font-inherit inline-block max-w-full z-[4] mq450:text-[1.813rem] mq450:leading-[1.875rem] mq825:text-[2.375rem] mq825:leading-[2.5rem]">
              one platform for all Your Research
            </h1>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full text-[1.369rem] text-slategray-300 font-poppins">
              <div className="w-[36.938rem] flex flex-col items-end justify-start gap-[4.188rem] max-w-full mq450:gap-[1.063rem_4.188rem] mq825:gap-[2.063rem_4.188rem]">
                <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                  <div className="w-[33.188rem] flex flex-col items-start justify-start min-h-[19.875rem] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                      <div className="w-[27.25rem] rounded-[23.93px] bg-base-white flex flex-col items-start justify-start pt-[2.688rem] pb-[1.175rem] pr-[1.65rem] pl-[2.375rem] box-border relative gap-[1.981rem] max-w-full mq450:gap-[1rem_1.981rem]">
                        <div className="w-[27.25rem] h-[19.875rem] relative rounded-[23.93px] bg-base-white hidden max-w-full z-[0]" />
                        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                          <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem]">
                            <div className="relative leading-[93.19%] font-medium inline-block min-w-[6.375rem] z-[1] mq450:text-[1.125rem] mq450:leading-[1rem]">
                              Overview
                            </div>
                          </div>
                          <Button
                            className="h-[2.063rem] w-[6.5rem] z-[1]"
                            variant="contained"
                            sx={{
                              textTransform: "none",
                              color: "#fff",
                              fontSize: "14",
                              background: "#4b0082",
                              borderRadius: "16.95337677001953px",
                              "&:hover": { background: "#4b0082" },
                              width: 104,
                              height: 33,
                            }}
                          >
                            Monthly
                          </Button>
                        </div>
                        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.344rem] max-w-full text-[1.125rem] text-lightslategray-200">
                          <div className="flex flex-col items-start justify-start pt-[0.456rem] px-[0rem] pb-[0rem]">
                            <div className="flex flex-col items-start justify-start gap-[2.469rem]">
                              <div className="relative leading-[1.063rem] font-medium inline-block min-w-[1.75rem] z-[1]">
                                10k
                              </div>
                              <div className="relative leading-[1.063rem] font-medium inline-block min-w-[1.375rem] z-[1]">
                                6k
                              </div>
                              <div className="relative leading-[1.063rem] font-medium inline-block min-w-[1.375rem] z-[1]">
                                5k
                              </div>
                            </div>
                          </div>
                          <div className="h-[11.906rem] flex-1 relative overflow-x-auto min-w-[13.063rem] max-w-full text-center text-[0.75rem] text-black1">
                            <img
                              className="absolute top-[0rem] left-[0.813rem] w-[0.188rem] h-[10.131rem] z-[1]"
                              alt=""
                              src="/line.svg"
                            />
                            <img
                              className="absolute top-[0rem] left-[5.3rem] w-[0.188rem] h-[10.131rem] z-[1]"
                              alt=""
                              src="/line-1.svg"
                            />
                            <img
                              className="absolute top-[0rem] left-[9.788rem] w-[0.188rem] h-[10.131rem] z-[1]"
                              alt=""
                              src="/line-2.svg"
                            />
                            <img
                              className="absolute top-[0rem] left-[14.275rem] w-[0.188rem] h-[10.131rem] z-[1]"
                              alt=""
                              src="/line-3.svg"
                            />
                            <img
                              className="absolute top-[0rem] left-[18.763rem] w-[0.188rem] h-[10.131rem] z-[1]"
                              alt=""
                              src="/line-4.svg"
                            />
                            <div className="absolute top-[1.156rem] left-[0rem] w-full h-[10.75rem]">
                              <img
                                className="absolute top-[0rem] left-[0rem] w-[20.131rem] h-[10.75rem] z-[2]"
                                alt=""
                                src="/vector-4.svg"
                              />
                              <div className="absolute top-[0rem] left-[0rem] w-full h-[8.663rem]">
                                <img
                                  className="absolute top-[0rem] left-[0rem] w-[20.131rem] h-[8.663rem] z-[3]"
                                  alt=""
                                  src="/vector-5.svg"
                                />
                                <div className="absolute top-[0.988rem] left-[10.656rem] leading-[93.19%] font-medium inline-block min-w-[2.875rem] z-[4]">
                                  Ratings
                                </div>
                                <div className="absolute top-[3.3rem] left-[13.844rem] w-[1.25rem] h-[1.25rem]">
                                  <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-blueviolet-300 w-full h-full z-[4]" />
                                  <div className="absolute top-[0.25rem] left-[0.313rem] rounded-[50%] bg-base-white w-[0.625rem] h-[0.625rem] z-[5]" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[3.438rem] absolute !m-[0] top-[7.75rem] right-[7.938rem] text-[1rem] leading-[0.938rem] font-medium text-black1 text-center inline-block min-w-[3.438rem] whitespace-nowrap z-[4]">
                          5,560$
                        </div>
                        <div className="w-[0.75rem] h-[0.75rem] absolute !m-[0] top-[-0.062rem] left-[4.313rem] rounded-[50%] bg-blueviolet-300 z-[6]" />
                      </div>
                    </div>
                    <div className="w-[16.625rem] rounded-[23.93px] bg-base-white shadow-[0px_54.3px_63.92px_rgba(205,_205,_205,_0.16)] flex flex-col items-start justify-start pt-[2.063rem] pb-[1.813rem] pr-[1.25rem] pl-[1.938rem] box-border relative gap-[1.063rem] z-[6] mt-[-17.312rem] text-[0.875rem] text-black1 font-inter">
                      <div className="w-[16.625rem] h-[13.438rem] relative rounded-[23.93px] bg-base-white shadow-[0px_54.3px_63.92px_rgba(205,_205,_205,_0.16)] hidden z-[0]" />
                      <img
                        className="w-[11.031rem] h-[0.125rem] absolute !m-[0] right-[2.088rem] bottom-[6.644rem] z-[2]"
                        alt=""
                        src="/line-5.svg"
                      />
                      <img
                        className="w-[11.031rem] h-[0.125rem] absolute !m-[0] right-[2.113rem] bottom-[4.669rem] z-[2]"
                        alt=""
                        src="/line-6.svg"
                      />
                      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.25rem]">
                        <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                          <div className="flex flex-col items-start justify-start pt-[0.188rem] px-[0rem] pb-[0rem]">
                            <div className="relative font-semibold inline-block min-w-[6rem] z-[1]">
                              Users Activity
                            </div>
                          </div>
                          <FormControl
                            className="h-[0.875rem] w-[4.563rem] font-inter text-[0.75rem] text-lightslategray-300"
                            variant="standard"
                            sx={{
                              borderTopWidth: "0px",
                              borderRightWidth: "0px",
                              borderBottomWidth: "0px",
                              borderLeftWidth: "0px",
                              borderRadius: "0px 0px 0px 0px",
                              width: "73px",
                              height: "14px",
                              m: 0,
                              p: 0,
                              "& .MuiInputBase-root": {
                                m: 0,
                                p: 0,
                                minHeight: "14px",
                                justifyContent: "center",
                                display: "inline-flex",
                              },
                              "& .MuiInputLabel-root": {
                                m: 0,
                                p: 0,
                                minHeight: "14px",
                                display: "inline-flex",
                              },
                              "& .MuiMenuItem-root": {
                                m: 0,
                                p: 0,
                                height: "14px",
                                display: "inline-flex",
                              },
                              "& .MuiSelect-select": {
                                m: 0,
                                p: 0,
                                height: "14px",
                                alignItems: "center",
                                display: "inline-flex",
                              },
                              "& .MuiInput-input": { m: 0, p: 0 },
                              "& .MuiInputBase-input": {
                                color: "#9197a0",
                                fontSize: 12,
                                fontWeight: "Regular",
                                fontFamily: "Inter",
                                textAlign: "left",
                                p: "0 !important",
                              },
                            }}
                          >
                            <InputLabel color="primary" />
                            <Select
                              color="primary"
                              disableUnderline
                              displayEmpty
                              IconComponent={() => (
                                <img
                                  width="11px"
                                  height="6px"
                                  src="/triangles.svg"
                                  style={{}}
                                />
                              )}
                            >
                              <MenuItem>This Week</MenuItem>
                            </Select>
                            <FormHelperText />
                          </FormControl>
                        </div>
                      </div>
                      <div className="w-[12.575rem] flex flex-row items-start justify-start gap-[0.419rem] text-[0.563rem] text-darkgray-600">
                        <div className="flex flex-col items-start justify-start gap-[1.229rem]">
                          <div className="relative font-medium inline-block min-w-[1.125rem] z-[1]">
                            300
                          </div>
                          <div className="relative font-medium inline-block min-w-[1.125rem] z-[1]">
                            200
                          </div>
                          <div className="relative font-medium inline-block min-w-[1rem] z-[1]">
                            100
                          </div>
                          <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.625rem] pl-[0.125rem] text-darkgray-700">
                            <div className="relative font-medium inline-block min-w-[0.375rem] z-[1]">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] text-[0.5rem] text-darkgray-500">
                          <div className="self-stretch flex flex-col items-end justify-start gap-[0.313rem]">
                            <div className="self-stretch h-[5.875rem] relative">
                              <div className="absolute top-[0rem] left-[0.769rem] flex flex-row items-end justify-start gap-[1.094rem]">
                                <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.063rem] relative">
                                  <div className="w-[0.438rem] h-[5.813rem] relative rounded-t-[7.98px] rounded-b-none bg-khaki z-[1]">
                                    <div className="absolute top-[0rem] left-[0rem] rounded-t-[7.98px] rounded-b-none bg-khaki w-full h-full hidden z-[1]" />
                                    <div className="absolute top-[1.063rem] left-[0rem] rounded-t-[7.98px] rounded-b-none bg-blueviolet-300 w-[0.438rem] h-[4.75rem] z-[3]" />
                                  </div>
                                  <img
                                    className="w-[11.031rem] h-[0.125rem] absolute !m-[0] right-[-9.825rem] bottom-[-0.094rem] z-[1]"
                                    alt=""
                                    src="/line-7.svg"
                                  />
                                </div>
                                <div className="h-[2.188rem] w-[0.438rem] relative rounded-t-[7.98px] rounded-b-none bg-khaki z-[3]">
                                  <div className="absolute top-[0rem] left-[0rem] rounded-t-[7.98px] rounded-b-none bg-khaki w-[0.438rem] h-[2.125rem] hidden z-[3]" />
                                  <div className="absolute top-[0.625rem] left-[0rem] rounded-t-[7.98px] rounded-b-none bg-blueviolet-300 w-[0.438rem] h-[1.563rem] z-[4]" />
                                </div>
                                <div className="h-[4.5rem] w-[0.438rem] relative rounded-t-[7.98px] rounded-b-none bg-khaki z-[3]">
                                  <div className="absolute top-[0rem] left-[0rem] rounded-t-[7.98px] rounded-b-none bg-khaki w-full h-full hidden z-[3]" />
                                  <div className="absolute top-[1.375rem] left-[0rem] rounded-t-[7.98px] rounded-b-none bg-blueviolet-300 w-[0.438rem] h-[3.125rem] z-[4]" />
                                </div>
                                <div className="h-[4.5rem] w-[0.438rem] relative rounded-t-[7.98px] rounded-b-none bg-khaki z-[3]">
                                  <div className="absolute top-[0rem] left-[0rem] rounded-t-[7.98px] rounded-b-none bg-khaki w-full h-full hidden z-[3]" />
                                  <div className="absolute top-[1.375rem] left-[0rem] rounded-t-[7.98px] rounded-b-none bg-blueviolet-300 w-[0.438rem] h-[3.125rem] z-[4]" />
                                </div>
                                <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.063rem]">
                                  <div className="w-[0.438rem] h-[2.875rem] relative rounded-t-[7.98px] rounded-b-none bg-khaki z-[3]">
                                    <div className="absolute top-[0rem] left-[0rem] rounded-t-[7.98px] rounded-b-none bg-khaki w-full h-full hidden z-[3]" />
                                    <div className="absolute top-[1.125rem] left-[0rem] rounded-t-[7.98px] rounded-b-none bg-blueviolet-300 w-[0.438rem] h-[1.75rem] z-[4]" />
                                  </div>
                                </div>
                                <div className="h-[2.188rem] w-[0.438rem] relative rounded-t-[7.98px] rounded-b-none bg-khaki z-[3]">
                                  <div className="absolute top-[0rem] left-[0rem] rounded-t-[7.98px] rounded-b-none bg-khaki w-[0.438rem] h-[2.125rem] hidden z-[3]" />
                                  <div className="absolute top-[1.188rem] left-[0rem] rounded-t-[7.98px] rounded-b-none bg-blueviolet-300 w-[0.438rem] h-[1rem] z-[4]" />
                                </div>
                                <div className="h-[4.5rem] w-[0.438rem] relative rounded-t-[7.98px] rounded-b-none bg-khaki z-[3]">
                                  <div className="absolute top-[0rem] left-[0rem] rounded-t-[7.98px] rounded-b-none bg-khaki w-full h-full hidden z-[3]" />
                                  <div className="absolute top-[1.188rem] left-[0rem] rounded-t-[7.98px] rounded-b-none bg-blueviolet-300 w-[0.438rem] h-[3.313rem] z-[4]" />
                                </div>
                              </div>
                              <img
                                className="absolute top-[0rem] left-[0rem] w-[11.031rem] h-[0.125rem] z-[2]"
                                alt=""
                                src="/line-8.svg"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-end py-[0rem] pr-[0.637rem] pl-[0.75rem]">
                              <div className="flex flex-row items-start justify-start gap-[1.115rem] mq450:flex-wrap">
                                <div className="relative inline-block min-w-[0.5rem] z-[1] mq450:w-full mq450:h-[0.5rem]">
                                  M
                                </div>
                                <div className="relative inline-block min-w-[0.375rem] z-[1] mq450:w-full mq450:h-[0.375rem]">
                                  T
                                </div>
                                <div className="relative inline-block min-w-[0.563rem] z-[1] mq450:w-full mq450:h-[0.563rem]">
                                  w
                                </div>
                                <div className="relative inline-block min-w-[0.375rem] z-[1] mq450:w-full mq450:h-[0.375rem]">
                                  T
                                </div>
                                <div className="relative inline-block min-w-[0.375rem] z-[1] mq450:w-full mq450:h-[0.375rem]">
                                  F
                                </div>
                                <div className="relative inline-block min-w-[0.375rem] z-[1] mq450:w-full mq450:h-[0.375rem]">
                                  S
                                </div>
                                <div className="relative inline-block min-w-[0.375rem] z-[1] mq450:w-full mq450:h-[0.375rem]">
                                  S
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[1rem] h-[1rem] relative rounded-[50%] bg-blueviolet-300" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[0.563rem] box-border max-w-full text-center text-base-white">
          <div className="w-[67.25rem] rounded-3xl bg-indigo shadow-[0px_54.5px_64.09px_rgba(102,_64,_255,_0.16)] flex flex-row items-start justify-start py-[2.688rem] px-[3.125rem] box-border max-w-full z-[3] lg:pl-[1.563rem] lg:pr-[1.563rem] lg:box-border">
            <div className="h-[12.25rem] w-[67.25rem] relative rounded-3xl bg-indigo shadow-[0px_54.5px_64.09px_rgba(102,_64,_255,_0.16)] hidden max-w-full" />
            <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[3rem] max-w-full z-[1] mq825:gap-[1.5rem]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.75rem] min-w-[13.75rem]">
                <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
                  <div className="w-[5.938rem] relative leading-[3.125rem] inline-block min-w-[5.938rem] mq450:text-[1.813rem] mq450:leading-[1.875rem] mq825:text-[2.375rem] mq825:leading-[2.5rem]">
                    110+
                  </div>
                </div>
                <div className="self-stretch relative text-[1rem] leading-[1.5rem] capitalize">
                  Automation templates for creating your campaigns quickly
                </div>
              </div>
              <div className="flex-1 flex flex-col items-end justify-start gap-[0.75rem] min-w-[13.75rem]">
                <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.375rem]">
                  <div className="w-[4.813rem] relative leading-[3.125rem] inline-block min-w-[4.813rem] mq450:text-[1.813rem] mq450:leading-[1.875rem] mq825:text-[2.375rem] mq825:leading-[2.5rem]">
                    4M
                  </div>
                </div>
                <div className="self-stretch relative text-[1rem] leading-[1.5rem] capitalize">
                  Automation templates for creating your campaigns quickly
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.75rem] min-w-[13.75rem]">
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[4.5rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                  <div className="w-[9.313rem] relative leading-[3.125rem] inline-block mq450:text-[1.813rem] mq450:leading-[1.875rem] mq825:text-[2.375rem] mq825:leading-[2.5rem]">
                    99.99%
                  </div>
                </div>
                <div className="self-stretch relative text-[1rem] leading-[1.5rem] capitalize">
                  Automation templates for creating your campaigns quickly
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-center pt-[0rem] px-[0rem] pb-[5.925rem] box-border gap-[1.25rem] max-w-full lg:flex-wrap lg:pb-[3.875rem] lg:box-border mq825:pb-[2.5rem] mq825:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[15.875rem] min-w-[24.75rem] max-w-full mq450:gap-[3.938rem_15.875rem] mq825:gap-[7.938rem_15.875rem] mq825:min-w-full">
            <div className="w-[31.563rem] flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit leading-[3.125rem] capitalize font-normal font-inherit z-[3] mq450:text-[1.813rem] mq450:leading-[1.875rem] mq825:text-[2.375rem] mq825:leading-[2.5rem]">
                Manage your tasks online easily.
              </h1>
              <div className="self-stretch relative text-[1.063rem] leading-[1.688rem] capitalize text-gray-1800">
                Pellentesque blandit augue facilisis malesuada interdum eleifend
                risus, commodo. Egestas senectus vehicula vel consectetur eu.
                Sit pulvinar urna diam lacus fringilla eu cursus.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full text-[0.513rem] font-inter">
              <div className="self-stretch flex flex-col items-start justify-start pt-[1.063rem] px-[0.5rem] pb-[12rem] box-border relative max-w-full mq450:pt-[1.25rem] mq450:pb-[7.813rem] mq450:box-border">
                <img
                  className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-20.svg"
                />
                <div className="w-[1rem] h-[1rem] relative rounded-[50%] bg-blueviolet-300 z-[1]" />
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.25rem] pl-[1.25rem] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[0.938rem] max-w-full mq825:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[0.688rem] px-[0rem] pb-[0rem] box-border min-w-[14.688rem] max-w-full">
                      <TextField
                        className="self-stretch h-[3.563rem] font-inter font-medium text-[0.719rem] text-gray-1400 z-[1]"
                        variant="standard"
                        select
                        value={1}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              style={{
                                marginLeft: "17.799999999999955px",
                                marginRight: "17.700000000000045px",
                              }}
                            >
                              <img
                                width="19.5px"
                                height="14.2px"
                                src="/vector-6.svg"
                              />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              style={{ marginRight: "18px" }}
                            >
                              <img
                                width="21px"
                                height="21px"
                                src="/arrow--chevron-down.svg"
                              />
                            </InputAdornment>
                          ),
                        }}
                        SelectProps={{ IconComponent: () => null }}
                        sx={{
                          borderTopWidth: "0.4437570869922638px",
                          borderRightWidth: "0.4437570869922638px",
                          borderBottomWidth: "0.4437570869922638px",
                          borderLeftWidth: "0.4437570869922638px",
                          backgroundColor: "#fff",
                          borderRadius: "21.86089134216309px",
                          width: "100%",
                          height: "57px",
                          "& .MuiInput-underline:before": {
                            borderBottom: "none",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottom: "none",
                          },
                          "& .MuiInput-underline:hover:not(.Mui-disabled):before":
                            { borderBottom: "none" },
                          "& .MuiInputBase-root": { height: "100%" },
                          "& .MuiInputBase-input": {
                            color: "rgba(0, 0, 0, 0.7)",
                            fontSize: 11.5,
                            fontWeight: "Medium",
                            fontFamily: "Inter",
                            textAlign: "left",
                            p: "0 !important",
                          },
                        }}
                      >
                        <MenuItem value={1}>Select team members</MenuItem>
                      </TextField>
                    </div>
                    <div className="w-[12.063rem] rounded-[21.86px] bg-base-white shadow-[0px_49.6px_58.38px_rgba(205,_205,_205,_0.16)] flex flex-col items-start justify-start pt-[1rem] pb-[1.438rem] pr-[1.188rem] pl-[1.25rem] box-border gap-[0.896rem] min-w-[12.063rem] z-[1] mq825:flex-1">
                      <div className="w-[12.063rem] h-[10.563rem] relative rounded-[21.86px] bg-base-white shadow-[0px_49.6px_58.38px_rgba(205,_205,_205,_0.16)] hidden" />
                      <div className="relative text-[0.644rem] tracking-[0.21px] leading-[0.986rem] font-medium inline-block min-w-[4.563rem] z-[1]">
                        Task Progress
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[0.438rem]">
                        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                          <div className="relative tracking-[0.21px] leading-[0.901rem] inline-block min-w-[3.063rem] z-[1]">
                            Copywriting
                          </div>
                          <div className="relative tracking-[0.21px] leading-[0.901rem] text-gray-1800 inline-block min-w-[0.875rem] z-[1]">
                            3/8
                          </div>
                        </div>
                        <div className="self-stretch h-[0.188rem] relative">
                          <div className="absolute top-[0rem] left-[0rem] rounded-[137.23px] bg-gold-200 w-full h-full z-[1]" />
                          <div className="absolute top-[0rem] left-[0rem] rounded-[137.23px] bg-gold-100 w-[3.625rem] h-[0.188rem] z-[2]" />
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[0.438rem]">
                        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                          <div className="w-[3rem] relative tracking-[0.21px] leading-[0.901rem] inline-block shrink-0 z-[1]">
                            Illustrations
                          </div>
                          <div className="w-[1.125rem] relative tracking-[0.21px] leading-[0.901rem] text-gray-1800 text-right inline-block shrink-0 min-w-[1.125rem] z-[1]">
                            6/10
                          </div>
                        </div>
                        <div className="self-stretch h-[0.188rem] relative">
                          <div className="absolute top-[0rem] left-[0rem] rounded-[137.23px] bg-mediumseagreen-200 w-full h-full z-[1]" />
                          <div className="absolute top-[0rem] left-[0rem] rounded-[137.23px] bg-mediumseagreen-100 w-[5.375rem] h-[0.188rem] z-[2]" />
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[0.375rem]">
                        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                          <div className="w-[2.5rem] relative tracking-[0.21px] leading-[0.901rem] inline-block shrink-0 z-[1]">
                            UI Design
                          </div>
                          <div className="w-[0.875rem] relative tracking-[0.21px] leading-[0.901rem] text-gray-1800 text-right inline-block shrink-0 z-[1]">
                            2/7
                          </div>
                        </div>
                        <div className="self-stretch h-[0.188rem] relative">
                          <div className="absolute top-[0rem] left-[0rem] rounded-[137.23px] bg-blueviolet-500 w-full h-full z-[1]" />
                          <div className="absolute top-[0rem] left-[0rem] rounded-[137.23px] bg-blueviolet-300 w-[2.813rem] h-[0.188rem] z-[2]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[26.131rem] flex flex-row items-start justify-start py-[0rem] px-[1.75rem] box-border max-w-full mt-[-18rem] text-[0.719rem] text-gray-1400">
                <div className="flex-1 flex flex-col items-start justify-start pt-[1.875rem] px-[0rem] pb-[1.813rem] box-border relative gap-[1.55rem] max-w-full">
                  <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[21.86px] z-[1] flex items-center justify-center">
                    <img
                      className="w-full h-full max-w-full overflow-hidden max-h-full z-[1] object-contain absolute left-[0rem] top-[3.125rem] [transform:scale(1.372)]"
                      alt=""
                      src="/vector-7.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[1.319rem]">
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.563rem]">
                      <TextField
                        className="[border:none] bg-[transparent] h-[2rem] flex-1 font-inter text-[0.719rem] text-gray-1800 z-[2]"
                        placeholder="Search"
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <img
                              width="10.6px"
                              height="10.7px"
                              src="/group-21.svg"
                            />
                          ),
                        }}
                        sx={{
                          "& fieldset": { border: "none" },
                          "& .MuiInputBase-root": {
                            height: "32px",
                            backgroundColor: "rgba(0, 0, 0, 0.02)",
                            paddingLeft: "17.59999999999991px",
                            borderRadius: "0px 0px 0px 0px",
                            fontSize: "11.5px",
                          },
                          "& .MuiInputBase-input": {
                            paddingLeft: "21.800000000000185px",
                            color: "rgba(0, 0, 0, 0.5)",
                          },
                        }}
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.662rem]">
                      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.463rem] pr-[1.688rem] pl-[1.55rem]">
                        <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem] mq825:flex-wrap">
                          <div className="h-[1.994rem] flex flex-row items-start justify-start gap-[0.888rem]">
                            <img
                              className="h-[1.994rem] w-[2rem] relative object-cover z-[2]"
                              alt=""
                              src="/group-22@2x.png"
                            />
                            <div className="flex flex-col items-start justify-start pt-[0.494rem] px-[0rem] pb-[0rem]">
                              <div className="relative tracking-[0.44px] leading-[1.276rem] font-medium inline-block min-w-[4.938rem] z-[2]">
                                Angela Smith
                              </div>
                            </div>
                          </div>
                          <div className="w-[6.563rem] flex flex-col items-start justify-start pt-[0.744rem] px-[0rem] pb-[0rem] box-border text-right text-[0.669rem] text-gray-1800">
                            <div className="self-stretch relative tracking-[0.27px] leading-[0.666rem] inline-block mix-blend-normal min-w-[6.563rem] z-[2]">
                              16 task on progress
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between py-[0rem] pr-[1.5rem] pl-[0rem] relative gap-[1.25rem] mq825:flex-wrap mq825:p-[1.25rem] mq825:box-border">
                        <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-1600 z-[2]" />
                        <div className="h-[3.313rem] flex flex-row items-start justify-start gap-[1.425rem]">
                          <div className="self-stretch w-[0.125rem] relative bg-blueviolet-300 z-[3]" />
                          <div className="h-[2.494rem] flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border">
                            <div className="flex-1 flex flex-row items-start justify-start gap-[0.888rem]">
                              <img
                                className="h-[1.994rem] w-[2rem] relative object-contain z-[3]"
                                alt=""
                                src="/group-23@2x.png"
                              />
                              <div className="flex flex-col items-start justify-start pt-[0.438rem] px-[0rem] pb-[0rem]">
                                <div className="relative tracking-[0.44px] leading-[1.276rem] font-medium inline-block min-w-[5.063rem] z-[3]">
                                  Karen William
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[6.625rem] flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border text-right text-[0.669rem] text-gray-1800">
                          <div className="self-stretch relative tracking-[0.27px] leading-[0.688rem] inline-block mix-blend-normal min-w-[6.625rem] z-[3]">
                            25 task on progress
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.5rem] pl-[1.55rem]">
                        <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem] mq825:flex-wrap">
                          <div className="flex flex-row items-start justify-start gap-[0.888rem] mq450:flex-wrap">
                            <img
                              className="h-[1.994rem] w-[2rem] relative object-contain z-[2]"
                              alt=""
                              src="/group-24@2x.png"
                            />
                            <div className="flex flex-col items-start justify-start pt-[0.4rem] px-[0rem] pb-[0rem]">
                              <div className="relative tracking-[0.44px] leading-[1.276rem] font-medium inline-block min-w-[6.625rem] z-[2]">
                                Samantha William
                              </div>
                            </div>
                          </div>
                          <div className="w-[6.625rem] flex flex-col items-start justify-start pt-[0.775rem] px-[0rem] pb-[0rem] box-border text-right text-[0.669rem] text-gray-1800">
                            <div className="self-stretch relative tracking-[0.27px] leading-[0.688rem] inline-block mix-blend-normal min-w-[6.625rem] z-[2]">
                              35 task on progress
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.813rem] pl-[1.55rem]">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem] mq825:flex-wrap">
                      <div className="flex flex-row items-start justify-start gap-[0.888rem]">
                        <div className="h-[1.994rem] w-[2rem] relative">
                          <img
                            className="absolute top-[0rem] left-[0rem] w-[2rem] h-[1.994rem] object-cover z-[2]"
                            alt=""
                            src="/group-25@2x.png"
                          />
                          <img
                            className="absolute top-[0rem] left-[0rem] w-[2rem] h-[1.994rem] object-cover z-[3]"
                            alt=""
                            src="/group-26@2x.png"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[0.419rem] px-[0rem] pb-[0rem]">
                          <div className="relative tracking-[0.44px] leading-[1.276rem] font-medium inline-block min-w-[4.063rem] z-[2]">
                            Andy Hope
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.731rem] px-[0rem] pb-[0rem] text-right text-[0.669rem] text-gray-1800">
                        <div className="relative tracking-[0.27px] leading-[0.688rem] inline-block mix-blend-normal min-w-[6.5rem] z-[2]">
                          12 task on progress
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[24.75rem] min-h-[64.875rem] max-w-full text-[0.731rem] font-inter lg:min-h-[auto] mq825:min-w-full">
            <div className="self-stretch flex flex-col items-end justify-start gap-[17.125rem] max-w-full mq450:gap-[4.25rem_17.125rem] mq825:gap-[8.563rem_17.125rem]">
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch h-[24.625rem] flex flex-col items-start justify-start py-[5.875rem] pr-[0.25rem] pl-[21.063rem] box-border relative gap-[1.063rem] mq450:pl-[1.25rem] mq450:pt-[3.813rem] mq450:pb-[3.813rem] mq450:box-border mq825:pl-[10.5rem] mq825:box-border">
                  <img
                    className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group-27.svg"
                  />
                  <Button
                    className="w-[13.063rem] h-[4.563rem] z-[2]"
                    startIcon={
                      <img width="19.4px" height="23.7px" src="/group-28.png" />
                    }
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#000",
                      fontSize: "16.4",
                      background: "#fff",
                      borderRadius: "24px",
                      "&:hover": { background: "#fff" },
                      width: 209,
                      height: 73,
                    }}
                  >
                    Report analysis
                  </Button>
                  <div className="self-stretch h-[4.563rem] flex flex-row items-start justify-end">
                    <Button
                      className="self-stretch w-[13.063rem] z-[2]"
                      startIcon={
                        <img width="26px" height="26px" src="/frame-3.png" />
                      }
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#000",
                        fontSize: "16.4",
                        background: "#fff",
                        borderRadius: "24px",
                        "&:hover": { background: "#fff" },
                        width: 209,
                      }}
                    >
                      Timesheets make
                    </Button>
                  </div>
                </div>
                <div className="w-[32.5rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full mt-[-21.687rem]">
                  <div className="w-[21.875rem] rounded-3xl bg-base-white shadow-[0px_54.5px_64.09px_rgba(205,_205,_205,_0.16)] flex flex-col items-start justify-start pt-[1.938rem] px-[1.938rem] pb-[2rem] box-border gap-[0.859rem] max-w-full z-[1] mq450:pt-[22.938rem] mq450:pb-[1.313rem] mq450:box-border">
                    <div className="w-[21.875rem] h-[26.313rem] relative rounded-3xl bg-base-white shadow-[0px_54.5px_64.09px_rgba(205,_205,_205,_0.16)] hidden max-w-full" />
                    <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-[1.05rem] text-gray-900 mq450:flex-wrap">
                      <div className="relative leading-[1.258rem] font-semibold inline-block min-w-[3.125rem] z-[1]">
                        Today
                      </div>
                      <div className="w-[2.75rem] flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem] box-border text-right text-[0.838rem] text-gray-1500">
                        <div className="self-stretch relative leading-[1.154rem] inline-block min-w-[2.75rem] z-[1]">
                          See All
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-[0.837rem] px-[0.838rem] pb-[0.794rem] relative gap-[0.844rem] z-[1] mq450:flex-wrap">
                      <img
                        className="h-[4.406rem] w-[17.988rem] absolute !m-[0] bottom-[-0.031rem] left-[0rem] rounded-[10.07px]"
                        alt=""
                        src="/vector-8.svg"
                      />
                      <img
                        className="h-[2.306rem] w-[2.306rem] relative z-[1]"
                        alt=""
                        src="/group-29.svg"
                      />
                      <div className="flex-1 flex flex-row items-start justify-between min-w-[8.5rem] gap-[1.25rem] mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start gap-[0.406rem]">
                          <div className="relative leading-[1.063rem] font-semibold inline-block min-w-[3.438rem] z-[1]">
                            UI Design
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[0.269rem] text-[0.631rem] text-indianred mq450:flex-wrap">
                            <div className="rounded-[5.03px] bg-lavenderblush-100 overflow-hidden flex flex-row items-start justify-start pt-[0.263rem] px-[0.419rem] pb-[0.262rem] z-[1]">
                              <div className="relative leading-[0.75rem] font-medium inline-block min-w-[1.563rem]">
                                Work
                              </div>
                            </div>
                            <div className="rounded-[5.03px] bg-lavender-100 overflow-hidden flex flex-row items-start justify-start pt-[0.263rem] px-[0.375rem] pb-[0.262rem] whitespace-nowrap z-[1] text-darkorchid">
                              <div className="relative leading-[0.734rem] font-medium inline-block min-w-[4.375rem]">
                                Rasion Project
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[2.725rem] w-[2.631rem] flex flex-col items-end justify-start gap-[0.406rem] text-right text-[0.631rem] text-blueviolet-300">
                          <div className="self-stretch relative leading-[1.063rem] inline-block min-w-[2.625rem] whitespace-nowrap z-[1]">
                            00:42:21
                          </div>
                          <img
                            className="w-[1.256rem] h-[1.256rem] relative overflow-hidden shrink-0 z-[1]"
                            alt=""
                            src="/frame-4.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <SitUpLight
                      group="/group-30.svg"
                      xSitUp="100x Sit-Up"
                      workout="Workout"
                      prop="00:14:06"
                    />
                    <SitUpLight
                      group="/group-31.svg"
                      xSitUp={`Learn HTML & CSS`}
                      workout="Coding"
                      prop="00:24:52"
                      propMinWidth="6.688rem"
                      propBackgroundColor="#ffeff1"
                      propColor="#fd5b71"
                      propMinWidth1="2.188rem"
                      propAlignSelf="unset"
                      propWidth="2.688rem"
                    />
                    <div className="flex flex-row items-end justify-start pt-[0.837rem] px-[0.838rem] pb-[0.825rem] relative gap-[2.462rem] z-[1] mq450:gap-[2.463rem_1.25rem] mq825:flex-wrap">
                      <div className="h-full w-full absolute !m-[0] top-[0rem] bottom-[0rem] left-[0rem] rounded-[10.07px] bg-gray-1600" />
                      <div className="flex flex-row items-start justify-start gap-[0.844rem] mq450:flex-wrap">
                        <img
                          className="h-[2.306rem] w-[2.306rem] relative z-[1]"
                          alt=""
                          src="/group-32.svg"
                        />
                        <div className="flex flex-col items-start justify-start pt-[0.156rem] px-[0rem] pb-[0rem]">
                          <div className="flex flex-col items-start justify-start gap-[0.406rem]">
                            <div className="relative leading-[1.063rem] font-semibold inline-block min-w-[8.063rem] z-[1]">
                              Read 10 pages of book
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[0.362rem] text-[0.631rem] text-gray-400">
                              <div className="rounded-[5.03px] bg-whitesmoke-200 overflow-hidden flex flex-row items-start justify-start pt-[0.263rem] px-[0.419rem] pb-[0.262rem] z-[1]">
                                <div className="relative leading-[0.75rem] font-medium inline-block min-w-[2.625rem]">
                                  Personal
                                </div>
                              </div>
                              <div className="rounded-[5.03px] bg-honeydew overflow-hidden flex flex-row items-start justify-start pt-[0.263rem] px-[0.419rem] pb-[0.262rem] z-[1] text-mediumspringgreen">
                                <div className="relative leading-[0.75rem] font-medium inline-block min-w-[2.5rem]">
                                  Reading
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[2.725rem] w-[2.631rem] flex flex-col items-end justify-start gap-[0.406rem] text-right text-[0.631rem] text-blueviolet-300">
                        <div className="self-stretch relative leading-[1.063rem] inline-block min-w-[2.625rem] whitespace-nowrap z-[1]">
                          00:21:09
                        </div>
                        <img
                          className="w-[1.256rem] h-[1.256rem] relative overflow-hidden shrink-0 z-[1]"
                          alt=""
                          src="/frame-7.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[31.563rem] flex flex-col items-start justify-start gap-[1.5rem] max-w-full text-[3rem] font-junge">
                <h1 className="m-0 self-stretch relative text-inherit leading-[3.125rem] capitalize font-normal font-inherit z-[1] mq450:text-[1.813rem] mq450:leading-[1.875rem] mq825:text-[2.375rem] mq825:leading-[2.5rem]">
                  keep track of all your progress.
                </h1>
                <div className="self-stretch relative text-[1.063rem] leading-[1.688rem] capitalize text-gray-1800">
                  Pellentesque blandit augue facilisis malesuada interdum
                  eleifend risus, commodo. Egestas senectus vehicula vel
                  consectetur eu. Sit pulvinar urna diam lacus fringilla eu
                  cursus.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[70.125rem] flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] lg:flex-wrap lg:justify-center">
            <div className="w-[38.125rem] flex flex-col items-start justify-start pt-[0.563rem] px-[0rem] pb-[0rem] box-border min-w-[38.125rem] max-w-full lg:flex-1 lg:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8.063rem] mq450:gap-[2rem_8.063rem] mq825:gap-[4rem_8.063rem]">
                <h1 className="m-0 self-stretch relative text-inherit leading-[3.125rem] capitalize font-normal font-inherit z-[1] mq450:text-[1.813rem] mq450:leading-[1.875rem] mq825:text-[2.375rem] mq825:leading-[2.5rem]">
                  More connections, no more cancellations
                </h1>
                <Button
                  className="w-[10rem] h-[3.75rem] z-[1]"
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#4b0082",
                    borderRadius: "150px",
                    "&:hover": { background: "#4b0082" },
                    width: 160,
                    height: 60,
                  }}
                >
                  get started
                </Button>
              </div>
            </div>
            <div className="w-[22.063rem] rounded-[20.36px] bg-base-white shadow-[0px_46.2px_54.38px_rgba(205,_205,_205,_0.16)] flex flex-col items-start justify-start pt-[0.938rem] pb-[1.813rem] pr-[1.188rem] pl-[1.25rem] box-border gap-[0.625rem] min-w-[22.063rem] max-w-full z-[2] text-[0.863rem] font-inter lg:flex-1 mq825:min-w-full">
              <div className="w-[22.063rem] h-[21.563rem] relative rounded-[20.36px] bg-base-white shadow-[0px_46.2px_54.38px_rgba(205,_205,_205,_0.16)] hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-start gap-[0.438rem] mq450:flex-wrap">
                <img
                  className="h-[1.875rem] w-[1.875rem] relative z-[3]"
                  alt=""
                  src="/group-33.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-[0.313rem] px-[0rem] pb-[0rem] box-border min-w-[9.25rem]">
                  <div className="relative leading-[1.25rem] font-semibold inline-block min-w-[2.313rem] z-[3]">
                    Inbox
                  </div>
                </div>
                <div className="h-[1rem] flex flex-col items-start justify-start pt-[0.438rem] px-[0rem] pb-[0rem] box-border">
                  <img
                    className="w-[2.625rem] h-[0.563rem] relative z-[3]"
                    alt=""
                    src="/group-34.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[0.938rem] px-[0.938rem] pb-[0.688rem] relative z-[3] text-[0.619rem] text-black">
                <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[9.86px] bg-gray-1600" />
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.813rem] z-[1]">
                  <div className="self-stretch rounded-[4.93px] bg-base-white flex flex-row items-end justify-start pt-[0.563rem] px-[0.625rem] pb-[0.625rem] gap-[0.875rem] mq450:flex-wrap">
                    <div className="h-[3.063rem] w-[17.75rem] relative rounded-[4.93px] bg-base-white hidden" />
                    <img
                      className="h-[1.875rem] w-[1.875rem] relative min-h-[1.875rem] z-[1]"
                      alt=""
                      src="/group-35.svg"
                    />
                    <div className="flex flex-col items-start justify-start gap-[0.313rem]">
                      <b className="relative inline-block min-w-[4.25rem] z-[1]">
                        New Message
                      </b>
                      <div className="relative font-medium text-gray-1700 whitespace-nowrap z-[1]">
                        Hey Alex, are you free now?
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-[4.93px] bg-base-white flex flex-row items-start justify-start pt-[0.625rem] px-[0.625rem] pb-[0.563rem] gap-[0.875rem] mq450:flex-wrap">
                    <div className="h-[3.063rem] w-[17.75rem] relative rounded-[4.93px] bg-base-white hidden" />
                    <img
                      className="h-[1.875rem] w-[1.875rem] relative min-h-[1.875rem] z-[1]"
                      alt=""
                      src="/group-36.svg"
                    />
                    <div className="w-[11.063rem] flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem] box-border">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
                        <b className="relative inline-block min-w-[3.188rem] z-[1]">
                          New Email
                        </b>
                        <div className="self-stretch h-[0.75rem] relative font-medium text-gray-1700 whitespace-pre-wrap flex items-center shrink-0 z-[1]">
                          {" "}
                          Alex, your order replaced ID # 45321
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-[4.93px] bg-base-white flex flex-row items-start justify-start pt-[0.625rem] px-[0.625rem] pb-[0.563rem] gap-[0.875rem] mq450:flex-wrap">
                    <div className="h-[3.063rem] w-[17.75rem] relative rounded-[4.93px] bg-base-white hidden" />
                    <img
                      className="h-[1.875rem] w-[1.875rem] relative min-h-[1.875rem] z-[1]"
                      alt=""
                      src="/group-37.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem]">
                      <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                        <b className="relative inline-block min-w-[6.5rem] z-[1]">
                          Facebook Messagner
                        </b>
                        <div className="relative font-medium text-gray-1700 z-[1]">
                          How can I see the tracking number?
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-[4.93px] bg-base-white flex flex-row items-end justify-start pt-[0.563rem] px-[0.625rem] pb-[0.625rem] gap-[0.875rem] mq450:flex-wrap">
                    <div className="h-[3.063rem] w-[17.75rem] relative rounded-[4.93px] bg-base-white hidden" />
                    <img
                      className="h-[1.875rem] w-[1.875rem] relative min-h-[1.875rem] z-[1]"
                      alt=""
                      src="/group-38.svg"
                    />
                    <div className="flex flex-col items-start justify-start gap-[0.313rem]">
                      <b className="relative inline-block min-w-[4.25rem] z-[1]">
                        New Message
                      </b>
                      <div className="relative font-medium text-gray-1700 z-[1]">
                        How can I renew my subscription?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientFillEffect;
