import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";
import axios from "axios";
import { RWebShare } from "react-web-share";
import { MdPerson } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { FaRegEdit, FaPlus } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { WiTime4 } from "react-icons/wi";
import { IoMdShare } from "react-icons/io";
import { IoIosPersonAdd } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import share_peoples from "../../assets/share_peoples.png";
import { CiFileOn } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
// import { ThreeDCard } from "../../components/threedcard";

export default function ClientdashboardPage() {
  const [history, setHistory] = React.useState([]);
  const [saved, setSaved] = React.useState([]);
  const [secret, setSecret] = React.useState(localStorage.getItem("secret"));
  const [keyShow, setKeyShow] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [tone, setTone] = useState(1);
  const [type, setType] = useState(1);
  const user = JSON.parse(localStorage.getItem("user"));
  const [ques, setQues] = useState("");
  const [ans, setAns] = useState("");
  const navigate = useNavigate();
  React.useEffect(() => {
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
      },
    };

    const fetchHistory = async () => {
      const { data } = await axios.get(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/client/history",
        config
      );
      setHistory(data.data);
    };

    const fetchSaved = async () => {
      const { data } = await axios.get(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/client/saved",
        config
      );
      setSaved(data?.data);
    };

    fetchHistory();
    fetchSaved();
  }, []);

  const genrateKey = async () => {
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
        setSecret(data?.data?.key);
        localStorage.setItem("secret", data?.data?.key);
      })
      .catch((err) => alert("unable to generate key"));
  };

  const handleNewContext = async () => {
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
        secret: `${secret}`,
      },
    };
    if (!ques) return alert("Please enter a question");
    else if (!secret) return alert("Please generate a secret key");
    else {
      axios
        .post(
          (import.meta.env.VITE_BACKEND_URL || "") + "/api/context/contextify",
          { text: ques, type: type, tone: tone },
          config
        )
        .then(({ data }) => {
          setAns(data?.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  return (
    <>
      <MainLayout active={1}>
        <div className="w-full mb-4 text-violet-900 h-4 text-lg">
          Hi, {user?.name}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 w-full py-3">
          <div>
            <div className="flex flex-col  items-center gap-4 rounded-full ml-5 w-1/3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5H3d-mRDA8EJp4JIoVsVod9iYe5PqViR-hUd7pDn-mQ&s"
                alt=""
                width={150}
                className="rounded-full"
              />

              <button
                className="text-[#fff] bg-purple-900 rounded-full p-2 mb-4"
                onClick={() => navigate("/profile")}
              >
                Edit Profile
              </button>
            </div>

            <section className="my-5">
              <div className="bg-[#fff] shadow-md border w-full py-8 gap-4 flex flex-wrap justify-between rounded rounded-2xl">
                <div className="flex items-center">
                  <div className="p-3  bg-orange-200 rounded-xl mx-1">
                    <MdPerson className="h-8 w-8" color="orange" />
                  </div>
                  <div>
                    <p className="w-[90px] text-center text-gray-700">
                      Categories
                    </p>
                    <p className="w-[90px] text-center">4</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-2/3 my-auto w-[2px] bg-gray-300"></div>
                  <div className="p-3  bg-purple-200 rounded-xl mx-1">
                    <MdPerson className="h-8 w-8" color="#140694" />
                  </div>
                  <div>
                    <p className="w-[90px] text-center text-gray-700">
                      use cases
                    </p>
                    <p className="w-[90px] text-center">4</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="h-2/3 my-auto w-[2px] bg-gray-300"></div>
                  <div className="p-3  bg-blue-200 rounded-xl mx-1">
                    <MdPerson className="h-8 w-8" color="blue" />
                  </div>
                  <div>
                    <p className="w-[90px] text-center text-gray-700">Shared</p>
                    <p className="w-[90px] text-center">4</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section className="mb-5 mx-10 bg-[#fff] p-5 rounded-xl shadow-md">
              <h3 className="my-3">Secret Key</h3>
              <div className="bg-[#fff] p-5 rounded-xl">
                {secret ? (
                  <div className="flex gap-3">
                    <input
                      className="roundedxl"
                      type={keyShow ? "text" : "password"}
                      value={secret}
                    />
                    <FaEye onClick={() => setKeyShow(!keyShow)} />
                  </div>
                ) : (
                  <button
                    className="px-3 py-2 bg-purple-900 text-[#fff] rounded-xl"
                    onClick={genrateKey}
                  >
                    Generate Secret key
                  </button>
                )}
              </div>
            </section>
            <section className="m-10 p-4 flex gap-8 bg-[#fff] shadow-md rounded-xl">
              <div className=" ">
                <img src={share_peoples} width={100} alt="" />
              </div>
              <div className="h-full flex flex-col justify-between">
                <h3>Share with your friends</h3>
                <RWebShare
                  data={{
                    text: "Contextify Your Browser Experience",
                    url: "https://contxtify-ai.com/",
                    title: "Contextify",
                  }}
                >
                  <button className="flex flex-row bg-[#fff] justify-around text-purple-900 rounded-xl px-10 py-4">
                    <IoMdShare className="gap-2" color="#4B0082" />
                    Share
                  </button>
                </RWebShare>
              </div>
            </section>
          </div>
        </div>
        <section className=" my-5">
          <h2>Recent Context</h2>
          <div className="flex flex-wrap items-center gap-2 my-2">
            <div
              class="max-w-sm w-[200px] h-[300px]
             p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col justify-between"
            >
              <div className="overflow-auto" onClick={() => setShowModal(true)}>
                <CiFileOn color="purple" className="w-full  h-[160px]" />
                <h5 class=" text-md font-bold tracking-tight text-gray-900 text-xl text-center dark:text-white">
                  New Context
                </h5>
              </div>
              <div className="h-[40px] w-full border-t-2 flex flex-row-reverse items-center">
                <div>
                  <RWebShare
                    data={{
                      text: "Contextify Your Browser Experience",
                      url: `/dashboard`,
                      title: "Contextify",
                    }}
                  >
                    <FaPlus color="gray" />
                  </RWebShare>
                </div>
              </div>
            </div>
            {history.slice(0, 4).map(
              (item) =>
                item?.type == 1 && (
                  <div
                    class="max-w-sm w-[200px] h-[300px]
             p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col justify-between"
                  >
                    <div className="overflow-auto h-[160px]">
                      <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                        {item?.question?.length > 30
                          ? item?.question?.slice(0, 30) + "..."
                          : item?.question}
                      </h5>
                      <p class="font-normal text-sm text-gray-700 dark:text-gray-400">
                        {item?.answer.length > 50
                          ? item?.answer?.slice(0, 50) + "..."
                          : item?.answer}
                      </p>
                    </div>
                    <div className="h-[40px] w-full border-t-2 flex flex-row-reverse items-center">
                      <div>
                        <div>
                          <RWebShare
                            data={{
                              text: "Contextify Your Browser Experience",
                              url: `/contextdetail/saved/ + ${item._id}`,
                              title: "Contextify",
                            }}
                          >
                            <FaPlus color="gray" />
                          </RWebShare>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
            <div
              class="max-w-sm w-[200px] h-[300px]
             p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col justify-between"
            >
              <div className="overflow-auto h-[160px]">
                <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p class="font-normal text-sm text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
              <div className="h-[40px] w-full border-t-2 flex flex-row-reverse items-center">
                <div>
                  <RWebShare
                    data={{
                      text: "Contextify Your Browser Experience",
                      url: "https://contxtify-ai.com/",
                      title: "Contextify",
                    }}
                  >
                    <FaPlus color="gray" />
                  </RWebShare>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-start">
            <button
              className="text-[#fff] bg-purple-900 rounded-xl p-2"
              onClick={() => navigate("/mycontext")}
            >
              View all
            </button>
          </div>
        </section>

        {showModal && (
          <div className="absolute w-[60%] h-[80%] m-auto left-0 right-0 bg-[#fff] shadow-md rounded border-2  border-purple-300 top-0 bottom-0">
            <div className="grid grid-cols-2 h-full">
              <div className="bg-gray-100 p-4 flex flex-col justify-between rounded overflow-y-auto">
                <h3 className="text-3xl font-bold text-center">New Context</h3>
                <div>
                  <h5 className="font-bold  text-md mb-3">
                    How you want your context to sound like?
                  </h5>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      className={
                        tone === 1
                          ? "bg-purple-900 text-[#fff] px-2 py-1 rounded-full"
                          : "bg-[#fff] border border-purple-900 text-purple-900 px-2 py-1 rounded-full"
                      }
                      onClick={() => setTone(1)}
                    >
                      simple
                    </button>
                    <button
                      className={
                        tone === 2
                          ? "bg-purple-900 text-[#fff] px-2 py-1 rounded-full"
                          : "bg-[#fff] border border-purple-900 text-purple-900 px-2 py-1 rounded-full"
                      }
                      onClick={() => setTone(2)}
                    >
                      simple
                    </button>
                    <button
                      className={
                        tone === 3
                          ? "bg-purple-900 text-[#fff] px-2 py-1 rounded-full"
                          : "bg-[#fff] border border-purple-900 text-purple-900 px-2 py-1 rounded-full"
                      }
                      onClick={() => setTone(3)}
                    >
                      simple
                    </button>
                    <button
                      className={
                        tone === 4
                          ? "bg-purple-900 text-[#fff] px-2 py-1 rounded-full"
                          : "bg-[#fff] border border-purple-900 text-purple-900 px-2 py-1 rounded-full"
                      }
                      onClick={() => setTone(4)}
                    >
                      simple
                    </button>
                    <button
                      className={
                        tone === 5
                          ? "bg-purple-900 text-[#fff] px-2 py-1 rounded-full"
                          : "bg-[#fff] border border-purple-900 text-purple-900 px-2 py-1 rounded-full"
                      }
                      onClick={() => setTone(5)}
                    >
                      simple
                    </button>
                  </div>
                </div>
                <div>
                  <h5 className="font-bold  text-md mb-3">
                    Text to be contextify
                  </h5>
                  <textarea
                    onChange={(e) => setQues(e.target.value)}
                    placeholder="Enter text here"
                    className="w-full rounded-xl"
                    rows={10}
                    value={ques}
                  ></textarea>
                </div>
                <div>
                  <h5 className="font-bold  text-md mb-3">
                    Select Preferred type
                  </h5>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      className={
                        type === 1
                          ? "bg-purple-900 text-[#fff] px-2 py-1 rounded-full"
                          : "bg-[#fff] border border-purple-900 text-purple-900 px-2 py-1 rounded-full"
                      }
                      onClick={() => setType(1)}
                    >
                      Things i know
                    </button>
                    <button
                      className={
                        type === 2
                          ? "bg-purple-900 text-[#fff] px-2 py-1 rounded-full"
                          : "bg-[#fff] border border-purple-900 text-purple-900 px-2 py-1 rounded-full"
                      }
                      onClick={() => setType(2)}
                    >
                      Notes
                    </button>
                    <button
                      className={
                        type === 3
                          ? "bg-purple-900 text-[#fff] px-2 py-1 rounded-full"
                          : "bg-[#fff] border border-purple-900 text-purple-900 px-2 py-1 rounded-full"
                      }
                      onClick={() => setType(3)}
                    >
                      Future exploration
                    </button>
                  </div>
                </div>
                <button
                  className="bg-purple-900 text-[#fff] p-2 w-full"
                  onClick={handleNewContext}
                >
                  Generate
                </button>
              </div>
              <div className="p-4 flex flex-col gap-3 rounded overflow-y-auto">
                <div className="flex flex-row-reverse">
                  <IoClose
                    className="cursor-pointer"
                    onClick={() => setShowModal(false)}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Untitled"
                  className="border-0 text-7xl font-bold"
                  value={ques}
                  onChange={(e) => setQues(e.target.value)}
                />
                <textarea
                  name=""
                  id=""
                  placeholder="Write Something"
                  className="h-full text-sm border-0 overflow-y-auto"
                  value={ans}
                  onChange={(e) => setAns(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        )}
      </MainLayout>
    </>
  );
}
