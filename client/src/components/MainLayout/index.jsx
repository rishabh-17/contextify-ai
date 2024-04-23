import React, { useState } from "react";
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

export default function ClientdashboardPage({ active, children }) {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="h-screen overflow-hidden">
        <nav className="w-full h-[10%] bg-[#fff] flex justify-between px-5 items-center">
          <div className="flex items-center">
            <Img
              src="images/logo.png"
              // src="images/img_frame_purple_900.svg"
              alt="image"
              className="my-auto h-[50px]"
            />
            <h2 className="text-xl font-bold text-purple-900">Contextify</h2>
          </div>
          <form className="mx-auto w-[30%] pl-2 border rounded bg-[#F7F0FC] h-8 overflow-hidden sm:hidden">
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
          </form>
          <div className="flex flex-row items-center">
            <MdNotificationAdd />
            <Img
              src="images/logo.png"
              alt="image"
              className="my-auto mx-4 h-[50px]"
            />
            <div className="text-black flex flex-col">
              <h3>mony roy</h3>
              <span>user</span>
            </div>
            <div>
    
            <div>
      <button
        id="dropdownInformationButton"
        className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700"
        type="button"
        onClick={toggleDropdown}
      >
        <IoIosArrowDropdown className="h-[90px]" />
      </button>
      {/* Dropdown menu */}
      <div
        id="dropdownInformation"
        className={`absolute bg-[#fff] right-0 top-[70px] z-10 ${isDropdownOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>Profile</div>
          <div className="font-medium truncate">name@flowbite.com</div>
        </div>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
          <li>
            <a href="#" className="px-4 py-2 flex flex-row gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            <MdOutlineSpaceDashboard className="h-4 w-4"/>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-2 flex flex-row gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            <IoPowerSharp className="h-4 w-4"/>
              Subscription
            </a>
          </li>
          <li>
            <a href="#" className=" px-4 py-2 flex flex-row gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            <MdOutlineContactSupport className="h-4 w-4"/>
              Support
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-2 flex flex-row gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            <IoSettingsOutline className="h-4 w-4"/>
              Settings
            </a>
          </li>
        </ul>
        <div className="py-2">
          <a
            href="#"
            className="px-4 py-2 text-sm text-gray-700 flex flex-row gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            <IoPowerSharp className="h-4 w-4"/>
            Sign out
          </a>
        </div>
      </div>
    </div>


      
    </div>
            
          </div>
        </nav>
        <div className="flex h-[90%]">
          <div
            className="w-1/5 p-4 flex h-full flex-col gap-3 justify-between bg-[#fff] sm:hidden
        "
          >
            <ul>
              <li
                className={
                  active === 1
                    ? "text-sm p-3 bg-purple-900 rounded-lg text-[#fff] my-1 flex gap-2 items-center"
                    : "text-sm p-3 text-purple-900 rounded-lg my-1 flex gap-2 items-center"
                }
                onClick={() => navigate("/dashboard")}
              >
                <MdOutlineSpaceDashboard className="h-4 w-4"/>
                Dashboard
              </li>
              <li
                className={
                  active === 2
                    ? "text-sm p-3 bg-purple-900 rounded-lg text-[#fff] my-1 flex gap-2 items-center"
                    : "text-sm p-3 text-purple-900 rounded-lg my-1 flex gap-2 items-center"
                }
                onClick={() => navigate("/mycontext")}
              >
                <TbFileSettings className="h-4 w-4"/>
                My Context
              </li>
            </ul>
            <ul className="text-sm">
              <li
                className={
                  active === 3
                    ? "ml-5 my-3 text-sm text-purple-900 font-bold flex gap-2 items-center"
                    : "ml-5 my-3 text-xs flex gap-2 items-center"
                }
              >
                <MdOutlineContactSupport className="h-4 w-4"/>
                support
              </li>
              <li
                className={
                  active === 3
                    ? "ml-5 my-3 text-sm text-purple-900 font-bold flex gap-2 items-center"
                    : "ml-5 my-3 text-xs flex gap-2 items-center"
                }
              >
                <TbMessageReport className="h-4 w-4"/>
                Report an issue
              </li>
              <li
                className={
                  active === 4
                    ? "ml-5 my-3 text-sm text-purple-900 font-bold flex gap-2 items-center"
                    : "ml-5 my-3 text-xs flex gap-2 items-center"
                }
              >
                <IoPowerSharp className="h-4 w-4"/>
                Subscription
              </li>
              <li
                className={
                  active === 5
                    ? "ml-5 my-3 text-sm text-purple-900 font-bold flex gap-2 items-center"
                    : "ml-5 my-3 text-xs flex gap-2 items-center"
                }
              >
                <IoSettingsOutline className="h-4 w-4"/>
                Settings
              </li>
              <li
                className={
                  active === 6
                    ? "ml-5 my-3 text-sm text-purple-900 font-bold flex gap-2 items-center"
                    : "ml-5 my-3 text-xs flex gap-2 items-center"
                }
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
              >
                <IoPowerSharp className="h-4 w-4"/>
                Logout
              </li>
            </ul>
          </div>

          <div className="p-5 w-full overflow-auto">
            {/* --------------------------------------------------------------------------------------------------------------------------- main components start*/}
            {children}
            {/* --------------------------------------------------------------------------------------------------------------------------- main components end*/}
          </div>
        </div>
      </div>
    </>
  );
}
