import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Input, Button } from "..";
import { useNavigate } from "react-router-dom";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoCubeOutline } from "react-icons/io5";
import { IoPowerSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { TbMessageReport } from "react-icons/tb";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbFileSettings } from "react-icons/tb";
import { MdNotificationAdd } from "react-icons/md";
import { IoIosArrowDropdown } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { FaRegStar } from "react-icons/fa";
import { LuFileStack } from "react-icons/lu";
import { GoGear } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";

function OutsideClick(ref) {
  const [isClicked, setIsClicked] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsClicked(true);
      } else {
        setIsClicked(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return isClicked;
}

export default function ClientdashboardPage({ active, children }) {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const boxRef = useRef(null);
  // boxOutsideClick will be true on outside click
  const boxOutsideClick = OutsideClick(boxRef);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    if (boxOutsideClick) {
      setIsDropdownOpen(false);
    }
  }, [boxOutsideClick]);
  return (
    <>
      <div className="h-screen overflow-hidden">
        <div className="flex h-full ">
          <div
            className="w-1/5 p-4 flex h-full flex-col gap-3 justify-between bg-[#F7F0FC] sm:hidden
        "
          >
            <ul>
              <li>
                <div className="flex items-center mb-5">
                  <Img
                    src="images/logo.png"
                    // src="images/img_frame_purple_900.svg"
                    alt="image"
                    className="my-auto h-[60px]"
                  />
                  <h2 className="text-2xl font-bold text-purple-900">
                    Contextify
                  </h2>
                </div>
              </li>
              <li
                className={
                  active === 1
                    ? "text-md p-3 bg-purple-900 rounded-lg text-[#fff] my-1 flex gap-2 items-center"
                    : "text-md p-3 text-purple-900 rounded-lg my-1 flex gap-2 items-center hover:text-purple-900 hover:-translate-y-1 hover:scale-110"
                }
                onClick={() => navigate("/dashboard")}
              >
                <RxDashboard className="h-6 w-6" />
                Dashboard
              </li>
              <li
                className={
                  active === 2
                    ? "text-md p-3 bg-purple-900 rounded-lg text-[#fff] my-1 flex gap-2 items-center"
                    : "text-md p-3 text-purple-900 rounded-lg my-1 flex gap-2 items-center hover:text-purple-900 hover:-translate-y-1 hover:scale-110"
                }
                onClick={() => navigate("/mycontext")}
              >
                <LuFileStack className="h-6 w-6" />
                My Context
              </li>
              <li
                className={
                  active === 4
                    ? "text-md p-3 bg-purple-900 rounded-lg text-[#fff] my-1 flex gap-2 items-center"
                    : "text-md p-3 text-purple-900 rounded-lg my-1 flex gap-2 items-center hover:text-purple-900 hover:-translate-y-1 hover:scale-110"
                }
                onClick={() => navigate("/subscription")}
              >
                <FaRegStar className="h-6 w-6" />
                Premium
              </li>
              <li
                className={
                  active === 5
                    ? "text-md p-3 bg-purple-900 rounded-lg text-[#fff] my-1 flex gap-2 items-center"
                    : "text-md p-3 text-purple-900 rounded-lg my-1 flex gap-2 items-center hover:text-purple-900 hover:-translate-y-1 hover:scale-110"
                }
                onClick={() => navigate("/apps")}
              >
                <IoCubeOutline className="h-6 w-6" />
                Apps
              </li>
            </ul>
            <ul className="text-md">
              <li
                className={
                  active === 3
                    ? "ml-5 my-3 text-sm text-purple-900 font-bold flex gap-2 items-center"
                    : "ml-5 my-3 text-sm flex gap-2 items-center text-purple-900 hover:-translate-y-1 hover:scale-110"
                }
                onClick={() => navigate("/support")}
              >
                <MdOutlineContactSupport className="h-8 w-8" />
                Support
              </li>
              {/* 
              <li
                className={
                  active === 5
                    ? "ml-5 my-3 text-sm text-purple-900 font-bold flex gap-2 items-center"
                    : "ml-5 my-3 text-xs flex gap-2 items-center"
                }
              >
                <IoSettingsOutline className="h-4 w-4" />
                Settings
              </li> */}
              <li
                className={
                  active === 6
                    ? "ml-5 my-3 text-sm text-purple-900 font-bold flex gap-2 items-center"
                    : "ml-5 my-3 text-sm flex gap-2 items-center text-purple-900 hover:-translate-y-1 hover:scale-110  duration-300"
                }
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
              >
                <IoPowerSharp className="h-8 w-8" />
                <div>
                  <p>Sign out</p>
                  <p className="text-xs">
                    {user?.email?.length > 30
                      ? user?.email?.slice(0, 30) + "..."
                      : user?.email}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-5 w-full overflow-auto">
            <nav className="w-full h-[10%] bg-[#fff] flex justify-between px-5 items-center">
              <div></div>
              {/* <form className="w-[40%] pl-2 border rounded bg-[#F7F0FC] h-8 overflow-hidden sm:hidden">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-[90%] ml-6 ps-10 text-sm text-gray-900 border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white bg-transparent border-0"
                    placeholder="Search "
                    required
                  />
                </div>
              </form> */}
              <div className="flex flex-row items-center justify-around">
                <div className="h-8 w-8 m-2 flex bg-gray-300 rounded-full text-center items-center justify-center">
                  <Img
                    src="images/defaultImg.jpg"
                    alt="profile"
                    className="h-6 shadow-xl"
                  />
                </div>
                <div className="text-black flex flex-col">
                  <h3>{user?.name}</h3>
                </div>
                <div>
                  <div>
                    <button
                      id="dropdownInformationButton"
                      className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700"
                      type="button"
                      onClick={toggleDropdown}
                    >
                      <IoIosArrowDropdown className="h-6 w-6" />
                    </button>
                    {/* Dropdown menu */}
                    {isDropdownOpen && (
                      <div
                        id="dropdownInformation"
                        className={`absolute bg-[#fff] w-[230px] right-5 top-[70px] z-10 ${
                          isDropdownOpen ? "" : "hidden"
                        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                        ref={boxRef}
                      >
                        <div>
                          <div className=" flex flex-row flex-wrap gap-3 items-center px-1 py-3 text-sm text-purple-900 dark:text-white">
                            {/* <div className="h-8 w-8 m-2 flex bg-gray-300 rounded-full text-center items-center justify-center">
                          <img
                            src="../../../public/images/Image.png"
                            alt="profile"
                            className="h-6 shadow-xl"
                          />
                        </div> */}
                            <a onClick={() => navigate("/profile")}>
                              {/* <p>Profile</p> */}
                              <div className="font-sm truncate">
                                {user?.email?.length > 20
                                  ? user?.email?.slice(0, 20) + "..."
                                  : user?.email}
                              </div>
                            </a>
                          </div>
                          <ul
                            className="py-2 text-md text-purple-900 dark:text-gray-200"
                            aria-labelledby="dropdownInformationButton"
                          >
                            <li onClick={() => navigate("/dashboard")}>
                              <a className="px-4 py-2 flex flex-row gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-purple-900 hidden sm:flex">
                                <RxDashboard className="h-4 w-4" />
                                Dashboard
                              </a>
                            </li>
                            <li onClick={() => navigate("/mycontext")}>
                              <a className="px-4 py-2 flex flex-row gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-purple-900 hidden sm:flex">
                                <LuFileStack className="h-4 w-4" />
                                My Context
                              </a>
                            </li>
                            <li onClick={() => navigate("/apps")}>
                              <a className="px-4 py-2 flex flex-row gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-purple-900 hidden sm:flex">
                                <IoCubeOutline className="h-4 w-4" />
                                Apps
                              </a>
                            </li>
                            <li onClick={() => navigate("/profile")}>
                              <a className="px-4 py-2 flex flex-row gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-purple-900">
                                <RxAvatar className="h-4 w-4" />
                                Profile
                              </a>
                            </li>
                            <li onClick={() => navigate("/subscription")}>
                              <a className="px-4 py-2 flex-row gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-purple-900 hidden sm:flex ">
                                <FaRegStar className="h-4 w-4" />
                                Subscription
                              </a>
                            </li>
                            <li onClick={() => navigate("/support")}>
                              <a
                                href="#"
                                className=" px-4 py-2 flex flex-row gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-purple-900"
                              >
                                <MdOutlineContactSupport className="h-4 w-4" />
                                Support
                              </a>
                            </li>
                            <li onClick={() => {}}>
                              <a
                                href="#"
                                className=" px-4 py-2 flex flex-row gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-purple-900"
                              >
                                <GoGear className="h-4 w-4" />
                                Settings
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                localStorage.clear();
                                navigate("/");
                              }}
                            >
                              <a
                                href="#"
                                className=" px-4 py-2 flex flex-row gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-purple-900"
                              >
                                <IoPowerSharp className="h-4 w-4" />
                                Sign out
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </nav>
            {/* --------------------------------------------------------------------------------------------------------------------------- main components start*/}
            {children}
            {/* --------------------------------------------------------------------------------------------------------------------------- main components end*/}
          </div>
        </div>
      </div>
    </>
  );
}
