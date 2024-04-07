import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Input, Button } from "../../components";
import ClientDashboardNavigation from "../../components/ClientDashboardNavigation";
import ClientDashboardNavigation1 from "../../components/ClientDashboardNavigation1";

export default function ClientdashboardPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <>
      <Helmet>
        <title>admin</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex items-start md:flex-col">
          <div className="relative z-[1] mt-[18px] flex w-[17%] flex-col items-center gap-[23px] md:w-full md:p-5">
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
            <div className="flex flex-col items-start self-stretch">
              <ClientDashboardNavigation
                hidebgcopyOne={true}
                prop=""
                className="flex items-center justify-center gap-5 self-stretch pr-6 sm:pr-5"
              />
              <div className="ml-[17px] mt-6 flex w-[86%] rounded-md bg-white-A700 p-2.5 md:ml-0 md:w-full">
                <div className="ml-1.5 flex items-center gap-1 md:ml-0">
                  <div className="flex items-center">
                    <Text size="2xl" as="p" className="self-end text-center !text-purple-900">
                      
                    </Text>
                    <Img
                      src="images/img_context_data_de.svg"
                      alt="image_one"
                      className="relative ml-[-18px] h-[30px] w-[30px]"
                    />
                  </div>
                  <Text size="md" as="p" className="tracking-[0.30px] !text-purple-900">
                    My Context
                  </Text>
                </div>
              </div>
              <div className="ml-[42px] mt-[620px] flex items-center gap-[17px] md:ml-0">
                <Img src="images/img_contact_support.svg" alt="contactsupport" className="h-[20px] w-[20px]" />
                <a href="Support" target="_blank" rel="noreferrer">
                  <Text size="md" as="p" className="tracking-[0.30px]">
                    Support
                  </Text>
                </a>
              </div>
              <div className="ml-[41px] mt-[18px] flex items-center gap-[18px] md:ml-0">
                <Img
                  src="images/img_vector_black_900_01_20x20.svg"
                  alt="vector_one"
                  className="h-[20px] w-[20px] self-start"
                />
                <Text size="md" as="p" className="self-end tracking-[0.30px]">
                  Report an issue
                </Text>
              </div>
              <div className="mt-[9px] flex flex-col self-stretch md:flex-row">
                <ClientDashboardNavigation1 className="flex items-center p-[11px]" />
                <div className="h-px w-[240px] bg-gray-300" />
                <ClientDashboardNavigation1 products="Settings" className="flex items-center p-[11px]" />
              </div>
              <ClientDashboardNavigation1 products="Logout" className="flex items-end gap-4 p-[11px]" />
            </div>
          </div>
          <div className="relative ml-[-1px] flex-1 bg-gray-100 pb-[69px] md:ml-0 md:self-stretch md:p-5 md:pb-5">
            <div className="relative h-[1070px] bg-[url(/public/images/img_group_37.png)] bg-cover bg-no-repeat pb-[31px] sm:pb-5">
              <div className="absolute bottom-[9%] left-0 right-0 m-auto h-[845px] w-[98%] md:h-auto">
                <div className="mb-56 ml-[7px] flex w-[91%] items-start md:ml-0 sm:flex-col">
                  <Text size="xl" as="p" className="mt-[69px] tracking-[-0.11px]">
                    My notes for further research
                  </Text>
                  <div className="relative ml-[-129px] flex flex-1 bg-black-900_01 sm:ml-0 sm:self-stretch">
                    <div className="mb-2.5 mt-[154px] flex w-[42%] items-center justify-between gap-5 md:w-full md:p-5">
                      <Text size="xl" as="p" className="self-end tracking-[-0.11px]">
                        Wing Chun
                      </Text>
                      <div className="flex flex-col items-start">
                        <Text size="md" as="p" className="tracking-[-0.11px]">
                          Research by
                        </Text>
                        <Text size="md" as="p" className="tracking-[-0.11px]">
                          20/2/2024
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute right-[0.00px] top-1/4 m-auto flex w-[42%] flex-col items-start">
                  <div className="flex items-start self-stretch sm:flex-col">
                    <Text size="xl" as="p" className="mt-20 tracking-[-0.11px]">
                      For future exploration
                    </Text>
                    <Img
                      src="images/img_vector_201x456.png"
                      alt="vector_three"
                      className="relative ml-[-169px] h-[201px] flex-1 object-cover sm:ml-0 sm:w-full sm:self-stretch"
                    />
                  </div>
                  <div className="relative mt-[-63px] flex w-[89%] rounded-[14px] bg-white-A700 p-[18px] shadow-xs md:w-full">
                    <Button
                      size="xs"
                      shape="round"
                      className="ml-[7px] mt-[150px] min-w-[100px] tracking-[0.30px] md:ml-0 sm:px-5"
                    >
                      View all
                    </Button>
                  </div>
                </div>
                <div className="absolute left-[0.00px] top-[10.43px] m-auto flex w-[50%] flex-col items-start">
                  <div className="flex items-center gap-[26px] self-stretch sm:flex-col">
                    <Img
                      src="images/img_group_170x170.png"
                      alt="image_two"
                      className="h-[170px] w-[170px] object-cover sm:w-full"
                    />
                    <div className="mb-2.5 flex flex-1 justify-center self-end rounded-[14px] bg-white-A700 p-[11px] shadow-xs sm:self-stretch">
                      <div className="mb-7 flex w-[80%] gap-10 md:flex-row">
                        <div className="flex flex-1 flex-col gap-1">
                          <Img src="images/img_lock.svg" alt="image" className="ml-[17px] h-[25px] w-[25px] md:ml-0" />
                          <div className="flex flex-col items-start gap-[7px]">
                            <Text as="p" className="ml-[25px] !text-gray-900_02 md:ml-0">
                              4
                            </Text>
                            <Text as="p" className="!text-gray-900_02">
                              <>
                                Use cases <br />
                                this month
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center gap-1">
                          <Img src="images/img_lock.svg" alt="lock_one" className="h-[25px] w-[25px]" />
                          <div className="flex flex-col items-center gap-[7px] self-stretch">
                            <Text as="p" className="!text-gray-900_02">
                              5/25
                            </Text>
                            <Text as="p" className="!text-gray-900_02">
                              <>
                                Posts on cool
                                <br />
                                stuffs
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="flex w-[31%] flex-col gap-1">
                          <Img
                            src="images/img_lock.svg"
                            alt="lock_one"
                            className="ml-[23px] h-[25px] w-[25px] md:ml-0"
                          />
                          <div className="flex flex-col items-start gap-[7px]">
                            <Text as="p" className="ml-[25px] !text-gray-900_02 md:ml-0">
                              4/20
                            </Text>
                            <Text as="p" className="!text-gray-900_02">
                              <>
                                Use new topics <br />
                                this month
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text size="xl" as="p" className="mt-[29px] tracking-[-0.11px]">
                    Top topics I have in the past month
                  </Text>
                  <div className="mt-4 flex gap-[19px] self-stretch md:flex-row sm:flex-col">
                    <div className="flex w-full flex-col items-start justify-center rounded-[14px] bg-white-A700 p-[17px] shadow-xs sm:w-full">
                      <Img
                        src="images/img_contrast.svg"
                        alt="people_one"
                        className="ml-[37px] h-[60px] w-[60px] md:ml-0"
                      />
                      <Text size="lg" as="p" className="ml-[42px] mt-[11px] !text-gray-900_02 md:ml-0">
                        People{" "}
                      </Text>
                      <Text size="lg" as="p" className="mb-[3px] ml-[62px] !text-gray-900_02 md:ml-0">
                        1
                      </Text>
                    </div>
                    <div className="flex w-full flex-col items-start justify-center rounded-[14px] bg-white-A700 p-[17px] shadow-xs sm:w-full">
                      <Img
                        src="images/img_contrast.svg"
                        alt="contrast_one"
                        className="ml-[37px] h-[60px] w-[60px] md:ml-0"
                      />
                      <Text size="lg" as="p" className="ml-[42px] mt-[11px] !text-gray-900_02 md:ml-0">
                        People{" "}
                      </Text>
                      <Text size="lg" as="p" className="mb-[3px] ml-[62px] !text-gray-900_02 md:ml-0">
                        1
                      </Text>
                    </div>
                    <div className="flex w-full flex-col items-start justify-center rounded-[14px] bg-white-A700 p-[17px] shadow-xs sm:w-full">
                      <Img
                        src="images/img_contrast.svg"
                        alt="contrast_one"
                        className="ml-[37px] h-[60px] w-[60px] md:ml-0"
                      />
                      <Text size="lg" as="p" className="ml-[42px] mt-[11px] !text-gray-900_02 md:ml-0">
                        People{" "}
                      </Text>
                      <Text size="lg" as="p" className="mb-[3px] ml-[62px] !text-gray-900_02 md:ml-0">
                        1
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  size="xs"
                  shape="round"
                  className="absolute bottom-0 left-[40%] top-0 my-auto min-w-[100px] tracking-[0.30px] sm:px-5"
                >
                  View all
                </Button>
                <div className="absolute right-[5%] top-[5%] m-auto flex w-[38%] flex-col items-center gap-6 rounded-[14px] bg-white-A700 p-[9px] shadow-xs">
                  <div className="mt-[21px] flex w-[88%] flex-col items-start md:w-full">
                    <div className="relative z-[2] flex items-center justify-between gap-5 self-stretch">
                      <Img src="images/img_know_svgrepo_com.svg" alt="knowsvgrepo_one" className="h-[32px] w-[32px]" />
                      <Text size="md" as="p" className="mb-[5px] self-end tracking-[-0.11px]">
                        How razor blades are made and reused
                      </Text>
                    </div>
                    <div className="relative mt-[-3px] h-[2px] w-[81%] self-end bg-gray-700_3f" />
                  </div>
                  <div className="flex w-[88%] items-center justify-between gap-5 md:w-full">
                    <Img src="images/img_know_svgrepo_com.svg" alt="knowsvgrepo" className="h-[32px] w-[32px]" />
                    <div className="flex w-[81%] flex-col items-center gap-[3px]">
                      <Text size="md" as="p" className="tracking-[-0.11px]">
                        How razor blades are made and reused
                      </Text>
                      <div className="h-[2px] w-full self-stretch bg-gray-700_3f" />
                    </div>
                  </div>
                  <Button
                    size="xs"
                    shape="round"
                    className="ml-[30px] min-w-[100px] self-start tracking-[0.30px] md:ml-0 sm:px-5"
                  >
                    View all
                  </Button>
                </div>
                <div className="absolute bottom-[-0.43px] left-[2.00px] m-auto flex w-[49%] flex-col gap-10 md:relative">
                  <div className="flex flex-1 rounded-[14px] bg-white-A700 p-[34px] shadow-xs sm:p-5">
                    <Img src="images/img_edit.svg" alt="edit_one" className="ml-[3px] h-[60px] w-[13%] md:ml-0" />
                  </div>
                  <div className="flex flex-1 rounded-[14px] bg-white-A700 p-[26px] shadow-xs sm:p-5">
                    <div className="mb-3.5 flex w-full items-start justify-between gap-5">
                      <div className="flex w-[44%] items-start justify-between gap-5">
                        <Img src="images/img_edit.svg" alt="edit_one" className="h-[60px] w-[29%]" />
                        <Text size="xl" as="p" className="mt-[7px] tracking-[-0.11px]">
                          Wing Chun
                        </Text>
                      </div>
                      <div className="flex flex-col items-start">
                        <Text size="md" as="p" className="tracking-[-0.11px]">
                          Research by
                        </Text>
                        <Text size="md" as="p" className="tracking-[-0.11px]">
                          20/2/2024
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[8%] right-[6%] m-auto flex w-[36%] flex-col">
                  <div className="flex items-center sm:flex-col">
                    <div className="flex w-[34%] justify-center self-end rounded-[20px] bg-white-A700 p-[23px] shadow-xs sm:w-full sm:p-5">
                      <Text size="md" as="p" className="self-start tracking-[0.30px] !text-black-900_01">
                        share info
                      </Text>
                    </div>
                    <div className="relative ml-[-172px] flex flex-1 flex-col gap-[39px] bg-black-900_01 sm:ml-0 sm:self-stretch">
                      <div className="flex cursor-pointer items-start hover:shadow-xs md:p-5">
                        <Img
                          src="images/img_future_svgrepo_com.svg"
                          alt="wing_chun_one"
                          className="h-[39px] w-[39px]"
                        />
                        <Text size="xl" as="p" className="ml-[61px] mt-0.5 tracking-[-0.11px]">
                          Wing Chun
                        </Text>
                        <div className="ml-[79px] flex flex-col items-start">
                          <Text size="md" as="p" className="tracking-[-0.11px]">
                            Research by
                          </Text>
                          <Text size="md" as="p" className="ml-[3px] tracking-[-0.11px] md:ml-0">
                            20/2/2024
                          </Text>
                        </div>
                      </div>
                      <div className="ml-[5px] flex cursor-pointer items-center hover:shadow-xs md:ml-0 md:p-5">
                        <Img
                          src="images/img_future_svgrepo_com.svg"
                          alt="futuresvgrepo"
                          className="h-[39px] w-[39px]"
                        />
                        <Text size="xl" as="p" className="ml-[57px] mt-[3px] self-start tracking-[-0.11px]">
                          Wing Chun
                        </Text>
                        <div className="ml-[79px] flex flex-col items-start">
                          <Text size="md" as="p" className="tracking-[-0.11px]">
                            Research by
                          </Text>
                          <Text size="md" as="p" className="ml-1 tracking-[-0.11px] md:ml-0">
                            20/2/2024
                          </Text>
                        </div>
                      </div>
                      <Button
                        color="white_A700"
                        size="xl"
                        leftIcon={
                          <Img
                            src="images/img_invitefriendsvgrepocom_1.svg"
                            alt="invite-friend-svgrepo-com 1"
                            className="h-[25px] w-[25px]"
                          />
                        }
                        className="min-w-[204px] gap-[9px] rounded-[20px] tracking-[0.30px] hover:shadow-xs md:p-5 sm:px-5"
                      >
                        invite friends
                      </Button>
                    </div>
                  </div>
                  <Img
                    src="images/img_share.svg"
                    alt="share_one"
                    className="relative ml-[5px] mt-[-48px] h-[96px] w-[96px] md:ml-0"
                  />
                </div>
                <Text size="xl" as="p" className="absolute right-[31%] top-[0.00px] m-auto tracking-[-0.11px]">
                  Things I know
                </Text>
              </div>
              <Button
                size="xs"
                shape="round"
                className="absolute bottom-[3%] left-[3%] m-auto min-w-[100px] tracking-[0.30px] sm:px-5"
              >
                View all
              </Button>
              <div className="absolute left-0 right-0 top-[0.00px] m-auto flex w-full flex-col items-start gap-[29px]">
                <header className="self-stretch">
                  <div className="flex items-center justify-between gap-5 bg-white-A700 p-[13px] md:flex-col">
                    <div className="ml-[18px] flex w-[38%] items-center justify-center gap-[25px] md:ml-0 md:w-full sm:flex-col">
                      <Text size="2xl" as="p" className="mb-1 self-end text-center">
                        
                      </Text>
                      <Input
                        color="gray_100"
                        size="xs"
                        shape="round"
                        name="search"
                        placeholder={`Search`}
                        value={searchBarValue}
                        onChange={(e) => setSearchBarValue(e)}
                        prefix={
                          <Img src="images/img_rewind.svg" alt="rewind" className="h-[15px] w-[15px] cursor-pointer" />
                        }
                        suffix={
                          searchBarValue?.length > 0 ? (
                            <CloseSVG
                              onClick={() => setSearchBarValue("")}
                              height={15}
                              width={15}
                              fillColor="#000000ff"
                            />
                          ) : null
                        }
                        className="flex-grow gap-3 border-blue_gray-100 text-gray-900_7f sm:pr-5"
                      />
                    </div>
                    <div className="mr-[17px] flex w-[21%] items-start justify-between gap-5 md:mr-0 md:w-full">
                      <div className="relative mt-[5px] h-[32px] w-[12%]">
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[97%] items-start justify-center">
                          <div className="flex flex-col items-end">
                            <Text as="p" className="relative z-[3] !text-white-A700">
                              6
                            </Text>
                            <Img
                              src="images/img_group.svg"
                              alt="image_three"
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
                          alt="image_four"
                          className="h-[44px] w-[44px] object-cover"
                        />
                        <div className="flex flex-col items-start gap-0.5">
                          <Text size="md" as="p" className="!text-gray-800">
                            Moni Roy
                          </Text>
                          <Text as="p" className="!text-gray-700_03">
                            User
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-center rounded-[9px] border border-solid border-gray-700 p-1.5">
                          <Img src="images/img_group_gray_700_03.svg" alt="image_five" className="h-[4px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
                <Text size="xl" as="p" className="ml-[31px] tracking-[-0.11px] md:ml-0">
                  Hello, Moni
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
