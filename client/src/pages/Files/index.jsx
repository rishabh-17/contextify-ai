import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../components/AdminLayout";
export default function index() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [file, setFile] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL || ""}/api/admin/addfile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authentication: `${localStorage.getItem("admintoken")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.message);
        setShowModal(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL || ""}/api/admin/files`, {
        headers: { authentication: `${localStorage.getItem("admintoken")}` },
      })
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <AdminLayout active={7}>
        <div className="bg-gray-100 p-4 overflow-y-auto">
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
            Files <span class="text-purple-900 dark:text-purple-900">List</span>
          </h1>
          <div
            className="flex justify-end cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            +Add
          </div>
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
                      {i?.name}
                    </th>
                    <td class="px-6 py-4 text-right">
                      <button
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-5"
                        onClick={() => {
                          navigate("/cloud/" + i.url);
                        }}
                      >
                        View
                      </button>
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
      {showModal && (
        <div class="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-white backdrop-blur-sm">
          <div class="relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-[#fff] font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl">
            <div class="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
              Upload your file here
            </div>
            <div class="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500 flex justify-center">
              <div
                class="w-[400px] cursor-pointer relative border-2 border-gray-300 border-dashed rounded-lg p-6"
                id="dropzone"
              >
                <input
                  type="file"
                  class="absolute cursor-pointer inset-0 w-full h-full opacity-0 z-50"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <div class="text-center">
                  <img
                    class="mx-auto h-12 w-12"
                    src="https://www.svgrepo.com/show/357902/image-upload.svg"
                    alt=""
                  />

                  <h3 class="mt-2 text-sm font-medium text-gray-900">
                    <label for="file-upload" class="relative cursor-pointer">
                      <span>Drag and drop</span>
                      <span class="text-indigo-600"> or browse</span>
                      <span>to upload</span>
                      {/* <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      class="sr-only"
                    /> */}
                    </label>
                  </h3>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
              <button
                class="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                class="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                onClick={handleUpload}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
