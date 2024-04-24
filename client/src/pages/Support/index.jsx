import React from "react";
import Footer from "../../components/Footer";
export default function index() {
  return (
    <>
      <div className="sm:w-full md:w-3/4 w-2/4 mx-auto flex flex-col justify-center items-center gap-12 mt-5 py-10">
        <h2 className="text-xl font-bold">Hi! How can we help?</h2>
        <form className="mx-auto w-[80%] pl-2 border border-slate-900 rounded-2xl bg-[#F7F0FC] h-10 overflow-hidden sm:hidden">
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

        <p className="text-xs px-3 w-full text-center">
          <p className="w-full">FEATURED ARTICLES</p>
          <div className="w-full bg-[#000] h-[1px]"></div>
        </p>

        <div className="w-full flex sm:flex-col gap-4 flex-row justify-between">
          <div className="flex flex-col text-center  ">
            <h4 className="text-md">Problems signing in</h4>
            <p className="text-sm text-gray-600">Account Basics</p>
          </div>
          <div className="flex flex-col text-center  ">
            <h4 className="text-md">Problems signing in</h4>
            <p className="text-sm text-gray-600">Account Basics</p>
          </div>
          <div className="flex flex-col text-center  ">
            <h4 className="text-md">Problems signing in</h4>
            <p className="text-sm text-gray-600">Account Basics</p>
          </div>
          <div className="flex flex-col text-center  ">
            <h4 className="text-md">Problems signing in</h4>
            <p className="text-sm text-gray-600">Account Basics</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#fff] py-10">
        <div className="sm:w-full md:w-3/4 w-2/4 mx-auto flex flex-col justify-center items-center gap-12 mt-10 ">
          <div className="w-full flex  sm:flex-col gap-4 flex-row justify-between">
            <div className="flex flex-col items-center">
              icon
              <h4>Account Basics</h4>
            </div>
            <div className="flex flex-col items-center">
              icon
              <h4>Account Basics</h4>
            </div>
            <div className="flex flex-col items-center">
              icon
              <h4>Account Basics</h4>
            </div>
            <div className="flex flex-col items-center">
              icon
              <h4>Account Basics</h4>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
