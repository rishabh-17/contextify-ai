import React from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const [formValidity, setFormValidity] = React.useState({
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValidity((prevState) => ({
      ...prevState,
      [name]: value.length ? "" : "This field is required.",
    }));
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const isFormValid = () => {
    const { password, email } = formValidity;
    return !password && !email;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/user/login",
        {
          email,
          password,
        }
      );
      if (data.error) {
        setError(data.error);
        setFormValidity((prevState) => ({
          ...prevState,
          email: data.error,
        }));
        setIsLoading(false);
      } else {
        localStorage.setItem("token", data.token);
        setIsLoading(false);
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[60%] p-5 border-t border-b border-l border-r border-gray-100 rounded-tl-lg rounded-tr-lg">
        <div className="container flex flex-col items-center justify-center px-5 md:px-14 md:py-24">
          <div className="container flex items-center justify-between gap-2 self-stretch sm:flex-col">
            <div className="flex items-center pl-2">
              <p className="self-end text-blue_gray-900">
                English (united States)
              </p>
              <img
                src="images/img_property_1_arrow.svg"
                alt="propertyone_one"
                className="h-[24px] w-[24px]"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                <p className="self-end text-gray-700 underline">
                  <span className="text-blue_gray-900">
                    Don't have an account?
                  </span>
                  <span className="text-gray-900_01">&nbsp;&nbsp;</span>
                </p>
              </div>
              <button
                className="min-w-[131px] rounded-md border border-solid border-gray-900_01 text-gray-900_01 sm:px-5"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </div>
          </div>

          <div className="container-xs w-[50%] flex flex-col items-center gap-[10px] rounded-[32px] border border-solid  m-4 border-gray-700 p-5 pt-1 md:p-5">
            <div className="flex w-[73%] flex-col items-center gap-1 md:w-full">
              <div className="h-[40px] w-[40px] rounded-[20px] bg-gray-400_01" />
              <a href="#">
                <p className="text-blue_gray-900 text-3xl">Login</p>
              </a>
              <p className="text-center text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                lobortis maximus{" "}
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-8 self-stretch"
            >
              <div className="flex flex-col gap-[23px]">
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-gray-700">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="self-stretch bg-transparent rounded-xl sm:px-5"
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-700">Password</p>
                    <div
                      className="cursor-pointer flex items-center justify-center rounded-md"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? (
                        <img
                          src="images/img_icon_eye_close.svg"
                          alt="eye_close"
                          className="h-[16px] w-[16px]"
                        />
                      ) : (
                        <img
                          src="images/img_icon_eye_open.svg"
                          alt="eye_open"
                          className="h-[16px] w-[16px]"
                        />
                      )}
                    </div>
                  </div>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    className="self-stretch sm:px-5  bg-transparent rounded-xl"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full border border-solid border-blue_gray-100 lowercase bg-purple-900 text-[#fff] hover:bg-[#fff] hover:text-purple-900 py-2 rounded-xl sm:px-5"
                  disabled={!isFormValid()}
                >
                  LOGIN
                </button>
              </div>
            </form>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
