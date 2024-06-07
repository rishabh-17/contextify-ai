import React from "react";
import MainLayout from "../../components/MainLayout";
import { FaWindows } from "react-icons/fa";
export default function AppsPage() {
  return (
    <div>
      <MainLayout active={5}>
        <div className="w-full text-3xl font-bold">Available Apps</div>
        <div className="flex flex-col p-4">
          <div className="flex gap-4 shadow-md p-5 rounded">
            <FaWindows className="h-24 w-24 text-purple-900" />
            <div className="flex justify-between w-full items-center">
              <div>
                <h2 className="text-2xl font-bold">Contextify For Windows</h2>
                <p>Now Available for windows chrome</p>
              </div>
              <button className="bg-purple-900 text-[#fff] h-10 p-2 rounded">
                Install
              </button>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
