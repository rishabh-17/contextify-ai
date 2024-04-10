import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, SelectBox } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AdminDashboardOnePage() {
  return (
    <>
      <Helmet>
        <title>admin</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100 pr-[38px] sm:pr-5">
        <div className="flex items-start gap-[47px] md:flex-col">
          <Sidebar
            width="281px !important"
            className="!sticky top-0 flex h-screen flex-col overflow-auto bg-gray-50 pb-40 md:hidden md:p-5 md:pb-5"
          >
            <div className="ml-[3px] h-[879px] self-stretch bg-gray-50 md:ml-0" />
            <Img
              src="images/img_background.png"
              alt="background_one"
              className="relative z-[1] mt-[-879px] h-[900px] w-full object-cover md:h-auto"
            />
            <div className="relative ml-[3px] mt-[-880px] h-[880px] self-stretch bg-gray-50 md:ml-0" />
            <div className="relative ml-7 mt-[-858px] flex w-[72%] flex-col gap-[73px] md:ml-0 md:w-full md:gap-[54px] sm:gap-9">
              <div className="flex items-center justify-between gap-5">
                <Img src="images/img_settings.svg" alt="settings_one" className="h-[36px] w-[36px]" />
                <Text size="xl" as="p" className="self-end !text-purple-900">
                  Contextify
                </Text>
              </div>
              <Menu
                menuItemStyles={{
                  button: {
                    padding: 0,
                    alignSelf: "start",
                    color: "#4b0082",
                    fontWeight: 400,
                    fontSize: "12px",
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    [`&:hover, &.ps-active`]: { color: "#928484" },
                  },
                }}
                rootStyles={{ ["&>ul"]: { gap: "217px" } }}
                className="flex flex-col items-start pr-[41px] md:pr-5"
              >
                <div className="flex w-[53%] flex-col gap-[0.83px] md:w-full">
                  <MenuItem>Overview</MenuItem>
                  <MenuItem>Opportunities</MenuItem>
                  <MenuItem>My competitors</MenuItem>
                  <MenuItem>Briefs</MenuItem>
                  <MenuItem>Saved</MenuItem>
                </div>
                <div className="flex flex-col gap-[0.83px]">
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>Help</MenuItem>
                  <MenuItem>Log out</MenuItem>
                </div>
              </Menu>
            </div>
          </Sidebar>
          <Tabs
            className="flex flex-1 flex-col gap-10 md:self-stretch md:p-5"
            selectedTabClassName="!text-gray-50 bg-deep_purple-A200_ab rounded-[26px]"
            selectedTabPanelClassName="relative tab-panel--selected"
          >
            <header className="flex flex-col gap-[3px]">
              <div className="flex items-start justify-between gap-5 sm:flex-col">
                <div className="flex w-[27%] items-center justify-center gap-2.5 sm:w-full">
                  <Button color="gray_50" shape="round" className="!rounded-[12px]">
                    <Img src="images/img_group_17.svg" />
                  </Button>
                  <div className="flex flex-1 items-center justify-center gap-[9px]">
                    <Text size="xl" as="p" className="!text-black-900_01">
                      Team Lutalika
                    </Text>
                    <div className="flex w-[19%] rounded-[19px] bg-deep_purple-A200_05 p-[3px]">
                      <div className="mb-[3px] mt-[5px] flex h-[23px] items-end rounded bg-[url(/public/images/img_group_27.svg)] bg-cover bg-no-repeat p-1.5 md:h-auto">
                        <Img
                          src="images/img_vector_black_900.svg"
                          alt="vector_one"
                          className="mt-1 h-[4px] rounded-[1px]"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_facebook.svg"
                      alt="facebook_one"
                      className="mt-[5px] h-[23px] w-[24px] self-start"
                    />
                  </div>
                </div>
                <div className="flex w-[22%] items-center justify-center gap-2.5 sm:w-full">
                  <Img src="images/img_image.png" alt="image_one" className="h-[45px] rounded-[12px] object-cover" />
                  <SelectBox
                    size="xs"
                    shape="square"
                    indicator={<Img src="images/img_group_27.svg" alt="contrast" className="h-[23px] w-[24px]" />}
                    name="zahrahasht"
                    placeholder={`Zahra hasht..`}
                    options={dropDownOptions}
                    className="flex-grow gap-px text-purple-900 sm:pr-5"
                  />
                </div>
              </div>
              <div className="h-px bg-gray-50" />
            </header>
            <div className="flex items-center justify-between gap-5 md:flex-col">
              <div className="flex items-start gap-[15px] self-end">
                <Text size="8xl" as="p" className="!font-alatsi !text-gray-700_01">
                  <span className="font-junge text-gray-700_01">Project statisti</span>
                  <span className="font-junge tracking-[-0.90px] text-gray-700_01">cs</span>
                </Text>
                <div className="flex rounded-[19px] bg-deep_purple-A200_05 p-[7px]">
                  <Img src="images/img_profile.svg" alt="profile_one" className="h-[23px] w-[24px]" />
                </div>
              </div>
              <TabList className="flex w-[40%] flex-wrap justify-between gap-[50px] p-4 md:w-full">
                <Tab className="ml-[7px] text-sm font-normal tracking-[-0.07px] text-gray-50 md:ml-0">30 days</Tab>
                <Tab className="text-sm font-normal tracking-[-0.07px] text-blue_gray-900">90 days</Tab>
                <Tab className="self-start text-sm font-normal tracking-[-0.07px] text-blue_gray-900">6 monts</Tab>
                <Tab className="mr-[7px] self-start text-sm font-normal tracking-[-0.07px] text-blue_gray-900 md:mr-0">
                  12 monts
                </Tab>
              </TabList>
            </div>
            {[...Array(4)].map((_, index) => (
              <TabPanel key={`tab-panel${index}`} className="absolute items-center">
                <div className="w-full">
                  <div className="flex flex-col gap-[33px]">
                    <div className="flex items-center gap-[17px] md:flex-col">
                      <div className="flex w-full flex-col gap-6 rounded-[32px] border border-solid border-gray-50_66 bg-blue_gray-50_66 p-[23px] sm:p-5">
                        <div className="flex flex-wrap items-center justify-between gap-5">
                          <Text size="xl" as="p" className="tracking-[-0.40px] !text-black-900_01">
                            Total visits
                          </Text>
                          <Text size="7xl" as="p" className="!text-deep_purple-A200">
                            42,43M
                          </Text>
                        </div>
                        <div className="mb-[22px] flex flex-col items-start">
                          <div className="h-px w-full self-stretch bg-gray-400_01" />
                          <Text size="xs" as="p" className="mt-5 !text-gray-500">
                            40,000,000
                          </Text>
                          <div className="mt-[13px] flex items-start gap-[9px] self-stretch sm:flex-col">
                            <Text size="xs" as="p" className="mt-[30px] !text-gray-500">
                              30,000,000
                            </Text>
                            <div className="flex flex-1 flex-col items-end sm:self-stretch">
                              <div className="relative z-[2] mr-[26px] flex h-[49px] items-start bg-[url(/public/images/img_group_30.svg)] bg-cover bg-no-repeat p-2 md:mr-0 md:h-auto">
                                <div className="mb-[5px] flex flex-col items-center">
                                  <Text as="p" className="!text-gray-50_01">
                                    24,000,033
                                  </Text>
                                  <Text as="p" className="!text-white-A700_b2">
                                    Visitors
                                  </Text>
                                </div>
                              </div>
                              <div className="relative mt-[-41px] flex h-[74px] items-end justify-end self-stretch bg-[url(/public/images/img_group_29.png)] bg-cover bg-no-repeat p-[13px] md:h-auto">
                                <div className="mr-[46px] mt-[31px] h-[16px] w-[16px] rounded-lg border-4 border-solid border-white-A700 bg-deep_purple-A200 md:mr-0" />
                              </div>
                            </div>
                          </div>
                          <Text size="xs" as="p" className="mt-[5px] !text-gray-500">
                            20,000,000
                          </Text>
                          <Text size="xs" as="p" className="mt-[30px] !text-gray-500">
                            10,000,000
                          </Text>
                          <Text size="xs" as="p" className="ml-[43px] mt-5 !text-gray-500 md:ml-0">
                            0
                          </Text>
                          <div className="mr-1.5 mt-8 flex w-[85%] items-center justify-between gap-5 self-end md:mr-0 md:w-full">
                            <div className="flex w-[23%] flex-wrap justify-between gap-5 self-start">
                              <Text size="xs" as="p" className="!text-gray-500">
                                Feb
                              </Text>
                              <Text size="xs" as="p" className="!text-gray-500">
                                Mar
                              </Text>
                            </div>
                            <div className="flex flex-wrap self-end">
                              <Text size="xs" as="p" className="self-end !text-gray-500">
                                Apr
                              </Text>
                              <Text size="xs" as="p" className="ml-12 self-start !text-gray-500">
                                May
                              </Text>
                              <Text size="xs" as="p" className="ml-[37px] self-start !text-gray-500">
                                Jun
                              </Text>
                            </div>
                            <Text size="xs" as="p" className="h-[13px] self-start !text-gray-500">
                              Jul
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="mb-0.5 flex w-full flex-col gap-[5px]">
                        <div className="flex items-start gap-6 sm:flex-col">
                          <div className="relative h-[212px] w-full sm:w-full">
                            <div className="absolute bottom-[0.00px] left-0 right-0 m-auto h-[137px] w-[73%] rounded-[32px] bg-purple-A100_99 blur-[46.00px] backdrop-opacity-[0.5]" />
                            <div className="absolute left-0 right-0 top-[0.00px] m-auto w-full rounded-[32px] bg-light_blue-300">
                              <div className="relative h-[191px] bg-[url(/public/images/img_group_35.svg)] bg-cover bg-no-repeat p-4 md:h-auto">
                                <div className="flex w-[89%] flex-col items-end">
                                  <div className="flex flex-col items-start gap-[22px] self-stretch">
                                    <div className="flex w-[90%] items-center justify-between gap-5 self-end md:w-full">
                                      <Button color="white_A700_05" shape="round" className="w-[52px] !rounded-[16px]">
                                        <Img src="images/img_vector.svg" />
                                      </Button>
                                      <div className="mb-[13px] flex items-start gap-0.5 self-end">
                                        <Img
                                          src="images/img_arrow_up.svg"
                                          alt="arrowup_one"
                                          className="mt-0.5 h-[6px] rounded-[1px]"
                                        />
                                        <Text as="p" className="!text-white-A700">
                                          12%
                                        </Text>
                                      </div>
                                    </div>
                                    <Text size="7xl" as="p" className="!text-gray-50">
                                      42,34%
                                    </Text>
                                  </div>
                                  <div className="relative mr-2.5 mt-[-4px] h-[32px] w-[32px] rounded-[16px] bg-deep_purple-A200_05 md:mr-0" />
                                </div>
                                <Img
                                  src="images/img_profile_gray_50.svg"
                                  alt="profile_three"
                                  className="absolute bottom-[21%] right-[23%] m-auto h-[17px]"
                                />
                                <Text
                                  size="md"
                                  as="p"
                                  className="absolute bottom-[21%] left-[16.00px] m-auto !text-gray-50_b7"
                                >
                                  Bounce Rate
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="relative mt-[3px] h-[191px] w-full md:h-auto sm:w-full">
                            <div className="mr-[26px] mt-[37px] flex items-start gap-[3px] md:mr-0">
                              <Img
                                src="images/img_arrow_up.svg"
                                alt="arrowup_three"
                                className="mt-[3px] h-[6px] rounded-[1px]"
                              />
                              <Text as="p" className="!text-black-900_01">
                                12%
                              </Text>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full rounded-[32px] bg-gray-50 p-4">
                              <div className="mb-[23px] flex items-center justify-between gap-5">
                                <div className="flex flex-col items-start">
                                  <Button
                                    color="gray_400_0a"
                                    shape="round"
                                    className="ml-[18px] w-[52px] !rounded-[16px] md:ml-0"
                                  >
                                    <Img src="images/img_calendar.svg" />
                                  </Button>
                                  <Text size="7xl" as="p" className="mt-[23px] !text-blue_gray-900">
                                    42,34%
                                  </Text>
                                  <Text size="md" as="p" className="mt-[3px] !text-blue_gray-900_b7">
                                    Pages per visit
                                  </Text>
                                </div>
                                <div className="mb-2.5 flex flex-col items-center self-end rounded-[9px] bg-deep_purple-A200_05 p-[3px]">
                                  <Img src="images/img_profile.svg" alt="profile_five" className="h-[10px] w-[10px]" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-6 sm:flex-col">
                          <div className="flex w-full flex-col items-start rounded-[32px] bg-gray-50 p-[15px] sm:w-full">
                            <div className="flex w-[79%] items-center justify-between gap-5 self-center md:w-full">
                              <Button color="gray_400_0a" shape="round" className="w-[52px] !rounded-[16px]">
                                <Img src="images/img_lock_deep_purple_a200.svg" />
                              </Button>
                              <div className="mb-3 flex items-start gap-2 self-end">
                                <Img
                                  src="images/img_favorite.svg"
                                  alt="favorite_one"
                                  className="mt-[3px] h-[6px] rounded-[1px]"
                                />
                                <Text as="p" className="!text-black-900_01">
                                  2,1%
                                </Text>
                              </div>
                            </div>
                            <Text size="7xl" as="p" className="mt-[22px] !text-blue_gray-900">
                              326.60K
                            </Text>
                            <Text size="md" as="p" className="mb-[25px] mt-[5px] !text-blue_gray-900_b7">
                              Total Monthly Visit
                            </Text>
                          </div>
                          <div className="relative h-[191px] w-full rounded-[32px] bg-gray-50 md:h-auto sm:w-full">
                            <div className="ml-4 mt-[17px] flex w-[76%] flex-col items-start md:ml-0">
                              <div className="flex w-[90%] items-center justify-between gap-5 self-end md:w-full">
                                <Button color="white_A700_05" shape="round" className="w-[52px] !rounded-[16px]">
                                  <Img src="images/img_vector_black_900_01.svg" />
                                </Button>
                                <div className="mb-[11px] flex items-start gap-1.5 self-end">
                                  <Img
                                    src="images/img_arrow_up_green_800.svg"
                                    alt="arrowup_five"
                                    className="h-[6px] rounded-[1px]"
                                  />
                                  <Text as="p" className="!text-black-900_01">
                                    12%
                                  </Text>
                                </div>
                              </div>
                              <Text size="7xl" as="p" className="mt-[22px] !text-blue_gray-900">
                                42,34%
                              </Text>
                              <Text size="md" as="p" className="mt-[3px] !text-blue_gray-900_b7">
                                Bounce Rate
                              </Text>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start rounded-[32px] bg-gray-50 p-4">
                              <div className="flex w-[82%] items-center justify-between gap-5 self-center md:w-full">
                                <Button color="gray_400_05" shape="round" className="w-[52px] !rounded-[16px]">
                                  <Img src="images/img_lock_deep_purple_a200_52x52.svg" />
                                </Button>
                                <div className="mb-3.5 flex items-start gap-1.5 self-end">
                                  <Img
                                    src="images/img_arrow_down.svg"
                                    alt="arrowdown_one"
                                    className="mt-[3px] h-[6px] rounded-[1px]"
                                  />
                                  <Text as="p" className="!text-black-900_01">
                                    2,4%
                                  </Text>
                                </div>
                              </div>
                              <Text size="7xl" as="p" className="mt-5 !text-blue_gray-900">
                                00:03:27
                              </Text>
                              <Text size="md" as="p" className="mb-6 mt-[5px] !text-blue_gray-900_b7">
                                Avg.Visit Duration
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-5 md:flex-col">
                      <div className="flex w-full flex-col items-center rounded-[32px] bg-blue_gray-50_66 p-2.5">
                        <Text
                          size="xl"
                          as="p"
                          className="ml-[23px] mt-[22px] self-start tracking-[-0.40px] !text-black-900_01 md:ml-0"
                        >
                          Traffic Sources
                        </Text>
                        <div className="mt-[29px] h-px w-[92%] bg-gray-400_01" />
                        <div className="mt-[7px] flex w-[90%] items-center justify-between gap-5 md:w-full sm:flex-col">
                          <div className="flex w-[61%] flex-col items-start gap-[13px] sm:w-full">
                            <div className="flex flex-wrap justify-between gap-5 self-stretch rounded-[12px] bg-blue_gray-50 p-1.5">
                              <Text as="p" className="ml-[39px] tracking-[-0.24px] !text-gray-500_02 md:ml-0">
                                sourse
                              </Text>
                              <Text as="p" className="mr-10 self-start tracking-[-0.24px] !text-gray-400 md:mr-0">
                                Traffic sourse,%
                              </Text>
                            </div>
                            <div className="ml-[19px] flex w-[79%] justify-between gap-5 md:ml-0 md:w-full">
                              <div className="flex w-[33%] items-center justify-center gap-3 self-end">
                                <div className="h-[12px] w-[18px] self-start rounded-sm bg-light_blue-300" />
                                <Text as="p" className="tracking-[-0.24px] !text-black-900_01">
                                  Direct{" "}
                                </Text>
                              </div>
                              <Text as="p" className="self-start tracking-[-0.24px] !text-black-900_01">
                                50
                              </Text>
                            </div>
                            <div className="ml-[19px] flex w-[79%] justify-between gap-5 md:ml-0 md:w-full">
                              <div className="flex w-[33%] items-center justify-center gap-[9px] self-end">
                                <div className="h-[12px] w-[18px] self-start rounded-sm bg-purple-A100" />
                                <Text as="p" className="tracking-[-0.24px] !text-black-900_01">
                                  Search
                                </Text>
                              </div>
                              <Text as="p" className="self-start tracking-[-0.24px] !text-black-900_01">
                                50
                              </Text>
                            </div>
                          </div>
                          <div className="w-[30%] rounded-[65px] bg-gray-100_01 p-[9px] sm:w-full">
                            <div className="flex flex-col items-start rounded-[55px] border-[13px] border-solid border-light_blue-300">
                              <div className="flex w-[80%] flex-col items-end md:w-full">
                                <div className="mr-[25px] flex w-[8%] md:mr-0 md:w-full">
                                  <div className="h-[4px] w-[4px] rounded-sm bg-gray-50" />
                                  <div className="relative ml-[-4px] h-[4px] w-[4px] rounded-sm bg-gray-50" />
                                </div>
                                <div className="relative z-[3] mt-[-2px] flex items-center self-stretch">
                                  <Img src="images/img_mobile.svg" alt="mobile_one" className="h-[97px] w-[47%]" />
                                  <div className="relative mb-3 ml-[-31px] flex flex-col items-end self-end">
                                    <Text size="7xl" as="p" className="!text-black-900_01">
                                      50%
                                    </Text>
                                    <Text as="p" className="mr-2 tracking-[-0.24px] !text-gray-500_01 md:mr-0">
                                      Direct{" "}
                                    </Text>
                                  </div>
                                </div>
                                <div className="relative mr-[23px] mt-[-2px] flex w-[11%] md:mr-0 md:w-full">
                                  <div className="relative z-[4] h-[4px] w-[4px] rounded-sm bg-gray-50" />
                                  <div className="relative ml-[-2px] h-[4px] w-[4px] rounded-sm bg-gray-50" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full flex-col items-center rounded-[32px] bg-blue_gray-50_66 p-2.5">
                        <Text
                          size="xl"
                          as="p"
                          className="ml-[23px] mt-[22px] self-start tracking-[-0.40px] !text-black-900_01 md:ml-0"
                        >
                          Traffic Sources
                        </Text>
                        <div className="mt-[29px] h-px w-[92%] bg-gray-400_01" />
                        <div className="mt-[7px] flex w-[90%] items-center justify-between gap-5 md:w-full sm:flex-col">
                          <div className="flex w-[61%] flex-col items-start gap-[13px] sm:w-full">
                            <div className="flex flex-wrap justify-between gap-5 self-stretch rounded-[12px] bg-blue_gray-50 p-1.5">
                              <Text as="p" className="ml-[39px] tracking-[-0.24px] !text-gray-500_02 md:ml-0">
                                sourse
                              </Text>
                              <Text as="p" className="mr-10 self-start tracking-[-0.24px] !text-gray-400 md:mr-0">
                                Traffic sourse,%
                              </Text>
                            </div>
                            <div className="ml-[19px] flex w-[79%] justify-between gap-5 md:ml-0 md:w-full">
                              <div className="flex w-[33%] items-center justify-center gap-3 self-end">
                                <div className="h-[12px] w-[18px] self-start rounded-sm bg-light_blue-300" />
                                <Text as="p" className="tracking-[-0.24px] !text-black-900_01">
                                  Direct{" "}
                                </Text>
                              </div>
                              <Text as="p" className="self-start tracking-[-0.24px] !text-black-900_01">
                                50
                              </Text>
                            </div>
                            <div className="ml-[19px] flex w-[79%] justify-between gap-5 md:ml-0 md:w-full">
                              <div className="flex w-[33%] items-center justify-center gap-[9px] self-end">
                                <div className="h-[12px] w-[18px] self-start rounded-sm bg-purple-A100" />
                                <Text as="p" className="tracking-[-0.24px] !text-black-900_01">
                                  Search
                                </Text>
                              </div>
                              <Text as="p" className="self-start tracking-[-0.24px] !text-black-900_01">
                                50
                              </Text>
                            </div>
                          </div>
                          <div className="w-[30%] rounded-[65px] bg-gray-100_01 p-[9px] sm:w-full">
                            <div className="flex flex-col items-start rounded-[55px] border-[13px] border-solid border-light_blue-300">
                              <div className="flex w-[80%] flex-col items-end md:w-full">
                                <div className="mr-[25px] flex w-[8%] md:mr-0 md:w-full">
                                  <div className="h-[4px] w-[4px] rounded-sm bg-gray-50" />
                                  <div className="relative ml-[-4px] h-[4px] w-[4px] rounded-sm bg-gray-50" />
                                </div>
                                <div className="relative z-[5] mt-[-2px] flex items-center self-stretch">
                                  <Img src="images/img_mobile.svg" alt="mobile_three" className="h-[97px] w-[47%]" />
                                  <div className="relative mb-3 ml-[-31px] flex flex-col items-end self-end">
                                    <Text size="7xl" as="p" className="!text-black-900_01">
                                      50%
                                    </Text>
                                    <Text as="p" className="mr-2 tracking-[-0.24px] !text-gray-500_01 md:mr-0">
                                      Direct{" "}
                                    </Text>
                                  </div>
                                </div>
                                <div className="relative mr-[23px] mt-[-2px] flex w-[11%] md:mr-0 md:w-full">
                                  <div className="relative z-[6] h-[4px] w-[4px] rounded-sm bg-gray-50" />
                                  <div className="relative ml-[-2px] h-[4px] w-[4px] rounded-sm bg-gray-50" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  );
}
