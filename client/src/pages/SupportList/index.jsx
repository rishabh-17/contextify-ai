import React, { useState, useEffect, useContext } from "react";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import axios from "axios";
import ImageUploading from "react-images-uploading";
import AdminLayout from "../../components/AdminLayout";
import { LoadingContext } from "../../App";

export default function index() {
  const [data, setData] = useState([]);
  const setLoading = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL || ""}/api/support/get/`)
      .then((res) => {
        setData(res?.data?.data);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this support?")) {
      const config = {
        headers: {
          authentication: `${localStorage.getItem("admintoken")}`,
        },
      };

      await axios.delete(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/support/delete/" + id,
        config
      );
      window.location.reload();
    }
  };

  return (
    <AdminLayout active={4}>
      <div className="bg-gray-100 p-4 overflow-y-auto">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
          Support <span class="text-purple-900 dark:text-purple-900">List</span>
        </h1>
        <div class=" my-5 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Title
                </th>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((i) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {i.title}
                  </th>
                  <td class="px-6 py-4 text-right">
                    <button
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
    </AdminLayout>
  );
}
