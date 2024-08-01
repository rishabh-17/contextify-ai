import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

export default function index() {
  const [data, setData] = useState("");
  const { category } = useSearchParams();
  useEffect(() => {
    console.log();
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL || ""}/api/support/get/${id}`)
      .then((res) => {
        console.log(res?.data?.data);
        setData(res?.data);
      });
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <div className="flex gap-3 m-5" onClick={() => navigate(-1)}>
        <IoMdArrowRoundBack />
        back
      </div>
      {data && (
        <div className="sm:w-full md:w-3/4 w-2/4 mx-auto flex flex-col justify-center items-center gap-12 mt-5 py-10">
          <h2 className="text-xl font-bold">{data?.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: data?.content }} />
        </div>
      )}
    </>
  );
}
