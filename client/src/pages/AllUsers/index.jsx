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

export default function AllUsers() {
  const [users, setUsers] = React.useState([]);
  const [apiHistory, setApiHistory] = React.useState([]);
  const [info, setInfo] = React.useState({});
  const setLoading = useContext(LoadingContext);

  React.useEffect(() => {
    const config = {
      headers: {
        authentication: `${localStorage.getItem("admintoken")}`,
      },
    };
    const fetchUsers = async () => {
      setLoading(true);
      const { data } = await axios.get(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/admin/users",
        config
      );
      setUsers(data.data);
      setLoading(false);
    };

    const fetchApiHistory = async () => {
      setLoading(true);
      const { data } = await axios.get(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/admin/apihistory",
        config
      );
      setApiHistory(data.data);
      setLoading(false);
    };

    const fetchInfo = async () => {
      setLoading(true);
      const { data } = await axios.get(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/admin/info",
        config
      );
      setInfo(data.data);
      setLoading(false);
    };

    fetchUsers();
    fetchApiHistory();
    fetchInfo();
  }, []);
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const config = {
        headers: {
          authentication: `${localStorage.getItem("admintoken")}`,
        },
      };

      await axios.delete(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/admin/user/" + id,
        config
      );
      window.location.reload();
    }
  };

  return (
    <>
      <AdminLayout active={2}>
        <Helmet>
          <title>admin</title>
          <meta
            name="description"
            content="Contextify puts information into context at the click of a button."
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
                All Users
              </Text>
            </div>

            <div class=" my-5 relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      User Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Tokens
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Signup Date
                    </th>
                    <th scope="col" class="px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((i) => (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {i.name}
                      </th>
                      <td class="px-6 py-4">{i.email}</td>
                      <td class="px-6 py-4">{i.totalReq}</td>
                      <td class="px-6 py-4">{i.createdAt}</td>
                      <td class="px-6 py-4 text-right">
                        <button
                          //   href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          onClick={() => {
                            handleDelete(i._id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
