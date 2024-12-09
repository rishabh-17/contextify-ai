import React, { useState, useContext } from "react";
import MainLayout from "../../components/MainLayout";
import axios from "axios";
import { RWebShare } from "react-web-share";
import { ShareSocial } from "react-share-social";
import { RiSpeakFill } from "react-icons/ri";
import { MdPerson } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import {
  FaRegEdit,
  FaCopy,
  FaRegQuestionCircle,
  FaPlay,
  FaPause,
  FaStop,
} from "react-icons/fa";
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
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";

import SharePopup from "../../components/sharePopup";

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
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();
  const setLoading = useContext(LoadingContext);
  const [loadingState, setLoadingState] = useState(false);
  const [profile, setProfile] = useState({});
  const [isImgUrl, setIsImgUrl] = useState(false);
  const [sharePop, setSharePop] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [addCategoryInput, setAddCategoryInput] = useState(false);
  const [addCategory, setAddCategory] = useState("");

  const fetchCategories = async () => {
    setLoading(true);
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
      },
    };
    const { data } = await axios.get(
      (import.meta.env.VITE_BACKEND_URL || "") + "/api/user/categories",
      config
    );
    setCategories(data?.categories || []);
    setLoading(false);
  };

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
    fetchCategories();
    if (!localStorage.getItem("secret")) {
      genrateKey(true, true);
    }
  }, []);

  const handleNewContext = async () => {
    setIsImgUrl(false);
    setLoadingState(true);
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
        secret: `${localStorage.getItem("secret")}`,
      },
    };
    if (!ques) {
      setLoadingState(false);
      return alert("Please enter a question");
    } else if (!secret && !localStorage.getItem("secret")) {
      setLoadingState(false);
      return toast.warn("Please generate a secret key");
    } else {
      axios
        .post(
          (import.meta.env.VITE_BACKEND_URL || "") + "/api/context/contextify",
          { text: ques, type: type, tone: tone },
          config
        )
        .then(({ data }) => {
          setAns(data?.data);
          setLoadingState(false);
        })
        .catch((err) => {
          toast.error(err?.response?.data?.err);
          setLoadingState(false);
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
      return toast.warn("Please generate a secret key");
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
          toast.error(err?.response?.data?.err);
          setLoading(false);
        });
    }
  };

  const handleAddCategory = async () => {
    setLoading(true);
    if (!addCategory && !categories.includes(addCategory)) {
      setLoading(false);
      return;
    }
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
      },
    };
    const { data } = await axios.post(
      (import.meta.env.VITE_BACKEND_URL || "") + "/api/user/categories",
      {
        category: addCategory,
      },
      config
    );
    if (!data?.success) {
      alert("Something went wrong");
      return;
    }
    toast.success("Category added successfully");
    setAddCategory("");
    setAddCategoryInput(false);
    fetchCategories();
    setLoading(false);
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
      return toast.warn("Please enter a question");
    } else if (!secret && !localStorage.getItem("secret")) {
      setLoading(false);
      return toast.warn("Please generate a secret key");
    } else {
      axios
        .post(
          (import.meta.env.VITE_BACKEND_URL || "") + "/api/context/save",
          { question: ques, answer: ans, type: type },
          config
        )
        .then(({ data }) => {
          toast.success("Saved successfully");
          setQues("");
          setAns("");
          setLoading(false);
        })
        .catch((err) => {
          toast.error(err.err);
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
  const [speechSynthesisInstance, setSpeechSynthesisInstance] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleSpeech = () => {
    if (ans) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(ans);
      const voices = speechSynthesis.getVoices();
      const selectedVoice = localStorage.getItem("voiceType") || 1;
      utterance.voice = voices[selectedVoice];
      synth.speak(utterance);
      setSpeechSynthesisInstance(synth);
      setIsSpeaking(true);
      setIsPaused(false);
    }
  };

  const handlePause = () => {
    if (speechSynthesisInstance && isSpeaking) {
      speechSynthesisInstance.pause();
      setIsPaused(true);
    }
  };

  const handleResume = () => {
    if (speechSynthesisInstance && isPaused) {
      speechSynthesisInstance.resume();
      setIsPaused(false);
    }
  };

  const handleCancel = () => {
    if (speechSynthesisInstance) {
      speechSynthesisInstance.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
    }
  };

  return (
    <>
      <MainLayout active={1} user={user}>
        {sharePop && shareUrl && (
          <SharePopup url={shareUrl} setSharePop={setSharePop} />
        )}
        <div className="w-full mb-4 text-violet-900 h-4 text-lg">
          Hi, {capitalizeFirstLetter(user?.name)}
        </div>
        <div className="grid grid-cols-1  md:grid-cols-1 gap-4 w-full py-3">
          <div>
            {/* <div className="flex flex-col  items-center gap-4 rounded-full ml-5 w-1/3">
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
            </div> */}

            <section className="my-5 mx-10">
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
                    <p className="w-[120px] text-center text-gray-700 flex gap-1">
                      Use Cases
                      <FaRegQuestionCircle
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Total Contexts Searched"
                      />
                    </p>
                    <p className="w-[90px] text-center">
                      {profile?.usage || 0} <Tooltip id="my-tooltip" />
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
                    <p className="w-[90px] text-center text-gray-700 flex gap-1">
                      Tokens{" "}
                      <FaRegQuestionCircle
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Tokens Left"
                      />
                    </p>
                    <p className="w-[90px] text-center">
                      {profile?.totalReq || 0}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section className="my-5 mx-10">
            <div className="bg-[#fff] shadow-md border w-full py-8 px-4 gap-4 rounded-2xl flex justify-between items-center">
              <div className="">
                <h3 className="my-3 font-bold">Get more contexts with AI</h3>
                <p className=" text-gray-700">
                  Subscribe to a plan and unlock the power of contextify
                </p>
              </div>
              <button
                className="px-3 py-2 bg-purple-900 text-[#fff] hover:hover:-translate-y-1 hover:scale-110 hover:bg-[#fff] hover:text-purple-900 rounded-xl h-10"
                onClick={() => navigate("/subscription")}
              >
                Unlock
              </button>
            </div>
          </section>
          <div>
            {/* <section className="mb-5 mx-10 bg-[#fff] p-5 rounded-xl shadow-md">
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
                    Generate secret key
                  </button>
                )}
              </div>
            </section> */}

            <div className="grid grid-cols-2 md:grid-cols-1">
              <section className="my-5 mx-10 bg-[#fff] p-5 flex items-center gap-4 rounded-xl shadow-md">
                <Img src="images/logo.png" alt="Loading..." className="h-24" />
                <div className="flex flex-col items-center">
                  <h3 className="my-3 font-bold">Get Context Now</h3>
                  <button
                    className="px-3 py-2 bg-purple-900 text-[#fff] hover:hover:-translate-y-1 hover:scale-110 hover:bg-[#fff] hover:text-purple-900 rounded-xl"
                    onClick={() => setShowModal(true)}
                  >
                    Contextify
                  </button>
                </div>
              </section>

              <section className="mx-10 p-5 my-5 flex gap-8 bg-[#fff] shadow-md rounded-xl">
                <div className=" ">
                  <img src="images/sharePeoples.jpg" width={100} alt="" />
                </div>
                <div className="h-full flex flex-col justify-between">
                  <h3 className="my-3">Share with your friends</h3>
                  <button
                    className="bg-[#fff] flex text-purple-900 rounded-xl mt-3 py-2 hover:hover:-translate-y-1 hover:scale-110 border-purple-900 border w-fit px-5 items-center"
                    onClick={() => {
                      setShareUrl("https://contextify.info/");
                      setSharePop(true);
                    }}
                  >
                    <IoMdShare className="mx-1" color="#4B0082" />
                    <span>Share</span>
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
        <section className=" my-5">
          <h2 className="gap-1 flex">
            Recent Context{" "}
            <FaRegQuestionCircle
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Context History"
            />
          </h2>
          <div className="flex flex-wrap items-center gap-2 my-2">
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
                      <IoMdShare
                        color="gray"
                        onClick={() => {
                          setShareUrl(
                            `https://www.contextify.info/contextdetail/history/${item._id}`
                          );
                          setSharePop(true);
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
          <div className="absolute w-[60%] h-[80%] md:w-full m-auto left-0 right-0 bg-[#fff] shadow-md rounded border-2  border-purple-300 top-0 bottom-0 overflow-auto">
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
                          : "bg-[#fff] border border-purple-900 text-purple-900 px-2 py-1 rounded-full hover:-translate-y-1 hover:scale-110"
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
                    <div className="w-full rounded-xl bg-[#fff] p-1">
                      <textarea
                        style={{ resize: "none" }}
                        onChange={(e) => setQues(e.target.value)}
                        placeholder="Enter text here"
                        className="w-full rounded-xl border-0"
                        rows={10}
                        value={!ques.startsWith("http") ? ques : ""}
                      ></textarea>
                      <div className="flex flex-row-reverse">
                        <Uploader
                          handleNewImg={handleNewImg}
                          className="bg-transparent"
                          context
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-full rounded-xl bg-[#fff] p-1">
                      <textarea
                        style={{ resize: "none" }}
                        onChange={(e) => setQues(e.target.value)}
                        placeholder="Enter text here"
                        className="w-full rounded-xl border-0"
                        rows={10}
                        value={ques}
                      ></textarea>
                      <div className="flex flex-row-reverse">
                        <Uploader
                          handleNewImg={handleNewImg}
                          className="bg-transparent"
                          context
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex gap-4 w-full items-center">
                  <button
                    className="bg-purple-900 text-[#fff] hover:hover:-translate-y-1 hover:scale-110 hover:bg-[#fff] hover:text-purple-900 p-2 w-full hover:-translate-y-1 hover:scale-110"
                    onClick={handleNewContext}
                  >
                    Generate
                  </button>
                </div>
              </div>
              {loadingState ? (
                <div className="p-4 flex flex-col justify-center items-center rounded overflow-hidden min-h-[500px]">
                  <Img
                    src="images/logo.png"
                    alt="Loading..."
                    className="h-24 animate-spin"
                  />
                  <div>Loading...</div>
                </div>
              ) : (
                <div className="p-4 flex flex-col gap-3 rounded overflow-auto min-h-[500px]">
                  <div className="flex flex-row-reverse items-center gap-3">
                    <IoClose
                      className="cursor-pointer sm:hidden  hover:-translate-y-1 hover:scale-110"
                      onClick={() => setShowModal(false)}
                    />
                    {!isSpeaking && !isPaused && (
                      <RiSpeakFill
                        color="purple"
                        className="h-6 w-6 cursor-pointer hover:-translate-y-1 hover:scale-110"
                        onClick={handleSpeech}
                      />
                    )}

                    {isSpeaking && !isPaused && (
                      <FaPause
                        className="h-6 w-6 cursor-pointer hover:-translate-y-1 hover:scale-110 text-purple-900"
                        onClick={handlePause}
                      />
                    )}
                    {isPaused && (
                      <FaPlay
                        className="h-6 w-6 cursor-pointer hover:-translate-y-1 hover:scale-110 text-purple-900"
                        onClick={handleResume}
                      />
                    )}
                    {(isSpeaking || isPaused) && (
                      <FaStop
                        className="h-6 w-6 cursor-pointer hover:-translate-y-1 hover:scale-110 text-purple-900"
                        onClick={handleCancel}
                      />
                    )}
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
                      <div className="flex gap-2 items-center">
                        <h5 className="font-bold  text-md mb-3">Save To:</h5>
                        <div className="flex gap-2 flex-wrap ">
                          <div className="relative inline-block text-left flex gap-3 w-full">
                            {!addCategoryInput ? (
                              <>
                                <select
                                  className="bg-white rounded shadow-lg p-3 w-max"
                                  id="dropdownMenu"
                                  role="menu"
                                  onChange={(e) => setType(e.target.value)}
                                  // aria-orientation="vertical"
                                  // aria-labelledby="dropdownButton"
                                >
                                  {[...(categories || [])]?.map(
                                    (option, index) => (
                                      <option
                                        key={index}
                                        className="text-sm px-2 py-1 rounded hover:-translate-y-1 hover:scale-110"
                                        value={option}
                                        onClick={() => {
                                          setType(option);
                                        }}
                                      >
                                        {option}
                                      </option>
                                    )
                                  )}
                                </select>
                                <button
                                  className="bg-purple-900 gap-3 text-[#fff] hover:hover:-translate-y-1 hover:scale-110 hover:bg-[#fff] hover:text-purple-900 w-full p-1 hover:-translate-y-1 w-10 hover:scale-110 rounded-lg"
                                  onClick={() => {
                                    setAddCategoryInput(!addCategoryInput);
                                  }}
                                >
                                  +
                                </button>
                              </>
                            ) : (
                              <>
                                <input
                                  type="text"
                                  value={addCategory}
                                  onChange={(e) =>
                                    setAddCategory(e.target.value)
                                  }
                                />
                                <button
                                  className="bg-purple-900 gap-3 text-[#fff] hover:hover:-translate-y-1 hover:scale-110 hover:bg-[#fff] hover:text-purple-900 p-1 hover:-translate-y-1 w-12 hover:scale-110 rounded-lg"
                                  onClick={() => {
                                    handleAddCategory();
                                  }}
                                >
                                  Add
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <button
                        className="bg-purple-900 text-[#fff] hover:hover:-translate-y-1 hover:scale-110 hover:bg-[#fff] hover:text-purple-900 w-full p-2 hover:-translate-y-1 hover:scale-110 mt-2"
                        onClick={handleSaveContext}
                      >
                        Save
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </MainLayout>
    </>
  );
}
