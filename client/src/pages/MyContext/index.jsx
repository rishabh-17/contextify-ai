import React from "react";
import MainLayout from "../../components/MainLayout";
import axios from "axios";
import { GiBrain } from "react-icons/gi";
import { GrNotes } from "react-icons/gr";
import { RxCounterClockwiseClock } from "react-icons/rx";

export default function MyContext() {
  const [contexts, setContexts] = React.useState([]);
  const [toggle, setToggle] = React.useState(null)

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
              <div className="h-[150px] flex bg-gray-300 rounded-full text-center items-center justify-center">
                <img
                  src="../../../public/images/Image.png"
                  alt="profile"
                  className="h-24 shadow-xl"
                />
              </div>
              <p className="text-purple-900">moniroy@gmail.com</p>
            </div>

            <div className="sm:flex-row flex flex-col gap-4">
              <div onClick={()=>setToggle(1)} className={toggle===1?"bg-purple-900 h-36 w-36 flex flex-col items-center justify-around text-white sm:w-14 sm:h-14 rounded-xl":" bg-purple-200 h-36 w-36 flex flex-col items-center justify-around text-white sm:w-14 sm:h-14 rounded-xl"}>
                <GiBrain className="h-16 w-16 " color="#fff" />
                <h3 className="text-white">things i know</h3>
              </div>
              <div onClick={()=>setToggle(2)} className={toggle===2?"bg-purple-900 h-36 w-36 flex flex-col items-center justify-around text-white sm:w-14 sm:h-14 rounded-xl":" bg-purple-200 h-36 w-36 flex flex-col items-center justify-around text-white sm:w-14 sm:h-14 rounded-xl"}>
                <GrNotes className="h-16 w-16" color="#fff" />
                <h3 className="text-white">Notes</h3>
              </div>
              <div onClick={()=>setToggle(3)} className={toggle===3?"bg-purple-900 h-36 w-36 flex flex-col items-center justify-around text-white sm:w-14 sm:h-14 rounded-xl":" bg-purple-200 h-36 w-36 flex flex-col items-center justify-around text-white sm:w-14 sm:h-14 rounded-xl"}>
                <RxCounterClockwiseClock className="h-16 w-16" color="#fff" />
                <h3 className="text-white" color="#fff">
                future exploration
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
              <div className="flex flex-row m-2 h-8 justify-around ">
              
              </div>
              <div className="flex flex-col m-2 h-8 justify-around">
                <h3>Will Smith</h3>
                <p>Description</p>
              </div>
              <div className="flex flex-row m-2 h-8 justify-around">
                <p>URL Label</p>
                <p>URL Label</p>
              </div>
              <div className="flex flex-row m-2 justify-around h-8 ">
                <p>Notes</p>
                <p>Type Here</p>
              </div>
              <div className="flex flex-row m-2 h-8 ">
                <p>Thus is a form of martial arts</p>
                <div className="H-[2px] border-b-2 border-black"/>
              </div>
              <div className=""></div>
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
