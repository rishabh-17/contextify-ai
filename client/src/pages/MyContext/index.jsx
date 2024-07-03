import React, { useContext, useState } from "react";
import MainLayout from "../../components/MainLayout";
import axios from "axios";
import { GiBrain } from "react-icons/gi";
import { GrNotes } from "react-icons/gr";
import { RWebShare } from "react-web-share";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { FaRegEdit, FaCopy } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { LoadingContext } from "../../App";
import SharePopup from "../../components/sharePopup";
import { MdDelete } from "react-icons/md";

export default function MyContext() {
  const [contexts, setContexts] = React.useState([]);
  const [toggle, setToggle] = React.useState(1);
  const user = JSON.parse(localStorage.getItem("user"));
  const [sharePop, setSharePop] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [showBanner, setShowBanner] = React.useState(
    localStorage.getItem("showBanner")
  );
  const navigate = useNavigate();
  const setLoading = useContext(LoadingContext);

  const fetchContexts = async () => {
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
      },
    };
    setLoading(true);

    const { data } = await axios.get(
      (import.meta.env.VITE_BACKEND_URL || "") + "/api/client/saved",
      config
    );
    setContexts(data?.data);
    setLoading(false);
  };
  React.useEffect(() => {
    fetchContexts();
  }, []);

  const deleteContext = async (id) => {
    setLoading(true);
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
      },
    };
    const sure = window.confirm("Are you sure?");
    if (!sure) {
      setLoading(false);
      return;
    }
    try {
      const { data } = await axios.delete(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/client/saved/" + id,
        config
      );
      if (!data?.success) {
        alert("Something went wrong");
        return;
      }
      fetchContexts();
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div>
      <MainLayout active={2}>
        {sharePop && shareUrl && (
          <SharePopup url={shareUrl} setSharePop={setSharePop} />
        )}
        <div className="flex-col gap-4 p-4">
          {!showBanner && (
            <div className="flex border rounded-xl p-5 shadow-md mb-3 justify-between">
              <div>
                <h2 className="text-lg font-bold">
                  Get contexts wherever you browse
                </h2>
                <p className="text-xs">
                  Use it on Gmail, Facebook, Twitter, LinkedIn, and thousands of
                  other websites.
                </p>
              </div>
              <div></div>
              <div className="flex gap-2 items-center">
                <button className="text-[#fff] p-2 bg-purple-900 rounded">
                  Add to Chrome
                </button>
                <IoClose
                  onClick={() => {
                    setShowBanner("true");
                    localStorage.setItem("showBanner", "true");
                  }}
                  className="text-2xl cursor-pointer"
                />
              </div>
            </div>
          )}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold mt-5">My Context</h2>
            <div>
              <input
                type="text"
                className=" px-4 py-2 border border-gray-300 shadow-md"
                placeholder="Search"
              />
            </div>
            <div className="sm:flex-row flex gap-4 justify-center w-full">
              <div
                onClick={() => setToggle(1)}
                className={
                  toggle === 1
                    ? "flex flex-col items-center text-purple-700 border-b-2 border-purple-700 pb-2 font-bold  hover:-translate-y-1 hover:scale-110"
                    : " flex flex-col items-center  text-gray-600 hover:-translate-y-1 hover:scale-110"
                }
              >
                <h3>Things I know</h3>
              </div>
              <div
                onClick={() => setToggle(2)}
                className={
                  toggle === 2
                    ? "flex flex-col items-center text-purple-700 border-b-2 border-purple-700 pb-2 font-bold  hover:-translate-y-1 hover:scale-110"
                    : " flex flex-col items-center  text-gray-600 hover:-translate-y-1 hover:scale-110"
                }
              >
                <h3 className="text-white">Notes</h3>
              </div>
              <div
                onClick={() => setToggle(3)}
                className={
                  toggle === 3
                    ? "flex flex-col items-center text-purple-700 border-b-2 border-purple-700 pb-2 font-bold  hover:-translate-y-1 hover:scale-110"
                    : " flex flex-col items-center  text-gray-600 hover:-translate-y-1 hover:scale-110"
                }
              >
                <h3 className="text-white" color="#fff">
                  Future exploration
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap p-4 gap-3">
            {contexts.map(
              (context) =>
                toggle == context.type && (
                  <div
                    class="max-w-sm w-[200px] h-[300px]
             p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col justify-between"
                  >
                    <div
                      className="overflow-auto h-full"
                      onClick={() =>
                        navigate(`/contextdetail/saved/${context._id}`)
                      }
                    >
                      {context?.question?.startsWith("http") ? (
                        <img src={context?.question} alt="" />
                      ) : (
                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                          {context?.question?.length > 30
                            ? context?.question?.slice(0, 30) + "..."
                            : context?.question}
                        </h5>
                      )}
                      <p class="font-normal text-sm text-gray-700 dark:text-gray-400">
                        {context?.answer.length > 100
                          ? context?.answer
                              ?.replaceAll("#", "")
                              ?.slice(0, 100) + "..."
                          : context?.answer?.replaceAll("#", "")}
                      </p>
                    </div>
                    <div className="h-[40px] w-full border-t-2 flex flex-row-reverse items-center">
                      <div className="flex gap-3">
                        <IoMdShare
                          color="gray"
                          className="cursor-pointer"
                          onClick={() => {
                            setShareUrl(
                              `https://www.contextify.info/contextdetail/${context.type}/${context._id}`
                            );
                            setSharePop(true);
                          }}
                        />
                        <MdDelete
                          onClick={() => {
                            deleteContext(context._id);
                          }}
                          color="red"
                          className="cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
