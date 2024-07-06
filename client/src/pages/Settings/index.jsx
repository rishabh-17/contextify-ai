import React, { useState, useEffect, useContext } from "react";
import { FaGears } from "react-icons/fa6";
import MainLayout from "../../components/MainLayout";
import { Helmet } from "react-helmet";
import { LoadingContext } from "../../App";
import axios from "axios";
import { Img } from "../../components";
import Uploader from "components/Uploader";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

export default function Settings() {
  const [tab, setTab] = useState(1);
  const [voiceType, setVoiceType] = useState(
    localStorage.getItem("voiceType") || ""
  );
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const setLoadingContext = useContext(LoadingContext);
  const [categories, setCategories] = useState([]);
  const [categoryInput, setCategoryInput] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const config = {
        headers: {
          authentication: `${localStorage.getItem("token")}`,
        },
      };
      const { data } = await axios.get(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/user/categories",
        config
      );
      setCategories(data?.categories);
    } catch (error) {
      toast.error("Failed to fetch categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddCategory = async () => {
    setLoading(true);
    if (!categoryInput && !categories.includes(categoryInput)) {
      setLoading(false);
      return;
    }
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
      },
    };
    const { data } = await axios.post(
      (import.meta.env.VITE_BACKEND_URL || "") + "/api/user/categories",
      {
        category: categoryInput,
      },
      config
    );
    if (!data?.success) {
      alert("Something went wrong");
      return;
    }
    toast.success("Category added successfully");
    setCategoryInput("");
    fetchCategories();
    setLoading(false);
  };

  const handleDeleteCategory = async (category) => {
    setLoading(true);
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
      },
    };
    const { data } = await axios.post(
      (import.meta.env.VITE_BACKEND_URL || "") + "/api/user/categories/delete",
      {
        category,
      },
      config
    );
    if (!data?.success) {
      toast.error("Failed to delete category");
      return;
    }
    toast.success("Category deleted successfully");
    fetchCategories();
    setLoading(false);
  };
  function uploadFile(file) {
    console.log("first");
    const url = `https://api.cloudinary.com/v1_1/dyvnljwlp/upload`;
    const fd = new FormData();
    fd.append("upload_preset", "fiiwnfdp");
    fd.append("tags", "browser_upload"); // Optional - add tags for image admin in Cloudinary
    fd.append("file", file);

    fetch(url, {
      method: "POST",
      body: fd,
    })
      .then((response) => response.json())
      .then((data) => {
        const url = data.url;
        setData({ ...data, imgUrl: url });
      })
      .catch((error) => {
        console.error("Error uploading the file:", error);
      });
  }

  const validate = (fieldValues = data) => {
    let tempErrors = { ...errors };

    if ("firstName" in fieldValues)
      tempErrors.firstName = fieldValues.firstName?.length
        ? ""
        : "This field is required.";
    if ("lastName" in fieldValues)
      tempErrors.lastName = fieldValues.lastName?.length
        ? ""
        : "This field is required.";
    if ("email" in fieldValues)
      tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    if ("phone" in fieldValues)
      tempErrors.phone =
        fieldValues.phone?.length === 10 ? "" : "Contact number is not valid.";
    if ("city" in fieldValues)
      tempErrors.city = fieldValues.city?.length
        ? ""
        : "This field is required.";
    if ("state" in fieldValues)
      tempErrors.state = fieldValues.state?.length
        ? ""
        : "This field is required.";
    if ("password" in fieldValues)
      tempErrors.password = fieldValues.password?.length
        ? ""
        : "This field is required.";
    setLoadingContext(false);
    setErrors({
      ...tempErrors,
    });
  };

  const handleSubmit = async (url) => {
    try {
      setLoading(true);
      setLoadingContext(true);
      const res = await fetch(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/user/update",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authentication: `${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(data),
        }
      );
      const user = await res.json();
      console.log(user);
      toast.success("Profile updated successfully");
    } catch (err) {
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
      setLoadingContext(false);
    }
  };

  useEffect(() => {
    const config = {
      headers: {
        authentication: `${localStorage.getItem("token")}`,
      },
    };
    const fetchProfile = async () => {
      setLoading(true);
      const { data } = await axios.get(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/client/profile",
        config
      );
      setData({
        firstName: data?.data?.name.split(" ")[0],
        lastName: data?.data?.name.split(" ")[1],
        email: data?.data?.email,
        phone: data?.data?.phone,
        state: data?.data?.state,
        city: data?.data?.city,
        imgUrl: data?.data?.imgUrl,
        password: data?.data?.password,
      });
      setLoading(false);
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    validate({ [e.target.name]: e.target.value });
  };

  const handleVoiceChange = (event) => {
    setVoiceType(event.target.value);
    console.log(event.target.value);
    localStorage.setItem("voiceType", event.target.value);
  };

  const [voices, setVoices] = useState([]);

  const customNames = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Eve",
    "Frank",
    "Grace",
    "Hank",
    "Ivy",
    "Jack",
    // Add more names if needed
  ];

  const fetchVoices = async () => {
    const voices = speechSynthesis.getVoices();
    setVoices(voices);
    console.log(voices);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchVoices();
    }, 2000);
  }, []);

  return (
    <MainLayout>
      <div className="min-h-screen">
        <div className="w-full mx-auto bg-[#fff] p-5 min-h-screen shadow-md rounded">
          <div className="flex items-center gap-4">
            <FaGears className="w-16 h-16" color="purple" />
            <h1 className="text-3xl font-bold mb-4">Settings</h1>
          </div>

          <ul className="flex gap-5 justify-center text-md">
            <li
              className={`${
                tab === 1
                  ? "text-violet-900 underline underline-offset-8"
                  : "text-gray-500"
              } font-semibold text-md cursor-pointer`}
              onClick={() => setTab(1)}
            >
              Profile
            </li>
            <li
              className={`${
                tab === 2
                  ? "text-violet-900 underline underline-offset-8"
                  : "text-gray-500"
              } font-semibold text-md cursor-pointer`}
              onClick={() => setTab(2)}
            >
              Account
            </li>

            <li
              className={`${
                tab === 3
                  ? "text-violet-900 underline underline-offset-8"
                  : "text-gray-500"
              } font-semibold text-md cursor-pointer`}
              onClick={() => setTab(3)}
            >
              Notifications
            </li>
            <li
              className={`${
                tab === 4
                  ? "text-violet-900 underline underline-offset-8"
                  : "text-gray-500"
              } font-semibold text-md cursor-pointer`}
              onClick={() => setTab(4)}
            >
              Payment History
            </li>

            <li
              className={`${
                tab === 5
                  ? "text-violet-900 underline underline-offset-8"
                  : "text-gray-500"
              } font-semibold text-md cursor-pointer`}
              onClick={() => setTab(5)}
            >
              Help
            </li>
          </ul>
          <hr className="mb-8 mt-4" />

          {tab === 1 && (
            <section>
              <div className="px-24 w-3/4 md:w-full sm:p-3 mt-5">
                <div className="flex flex-col gap-8" noValidate>
                  <div className="relative m-2 w-48 flex flex-col justify-center items-center">
                    {data?.imgUrl ? (
                      <img
                        src={data?.imgUrl}
                        alt=""
                        width={150}
                        className="rounded-full"
                      />
                    ) : (
                      <Img
                        src="images/defaultImg.jpg"
                        alt="image"
                        className="rounded-full w-48"
                      />
                    )}
                  </div>
                  <div id="profile-img-change w-56">
                    <input
                      type="file"
                      onChange={(e) => {
                        uploadFile(e.target.files[0]);
                      }}
                    />
                  </div>
                  <div className="flex sm:flex-col gap-5 ">
                    <div className="w-full">
                      <label className="mb-1">First Name</label>
                      <input
                        type="text"
                        className={`rounded focus:border-purple-900 ${
                          errors.firstName && "border-red-600"
                        }`}
                        placeholder="First Name"
                        name="firstName"
                        onChange={handleChange}
                        value={data.firstName || ""}
                        required
                      />
                      {errors.firstName && (
                        <p className="text-red-600">{errors.firstName}</p>
                      )}
                    </div>
                    <div className="w-full">
                      <label className="mb-1">Last Name</label>
                      <input
                        type="text"
                        className={`rounded focus:border-purple-900 ${
                          errors.lastName && "border-red-600"
                        }`}
                        placeholder="Last Name"
                        name="lastName"
                        onChange={handleChange}
                        value={data.lastName || ""}
                        required
                      />
                      {errors.lastName && (
                        <p className="text-red-600">{errors.lastName}</p>
                      )}
                    </div>
                  </div>
                  {/* <div>
              <label className="mb-1">Email</label>
              <input
                type="email"
                className={`rounded focus:border-purple-900 ${
                  errors.email && "border-red-600"
                }`}
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email || ""}
                required
              />
              {errors.email && <p className="text-red-600">{errors.email}</p>}
            </div> */}
                  <div>
                    <label className="mb-1">Contact Number</label>
                    <input
                      type="number"
                      className={`rounded focus:border-purple-900 ${
                        errors.phone && "border-red-600"
                      }`}
                      placeholder="Contact Number"
                      name="phone"
                      onChange={handleChange}
                      value={data.phone || ""}
                      required
                    />
                    {errors.phone && (
                      <p className="text-red-600">{errors.phone}</p>
                    )}
                  </div>
                  <div className="flex sm:flex-col gap-5 ">
                    <div className="w-full">
                      <label className="mb-1">City</label>
                      <input
                        type="text"
                        className={`rounded focus:border-purple-900 ${
                          errors.city && "border-red-600"
                        }`}
                        placeholder="City"
                        name="city"
                        onChange={handleChange}
                        value={data.city || ""}
                        required
                      />
                      {errors.city && (
                        <p className="text-red-600">{errors.city}</p>
                      )}
                    </div>
                    <div className="w-full">
                      <label className="mb-1">State</label>
                      <input
                        type="text"
                        className={`rounded focus:border-purple-900 ${
                          errors.state && "border-red-600"
                        }`}
                        placeholder="State"
                        name="state"
                        onChange={handleChange}
                        value={data.state || ""}
                        required
                      />
                      {errors.state && (
                        <p className="text-red-600">{errors.state}</p>
                      )}
                    </div>
                  </div>
                  {/* <div>
              <label className="mb-1">Password</label>
              <input
                type="text"
                className={`rounded focus:border-purple-900 ${
                  errors.password && "border-red-600"
                }`}
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password || ""}
                required
              />
              {errors.password && (
                <p className="text-red-600">{errors.password}</p>
              )}
            </div> */}
                  <div className="flex justify-center">
                    <button
                      className="px-8 py-2 bg-purple-900 text-[#fff] rounded "
                      onClick={handleSubmit}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}
          {tab === 2 && (
            <section>
              <label
                className="block mb-2 text-xl font-bold"
                htmlFor="voiceType"
              >
                Select Voice:
              </label>
              <select
                className="block w-full p-2 border border-gray-300 rounded"
                id="voiceType"
                value={voiceType}
                onChange={handleVoiceChange}
              >
                {voices?.map((voice, i) => (
                  <option key={voice.voiceURI} value={i}>
                    {customNames[i] || voice.name}
                  </option>
                ))}
              </select>

              <div className="mt-8 flex flex-col gap-2">
                <h3 className="text-xl font-bold mb-1">Categories</h3>
                <ul className="flex flex-col gap-2">
                  <li className="font-bold border border-gray-300 p-2 ">
                    Notes
                  </li>
                  <li className="font-bold border border-gray-300 p-2">
                    Things I know
                  </li>
                  <li className="font-bold border border-gray-300 p-2">
                    Future exploration
                  </li>
                  {(categories || [])?.map((category) => (
                    <li className="flex justify-between p-2 border font-bold border-gray-300">
                      <p>{category}</p>{" "}
                      <button className="bg-red-600 p-1">
                        <MdDelete
                          className="text-[#fff] w-4 h-4"
                          onClick={() => handleDeleteCategory(category)}
                        />
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add Category"
                    value={categoryInput}
                    onChange={(e) => setCategoryInput(e.target.value)}
                  />
                  <button
                    className="flex font-bold text-xl px-8 py-1 bg-purple-900 text-[#fff] rounded"
                    onClick={handleAddCategory}
                  >
                    +
                  </button>
                </div>
              </div>
            </section>
          )}

          {tab === 3 && (
            <section>
              <h4 className="text-xl font-bold mb-4">Notifications</h4>
              <div
                className="
              flex items-center mb-4 justify-between"
              >
                <p>Allow Notifications</p>
                <label class="inline-flex items-center me-5 cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-[#fff] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                </label>
              </div>
              <div className="flex items-center mb-4 justify-between">
                <p>Allow Email Notifications</p>
                <label class="inline-flex items-center me-5 cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    class="sr-only peer"
                    disabled
                  />
                  <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                </label>
              </div>
            </section>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
