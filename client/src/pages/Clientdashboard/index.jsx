import React from "react";
import MainLayout from "../../components/MainLayout";
import axios from "axios";
import { RWebShare } from "react-web-share";
import { MdPerson } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { WiTime4 } from "react-icons/wi";
import { IoMdShare } from "react-icons/io";
import { IoIosPersonAdd } from "react-icons/io";
import { FaEye } from "react-icons/fa";


export default function ClientdashboardPage() {
  const [history, setHistory] = React.useState([]);
  const [saved, setSaved] = React.useState([]);
  const [secret, setSecret] = React.useState(localStorage.getItem('secret'));
  const [keyShow, setKeyShow] = React.useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

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

  const genrateKey =  async () =>{
     const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
      },
    };
    
    axios.post(
      (import.meta.env.VITE_BACKEND_URL || "") + "/api/user/generatekey",{},
      config
    ).then(data=>{
      setSecret(data.data.key)
      localStorage.setItem('secret', data.data.key)

    }).catch(err=> alert('unable to generate key'))

    };

  return (
    <>
      <MainLayout active={1}>
        <div className="w-full h-4">{user.name}</div>
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 w-full py-3">
          <div>
            <div className="flex items-center gap-4 rounded ">
              <img
                src="https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg"
                alt=""
                width={100}
              />
              <div className="bg-[#fff] w-full h-[130px] flex flex-row rounded rounded-2xl">
                <div className="flex flex-col items-center mx-8 mt-4">
                  <MdPerson className="h-8 w-8" color="#140694" />
                  <p>4</p>
                  <p className="w-[90px] text-center">use cases this month</p>
                </div>
                <div className="flex flex-col items-center mx-8 mt-4">
                  <MdPerson className="h-8 w-8" color="#140694" />
                  <p>4</p>
                  <p className="w-[90px] text-center">use cases this month</p>
                </div>
                <div className="flex flex-col items-center mx-8 mt-4">
                  <MdPerson className="h-8 w-8" color="#140694" />
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
                <div className="bg-[#fff] w-[32%] h-32 p-4 text-center items-center flex flex-col  rounded-2xl">
                  <div className=" flex h-12 w-12 p-3 bg-purple-300 rounded-xl items-center justify-center ">
                    <IoPeopleSharp className="h-8 w-8" color="#140694" />
                  </div>
                  <p>people</p>
                  <p>1</p>
                </div>
                <div className="bg-[#fff] w-[32%] h-32 p-4 text-center items-center flex flex-col  rounded-2xl">
                  <div className="flex h-12 w-12 p-3 bg-purple-300 rounded-xl items-center justify-center">
                    <IoPeopleSharp className="h-8 w-8" color="#140694" />
                  </div>
                  <p>people</p>
                  <p>1</p>
                </div>
                <div className="bg-[#fff] w-[32%] h-32 p-4 text-center items-center flex flex-col  rounded-2xl">
                  <div className="flex h-12 w-12 p-3 bg-purple-300 rounded-xl items-center justify-center">
                    <IoPeopleSharp className="h-8 w-8" color="#140694" />
                  </div>
                  <p>people</p>
                  <p>1</p>
                </div>
              </div>
              <div className="w-full flex justify-end">
                <button className="text-[#fff] bg-purple-900 rounded-xl p-2" onClick={()=>navigate('/mycontext')}>
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
                <div className="bg-[#fff] w-full h-32 flex items-center text-center rounded-xl">
                  <FaRegEdit className="h-10 w-10 mx-6" color="#140694" />
                  <div className="h-[70px] w-[500px] mt-8 flex justify-around border-b-4 border-[#000000]">
                    <h3 className="h-12 w-[10px]">Will Smith</h3>
                    <div className="h-12 w-[35px] pl-[200px]">
                      Research by 20/2/2024
                    </div>
                  </div>
                </div>
                <div className="bg-[#fff] w-full h-32 flex items-center text-center rounded-xl">
                  <FaRegEdit className="h-10 w-10 mx-6" color="#140694" />
                  <div className="h-[70px] w-[500px] mt-8 flex justify-around border-b-4 border-[#000000]">
                    <h3 className="h-12 w-[10px]">Will Smith</h3>
                    <div className="h-12 w-[35px] pl-[200px]">
                      Research by 20/2/2024
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-start">
                <button className="text-[#fff] bg-purple-900 rounded-xl p-2" onClick={()=>navigate('/mycontext')}>
                  View all
                </button>
              </div>
            </section>
          </div>
          <div>
            <section className="mb-5 mx-10">
              <h2>Things i know </h2>
              <div className="bg-[#fff] flex flex-col  w-full min-h-24 rounded-xl my-2">
                <div className="w-full p-6">
                  <div className="flex  w-full  justify-center text-center">
                    <GiBrain className="h-16 w-16 top-0" color='#4B0082'/>
                    <div className="flex flex-col ml-6 w-full text-end justify-end">
                      <p className=" pl-[40%] float-end">
                        How razor blades are made and reused
                      </p>{" "}
                      <div className="h-[2px] w-full border-b-2 border-[#000000] " />
                    </div>{" "}
                  </div>
                  <div></div>
                  <div></div>
                </div>
                <div className="w-full p-6">
                  <div className="flex  w-full  justify-center text-center">
                    <GiBrain className="h-16 w-16 top-0" color='#4B0082'/>
                    <div className="flex flex-col ml-6 w-full text-end justify-end">
                      <p className=" pl-[40%] float-end">
                        How razor blades are made and reused
                      </p>{" "}
                      <div className="h-[2px] w-full border-b-2 border-[#000000] " />
                    </div>{" "}
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="w-full flex justify-start">
                <button className="text-[#fff] bg-purple-900 rounded-xl p-2" onClick={()=>navigate('/mycontext')}>
                  View all
                </button>
              </div>
            </section>
            <section className="mb-5 mx-10">
              <h2>For future exploration</h2>

              <div className=" flex flex-col  w-full min-h-24 rounded-xl my-2">
              <div className="w-full p-6">
                  <div className="flex  w-full  justify-center text-center">
                    <WiTime4 className="h-16 w-16 top-0" color='#4B0082'/>
                    <div className="flex flex-col ml-6 w-full text-end justify-end">
                      <div className="flex flex-row justify-around">

                      <h2 className="  float-end">
                        Wang chung
                      </h2>{" "}
                      <p className=" w-8 float-end">
                       Research by 25/04/2001
                      </p>{" "}
                      </div>
                      <div className="h-[2px] w-full border-b-2 border-[#000000] " />
                    </div>{" "}
                  </div>
                </div>
                <div className="w-full p-6">
                  <div className="flex  w-full  justify-center text-center">
                    <WiTime4 className="h-16 w-16 top-0" color='#4B0082'/>
                    <div className="flex flex-col ml-6 w-full text-end justify-end">
                      <div className="flex flex-row justify-around">

                      <h2 className="  float-end">
                        Wang chung
                      </h2>{" "}
                      <p className=" w-8 float-end">
                       Research by 25/04/2001
                      </p>{" "}
                      </div>
                      <div className="h-[2px] w-full border-b-2 border-[#000000] " />
                    </div>{" "}
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="w-full flex justify-start">
                <button className="text-[#fff] bg-purple-900 rounded-xl p-2" onClick={()=>navigate('/mycontext')}>
                  View all
                </button>
              </div>
            </section>
            <section className="my-10 mx-16 flex gap-8">
              <RWebShare
                data={{
                  text: "Contextify Your Browser Experience",
                  url: "https://contxtify-ai.com/",
                  title: "Contextify",
                }}
                // onClick={() => console.log("shared successfully!")}
              >
                <button className="flex flex-row bg-[#fff] justify-around text-purple-900 rounded-xl px-10 py-4">
                <IoMdShare className="gap-2" color='#4B0082'/>
                  Share
                </button>
              </RWebShare>
              <button className="flex flex-row justify-around bg-[#fff] text-purple-900 rounded-xl px-10 py-4">
                <IoIosPersonAdd className="gap-2" color='#4B0082'/> 
                Invite
              </button>
            </section>
            <section className="bg-[#fff] p-3 ">
              <h3 className="">Secret Key</h3>
              <div>
                { 
                  secret?
                  <div className="flex gap-3">
                  <input className="roundedxl" type={keyShow?"text":"password"} value = { secret } />
                  <FaEye onClick={()=>setKeyShow(!keyShow)} /> 
                  </div>:
                  <button className="px-3 py-2 bg-purple-900 text-[#fff] rounded-xl" onClick={genrateKey}>
                    Generate Secret key
                  </button>
                }
              </div>
            </section>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
