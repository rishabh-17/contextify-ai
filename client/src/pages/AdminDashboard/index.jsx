import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, SelectBox, Input } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AdmindashboardPage() {
  const [searchBarValue7, setSearchBarValue7] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <>
      <Helmet>
        <title>admin</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full justify-center overflow-auto bg-gray-100 md:flex-col">
        <Sidebar
          width="242px !important"
          collapsedWidth="80px !important"
          collapsed={collapsed}
          className="!sticky top-0 flex h-screen flex-col overflow-auto bg-white-A700 py-[18px] md:hidden md:p-5"
        >
          <div className="mb-[5px] flex flex-col items-center gap-[23px] self-stretch">
            <div className="relative h-[39px] w-[74%]">
              <Img
                src="images/img_frame.svg"
                alt="image"
                className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[39px] w-[65%]"
              />
              <Text
                size="5xl"
                as="p"
                className="absolute bottom-[-0.45px] right-[0.00px] m-auto capitalize !text-deep_purple-A200_02"
              >
                Contextify
              </Text>
            </div>
            <Menu
              menuItemStyles={{
                button: {
                  padding: "35px 35px 35px 39px",
                  gap: "16px",
                  alignSelf: "start",
                  color: "#4b0082",
                  fontWeight: 400,
                  fontSize: "14px",
                  [`&:hover, &.ps-active`]: { color: "#ffffff" },
                },
              }}
              className="w-full self-stretch"
            >
              <div className="flex flex-col gap-[0.33px]">
                <MenuItem
                  icon={
                    <Img src="images/defaultNoData.png" alt="image_one" className="h-[27px] w-[22px] object-cover" />
                  }
                >
                  Dashboard
                </MenuItem>
                <MenuItem
                  icon={
                    <Img src="images/defaultNoData.png" alt="image_two" className="h-[27px] w-[22px] object-cover" />
                  }
                >
                  Edit Content
                </MenuItem>
                <MenuItem
                  icon={
                    <Img src="images/defaultNoData.png" alt="image_three" className="h-[27px] w-[22px] object-cover" />
                  }
                >
                  Users
                </MenuItem>
                <MenuItem
                  icon={
                    <Img src="images/defaultNoData.png" alt="image_four" className="h-[27px] w-[22px] object-cover" />
                  }
                >
                  Sales
                </MenuItem>
              </div>
              <div className="mt-[387px] h-px bg-gray-300" />
              <div className="flex flex-col gap-[0.33px]">
                <MenuItem icon={<Img src="images/defaultNoData.png" alt="image_five" className="h-[27px] w-[22px]" />}>
                  Settings
                </MenuItem>
                <MenuItem icon={<Img src="images/defaultNoData.png" alt="image_six" className="h-[27px] w-[22px]" />}>
                  Logout
                </MenuItem>
              </div>
            </Menu>
          </div>
        </Sidebar>
        <div className="flex-1 bg-gray-100 md:self-stretch md:p-5">
          <div className="h-[1070px] bg-[url(/public/images/img_group_37.png)] bg-cover bg-no-repeat pb-[264px] md:h-auto md:pb-5">
            <div className="flex flex-col items-center gap-[30px]">
              <header className="self-stretch bg-white-A700 p-[13px]">
                <div className="flex items-center justify-between gap-5 md:flex-col">
                  <div className="flex w-[38%] items-center justify-center gap-[25px] md:w-full sm:flex-col">
                    <Text size="2xl" as="p" className="mb-1 self-end text-center">
                      
                    </Text>
                    <Input
                      color="gray_100"
                      size="xs"
                      name="search"
                      placeholder={`Search`}
                      value={searchBarValue7}
                      onChange={(e) => setSearchBarValue7(e)}
                      prefix={
                        <Img src="images/img_rewind.svg" alt="rewind" className="h-[15px] w-[15px] cursor-pointer" />
                      }
                      suffix={
                        searchBarValue7?.length > 0 ? (
                          <CloseSVG
                            onClick={() => setSearchBarValue7("")}
                            height={15}
                            width={15}
                            fillColor="#000000ff"
                          />
                        ) : null
                      }
                      className="flex-grow gap-3 rounded-[19px] border-purple-900 text-gray-900_7f sm:pr-5"
                    />
                  </div>
                  <div className="flex w-[22%] items-start justify-between gap-5 md:w-full">
                    <div className="relative mt-[5px] h-[32px] w-[12%]">
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[97%] items-start justify-center">
                        <div className="flex flex-col items-end">
                          <Text as="p" className="relative z-[1] !text-white-A700">
                            6
                          </Text>
                          <Img
                            src="images/img_group.svg"
                            alt="image_seven"
                            className="relative mt-[-9px] h-[26px] w-full md:h-auto"
                          />
                        </div>
                        <div className="relative ml-[-11px] h-[16px] w-[16px] rounded-lg bg-pink-400" />
                      </div>
                      <div className="absolute right-[0.00px] top-[0.00px] m-auto h-[18px] w-[18px] rounded-[9px] bg-pink-400_1a" />
                    </div>
                    <div className="flex items-center gap-5">
                      <Img
                        src="images/img_group_170x170.png"
                        alt="image_eight"
                        className="h-[44px] w-[44px] object-cover"
                      />
                      <div className="mt-[3px] flex flex-col items-start gap-0.5 self-start">
                        <Text size="md" as="p" className="!text-gray-800">
                          Moni Roy
                        </Text>
                        <Text as="p" className="!text-gray-700_03">
                          Admin
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-center rounded-[9px] border border-solid border-gray-700 p-1.5">
                        <Img src="images/img_group_gray_700_03.svg" alt="image_nine" className="h-[4px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <Text size="7xl" as="p" className="ml-[30px] self-start tracking-[-0.11px] md:ml-0">
                Dashboard
              </Text>
              <div className="flex w-[95%] gap-[30px] md:w-full md:flex-col">
                <div className="flex w-full flex-col justify-center gap-[31px] rounded-[14px] bg-white-A700 p-3.5 shadow-xs">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex flex-col items-start gap-[19px]">
                      <Text size="lg" as="p" className="!text-gray-900_b2">
                        Total User
                      </Text>
                      <Text size="6xl" as="p" className="tracking-[1.00px]">
                        40,689
                      </Text>
                    </div>
                    <Img src="images/img_contrast_indigo_a100.svg" alt="total_user_one" className="h-[60px] w-[60px]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Img src="images/img_checkmark_teal_a700.svg" alt="image" className="h-[24px] w-[24px]" />
                    <Text size="lg" as="p" className="!text-teal-A700">
                      <span className="text-teal-A700">8.5%</span>
                      <span className="text-gray-900_02">&nbsp;</span>
                      <span className="text-gray_700_02">Up from yesterday</span>
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col justify-center gap-[33px] rounded-[14px] bg-white-A700 p-3.5 shadow-xs">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex flex-col items-start gap-[17px]">
                      <Text size="lg" as="p" className="!text-gray-900_b2">
                        Total Premium
                      </Text>
                      <Text size="6xl" as="p" className="tracking-[1.00px]">
                        10293
                      </Text>
                    </div>
                    <Img src="images/img_close_yellow_700.svg" alt="close_one" className="h-[60px] w-[60px]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Img src="images/img_checkmark_teal_a700.svg" alt="checkmark_one" className="h-[24px] w-[24px]" />
                    <Text size="lg" as="p" className="!text-teal-A700">
                      <span className="text-teal-A700">1.3%</span>
                      <span className="text-gray-900_02">&nbsp;</span>
                      <span className="text-gray_700_02">Up from past week</span>
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-8 rounded-[14px] bg-white-A700 p-3.5 shadow-xs">
                  <div className="flex items-start justify-between gap-5 self-stretch">
                    <div className="flex flex-col items-start gap-[18px]">
                      <Text size="lg" as="p" className="!text-gray-900_b2">
                        Total Sales
                      </Text>
                      <Text size="6xl" as="p" className="tracking-[1.00px]">
                        $89,000
                      </Text>
                    </div>
                    <Img src="images/img_floating_icon.svg" alt="floatingicon" className="h-[60px] w-[60px]" />
                  </div>
                  <div className="flex items-center gap-2 self-start">
                    <Img src="images/img_group_pink_400.svg" alt="image" className="h-[24px] w-[24px]" />
                    <Text size="lg" as="p" className="!text-pink-400">
                      <span className="text-pink-400">4.3%</span>
                      <span className="text-gray-900_02">&nbsp;</span>
                      <span className="text-gray_700_02">Down from yesterday</span>
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-[33px] rounded-[14px] bg-white-A700 p-4 shadow-xs">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex flex-col items-start gap-[15px]">
                      <Text size="lg" as="p" className="!text-gray-900_b2">
                        Total Sign Ups
                      </Text>
                      <Text size="6xl" as="p" className="tracking-[1.00px]">
                        2040
                      </Text>
                    </div>
                    <Img src="images/img_user.svg" alt="user_one" className="h-[60px] w-[60px]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Img src="images/img_checkmark_teal_a700.svg" alt="checkmark_one" className="h-[24px] w-[24px]" />
                    <Text size="lg" as="p" className="!text-teal-A700">
                      <span className="text-teal-A700">1.8%</span>
                      <span className="text-gray-900_02">&nbsp;</span>
                      <span className="text-gray_700_02">Up from yesterday</span>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex w-[95%] flex-col gap-10 rounded-[14px] bg-white-A700 p-8 shadow-xs md:w-full sm:p-5">
                <div className="flex items-center justify-between gap-5">
                  <Text size="3xl" as="p" className="self-end">
                    Api calls
                  </Text>
                  <SelectBox
                    color="gray_50_02"
                    size="sm"
                    shape="round"
                    indicator={
                      <Img
                        src="images/img_arrowdown_blue_gray_900_01.svg"
                        alt="arrow_down"
                        className="h-[10px] w-[10px]"
                      />
                    }
                    name="october"
                    placeholder={`October`}
                    options={dropDownOptions}
                    className="w-[10%] gap-px self-start !rounded border border-solid border-blue_gray-100 sm:pr-5"
                  />
                </div>
                <div className="mb-6 flex flex-col items-center gap-[17px]">
                  <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                    <div className="flex flex-col items-start gap-11">
                      <Text as="p" className="self-center !text-blue_gray-900_66">
                        100%
                      </Text>
                      <Text as="p" className="!text-blue_gray-900_66">
                        80%
                      </Text>
                      <Text as="p" className="!text-blue_gray-900_66">
                        60%
                      </Text>
                      <Text as="p" className="!text-blue_gray-900_66">
                        40%
                      </Text>
                      <Text as="p" className="!text-blue_gray-900_66">
                        20%
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-start gap-1 md:self-stretch">
                      <div className="ml-[3px] h-px self-stretch border-[0.5px] border-solid border-gray-200 bg-white-A700 md:ml-0" />
                      <div className="ml-[243px] flex h-[27px] items-start bg-[url(/public/images/img_group_blue_a200.svg)] bg-cover bg-no-repeat md:ml-0 md:h-auto">
                        <Text as="p" className="mb-2 !text-white-A700">
                          64,3664.77
                        </Text>
                      </div>
                      <div className="relative h-[205px] self-stretch">
                        <Img
                          src="images/img_group_purple_900.png"
                          alt="image_ten"
                          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[195px] w-full object-cover"
                        />
                        <Img
                          src="images/img_group_blue_a200_205x938.svg"
                          alt="image_eleven"
                          className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[205px] w-[94%]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[89%] flex-wrap justify-between gap-5 md:w-full">
                    <Text as="p" className="text-center !text-blue_gray-900_66">
                      5k
                    </Text>
                    <Text as="p" className="text-center !text-blue_gray-900_66">
                      10k
                    </Text>
                    <Text as="p" className="text-center !text-blue_gray-900_66">
                      15k
                    </Text>
                    <Text as="p" className="text-center !text-blue_gray-900_66">
                      20k
                    </Text>
                    <Text as="p" className="text-center !text-blue_gray-900_66">
                      25k
                    </Text>
                    <Text as="p" className="text-center !text-blue_gray-900_66">
                      30k
                    </Text>
                    <Text as="p" className="text-center !text-blue_gray-900_66">
                      35k
                    </Text>
                    <Text as="p" className="text-center !text-blue_gray-900_66">
                      40k
                    </Text>
                    <Text as="p" className="text-center !text-blue_gray-900_66">
                      45k
                    </Text>
                    <Text as="p" className="text-center !text-blue_gray-900_66">
                      50k
                    </Text>
                    <Text as="p" className="text-center !text-blue_gray-900_66">
                      55k
                    </Text>
                    <Text as="p" className="text-center !text-blue_gray-900_66">
                      60k
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
