import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, SelectBox, Input } from "../../components";
import AdminLayout from "../../components/AdminLayout";
import axios from "axios";
import Chart from "react-apexcharts";
import { LoadingContext } from "../../App";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AdmindashboardPage() {
  const [users, setUsers] = React.useState([]);
  const [apiHistory, setApiHistory] = React.useState([]);
  const [info, setInfo] = React.useState({});
  const setLoading = useContext(LoadingContext);

  React.useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const { data } = await axios.get(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/admin/users",
        { headers: { authentication: `${localStorage.getItem("admintoken")}` } }
      );
      setUsers(data.data);
      setLoading(false);
    };

    const fetchApiHistory = async () => {
      setLoading(true);
      const { data } = await axios.get(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/admin/apihistory",
        { headers: { authentication: `${localStorage.getItem("admintoken")}` } }
      );
      setApiHistory(data.data);
      setLoading(false);
    };

    const fetchInfo = async () => {
      setLoading(true);
      const { data } = await axios.get(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/admin/info",
        { headers: { authentication: `${localStorage.getItem("admintoken")}` } }
      );
      setInfo(data.data);
      setLoading(false);
    };

    fetchUsers();
    fetchApiHistory();
    fetchInfo();
  }, []);

  return (
    <>
      <AdminLayout active={1}>
        <Helmet>
          <title>admin</title>
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
        </Helmet>
        <div className="flex w-full justify-center overflow-auto bg-gray-100 rounded md:flex-col p-4 backdrop-blur-md">
          <div className="w-full min-h-screen md:h-auto md:pb-5">
            <div className="flex flex-col items-center gap-[30px]">
              <Text
                size="7xl"
                as="p"
                className="ml-[30px] self-start tracking-[-0.11px] md:ml-0"
              >
                Dashboard
              </Text>
              <div className="flex w-[95%] gap-[30px] md:w-full md:flex-col">
                <div className="flex w-full flex-col justify-center gap-[31px] rounded-[14px] bg-white-A700 p-3.5 shadow-md">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex flex-col items-start gap-[19px]">
                      <Text size="lg" as="p" className="!text-gray-900_b2">
                        Total API calls
                      </Text>
                      <Text size="6xl" as="p" className="tracking-[1.00px]">
                        {history.length}
                      </Text>
                    </div>
                    <Img
                      src="images/img_contrast_indigo_a100.svg"
                      alt="total_user_one"
                      className="h-[60px] w-[60px]"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Img
                      src="images/img_checkmark_teal_a700.svg"
                      alt="image"
                      className="h-[24px] w-[24px]"
                    />
                    <Text size="lg" as="p" className="!text-teal-A700">
                      <span className="text-teal-A700">8.5%</span>
                      <span className="text-gray-900_02">&nbsp;</span>
                      <span className="text-gray_700_02">
                        Up from yesterday
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col justify-center gap-[33px] rounded-[14px] bg-white-A700  p-3.5 shadow-md">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex flex-col items-start gap-[17px]">
                      <Text size="lg" as="p" className="!text-gray-900_b2">
                        Total Premium
                      </Text>
                      <Text size="6xl" as="p" className="tracking-[1.00px]">
                        {users.filter((i) => i.totalReq > 15).length || 0}
                      </Text>
                    </div>
                    <Img
                      src="images/img_close_yellow_700.svg"
                      alt="close_one"
                      className="h-[60px] w-[60px]"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Img
                      src="images/img_checkmark_teal_a700.svg"
                      alt="checkmark_one"
                      className="h-[24px] w-[24px]"
                    />
                    <Text size="lg" as="p" className="!text-teal-A700">
                      <span className="text-teal-A700">1.3%</span>
                      <span className="text-gray-900_02">&nbsp;</span>
                      <span className="text-gray_700_02">
                        Up from past week
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-8 rounded-[14px] bg-white-A700 p-3.5 shadow-md">
                  <div className="flex items-start justify-between gap-5 self-stretch">
                    <div className="flex flex-col items-start gap-[18px]">
                      <Text size="lg" as="p" className="!text-gray-900_b2">
                        Total Sales
                      </Text>
                      <Text size="6xl" as="p" className="tracking-[1.00px]">
                        $0.00
                      </Text>
                    </div>
                    <Img
                      src="images/img_floating_icon.svg"
                      alt="floatingicon"
                      className="h-[60px] w-[60px]"
                    />
                  </div>
                  <div className="flex items-center gap-2 self-start">
                    <Img
                      src="images/img_group_pink_400.svg"
                      alt="image"
                      className="h-[24px] w-[24px]"
                    />
                    <Text size="lg" as="p" className="!text-pink-400">
                      <span className="text-pink-400">4.3%</span>
                      <span className="text-gray-900_02">&nbsp;</span>
                      <span className="text-gray_700_02">
                        Down from yesterday
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-[33px] rounded-[14px] bg-white-A700 p-4 shadow-md">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex flex-col items-start gap-[15px]">
                      <Text size="lg" as="p" className="!text-gray-900_b2">
                        Total Sign Ups
                      </Text>
                      <Text size="6xl" as="p" className="tracking-[1.00px]">
                        {users?.length || 0}
                      </Text>
                    </div>
                    <Img
                      src="images/img_user.svg"
                      alt="user_one"
                      className="h-[60px] w-[60px]"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Img
                      src="images/img_checkmark_teal_a700.svg"
                      alt="checkmark_one"
                      className="h-[24px] w-[24px]"
                    />
                    <Text size="lg" as="p" className="!text-teal-A700">
                      <span className="text-teal-A700">1.8%</span>
                      <span className="text-gray-900_02">&nbsp;</span>
                      <span className="text-gray_700_02">
                        Up from yesterday
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex w-[95%] flex-col gap-10 rounded-[14px] bg-white-A700 p-8  md:w-full sm:p-5 shadow-md">
                <div className="flex items-center justify-between gap-5">
                  <Text size="3xl" as="p" className="self-end">
                    Api calls
                  </Text>
                </div>
                {info?.chart && (
                  <Chart
                    options={info.chart.options}
                    series={info.chart.series}
                    type="line"
                    // width="500"
                    height={300}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
