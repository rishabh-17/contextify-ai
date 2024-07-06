import React, { useState, useEffect, useContext } from "react";
import MainLayout from "../../components/MainLayout";
import { RWebShare } from "react-web-share";
import { IoMdShare } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { LoadingContext } from "../../App";
import SharePopup from "../../components/sharePopup";
import { toast } from "react-toastify";
import axios from "axios";
export default function ContextDetail() {
  const { id, type } = useParams();
  const [data, setData] = useState({});
  const [sharePop, setSharePop] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  console.log(id, type);
  const setLoading = useContext(LoadingContext);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/signin");
    }
  }, []);

  useEffect(() => {
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
      },
    };

    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          (import.meta.env.VITE_BACKEND_URL || "") +
            `/api/client/${type}/${id}`,
          config
        );
        setData(data.data);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <MainLayout active={2}>
        {sharePop && shareUrl && (
          <SharePopup url={shareUrl} setSharePop={setSharePop} />
        )}
        {data?.question?.startsWith("http") ? (
          <img src={data.question} alt="" width={400} />
        ) : (
          <h2 className="font-bold text-xl mt-10">{data.question}</h2>
        )}

        <textarea
          className="w-full p-4 mt-3 h-full border-0"
          value={data?.answer?.replaceAll("#", "")}
          disabled
        ></textarea>
        {data.answer && (
          <section className="my-10 flex gap-8">
            <button
              className="flex flex-row bg-[#fff] justify-around text-purple-900 rounded-xl px-10 py-4"
              onClick={() => {
                console.log(location);
                setShareUrl("https://www.contextify.info" + location.pathname);
                setSharePop(true);
              }}
            >
              <IoMdShare className="gap-2" color="#4B0082" />
              Share
            </button>
          </section>
        )}
      </MainLayout>
    </div>
  );
}
