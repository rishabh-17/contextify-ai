import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";
import { FaRegThumbsDown } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

export default function index() {
  const [feedback, setFeedback] = useState({
    rating: "",
    comment: "",
    idea: "",
  });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
      },
    };
    try {
      await axios.post(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/client/feedback",
        feedback,
        config
      );
      setFeedback({ rating: "", comment: "", idea: "" });
      toast.success("Feedback submitted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen">
        <h1 className="text-3xl font-bold">Feedback</h1>

        <div className="flex flex-col items-center p-5 md:mx-2 mx-24 gap-5">
          <div className="w-full flex gap-3">
            <p className="font-bold">What did you think about Contextify?</p>
            <div className="flex gap-3">
              {feedback.rating === "1" ? (
                <FaThumbsUp className={`h-6 w-6 text-purple-900`} />
              ) : (
                <FaRegThumbsUp
                  className={`h-6 w-6 text-purple-900`}
                  onClick={() => setFeedback({ ...feedback, rating: "1" })}
                />
              )}
              {feedback.rating === "-1" ? (
                <FaThumbsDown className={`h-6 w-6 text-purple-900`} />
              ) : (
                <FaRegThumbsDown
                  className={`h-6 w-6 text-purple-900`}
                  onClick={() => setFeedback({ ...feedback, rating: "-1" })}
                />
              )}
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            <p className="font-bold">How has your experience been so far?</p>
            <textarea
              className="w-full p-2 border border-purple-900 rounded-lg h-48"
              name="comment"
              id="comment"
              value={feedback.comment}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="w-full flex flex-col gap-3">
            <p className="font-bold">
              How can we make Contextify better for you?
            </p>
            <textarea
              className="w-full p-2 border border-purple-900 rounded-lg h-36"
              name="idea"
              id="idea"
              value={feedback.idea}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="w-full flex gap-3 flex-row-reverse">
            <button
              className="bg-purple-900 text-[#fff] p-3 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              onClick={handleSubmit}
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
