import React from "react";
import MainLayout from "../../components/MainLayout";
import axios from "axios";
import { GiBrain } from "react-icons/gi";
import { GrNotes } from "react-icons/gr";
import { RxCounterClockwiseClock } from "react-icons/rx";

export default function MyContext() {
  const [contexts, setContexts] = React.useState([]);

  React.useEffect(() => {
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
      },
    };

    const fetchContexts = async () => {
      const { data } = await axios.get(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/client/saved",
        config
      );
      setContexts(data.data);
    };

    fetchContexts();
  }, []);

  return (
    <div>
      <MainLayout active={2}>
        <div className="flex sm:flex-col gap-8 p-8">
          <div className="flex flex-col gap-4">
            <div>
              <div className="h-[120px] flex bg-gray-300 rounded-full text-center items-center justify-center">
                <img
                  src="../../../public/images/Image.png"
                  alt="profile"
                  className="h-24 shadow-xl"
                />
              </div>
              <p className="text-purple-900">moniroy@gmail.com</p>
            </div>

            <div className="sm:flex-row flex flex-col gap-4">
              <div className="bg-purple-900 h-36 w-36 flex flex-col items-center justify-center text-white sm:w-14 sm:h-14 rounded-xl">
                <GiBrain className="h-16 w-16 " color="#fff" />
                <h3 className="text-white">things i know</h3>
              </div>
              <div className="bg-purple-900 h-36 w-36 flex flex-col items-center justify-center text-white sm:w-14 sm:h-14 rounded-xl">
                <GrNotes className="h-16 w-16" color="#fff" />
                <h3 className="text-white">things i know</h3>
              </div>
              <div className="bg-purple-900 h-36 w-36 flex flex-col items-center justify-center text-white sm:w-14 sm:h-14 rounded-xl">
                <RxCounterClockwiseClock className="h-16 w-16" color="#fff" />
                <h3 className="text-white" color="#fff">
                  things i know
                </h3>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-10 gap-5">
            {contexts.map((context) => (
              <div
                key={context._id}
                className="bg-[#fff] h-48 w-48 sm:w-full rounded-xl"
              ></div>
            ))}
            <div className="bg-[#ffffff] h-48 w-48 sm:w-full rounded-xl">
              <div className="flex flex-row h-6 bg-[#0e0d0d]"></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="bg-[#ffffff] h-48 w-48 sm:w-full rounded-xl"></div>
            <div className="bg-[#ffffff] h-48 w-48 sm:w-full rounded-xl"></div>
            <div className="bg-[#fffcfc] h-48 w-48 sm:w-full rounded-xl"></div>
            <div className="bg-[#ffffff] h-48 w-48 sm:w-full rounded-xl"></div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
