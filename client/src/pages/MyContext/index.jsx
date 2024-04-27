import React from "react";
import MainLayout from "../../components/MainLayout";
import axios from "axios";
import { GiBrain } from "react-icons/gi";
import { GrNotes } from "react-icons/gr";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export default function MyContext() {
  const [contexts, setContexts] = React.useState([]);
  const [toggle, setToggle] = React.useState(1);
  const navigate = useNavigate();

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
        <div className="flex sm:flex-col gap-4 p-4">
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
              <div
                onClick={() => setToggle(1)}
                className={
                  toggle === 1
                    ? "bg-purple-900 h-36 w-36 flex flex-col items-center justify-around text-white sm:w-14 sm:h-14 rounded-xl"
                    : " bg-purple-200 h-36 w-36 flex flex-col items-center justify-around text-white sm:w-14 sm:h-14 rounded-xl"
                }
              >
                <GiBrain className="h-16 w-16 " color="#fff" />
                <h3 className="text-white">things i know</h3>
              </div>
              <div
                onClick={() => setToggle(2)}
                className={
                  toggle === 2
                    ? "bg-purple-900 h-36 w-36 flex flex-col items-center justify-around text-white sm:w-14 sm:h-14 rounded-xl"
                    : " bg-purple-200 h-36 w-36 flex flex-col items-center justify-around text-white sm:w-14 sm:h-14 rounded-xl"
                }
              >
                <GrNotes className="h-16 w-16" color="#fff" />
                <h3 className="text-white">Notes</h3>
              </div>
              <div
                onClick={() => setToggle(3)}
                className={
                  toggle === 3
                    ? "bg-purple-900 h-36 w-36 flex flex-col items-center justify-around text-white sm:w-14 sm:h-14 rounded-xl"
                    : " bg-purple-200 h-36 w-36 flex flex-col items-center justify-around text-white sm:w-14 sm:h-14 rounded-xl"
                }
              >
                <RxCounterClockwiseClock className="h-16 w-16" color="#fff" />
                <h3 className="text-white" color="#fff">
                  future exploration
                </h3>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-4 gap-3">
            {contexts.map((context) => (
              <div
                className="bg-[#ffffff] h-64 w-64 sm:w-full rounded-xl p-2 overflow-auto"
                onClick={() => navigate("/contextdetail/saved/" + context._id)}
              >
                <div className="flex flex-col m-2 justify-around">
                  <h3 className="font-bold">
                    {context.question.length > 50
                      ? context.question.slice(0, 50) + "..."
                      : context.question}
                  </h3>
                </div>

                <div className="flex flex-row m-2 h-8 text-gray-500">
                  <p>
                    {context.answer.length > 250
                      ? context.answer.slice(0, 250) + "..."
                      : context.answer}
                  </p>
                  <div className="H-[2px] border-b-2 border-black" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
