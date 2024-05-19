import React from "react";
import { Button, Text, Img } from "./..";
import { useNavigate } from "react-router-dom";
import "./index.css";
export default function Header({ ...props }) {
  const navigate = useNavigate();
  return (
    <header {...props} className="wih5">
      <div className="w-full">
        <div className="flex md:flex-col justify-between items-center gap-5">
          <div className="jhsufdj w-100% flex md:ml-[-75%] items-center">
            <Img
              src="images/logo.png"
              // src="images/img_frame_purple_900.svg"
              alt="image"
              className="my-auto h-[80px]"
            />
            <h2 className="text-3xl font-bold text-purple-900">Contextify</h2>
          </div>
          <div className="flex sm:flex-col items-center">
            <div className="mx-5 cursor-pointer" onClick={() => navigate("/")}>
              <Text as="p" className="text-purple-900 capitalize">
                home
              </Text>
            </div>
            <div
              className="mx-5 cursor-pointer"
              onClick={() => navigate("/about")}
            >
              <Text as="p" className="text-purple-900  capitalize">
                about us
              </Text>
            </div>
            <div
              className="mx-5 cursor-pointer"
              onClick={() => navigate("/pricing")}
            >
              <Text as="p" className="text-purple-900  capitalize">
                pricing
              </Text>
            </div>
            <div
              className="mx-5 cursor-pointer"
              onClick={() => navigate("/contactus")}
            >
              <Text as="p" className="text-purple-900  capitalize">
                Contact Us
              </Text>
            </div>
            <div className="flex cursor-pointer ml-[21px] sm:ml-0">
              <Button
                color="white_A700"
                size="9xl"
                className="sm:px-5 capitalize min-w-[160px] border-2 border-purple-400 rounded-[30px]"
                onClick={() => {
                  if (localStorage.getItem("admintoken")) {
                    navigate("/admindashboard");
                  }
                  if (localStorage.getItem("token")) {
                    navigate("/dashboard");
                  } else {
                    navigate("/signin");
                  }
                }}
              >
                {localStorage.getItem("token") ? "Dashboard" : "Get Free Trial"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
