import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

export default function index() {
  const [data, setData] = useState("");
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  useEffect(() => {
    console.log(category);
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL || ""}/api/support/get/?category=${category}`)
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
        <div className="grid grid-cols-2 gap-5 justify-between px-16">
        {data.map(i=>  <div className="sm:w-full text-purple-900 hover:underline" onClick={() => navigate(`/support/${i?.id}`)}>
          {i?.title}
          </div>)}
        </div>
        
    </>
  );
}
