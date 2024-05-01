import React, { useState, useEffect } from "react";
import MainLayout from "../../components/MainLayout";
import { RWebShare } from "react-web-share";
import { IoMdShare } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
export default function ContextDetail() {
  const { id, type } = useParams();
  const [data, setData] = useState({});
  const location = useLocation();
  console.log(id, type);

  useEffect(() => {
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
      },
    };

    const fetchHistory = async () => {
      const { data } = await axios.get(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/client/history/" + id,
        config
      );
      setData(data.data);
    };

    const fetchSaved = async () => {
      const { data } = await axios.get(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/client/saved/" + id,
        config
      );
      setData(data.data);
    };

    if (type === "history") {
      fetchHistory();
    } else if (type === "saved") {
      fetchSaved();
    }
  }, []);

  return (
    <div>
      <MainLayout active={2}>
        <h2 className="font-bold text-xl mt-10">{data.question}</h2>
        <p className="mt-5">{data.answer}</p>
        <section className="my-10 flex gap-8">
          <RWebShare
            data={{
              text: "Contextify Your Browser Experience",
              url: location.pathname,
              title: "Contextify",
            }}
          >
            <button className="flex flex-row bg-[#fff] justify-around text-purple-900 rounded-xl px-10 py-4">
              <IoMdShare className="gap-2" color="#4B0082" />
              Share
            </button>
          </RWebShare>
        </section>
      </MainLayout>
    </div>
  );
}
