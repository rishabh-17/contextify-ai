import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Input, Button } from "..";
import { useNavigate } from "react-router-dom";

export default function ClientdashboardPage({ active, children }) {
  const navigate = useNavigate();
  const [searchBarValue, setSearchBarValue] = React.useState("");
  return (
    <>
      <div className="h-screen overflow-hidden">
        <nav className="w-full h-[10%] bg-[#fff] flex justify-between px-5 items-center">
          <div className="flex items-center">
            <Img
              src="images/img_frame_purple_900.svg"
              alt="image"
              className="my-auto"
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
          <div>icons</div>
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
                    ? "text-sm p-3 bg-purple-900 rounded-lg text-[#fff] my-1"
                    : "text-sm p-3 text-purple-900 rounded-lg my-1"
                }
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </li>
              <li
                className={
                  active === 2
                    ? "text-sm p-3 bg-purple-900 rounded-lg text-[#fff] my-1"
                    : "text-sm p-3 text-purple-900 rounded-lg my-1"
                }
                onClick={() => navigate("/mycontext")}
              >
                My Context
              </li>
            </ul>
            <ul className="text-sm">
              <li
                className={
                  active === 3
                    ? "ml-5 my-3 text-sm text-purple-900 font-bold"
                    : "ml-5 my-3 text-xs"
                }
              >
                support
              </li>
              <li
                className={
                  active === 3
                    ? "ml-5 my-3 text-sm text-purple-900 font-bold"
                    : "ml-5 my-3 text-xs"
                }
              >
                Report an issue
              </li>
              <li
                className={
                  active === 4
                    ? "ml-5 my-3 text-sm text-purple-900 font-bold"
                    : "ml-5 my-3 text-xs"
                }
              >
                Subscription
              </li>
              <li
                className={
                  active === 5
                    ? "ml-5 my-3 text-sm text-purple-900 font-bold"
                    : "ml-5 my-3 text-xs"
                }
              >
                Settings
              </li>
              <li
                className={
                  active === 6
                    ? "ml-5 my-3 text-sm text-purple-900 font-bold"
                    : "ml-5 my-3 text-xs"
                }
              >
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
