import React from "react";
import MainLayout from "../../components/MainLayout";
import axios from "axios";

export default function ClientdashboardPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [history, setHistory] = React.useState([]);
  const [saved, setSaved] = React.useState([]);
  const active = 1;

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
      </MainLayout>
    </>
  );
}
