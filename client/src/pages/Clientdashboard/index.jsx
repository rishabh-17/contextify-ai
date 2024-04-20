import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Input, Button } from "../../components";
import ClientDashboardNavigation from "../../components/ClientDashboardNavigation";
import ClientDashboardNavigation1 from "../../components/ClientDashboardNavigation1";

export default function ClientdashboardPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const active = 1;
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
          <form className="mx-auto w-[30%] p-1 border rounded bg-[#F7F0FC] h-8 overflow-hidden sm:hidden">
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
                className="block w-[90%] pl-16 ml-8 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              >
                Dashboard
              </li>
              <li
                className={
                  active === 2
                    ? "text-sm p-3 bg-purple-900 rounded-lg text-[#fff] my-1"
                    : "text-sm p-3 text-purple-900 rounded-lg my-1"
                }
              >
                My Context
              </li>
            </ul>
            <ul className="text-sm">
              <li className="ml-5 my-3 text-xs">support</li>
              <li className="ml-5 my-3 text-xs">Report an issue</li>
              <li className="ml-5 my-3 text-xs">Subscription</li>
              <li className="ml-5 my-3 text-xs">Settings</li>
              <li className="ml-5 my-3 text-xs">Logout</li>
            </ul>
          </div>

          <div className="p-5 w-full overflow-auto">
            {/* --------------------------------------------------------------------------------------------------------------------------- main components start*/}

            <div className="w-full h-4">Hello, Moni</div>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 w-full py-3">
              <div>
                <div className="flex items-center gap-4">
                  <img
                    src="https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg"
                    alt=""
                    width={100}
                  />
                  <div className="bg-[#fff] w-full h-20 rounded"></div>
                </div>
                <section className=" my-5">
                  <h2>Top topics I have in the past month</h2>
                  <div className="flex items-center gap-2 my-2">
                    <div className="bg-[#fff] w-[32%] h-32 rounded"></div>
                    <div className="bg-[#fff] w-[32%] h-32 rounded"></div>
                    <div className="bg-[#fff] w-[32%] h-32 rounded"></div>
                  </div>
                  <div className="w-full flex justify-end">
                    <button className="text-[#fff] bg-purple-900 rounded p-2">
                      View all
                    </button>
                  </div>
                </section>
                <section className=" my-5">
                  <h2>My notes for further research</h2>
                  <div className="flex flex-col items-center gap-2 my-2">
                    <div className="bg-[#fff] w-full h-24 rounded"></div>
                    <div className="bg-[#fff] w-full h-24 rounded"></div>
                    <div className="bg-[#fff] w-full h-24 rounded"></div>
                  </div>
                  <div className="w-full flex justify-end">
                    <button className="text-[#fff] bg-purple-900 rounded p-2">
                      View all
                    </button>
                  </div>
                </section>
              </div>
              <div>
                <section className="mb-5">
                  <h2>My notes for further research</h2>

                  <div className="bg-[#fff] w-full min-h-24 rounded my-2">
                    <div className="w-full p-4">hiiii</div>
                  </div>
                </section>
                <section className="my-5 flex gap-4">
                  <button className="bg-[#fff] text-purple-900 rounded-xl px-5 py-3">
                    Share
                  </button>
                  <button className="bg-[#fff] text-purple-900 rounded-xl px-5 py-3">
                    Invite
                  </button>
                </section>
              </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------------------- main components end*/}
          </div>
        </div>
      </div>
    </>
  );
}
