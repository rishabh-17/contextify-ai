import React from "react";
import MainLayout from "../../components/MainLayout";
import { FaWindows, FaChrome } from "react-icons/fa";
export default function AppsPage() {
  return (
    <div>
      <MainLayout active={5}>
        <div className="w-full text-3xl font-bold">Available Apps</div>
        <div className="flex flex-col p-4">
          <div className="flex gap-4 shadow-md p-5 rounded">
            <FaChrome className="h-24 w-24 text-purple-900" />
            <div className="flex justify-between w-full items-center">
              <div>
                <h2 className="text-2xl font-bold">Contextify For Chrome</h2>
<<<<<<< Updated upstream
                <p>
                  Now Available for every browser that allows Chrome Extensions.
                </p>
=======
                <p>Now Available for every browser that allows Chrome Extensions</p>
>>>>>>> Stashed changes
              </div>
              <button className="bg-purple-900 text-[#fff] h-10 p-2 rounded transition ease-in-out hover:translate-y-1 hover:bg-gray-50 hover:text-[#000]">
                Install
              </button>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
