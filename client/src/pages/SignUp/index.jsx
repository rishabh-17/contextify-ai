import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { Text, Img, Input, Button } from "../../components";
import { LoadingContext } from "../../App";
import { GoogleLogin } from "@react-oauth/google";
export default function SignUpPage() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [retypePassword, setRetypePassword] = React.useState("");
  const setLoading = useContext(LoadingContext);
  const [error, setError] = React.useState("");
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [passwordVisible2, setPasswordVisible2] = React.useState(false);

  const [formValidity, setFormValidity] = React.useState({
    email: "",
    password: "",
    username: "",
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
      case "username":
        setUsername(value);
        break;
      case "retypePassword":
        setRetypePassword(value);
        break;
      default:
        break;
    }
  };

  const isFormValid = () => {
    const { email, password, username } = formValidity;
    return !email && !password && !username;
  };

  const strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  const validatePassword = () => {
    const valid = strongRegex.test(password);
    setFormValidity((prevState) => ({
      ...prevState,
      password: valid ? "" : "Password is not strong enough.",
    }));
    return valid;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isFormValid()) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!validatePassword()) {
      setError(
        "Password is not strong enough. Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character."
      );
      return;
    }

    if (password !== retypePassword) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/user/signup",
        {
          email,
          password,
          name: username,
        }
      );
      if (!data.success) {
        setError(data.msg);
        setFormValidity((prevState) => ({
          ...prevState,
          username: data.error,
        }));
        setLoading(false);
      } else {
        navigate("/signin");
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  async function handleGoogleSignup(detail) {
    // e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/user/signup",
        {
          email: detail.email,
          password: detail.email,
          name: detail.given_name,
        }
      );
      if (!data.success) {
        setError(data.msg);
        setFormValidity((prevState) => ({
          ...prevState,
          username: data.error,
        }));
        setLoading(false);
      } else {
        navigate("/signin");
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  function parseJwt(token) {
    var base64Url = token.split(".")[1];
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

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(parseJwt(codeResponse.credential)),
    onError: (error) => console.log("Login Failed:", error),
  });

  return (
    <div className="gap-2 flex items-center justify-center">
      <div className="w-[60%] md:w-[100%] p-5 border-t border-b border-l border-r border-gray-100 rounded-tl-lg rounded-tr-lg">
        <div className="container flex flex-col items-center justify-center px-5 md:px-14 md:py-24">
          <div className="container-xs w-[50%] sm:w-full flex flex-col items-center gap-[10px] border border-solid  m-4 border-gray-700 p-5 pt-1 md:p-5  bg-[#fff] shadow-md rounded-xl">
            <Img
              src="images/logo.png"
              // src="images/img_frame_purple_900.svg"
              alt="image"
              className="my-0 pb-0 h-[60px]"
            />
            <div className="flex w-[73%] flex-col items-center gap-1 md:w-full">
              {/* <div className="h-[40px] w-[40px] rounded-[20px] bg-gray-400_01" /> */}
              <a href="#">
                <p className="text-blue_gray-900 text-3xl">Create an account</p>
              </a>
              <p className="text-center text-gray-700">
              Welcome to a new way of using the Internet{" "}
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-8 self-stretch"
            >
              <div className="flex flex-col gap-[23px]">
                <div className="flex flex-col gap-1">
                  <label htmlFor="username" className="text-gray-700">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleChange}
                    className="self-stretch bg-transparent rounded-xl sm:px-5"
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <label htmlFor="email" className="text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="self-stretch  bg-transparent rounded-xl sm:px-5"
                  />
                </div>
                <div className="flex flex-col gap-1">
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
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-700">Confirm Password</p>
                    <div
                      className="cursor-pointer flex items-center justify-center rounded-md"
                      onClick={() => setPasswordVisible2(!passwordVisible2)}
                    >
                      {passwordVisible2 ? (
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
                    type={passwordVisible2 ? "text" : "password"}
                    id="password"
                    name="retypePassword"
                    value={retypePassword}
                    onChange={handleChange}
                    className="self-stretch sm:px-5  bg-transparent rounded-xl"
                  />
                </div>
                <div className="flex items-center gap-2 text-left text-base text-blue_gray-900 sm:pr-5">
                  <input
                    type="checkbox"
                    id="property1checkb"
                    name="property1checkb"
                    className="mr-[1px] "
                  />
                  <label htmlFor="property1checkb">
                    By creating an account, I agree to our Terms of use and
                    Privacy Policy
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full border border-solid border-blue_gray-100 lowercase bg-purple-900 text-[#fff] hover:bg-[#fff] hover:text-purple-900 py-2 rounded-xl sm:px-5"
                  disabled={!isFormValid()}
                >
                  CREATE AN ACCOUNT
                </button>
                <div className="flex justify-center">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      handleGoogleSignup(
                        parseJwt(credentialResponse.credential)
                      );
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </div>
              </div>
            </form>
            {error && <p className="text-red-500">{error}</p>}
          </div>

          <div className="flex items-center justify-center gap-2 self-stretch sm:flex-col">
            <div className="flex items-center gap-2">
              <div className="flex">
                <p className="self-end text-gray-700 underline">
                  <span className="text-blue_gray-900">
                    Already have an account?
                  </span>
                  <span className="text-gray-900_01">&nbsp;&nbsp;</span>
                </p>
              </div>

              <button
                className="min-w-[131px] rounded-md border border-solid border-gray-900_01 text-gray-900_01 sm:px-5 hover:-translate-y-1 hover:scale-110"
                onClick={() => navigate("/signin")}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
