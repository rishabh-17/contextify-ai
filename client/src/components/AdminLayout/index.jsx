import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Input, Button } from "..";
import { useNavigate } from "react-router-dom";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoPowerSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { TbMessageReport } from "react-icons/tb";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbFileSettings } from "react-icons/tb";
import { MdNotificationAdd } from "react-icons/md";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { FaRegStar } from "react-icons/fa";
import { LuFileStack } from "react-icons/lu";
import { GoGear } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";

function OutsideClick(ref) {
  const [isClicked, setIsClicked] = useState();
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
                onClick={() => navigate("/admindashboard")}
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
                onClick={() => navigate("/allusers")}
              >
                <FaUsers className="h-6 w-6" />
                Users
              </li>
            </ul>
            <ul className="text-md">
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
