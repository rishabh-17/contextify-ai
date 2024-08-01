import React, { useState } from "react";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import axios from "axios";
import ImageUploading from "react-images-uploading";
import AdminLayout from "../../components/AdminLayout";

export default function index() {
  return (
    <div>
      <AdminLayout active={3}>
        <CreateBlogPage />
      </AdminLayout>
    </div>
  );
}

const CreateBlogPage = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    blog: "",
    thumbnail: "",
  });
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    setBlogData({
      ...blogData,
      [e.target.name]: e.target.value,
    });
  };

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

  const handleProcedureContentChange = (content) => {
    setBlogData({ ...blogData, blog: content });
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const handleSave = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL || ""}/api/support/create`,
          {
            title: blogData.title,
            support: blogData.blog,
            category: category
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
  };

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="bg-gray-100 p-4 overflow-y-auto">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
        Create <span class="text-purple-900 dark:text-purple-900">Support</span>
      </h1>
      <form onSubmit={handleSubmit} className="mx-auto">
        <div className="mb-8">
          <label htmlFor="title" className="font-bold block mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={blogData.title}
            onChange={handleChange}
            className="border bg-gray-100 border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-900"
          />
        </div>

        <div className="mb-8">
          <label htmlFor="category" className="font-bold block mb-2">Category:</label>
          <select onChange={(e) => setCategory(e.target.value)} className="border bg-gray-100 border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-900" >
          <option value="account">Account</option>
          <option value="billing">Billing</option>
          <option value="issue">issue</option>
          <option value="about">About</option>
          <option value="tip">Tip</option>
          <option value="business">Business</option>
          </select>
        </div>

        <div className="mb-16">
          <label htmlFor="blog" className="font-bold block mb-2">
            Blog:
          </label>
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            placeholder="Write your content..."
            onChange={handleProcedureContentChange}
            style={{ height: "400px" }}
          />
        </div>

        {/* <div className="mb-8 mt-24">
          <h2 className="font-bold mb-2">Upload Thumbnail</h2>
          <ImageUploading
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              <div className="upload__image-wrapper border rounded-xl p-4">
                {images.length === 0 ? (
                  <button
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                    className="bg-purple-900 hover:bg-purple-900 text-[#fff] font-bold py-2 px-4 rounded"
                  >
                    Click or Drop here
                  </button>
                ) : (
                  <button
                    onClick={onImageRemoveAll}
                    className="bg-red-500 hover:bg-red-700 text-[#fff] font-bold py-2 px-4 rounded"
                  >
                    Remove Image
                  </button>
                )}
                {imageList?.map((image, index) => (
                  <div key={index} className="image-item grid gap-2">
                    <img
                      src={image["data_url"]}
                      alt=""
                      width="150"
                      className="rounded"
                    />
                    <div className="image-item__btn-wrapper">
                      <button
                        onClick={() => onImageUpdate(index)}
                        className="bg-purple-900 hover:bg-purple-900 text-[#fff] font-bold py-1 px-2 rounded"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => onImageRemove(index)}
                        className="bg-red-500 hover:bg-red-700 text-[#fff] font-bold py-1 px-2 rounded"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </div> */}

        <button
          type="submit"
          className="bg-purple-900 hover:bg-purple-900 text-[#fff] font-bold py-2 px-4 rounded"
          onClick={handleSave}
        >
          Save
        </button>
      </form>
    </div>
  );
};
