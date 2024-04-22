import React from "react";
import MainLayout from "../../components/MainLayout";
import axios from "axios";
import { RWebShare } from "react-web-share";
import { MdPerson } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";




export default function ClientdashboardPage() {
  const [history, setHistory] = React.useState([]);
  const [saved, setSaved] = React.useState([]);

  React.useEffect(() => {
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
      },
    };

    const fetchHistory = async () => {
      const { data } = await axios.get(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/client/history",
        config
      );
      setHistory(data.data);
    };

    const fetchSaved = async () => {
      const { data } = await axios.get(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/client/saved",
        config
      );
      setSaved(data.data);
    };

    fetchHistory();
    fetchSaved();
  }, []);

  return (
    <>
      <MainLayout active={1}>
        <div className="w-full h-4">Hello, Moni</div>
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 w-full py-3">
          <div>
            <div className="flex items-center gap-4 rounded " >
              <img
                src="https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg"
                alt=""
                width={100}
              />
              <div className="bg-[#fff] w-full h-[130px] flex flex-row rounded rounded-2xl">
                <div className="flex flex-col items-center mx-8 mt-4">
                <MdPerson className="h-8 w-8"/>
                  <p>4</p>
                  <p className="w-[90px] text-center">use cases this month</p>
                </div>
                <div className="flex flex-col items-center mx-8 mt-4">
                <MdPerson className="h-8 w-8"/>
                  <p>4</p>
                  <p className="w-[90px] text-center">use cases this month</p>
                </div>
                <div className="flex flex-col items-center mx-8 mt-4">
                  <MdPerson className="h-8 w-8"/>
                  <p>4</p>
                  <p className="w-[90px] text-center">use cases this month</p>
                </div>
                
              </div>
            </div>
            <section className=" my-5">
              <h2>Top topics I have in the past month</h2>
              <div className="flex items-center gap-2 my-2">
                {history.slice(0, 4).map((item) => (
                  <div
                    key={item._id}
                    className="bg-[#fff] w-[32%] h-32 rounded"
                  >
                    {item.question.length > 20
                      ? item.question.slice(0, 20) + "..."
                      : item.question}
                  </div>
                ))}
                <div
                    className="bg-[#fff] w-[32%] h-32 p-4 text-center items-center flex flex-col rounded rounded-2xl"
                  >
                    <div className="h-10 w-10 bg-blue-400 rounded-xl items-center ">
                    <IoPeopleSharp className="h-8 w-8" />
                    </div>
                    <p>people</p>
                    <p>1</p>
                    
                  </div>
                <div
                    className="bg-[#fff] w-[32%] h-32 p-4 text-center items-center flex flex-col rounded rounded-2xl"
                  >
                    <div className="h-10 w-10 bg-blue-400 rounded-xl items-center ">
                    <IoPeopleSharp className="h-8 w-8" />
                    </div>
                    <p>people</p>
                    <p>1</p>
                    
                  </div>
                  <div
                      className="bg-[#fff] w-[32%] h-32 p-4 text-center items-center flex flex-col rounded rounded-2xl"
                    >
                      <div className="h-10 w-10 bg-blue-400 rounded-xl items-center ">
                      <IoPeopleSharp className="h-8 w-8" />
                      </div>
                      <p>people</p>
                      <p>1</p>
                      
                    </div>
                
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
                {saved.map((item) => (
                  <div key={item._id} className="bg-[#fff] w-full h-24 rounded">
                    {item.question.length > 30
                      ? item.question.slice(0, 30) + "..."
                      : item.question}
                  </div>
                ))}
                <div  className="bg-[#fff] w-full h-32 flex items-center text-center rounded rounded-xl">
                <FaRegEdit className="h-10 w-10 mx-6"/>
                  <div className="h-[70px] w-[500px] mt-8 flex justify-around border-b-4 border-[#000000]">
                    <h3 className="h-12 w-[10px]">Will Smith</h3>
                    <div className="h-12 w-[35px] pl-[200px]">Research by 20/2/2024</div>
                  </div>
                </div>
                <div  className="bg-[#fff] w-full h-32 flex items-center text-center rounded rounded-xl">
                <FaRegEdit className="h-10 w-10 mx-6"/>
                  <div className="h-[70px] w-[500px] mt-8 flex justify-around border-b-4 border-[#000000]">
                    <h3 className="h-12 w-[10px]">Will Smith</h3>
                    <div className="h-12 w-[35px] pl-[200px]">Research by 20/2/2024</div>
                  </div>
                </div>
                
              </div>
              <div className="w-full flex justify-start">
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
              <RWebShare
                data={{
                  text: "Contextify Your Browser Experience",
                  url: "https://contxtify-ai.com/",
                  title: "Contextify",
                }}
                // onClick={() => console.log("shared successfully!")}
              >
                <button className="bg-[#fff] text-purple-900 rounded-xl px-5 py-3">
                  Share
                </button>
              </RWebShare>
              <button className="bg-[#fff] text-purple-900 rounded-xl px-5 py-3">
                Invite
              </button>
            </section>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
