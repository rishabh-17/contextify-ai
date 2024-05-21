import React from "react";
import { useNavigate } from "react-router-dom";
import { Text, Img, Input, Button } from "../../components";
import { GoogleLogin } from "@react-oauth/google";
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

  function parseJwt(token) {
    var base64Url = token?.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  }

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
        if (data.authToken) {
          localStorage.setItem("admintoken", data.authToken);
          setIsLoading(false);
          navigate("/");
        } else if (data.token) {
          localStorage.setItem("token", data.token);
          let user = parseJwt(data.token);
          localStorage.setItem("user", JSON.stringify(user));
          setIsLoading(false);
          navigate("/dashboard");
        } else {
          setIsLoading(false);
          setError(data.err);
        }
      }
    } catch (err) {
      setError("Something went wrong");
      setIsLoading(false);
    }
  }
  async function handleGoogleSignup(details, gtoken) {
    // e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/user/login",
        {
          email: details.email,
          password: details.email,
          google: true,
          gtoken: gtoken,
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
        if (data.authToken) {
          localStorage.setItem("admintoken", data.authToken);
          setIsLoading(false);
          navigate("/");
        } else if (data.token) {
          localStorage.setItem("token", data.token);
          let user = parseJwt(data.token);
          localStorage.setItem("user", JSON.stringify(user));
          setIsLoading(false);
          navigate("/dashboard");
        } else {
          setIsLoading(false);
          setError(data.err);
        }
      }
    } catch (err) {
      setError("Something went wrong");
      setIsLoading(false);
    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center md:min-h-screen">
      <div className="container flex max-w-3xl mx-auto sm:flex-col items-center justify-between gap-2 self-stretch">
        <div className="flex items-center pl-2">
          <p className="self-end text-blue_gray-900">English (united States)</p>
          <img
            src="images/img_property_1_arrow.svg"
            alt="propertyone_one"
            className="h-[24px] w-[24px]"
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex">
            <p className="self-end text-gray-700 underline">
              <span className="text-blue_gray-900">Don't have an account?</span>
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
      <div className="w-full max-w-md p-5 flex flex-col items-center justify-center space-y-6 md:p-10">
        <div className="container-xs w-full flex flex-col items-center gap-[10px] rounded-[32px] border border-solid  m-4 border-gray-700 p-5 pt-1 md:p-5  bg-[#fff] shadow-md">
          <Img
            src="images/logo.png"
            // src="images/img_frame_purple_900.svg"
            alt="image"
            className="my-0 pb-0 h-[60px]"
          />
          <div className="flex w-full flex-col items-center gap-1 md:w-full">
            {/* <div classNam e="h-[40px] w-[40px] rounded-[20px] bg-gray-400_01" /> */}
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
            <div className="flex flex-col gap-[23px] md:gap-[36px]">
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
                  className="w-full bg-transparent rounded-xl focus:ring-blue_gray-900 focus:border-blue_gray-900 sm:px-5"
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
                  className="w-full bg-transparent rounded-xl focus:ring-blue_gray-900 focus:border-blue_gray-900 sm:px-5"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-900 text-[#fff] hover:bg-[#fff] hover:text-purple-900 py-2 rounded-xl sm:px-5"
                disabled={!isFormValid()}
              >
                LOGIN
              </button>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  handleGoogleSignup(
                    parseJwt(credentialResponse.credential),
                    credentialResponse.credential
                  );
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
          </form>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
}
