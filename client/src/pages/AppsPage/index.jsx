import React, { useState, useContext } from "react";
import MainLayout from "../../components/MainLayout";
import { FaWindows, FaChrome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaRegEdit, FaCopy, FaRegQuestionCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import axios from "axios";
import { toast } from "react-toastify";
import { LoadingContext } from "../../App";

export default function AppsPage() {
  const navigate = useNavigate();
  const [keyShow, setKeyShow] = useState(false);
  const [secret, setSecret] = useState(localStorage.getItem("secret"));
  const setLoading = useContext(LoadingContext);

  const genrateKey = async (e, initial) => {
    setLoading(true);
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
      },
    };

    axios
      .post(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/user/generatekey",
        {},
        config
      )
      .then((data) => {
        if (!initial) {
          setSecret(data?.data?.key);
          toast.success("Key generated successfully");
        }
        localStorage.setItem("secret", data?.data?.key);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("unable to generate key");
        setLoading(false);
      });
  };
  return (
    <div>
      <MainLayout active={5}>
        <div className="w-full text-3xl font-bold">Available Apps</div>
        <div className="flex flex-col p-4">
          <div className="flex gap-4 shadow-md p-5 rounded">
            <FaChrome className="h-24 w-24 text-purple-900" />
            <div className="flex justify-between w-full items-center">
              <div>
                <h2 className="text-2xl font-bold">Contextify For Chrome</h2>
                <p>
                  Now available for every browser that allows Chrome extensions.
                </p>
              </div>
              <div className=" items-center">
                <section className="flex items-center">
                  <h3 className="my-3">Secret Key</h3>
                  <div className="bg-[#fff] p-5 rounded-xl">
                    {secret ? (
                      <div className="flex items-center gap-3">
                        <input
                          className="roundedxl"
                          type={keyShow ? "text" : "password"}
                          value={secret}
                        />
                        <FaCopy
                          color="purple"
                          onClick={() => {
                            navigator.clipboard.writeText(secret);
                            alert("copied");
                          }}
                        />
                        <FaRegQuestionCircle
                          data-tooltip-id="my-tooltip"
                          color="purple"
                          data-tooltip-content="Key will be used in chrome extension"
                        />
                        <Tooltip id="my-tooltip" />
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          genrateKey(false);
                        }}
                        className="bg-purple-900 text-[#fff] h-10 p-2 rounded transition ease-in-out hover:translate-y-1 hover:bg-gray-50 hover:text-[#000] w-fit"
                      >
                        Generate
                      </button>
                    )}
                  </div>
                </section>
                <div className="flex items-center w-full justify-center">
                  <a
                    href="https://chromewebstore.google.com/detail/contextify/fbfhkfielfdockkbkldjbeokbbhgdccc"
                    target="_blank"
                    className="bg-purple-900 text-[#fff] h-10 p-2 rounded transition ease-in-out hover:translate-y-1 hover:bg-gray-50 hover:text-[#000] w-fit"
                  >
                    Install
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
