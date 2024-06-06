import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../../components/MainLayout";
import { LoadingContext } from "../../App";

export default function ProfilePage() {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const setLoadingContext = useContext(LoadingContext);

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

    setErrors({
      ...tempErrors,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoadingContext(true);
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setErrors({
        firstName: data?.firstName?.length ? "" : "This field is required.",
        lastName: data?.lastName?.length ? "" : "This field is required.",
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data?.email)
          ? ""
          : "Email is not valid.",
        phone: data?.phone?.length === 10 ? "" : "Contact number is not valid.",
        city: data?.city?.length ? "" : "This field is required.",
        state: data?.state?.length ? "" : "This field is required.",
        password: data?.password?.length ? "" : "This field is required.",
      });
    } else {
      try {
        const res = await fetch("/api/user", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const user = await res.json();
        console.log(user);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
        setLoadingContext(false);
      }
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    validate({ [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setLoading(true);
    setLoadingContext(true);
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "profile-pic");

      fetch("https://api.cloudinary.com/v1_1/dzf1h7q5f/image/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setData({
            ...data,
            profilePic: data.secure_url,
          });
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
          setLoadingContext(false);
        });
    }
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
          <form
            className="flex flex-col gap-8"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="relative m-2 ">
              <div
                className={`cursor-pointer w-32 h-32 hover:-translate-y-1 hover:scale-110 ${
                  data.profilePic
                    ? "bg-[url(" + data.profilePic + ")]"
                    : "bg-[url('https://via.placeholder.com/120')]"
                } hover:bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1N8HZnfDzGHlqKTsf9sAkrCXYJ8cP0EjXB9ixruDXQ&s')]`}
                onClick={() =>
                  document.getElementById("profilepicfile").click()
                }
              />

              <input
                type="file"
                id="profilepicfile"
                name="file"
                className="hidden"
                style={{ display: "none" }}
                onChange={handleFileChange}
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
            <div>
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
            </div>
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
            <div>
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
            </div>
            <div className="flex justify-center">
              <button className="px-8 py-2 bg-purple-900 text-[#fff] rounded ">
                Save
              </button>
            </div>
          </form>
        </div>
      </MainLayout>
    </>
  );
}
