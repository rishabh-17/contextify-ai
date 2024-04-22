import React from "react";
import MainLayout from "../../components/MainLayout";
export default function MyContext() {
  return (
    <div>
      <MainLayout active={2}>
        <div className="flex sm:flex-col gap-8 p-8">
          <div className="flex flex-col gap-4">
            <div>
              <img src="" alt="profile" />
              <p className="text-purple-900">moniroy@gmail.com</p>
            </div>
            <div className="sm:flex-row flex flex-col gap-4">
              <div className="bg-purple-900 h-36 w-36 sm:w-14 sm:h-14 rounded-xl"></div>
              <div className="bg-purple-900 h-36 w-36 sm:w-14 sm:h-14 rounded-xl"></div>
              <div className="bg-purple-900 h-36 w-36 sm:w-14 sm:h-14 rounded-xl"></div>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-10 gap-5">
            <div className="bg-[#fff] h-48 w-48 sm:w-full rounded-xl"></div>
            <div className="bg-[#fff] h-48 w-48 sm:w-full rounded-xl"></div>
            <div className="bg-[#fff] h-48 w-48 sm:w-full rounded-xl"></div>
            <div className="bg-[#fff] h-48 w-48 sm:w-full rounded-xl"></div>
            <div className="bg-[#fff] h-48 w-48 sm:w-full rounded-xl"></div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
