import React, { useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../../components/MainLayout";
import { LoadingContext } from "../../App";
import axios from "axios";
import { Img } from "../../components";
import Uploader from "components/Uploader";
export default function ProfilePage() {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const setLoadingContext = useContext(LoadingContext);

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
    } catch (err) {
      console.log(err);
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

  return (
    <>
      <Helmet>
        <title>admin</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <MainLayout>
        <div className="px-24 w-3/4 md:w-full sm:p-3">
          <h1 className="text-3xl">Edit Pofile</h1>
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
                  // src="images/img_frame_purple_900.svg"
                  alt="image"
                  className="rounded-full w-48"
                />
              )}
              <div id="profile-img-change">
                <input
                  type="file"
                  onChange={(e) => {
                    console.log();
                    uploadFile(e.target.files[0]);
                  }}
                />
              </div>
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
              {errors.phone && <p className="text-red-600">{errors.phone}</p>}
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
                {errors.city && <p className="text-red-600">{errors.city}</p>}
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
                {errors.state && <p className="text-red-600">{errors.state}</p>}
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
      </MainLayout>
    </>
  );
}
