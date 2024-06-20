import React, { useState, useContext } from "react";
import MainLayout from "../../components/MainLayout";
import axios from "axios";
import { RWebShare } from "react-web-share";
import { RiSpeakFill } from "react-icons/ri";
import { MdPerson } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { FaRegEdit, FaPlus, FaCopy } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { WiTime4 } from "react-icons/wi";
import { IoMdShare } from "react-icons/io";
import { IoIosPersonAdd } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import share_peoples from "../../assets/share_peoples.png";
import { CiFileOn } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { LoadingContext } from "../../App";

import { Img } from "../../components";
import Uploader from "components/Uploader";
// import { ThreeDCard } from "../../components/threedcard";

export default function ClientdashboardPage() {
  const [history, setHistory] = React.useState([]);
  const [saved, setSaved] = React.useState([]);
  const [secret, setSecret] = React.useState("");
  const [keyShow, setKeyShow] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [tone, setTone] = useState(0);
  const [type, setType] = useState(1);
  const user = JSON.parse(localStorage.getItem("user"));
  const [ques, setQues] = useState("");
  const [ans, setAns] = useState("");
  const navigate = useNavigate();
  const setLoading = useContext(LoadingContext);
  const [profile, setProfile] = useState({});
  const [isImgUrl, setIsImgUrl] = useState(false);

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
        console.log(initial);
        if (!initial) {
          setSecret(data?.data?.key);
        }
        localStorage.setItem("secret", data?.data?.key);
        setLoading(false);
      })
      .catch((err) => {
        alert("unable to generate key");
        setLoading(false);
      });
  };

  React.useEffect(() => {
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
      },
    };

    const fetchHistory = async () => {
      setLoading(true);
      const { data } = await axios.get(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/client/history",
        config
      );
      setHistory(data.data);
      setLoading(false);
    };
    const fetchProfile = async () => {
      setLoading(true);
      const { data } = await axios.get(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/client/profile",
        config
      );
      setProfile(data?.data);
      setLoading(false);
    };

    const fetchSaved = async () => {
      setLoading(true);
      const { data } = await axios.get(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/client/saved",
        config
      );
      setSaved(data?.data);
      setLoading(false);
    };

    fetchHistory();
    fetchSaved();
    fetchProfile();
    if (!localStorage.getItem("secret")) {
      genrateKey(true, true);
    }
  }, []);

  const handleNewContext = async () => {
    setIsImgUrl(false);
    setLoading(true);
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
        secret: `${localStorage.getItem("secret")}`,
      },
    };
    if (!ques) {
      setLoading(false);
      return alert("Please enter a question");
    } else if (!secret && !localStorage.getItem("secret")) {
      setLoading(false);
      return alert("Please generate a secret key");
    } else {
      axios
        .post(
          (import.meta.env.VITE_BACKEND_URL || "") + "/api/context/contextify",
          { text: ques, type: type, tone: tone },
          config
        )
        .then(({ data }) => {
          setAns(data?.data);
          setLoading(false);
        })
        .catch((err) => {
          alert(err?.response?.data?.err);
          setLoading(false);
        });
    }
  };

  const handleNewImg = async (url) => {
    setIsImgUrl(true);
    setQues(url);
    setLoading(true);
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
        secret: `${localStorage.getItem("secret")}`,
      },
    };
    if (!secret && !localStorage.getItem("secret")) {
      setLoading(false);

      return alert("Please generate a secret key");
    } else {
      axios
        .post(
          (import.meta.env.VITE_BACKEND_URL || "") + "/api/context/contextify",
          { text: url, type: type, tone: tone, isImg: true },
          config
        )
        .then(({ data }) => {
          setAns(data?.data);
          setLoading(false);
        })
        .catch((err) => {
          alert(err?.response?.data?.err);
          setLoading(false);
        });
    }
  };

  const handleSaveContext = async () => {
    setLoading(true);
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
        secret: `${localStorage.getItem("secret")}`,
      },
    };
    if (!ques) {
      setLoading(false);
      return alert("Please enter a question");
    } else if (!secret && !localStorage.getItem("secret")) {
      setLoading(false);
      return alert("Please generate a secret key");
    } else {
      axios
        .post(
          (import.meta.env.VITE_BACKEND_URL || "") + "/api/context/save",
          { question: ques, answer: ans, type: type },
          config
        )
        .then(({ data }) => {
          alert(data.msg);
          setQues("");
          setAns("");
          setLoading(false);
        })
        .catch((err) => {
          alert(err.err);
          setLoading(false);
        });
    }
  };

  const updateProfileImg = async (url) => {
    setLoading(true);
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
      },
    };
    axios
      .put(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/user/update",
        { imgUrl: url },
        config
      )
      .then(({ data }) => {
        alert(data.msg);
        setLoading(false);
      })
      .catch((err) => {
        alert(err.err);
        setLoading(false);
      });
  };
  function capitalizeFirstLetter(string) {
    if (!string) return "";
    return string?.charAt(0)?.toUpperCase() + string?.slice(1);
  }

  const handleSpeech = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(ans);
    const voices = speechSynthesis.getVoices();
    const selectedVoice = localStorage.getItem("voiceType") || 1;
    utterance.voice = voices[selectedVoice];
    synth.speak(utterance);
  };

  return (
    <>
      <MainLayout active={1} user={user}>
        <div className="w-full mb-4 text-violet-900 h-4 text-lg">
          Hi, {capitalizeFirstLetter(user?.name)}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 w-full py-3">
          <div>
            <div className="flex flex-col  items-center gap-4 rounded-full ml-5 w-1/3">
              {profile?.imgUrl ? (
                <img
                  src={profile?.imgUrl}
                  alt=""
                  width={150}
                  className="rounded-full"
                />
              ) : (
                <Img
                  src="images/defaultImg.jpg"
                  // src="images/img_frame_purple_900.svg"
                  alt="image"
                  className="rounded-full"
                />
              )}
            </div>

            <section className="my-5">
              <div className="bg-[#fff] shadow-md border w-full py-8 px-4 gap-4 flex flex-wrap justify-evenly sm:justify-between rounded rounded-2xl">
                <div className="flex items-center">
                  <div className="p-3  bg-purple-200 rounded-xl mx-1">
                    <Img
                      src="images/Swap.svg"
                      // src="images/img_frame_purple_900.svg"
                      alt="image"
                      className="my-auto h-8 w-8"
                    />
                  </div>
                  <div>
                    <p className="w-[90px] text-center text-gray-700">
                      Use Cases
                    </p>
                    <p className="w-[90px] text-center">
                      {profile?.usage || 0}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3  bg-blue-200 rounded-xl mx-1">
                    <Img
                      src="images/Group.svg"
                      // src="images/img_frame_purple_900.svg"
                      alt="image"
                      className="my-auto h-8 w-8"
                    />
                  </div>
                  <div>
                    <p className="w-[90px] text-center text-gray-700">Tokens</p>
                    <p className="w-[90px] text-center">
                      {profile?.totalReq || 0}
                    </p>
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
                    <FaCopy
                      color="purple"
                      onClick={() => {
                        navigator.clipboard.writeText(secret);
                        alert("copied");
                      }}
                      // onClick={() => {
                      //   setKeyShow(!keyShow);
                      //   if (keyShow === true) setSecret("");
                      // }}
                    />
                  </div>
                ) : (
                  <button
                    className="px-3 py-2 bg-purple-900 text-[#fff] hover:hover:-translate-y-1 hover:scale-110 hover:bg-[#fff] hover:text-purple-900 rounded-xl"
                    onClick={genrateKey}
                  >
                    Generate Secret key
                  </button>
                )}
              </div>
            </section>
            <section className="m-10 p-4 flex gap-8 bg-[#fff] shadow-md rounded-xl">
              <div className=" ">
                <img src="images/sharePeoples.jpg" width={100} alt="" />
              </div>
              <div className="h-full flex flex-col justify-between">
                <h3>Share with your friends</h3>
                <RWebShare
                  data={{
                    text: "Contextify Your Browser Experience",
                    url: "https://contextify.info/",
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
              <div className="h-[40px] w-full border-t-2 flex flex-row-reverse items-center"></div>
            </div>
            {history?.slice(0, 4).map((item) => (
              <div
                class="max-w-sm w-[200px] h-[300px]
             p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col justify-between"
              >
                <div
                  className="overflow-auto h-full"
                  onClick={() => navigate(`/contextdetail/history/${item._id}`)}
                >
                  {item?.question?.startsWith("http") ? (
                    <img src={item?.question} alt="image" className="mb-2" />
                  ) : (
                    <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                      {item?.question?.length > 30
                        ? item?.question?.slice(0, 30) + "..."
                        : item?.question}
                    </h5>
                  )}
                  <p class="font-normal text-sm text-gray-700 dark:text-gray-400">
                    {item?.answer.length > 200
                      ? item?.answer?.replaceAll("#", "")?.slice(0, 200) + "..."
                      : item?.answer?.replaceAll("#", "")}
                  </p>
                </div>
                <div className="h-[40px] w-full border-t-2 flex flex-row-reverse items-center">
                  <div>
                    <div className="flex gap-3">
                      <RWebShare
                        data={{
                          text: "Contextify Your Browser Experience",
                          url: `https://www.contextify.info/contextdetail/history/${item._id}`,
                          title: "Contextify",
                        }}
                      >
                        <FaPlus color="gray" />
                      </RWebShare>

                      <FaCopy
                        color="purple"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            `https://www.contextify.info/contextdetail/history/${item._id}`
                          );
                          alert("copied");
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {!!history?.length && (
            <div className="w-full flex justify-start">
              <button
                className="text-[#fff] bg-purple-900 rounded-xl p-2"
                onClick={() => navigate("/mycontext")}
              >
                View all
              </button>
            </div>
          )}
        </section>

        {showModal && (
          <div className="absolute w-[60%] h-[80%] m-auto left-0 right-0 bg-[#fff] shadow-md rounded border-2  border-purple-300 top-0 bottom-0 overflow-auto">
            <div className="grid grid-cols-2 sm:grid-cols-1 sm:overflow-auto h-full">
              <div className="bg-gray-100 p-4 flex flex-col justify-between rounded overflow-auto min-h-[500px]">
                <div className=" flex-row-reverse items-center gap-3 hidden sm:flex">
                  <IoClose
                    className="cursor-pointer  hover:-translate-y-1 hover:scale-110"
                    onClick={() => setShowModal(false)}
                  />
                </div>
                <h3 className="text-3xl font-bold text-center">New Context</h3>
                <div>
                  <h5 className="font-bold  text-md mb-3">
                    How you want your context to sound like?
                  </h5>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      className={
                        tone === 1
                          ? "bg-purple-900 text-[#fff] hover:hover:-translate-y-1 hover:scale-110 hover:bg-[#fff] hover:text-purple-900 px-2 py-1 rounded-full"
                          : "bg-[#fff] border border-purple-900 text-purple-900 px-2 py-1 rounded-full hover:-translate-y-1 hover:scale-110"
                      }
                      onClick={() => setTone(1)}
                    >
                      Professional
                    </button>
                    <button
                      className={
                        tone === 2
                          ? "bg-purple-900 text-[#fff] hover:hover:-translate-y-1 hover:scale-110 hover:bg-[#fff] hover:text-purple-900 px-2 py-1 rounded-full"
                          : "bg-[#fff] border border-purple-900 text-purple-900 px-2 py-1 rounded-full hover:-translate-y-1 hover:scale-110"
                      }
                      onClick={() => setTone(2)}
                    >
                      Cheeky
                    </button>
                    <button
                      className={
                        tone === 3
                          ? "bg-purple-900 text-[#fff] hover:hover:-translate-y-1 hover:scale-110 hover:bg-[#fff] hover:text-purple-900 px-2 py-1 rounded-full hover:-translate-y-1 hover:scale-110"
                          : "bg-[#fff] border border-purple-900 text-purple-900 px-2 py-1 rounded-full hover:-translate-y-1 hover:scale-110 hover:-translate-y-1 hover:scale-110"
                      }
                      onClick={() => setTone(3)}
                    >
                      Conversational
                    </button>
                    <button
                      className={
                        tone === 4
                          ? "bg-purple-900 text-[#fff] hover:hover:-translate-y-1 hover:scale-110 hover:bg-[#fff] hover:text-purple-900 px-2 py-1 rounded-full"
                          : "bg-[#fff] border border-purple-900 text-purple-900 px-2 py-1 rounded-full hover:-translate-y-1 hover:scale-110"
                      }
                      onClick={() => setTone(4)}
                    >
                      Excited
                    </button>
                    <button
                      className={
                        tone === 5
                          ? "bg-purple-900 text-[#fff] hover:hover:-translate-y-1 hover:scale-110 hover:bg-[#fff] hover:text-purple-900 px-2 py-1 rounded-full"
                          : "bg-[#fff] border border-purple-900 text-purple-900 px-2 py-1 rounded-full hover:-translate-y-1 hover:scale-110"
                      }
                      onClick={() => setTone(5)}
                    >
                      Kid-friendly
                    </button>
                  </div>
                </div>
                <div>
                  <h5 className="font-bold  text-md mb-3">
                    Text to be contextified
                  </h5>
                  {ques.startsWith("http") ? (
                    <textarea
                      onChange={(e) => {
                        setIsImgUrl(false);
                        setQues(e.target.value);
                      }}
                      placeholder="Enter text here"
                      className="w-full rounded-xl"
                      value={!ques.startsWith("http") ? ques : ""}
                      rows={10}
                    ></textarea>
                  ) : (
                    <textarea
                      onChange={(e) => setQues(e.target.value)}
                      placeholder="Enter text here"
                      className="w-full rounded-xl"
                      rows={10}
                      value={ques}
                    ></textarea>
                  )}
                </div>
                <div className="flex gap-4 w-full items-center">
                  <button
                    className="bg-purple-900 text-[#fff] hover:hover:-translate-y-1 hover:scale-110 hover:bg-[#fff] hover:text-purple-900 p-2 w-full hover:-translate-y-1 hover:scale-110"
                    onClick={handleNewContext}
                  >
                    Generate
                  </button>
                  <Uploader
                    handleNewImg={handleNewImg}
                    className="bg-transparent"
                    context
                  />
                </div>
              </div>
              <div className="p-4 flex flex-col gap-3 rounded overflow-auto min-h-[500px]">
                <div className="flex flex-row-reverse items-center gap-3">
                  <IoClose
                    className="cursor-pointer sm:hidden  hover:-translate-y-1 hover:scale-110"
                    onClick={() => setShowModal(false)}
                  />
                  <RiSpeakFill
                    color="purple"
                    className="h-8"
                    onClick={handleSpeech}
                  />
                </div>
                {!isImgUrl ? (
                  <input
                    type="text"
                    placeholder="Untitled"
                    className="border-0 text-7xl font-bold"
                    value={ques}
                    onChange={(e) => setQues(e.target.value)}
                  />
                ) : (
                  <img src={ques} width="100" />
                )}
                <textarea
                  name=""
                  id=""
                  placeholder="Write Something"
                  className="h-full text-sm border-0 overflow-y-auto"
                  value={ans}
                  onChange={(e) => setAns(e.target.value)}
                ></textarea>
                {ans && (
                  <div>
                    <h5 className="font-bold  text-md mb-3">Save To:</h5>
                    <div className="flex gap-2 flex-wrap">
                      <button
                        className={
                          type === 1
                            ? "bg-purple-900 text-[#fff] text-sm hover:hover:-translate-y-1 hover:scale-110 hover:bg-[#fff] hover:text-purple-900 px-2 py-1 rounded-full"
                            : "bg-[#fff] border text-sm border-purple-900 text-purple-900 px-2 py-1 rounded-full hover:-translate-y-1 hover:scale-110"
                        }
                        onClick={() => setType(1)}
                      >
                        Things I know
                      </button>
                      <button
                        className={
                          type === 2
                            ? "bg-purple-900 text-[#fff] text-sm hover:hover:-translate-y-1 hover:scale-110 hover:bg-[#fff] hover:text-purple-900 px-2 py-1 rounded-full"
                            : "bg-[#fff] border text-sm border-purple-900 text-purple-900 px-2 py-1 rounded-full hover:-translate-y-1 hover:scale-110"
                        }
                        onClick={() => setType(2)}
                      >
                        Notes
                      </button>
                      <button
                        className={
                          type === 3
                            ? "bg-purple-900 text-sm text-[#fff] hover:hover:-translate-y-1 hover:scale-110 hover:bg-[#fff] hover:text-purple-900 px-2 py-1 rounded-full"
                            : "bg-[#fff] border text-sm border-purple-900 text-purple-900 px-2 py-1 rounded-full hover:-translate-y-1 hover:scale-110"
                        }
                        onClick={() => setType(3)}
                      >
                        Future exploration
                      </button>
                      <button
                        className="bg-purple-900 text-[#fff] hover:hover:-translate-y-1 hover:scale-110 hover:bg-[#fff] hover:text-purple-900 w-full p-2 hover:-translate-y-1 hover:scale-110"
                        onClick={handleSaveContext}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </MainLayout>
    </>
  );
}
