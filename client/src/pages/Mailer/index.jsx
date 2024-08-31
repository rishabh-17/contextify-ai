import React, { useState, useEffect } from "react";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../components/AdminLayout";
import CreatableSelect from "react-select/creatable";
import { toast } from "react-toastify";

export default function index() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emails, setEmails] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL || ""}/api/admin/users`, {
        headers: { authentication: `${localStorage.getItem("admintoken")}` },
      })
      .then((res) => {
        const usersList = res?.data?.data?.map((i) => ({
          value: i.email,
          label: i.email,
        }));
        setUsers(usersList);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(blogData);
  };

  const maxNumber = 1;
  let modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] },
      ],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
            "custom-color",
          ],
        },
      ],
    ],
  };

  var formats = [
    "header",
    "height",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "color",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "size",
  ];

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const handleSave = async () => {
    try {
      const data = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL || ""}/api/admin/email`,
        {
          subject,
          message,
          emails: emails.map((i) => i.value),
        },
        {
          headers: { authentication: `${localStorage.getItem("admintoken")}` },
        }
      );

      if (data?.data?.success) {
        setEmails([]);
        setMessage("");
        setSubject("");
        toast.success("Email sent successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminLayout active={5}>
      <div className="bg-gray-100 p-4 overflow-y-auto">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
          <span class="text-purple-900 dark:text-purple-900">Mail</span>
        </h1>
        <form onSubmit={handleSubmit} className="mx-auto">
          <div className="mb-8">
            <label htmlFor="title" className="font-bold block mb-2">
              Subject:
            </label>
            <input
              type="text"
              name="title"
              value={subject || ""}
              onChange={(e) => setSubject(e.target.value)}
              className="border bg-gray-100 border-gray-300 rounded p-2 w-full"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="title" className="font-bold block mb-2">
              Email:
            </label>
            <CreatableSelect
              isClearable
              isMulti
              options={users}
              value={emails || []}
              onChange={(i) => setEmails(i)}
            />
          </div>

          <div className="mb-16">
            <label htmlFor="blog" className="font-bold block mb-2">
              Messages:
            </label>
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              placeholder="Write your content..."
              onChange={(e) => setMessage(e)}
              style={{ height: "400px" }}
              value={message || ""}
            />
          </div>
          <button
            type="submit"
            className="bg-purple-900 hover:bg-purple-900 text-[#fff] font-bold py-2 px-4 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}
