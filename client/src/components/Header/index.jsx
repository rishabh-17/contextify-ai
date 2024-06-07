import React from "react";
import { Button, Text, Img } from "./..";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { FaAlignRight } from "react-icons/fa";
export default function Header({ ...props }) {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = React.useState(false);
  return (
    <header {...props} className="wih5">
      <div className="w-full">
        <div className="flex justify-between items-center gap-5">
          <div
            className="jhsufdj w-100% flex items-center"
            onClick={() => navigate("/")}
          >
            <Img
              src="images/logo.png"
              // src="images/img_frame_purple_900.svg"
              alt="image"
              className="my-auto h-[80px]"
            />
            <h2 className="text-3xl font-bold text-purple-900">Contextify</h2>
          </div>
          <div className="flex items-center md:hidden">
            <div className="mx-5 cursor-pointer" onClick={() => navigate("/")}>
              <Text as="p" className="text-purple-900 capitalize">
                home
              </Text>
            </div>
            <div
              className="mx-5 cursor-pointer"
              onClick={() => navigate("/about")}
            >
              <Text as="p" className="text-purple-900 capitalize">
                about us
              </Text>
            </div>
            <div
              className="mx-5 cursor-pointer"
              onClick={() => navigate("/pricing")}
            >
              <Text as="p" className="text-purple-900 capitalize">
                pricing
              </Text>
            </div>
            <div
              className="mx-5 cursor-pointer"
              onClick={() => navigate("/contactus")}
            >
              <Text as="p" className="text-purple-900 capitalize">
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
                {localStorage.getItem("token")
                  ? "Dashboard"
                  : "Getting Started"}
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <FaAlignRight color="purple" onClick={() => setSidebar(!sidebar)} />
          </div>
          {sidebar && (
            <aside className=" flex z-50 flex-col justify-between gap-4 absolute h-screen lg:hidden md:w-1/2 sm:w-2/3 left-0 top-0 bg-purple-900">
              <div className="flex flex-col gap-5 mt-8">
                <div
                  className="mx-5 cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  <Text as="p" className="text-[#fff] capitalize">
                    home
                  </Text>
                </div>
                <div
                  className="mx-5 cursor-pointer"
                  onClick={() => navigate("/about")}
                >
                  <Text as="p" className="text-[#fff] capitalize">
                    about us
                  </Text>
                </div>
                <div
                  className="mx-5 cursor-pointer"
                  onClick={() => navigate("/pricing")}
                >
                  <Text as="p" className="text-[#fff] capitalize">
                    pricing
                  </Text>
                </div>
                <div
                  className="mx-5 cursor-pointer"
                  onClick={() => navigate("/contactus")}
                >
                  <Text as="p" className="text-[#fff] capitalize">
                    Contact Us
                  </Text>
                </div>
              </div>
              <div className="flex cursor-pointer ml-[21px]  sm:mb-5">
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
                  {localStorage.getItem("token")
                    ? "Dashboard"
                    : "Getting Started"}
                </Button>
              </div>
            </aside>
          )}
        </div>
      </div>
    </header>
  );
}
