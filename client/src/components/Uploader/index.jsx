import React, { useState, useRef, useEffect } from "react";
import { IoIosAttach } from "react-icons/io";
import axios from "axios";
export default function Uploader({ handleNewImg, context }) {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState("");
  const uploadRef = useRef(null);
  const handleClickOutside = (event) => {
    if (uploadRef.current && !uploadRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleUpload = async (e) => {
    const formData = new FormData();
    formData.append("file", img[0]);
    // formData.append("upload_preset", "contextify");
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
      },
    };
    axios
      .post(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/admin/addfile",
        formData,
        config
      )
      .then(({ data }) => {
        console.log(data.data.url);
        // setLoading(false);
        handleNewImg(window.location.origin + "/cloud/" + data.data.url);
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
  };

  return (
    <>
      <IoIosAttach onClick={() => setOpen(true)} />
      {open && (
        <div class="fixed z-10 top-0 left-0 w-full h-full flex bg-[#fff] bg-transparent">
          <div
            class="extraOutline p-4 bg-white w-max bg-whtie m-auto rounded-lg border bg-[#fff] shadow-md"
            ref={uploadRef}
          >
            <div
              class="file_upload p-5 m-1 relative border-4 border-dotted border-gray-300 bg-[#fff] rounded-lg"
              style={{ width: "450px" }}
            >
              <svg
                class="text-purple-900 w-24 mx-auto mb-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <div class="input_field flex flex-col w-max mx-auto text-center">
                <label>
                  <input
                    class="text-sm cursor-pointer w-36 hidden"
                    type="file"
                    onChange={(e) => setImg(e.target.files)}
                    accept="image/*"
                  />
                  <div class="text-[#fff] bg-purple-900 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-purple-800">
                    Select
                  </div>
                </label>

                <div class="title text-purple-900 uppercase">
                  or drop files here
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              {console.log(window.location.origin)}
              <p className="text-purple-900">{img[0]?.name}</p>
              <button
                class="text-[#fff] bg-purple-900 rounded-xl p-2 float-right mt-3"
                onClick={handleUpload}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
