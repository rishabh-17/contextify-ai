import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Button, Input, SelectBox } from "../../components";
import ClientDashboardNavigation1 from "../../components/ClientDashboardNavigation1";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ProfilePage() {
  const [collapsed, setCollapsed] = React.useState(false);
  const [searchBarValue6, setSearchBarValue6] = React.useState("");

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
      <div className="relative h-[1070px] w-full bg-white-A700">
        <div className="absolute bottom-0 right-[0.68px] top-0 my-auto flex h-max w-[83%] justify-center bg-gray-100">
          <div className="relative h-[1070px] w-full bg-[url(/public/images/img_group_37.png)] bg-cover bg-no-repeat pb-20 md:pb-5">
            <div className="absolute left-0 right-0 top-[0.00px] m-auto flex w-full flex-col items-start gap-3.5">
              <header className="self-stretch bg-white-A700 p-[13px]">
                <div className="flex items-center justify-between gap-5 md:flex-col">
                  <div className="flex w-[38%] items-center justify-center gap-7 md:w-full sm:flex-col">
                    <Text size="2xl" as="p" className="mb-1 self-end text-center">
                      
                    </Text>
                    <Input
                      color="gray_100"
                      size="xs"
                      shape="round"
                      name="search"
                      placeholder={`Search`}
                      value={searchBarValue6}
                      onChange={(e) => setSearchBarValue6(e)}
                      prefix={
                        <Img
                          src="images/img_rewind_black_900_01.svg"
                          alt="rewind"
                          className="h-[15px] w-[14px] cursor-pointer"
                        />
                      }
                      suffix={
                        searchBarValue6?.length > 0 ? (
                          <CloseSVG
                            onClick={() => setSearchBarValue6("")}
                            height={15}
                            width={14}
                            fillColor="#000000ff"
                          />
                        ) : null
                      }
                      className="flex-grow gap-[35px] border-blue_gray-100 text-gray-900_7f sm:pr-5"
                    />
                  </div>
                  <div className="flex w-[22%] items-start justify-between gap-5 md:w-full">
                    <div className="relative mt-[5px] h-[32px] w-[12%]">
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max items-start">
                        <div className="flex flex-col items-end">
                          <Text as="p" className="relative z-[1] !text-white-A700">
                            6
                          </Text>
                          <Img
                            src="images/img_group.svg"
                            alt="image"
                            className="relative mt-[-9px] h-[26px] w-full md:h-auto"
                          />
                        </div>
                        <Img
                          src="images/img_close.svg"
                          alt="close_one"
                          className="relative ml-[-10px] h-[16px] w-[15px]"
                        />
                      </div>
                      <Img
                        src="images/img_close.svg"
                        alt="close_three"
                        className="absolute right-[0.67px] top-[0.00px] m-auto h-[18px]"
                      />
                    </div>
                    <div className="flex items-center">
                      <Img src="images/img_group_170x170.png" alt="image_one" className="h-[44px] object-cover" />
                      <div className="ml-[15px] flex flex-col items-start gap-0.5">
                        <Text size="md" as="p" className="!text-gray-800">
                          Moni Roy
                        </Text>
                        <Text as="p" className="ml-1 !text-gray-700_03 md:ml-0">
                          User
                        </Text>
                      </div>
                      <Img src="images/img_checkmark.svg" alt="checkmark_one" className="ml-5 h-[18px]" />
                    </div>
                  </div>
                </div>
              </header>
              <Text size="9xl" as="p" className="ml-[103px] !text-black-900_01 md:ml-0">
                Edit profile
              </Text>
            </div>
            <div className="absolute bottom-[8%] left-[9%] m-auto flex w-[67%] flex-col items-start">
              <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
                <div className="flex w-[46%] flex-col items-start md:w-full md:p-5">
                  <Text size="4xl" as="p" className="!text-gray-900">
                    First Name
                  </Text>
                  <Input
                    shape="round"
                    name="firstName"
                    placeholder={`Mehrab`}
                    className="mt-0.5 self-stretch !rounded-[5px] border-blue_gray-900_03 sm:px-5"
                  />
                  <Text size="4xl" as="p" className="!text-gray-900">
                    Email
                  </Text>
                </div>
                <div className="flex w-[46%] flex-col items-start md:w-full md:p-5">
                  <Text size="4xl" as="p" className="!text-gray-900">
                    Last Name
                  </Text>
                  <Input
                    shape="round"
                    name="lastName"
                    placeholder={`Bozorgi`}
                    className="self-stretch border-purple-900 sm:px-5"
                  />
                </div>
              </div>
              <Input
                shape="round"
                type="email"
                name="email"
                placeholder={`Mehrabbozorgi.business@gmail.com`}
                suffix={<Img src="images/img_checkmark_green_700.svg" alt="checkmark" className="h-[30px] w-[30px]" />}
                className="mt-0.5 gap-[35px] self-stretch !rounded-[5px] border-blue_gray-900_03 sm:pl-5"
              />
              <div className="mt-[23px] flex flex-col items-start gap-0.5 self-stretch">
                <Text size="4xl" as="p" className="!text-gray-900">
                  Contact Number
                </Text>
                <Input
                  shape="round"
                  name="groupeight"
                  placeholder={`58077.79`}
                  className="self-stretch !rounded-lg border-blue_gray-900_03 sm:px-5"
                />
              </div>
              <div className="mt-[15px] flex items-center justify-between gap-5 self-stretch md:flex-col">
                <div className="flex w-[46%] flex-col items-start md:w-full md:p-5">
                  <Text size="4xl" as="p" className="relative z-[2] !text-gray-900">
                    City
                  </Text>
                  <SelectBox
                    shape="round"
                    indicator={
                      <Img
                        src="images/img_keyboard_arrow_down.svg"
                        alt="Keyboard arrow down"
                        className="h-[41px] w-[41px]"
                      />
                    }
                    name="mehrab"
                    placeholder={`Mehrab`}
                    options={dropDownOptions}
                    className="gap-px self-stretch border-2 border-solid border-gray-600 sm:px-5"
                  />
                </div>
                <div className="flex w-[47%] flex-col items-start md:w-full md:p-5">
                  <Text size="4xl" as="p" className="!text-gray-900">
                    State
                  </Text>
                  <SelectBox
                    shape="round"
                    indicator={
                      <Img
                        src="images/img_keyboard_arrow_down.svg"
                        alt="Keyboard arrow down"
                        className="h-[41px] w-[41px]"
                      />
                    }
                    name="bozorgi"
                    placeholder={`Bozorgi`}
                    options={dropDownOptions}
                    className="gap-px self-stretch border-2 border-solid border-blue_gray-900_03 sm:px-5"
                  />
                </div>
              </div>
              <Text size="4xl" as="p" className="mt-[13px] !text-gray-900">
                Password
              </Text>
              <Input
                shape="round"
                name="password"
                placeholder={`sbdfbnd65sfdvb s`}
                suffix={<Img src="images/img_checkmark_green_700.svg" alt="checkmark" className="h-[30px] w-[30px]" />}
                className="mt-0.5 gap-[35px] self-stretch !rounded-[5px] border-blue_gray-900_03 sm:px-5"
              />
              <Button size="md" className="ml-[229px] mt-[31px] min-w-[180px] rounded-md md:ml-0 sm:px-5">
                Save
              </Button>
            </div>
            <div className="absolute left-[9%] top-[16%] m-auto h-[185px] w-[17%]">
              <div className="absolute left-[0.00px] top-[0.00px] m-auto flex w-[91%] items-center">
                <Img src="images/img_group_170x170.png" alt="image_two" className="h-[170px] w-[170px] object-cover" />
                <Button size="lg" shape="circle" className="relative mb-1 ml-[-50px] w-[60px] self-end !rounded-[30px]">
                  <Img src="images/img_mode_edit.svg" />
                </Button>
              </div>
              <Img
                src="images/img_save.svg"
                alt="save_one"
                className="absolute bottom-[0.00px] right-[0.00px] m-auto h-[96px] w-[96px]"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-70.00px] left-[0.00px] m-auto h-[1070px] w-[18%] pb-[70px] md:h-auto md:pb-5">
          <Sidebar
            width="228px !important"
            collapsedWidth="80px !important"
            collapsed={collapsed}
            className="!sticky left-[0.00px] top-[-70.00px] m-auto h-screen flex-col overflow-auto bg-white-A700 py-[18px] md:hidden"
          >
            <div className="relative mr-[19px] h-[39px] w-[85%] md:mr-0">
              <Img
                src="images/img_frame.svg"
                alt="image_three"
                className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[39px] w-[63%]"
              />
              <Text
                size="5xl"
                as="p"
                className="absolute bottom-[-0.45px] right-[0.53px] m-auto capitalize !text-deep_purple-A200_02"
              >
                Contextify
              </Text>
            </div>
            <Menu
              menuItemStyles={{
                button: {
                  padding: "11px",
                  color: "#ffffff",
                  fontWeight: 400,
                  fontSize: "14px",
                  gap: "20px",
                  [`&:hover, &.ps-active`]: { color: "#4b0082" },
                },
              }}
              className="mt-[23px] flex w-full flex-col self-stretch pb-6 sm:pb-5"
            >
              <MenuItem icon={<Img src="images/defaultNoData.png" alt="image_four" className="h-[27px] w-[22px]" />}>
                Dashboard
              </MenuItem>
              <MenuItem icon={<Img src="images/defaultNoData.png" alt="image_five" className="h-[27px] w-[10px]" />}>
                My Context
              </MenuItem>
            </Menu>
            {!collapsed ? <div className="mb-[654px] mt-48 h-px w-full self-stretch bg-gray-300" /> : null}
          </Sidebar>
          <div className="absolute bottom-[11%] left-0 right-0 m-auto w-full">
            <div className="relative z-[3] flex flex-col">
              <div className="relative z-[4] flex self-start p-3.5">
                <div className="ml-[27px] flex items-center gap-[17px] self-end md:ml-0">
                  <Img src="images/img_contact_support.svg" alt="contactsupport" className="h-[20px] w-[20px]" />
                  <a href="Support" target="_blank" rel="noreferrer">
                    <Text size="md" as="p" className="tracking-[0.30px]">
                      Support
                    </Text>
                  </a>
                </div>
              </div>
              <div className="relative mt-[-10px] flex p-3.5">
                <div className="flex items-center gap-[18px] self-start">
                  <Img
                    src="images/img_vector_black_900_01_20x20.svg"
                    alt="vector_one"
                    className="h-[20px] w-[20px] self-start"
                  />
                  <Text size="md" as="p" className="self-end tracking-[0.30px]">
                    Report an issue
                  </Text>
                </div>
              </div>
            </div>
            <div className="relative mt-[-6px] flex flex-col">
              <ClientDashboardNavigation1 className="relative z-[5] flex items-center self-start p-[11px]" />
              <div className="relative mt-[-3px] flex flex-col">
                <ClientDashboardNavigation1 products="Settings" className="flex items-end gap-4 self-start p-[11px]" />
                <ClientDashboardNavigation1 products="Logout" className="flex items-center self-start p-[11px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
