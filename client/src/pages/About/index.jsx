import React from "react";
// import './About.css';
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./index.css";
import img2 from "../../assets/About/section 1-2.png";
import img3 from "../../assets/About/section 1-3.png";
import img4 from "../../assets/About/section 1-4.png";
import img5 from "../../assets/About/section 1-5.png";
import img6 from "../../assets/About/section 1-6.png";
import img7 from "../../assets/About/section 1-7.png";
import img8 from "../../assets/About/section 1-8.png";
import img9 from "../../assets/About/section 1-9.png";
import img10 from "../../assets/About/section 1-10.png";
import img11 from "../../assets/About/section 1-11.png";
import img12 from "../../assets/About/section 1-12.png";
import innovation from "../../assets/About/Innovation.png";
import responsablity from "../../assets/About/responsblity.png";
import teamwork from "../../assets/About/teamWork.png";
import excelence from "../../assets/About/excellience.png";
import c1 from "../../assets/About/clint1.png";
import c2 from "../../assets/About/client2.png";
import c3 from "../../assets/About/client3.png";
import b1 from "../../assets/About/qwert.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Contextify</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <section className=" px-48 sm:px-5">
        <Header className="w-[86%] md:w-full md:p-5" />
      </section>

      <section className=" px-48 sm:px-5 mt-48 text-center">
        <h1 className="text-7xl mb-5">About Contextify</h1>
        <p>Discover the Power of Contextify!</p>
      </section>

      <section className=" px-48 sm:px-5 mt-48">
        <Carousel autoPlay infiniteLoop>
          <div>
            <img src="https://elledecor.in/wp-content/uploads/2023/06/H1-6.jpg" />
          </div>
          <div>
            <img src="https://elledecor.in/wp-content/uploads/2023/06/H1-6.jpg" />
          </div>
          <div>
            <img src="https://elledecor.in/wp-content/uploads/2023/06/H1-6.jpg" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>
      </section>

      <section className=" px-48 sm:px-5 mt-24">
        <div className="grid grid-cols-3 gap-5">
          <h1 className="text-5xl">What We Do</h1>
          <div className="col-span-2">
            <p className="mb-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using.
            </p>
            <p>
              Content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.{" "}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-24 mb-48">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p>Trusted by 20000+ Clients</p>
            <h2 className="text-5xl text-center mt-5">They Trust US.</h2>
          </div>
          <div>
            <div className="flex gap-8 justify-center w-min-0 flex-wrap">
              <div class="hexagon">
                <div className=" img bg-[#fff] shadow-2xl"></div>
              </div>
              <div class="hexagon">
                <div className=" img bg-[#fff] shadow-2xl"></div>
              </div>
              <div class="hexagon">
                <div className=" img bg-[#fff] shadow-2xl"></div>
              </div>
              <div class="hexagon">
                <div className=" img bg-[#fff] shadow-2xl"></div>
              </div>
              <div class="hexagon">
                <div className=" img bg-[#fff] shadow-2xl"></div>
              </div>
              <div class="hexagon">
                <div className=" img bg-[#fff] shadow-2xl"></div>
              </div>
              <div class="hexagon">
                <div className=" img bg-[#fff] shadow-2xl"></div>
              </div>
              <div class="hexagon">
                <div className=" img bg-[#fff] shadow-2xl"></div>
              </div>
              <div class="hexagon">
                <div className=" img bg-[#fff] shadow-2xl"></div>
              </div>
              <div class="hexagon">
                <div className=" img bg-[#fff] shadow-2xl"></div>
              </div>
              <div class="hexagon">
                <div className=" img bg-[#fff] shadow-2xl"></div>
              </div>
              <div class="hexagon">
                <div className=" img bg-[#fff] shadow-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" px-48 sm:px-5 mt-48">
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-5 justify-center">
            <h1 className="text-5xl">Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra Ld eu
              aliquet diam lorem viverra at justo. Nulla odio nequefjf gravida
              in pharetra egestas. Ac id sagittis at morbi interdum nibh diam
              sagittis et. Lorem ipsum dolor sit amet, consectetur adipiscing
              Pharetra id eu aliquet diam lorem viverra at justo. Nulla odio
              nequesg gravida in pharetra egestas.
            </p>
          </div>

          <div className="flex justify-center items-center">
            {" "}
            <img
              className=" shadow-2xl"
              src={
                "https://t4.ftcdn.net/jpg/04/17/28/93/360_F_417289346_hrs0D4Lo8dSv3aWDqkQpRB0U9PbtFX6n.jpg"
              }
              alt="section1Image"
            />
          </div>
        </div>
      </section>

      <section className=" px-48 sm:px-5 mt-48">
        <div className="flex flex-wrap gap-12 w-full ">
          {/* <div className="flex flex-col gap-5 justify-center items-center w-[200px]">
            <div className="rounded-full shadow-2xl overflow-hidden border-2 border-purple-500 p-1">
              <img
                className="rounded-full"
                width={150}
                height={150}
                src={
                  "https://dstudiosphotography.com/wp-content/uploads/2019/01/Corporate-Headshots-3-square.jpg"
                }
                alt=""
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Charlie Williams</h3>
              <p>Digital Marketing Specialist New York, USA.</p>
            </div>
          </div> */}
          <div class="relative flex flex-col text-gray-700 bg-purple-900 shadow-md bg-clip-border rounded-xl w-96">
            <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl ">
              <img
                src="https://dstudiosphotography.com/wp-content/uploads/2019/01/Corporate-Headshots-3-square.jpg"
                alt="profile-picture"
              />
            </div>
            <div class="p-6 text-center">
              <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-[#fff]">
                Charlie Williams
              </h4>
              <p class="block font-sans text-base antialiased font-medium leading-relaxed bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 text-[#fff]">
                Digital Marketing Specialist New York, USA.
              </p>
            </div>
            <div class="flex justify-center p-6 pt-2 gap-7">
              <a
                href="#facebook"
                class="block font-sans text-xl antialiased font-normal leading-relaxed bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400"
              >
                <FaFacebook color={"white"} />
              </a>
              <a
                href="#twitter"
                class="block font-sans text-xl antialiased font-normal leading-relaxed bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400"
              >
                <FaTwitter color={"white"} />
              </a>
              <a
                href="#instagram"
                class="block font-sans text-xl antialiased font-normal leading-relaxed bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"
              >
                <FaInstagram color={"white"} />
              </a>
            </div>
          </div>
          <div class="relative flex flex-col text-gray-700 bg-purple-900 shadow-md bg-clip-border rounded-xl w-96">
            <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl ">
              <img
                src="https://dstudiosphotography.com/wp-content/uploads/2019/01/Corporate-Headshots-3-square.jpg"
                alt="profile-picture"
              />
            </div>
            <div class="p-6 text-center">
              <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-[#fff]">
                Charlie Williams
              </h4>
              <p class="block font-sans text-base antialiased font-medium leading-relaxed bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 text-[#fff]">
                Digital Marketing Specialist New York, USA.
              </p>
            </div>
            <div class="flex justify-center p-6 pt-2 gap-7">
              <a
                href="#facebook"
                class="block font-sans text-xl antialiased font-normal leading-relaxed bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400"
              >
                <FaFacebook color={"white"} />
              </a>
              <a
                href="#twitter"
                class="block font-sans text-xl antialiased font-normal leading-relaxed bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400"
              >
                <FaTwitter color={"white"} />
              </a>
              <a
                href="#instagram"
                class="block font-sans text-xl antialiased font-normal leading-relaxed bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"
              >
                <FaInstagram color={"white"} />
              </a>
            </div>
          </div>
          <div class="relative flex flex-col text-gray-700 bg-purple-900 shadow-md bg-clip-border rounded-xl w-96">
            <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl ">
              <img
                src="https://dstudiosphotography.com/wp-content/uploads/2019/01/Corporate-Headshots-3-square.jpg"
                alt="profile-picture"
              />
            </div>
            <div class="p-6 text-center">
              <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-[#fff]">
                Charlie Williams
              </h4>
              <p class="block font-sans text-base antialiased font-medium leading-relaxed bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 text-[#fff]">
                Digital Marketing Specialist New York, USA.
              </p>
            </div>
            <div class="flex justify-center p-6 pt-2 gap-7">
              <a
                href="#facebook"
                class="block font-sans text-xl antialiased font-normal leading-relaxed bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400"
              >
                <FaFacebook color={"white"} />
              </a>
              <a
                href="#twitter"
                class="block font-sans text-xl antialiased font-normal leading-relaxed bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400"
              >
                <FaTwitter color={"white"} />
              </a>
              <a
                href="#instagram"
                class="block font-sans text-xl antialiased font-normal leading-relaxed bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"
              >
                <FaInstagram color={"white"} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className=" px-48 sm:px-5 mt-48">
        <div
          className="section7"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          <div
            className="rpvfvd3"
            style={{
              background: "linear-gradient(to bottom , #684FFF , #B871FE",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div
              className="fv5"
              style={{ width: "45%", padding: "100px 60px " }}
            >
              <div style={{ display: "grid", gap: "15px" }}>
                <div style={{ width: "100%", display: "grid", gap: "30px" }}>
                  <h5 style={{ fontSize: "35px" }}>
                    Start your free trial today
                  </h5>
                  <p>
                    It is a long established fact that a reader will be by the
                    readable when looking at it layout.{" "}
                  </p>
                </div>

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    gap: "5px",
                    justifyContent: "space-between",
                  }}
                >
                  <input
                    style={{
                      width: "78%",
                      background: "#ffffff7d",
                      borderRadius: "50px",
                      outline: "",
                    }}
                    placeholder="your mail here..."
                    type="text"
                  />
                  <button
                    style={{
                      width: "max-content",
                      color: "#5236FF",
                      background: "white",
                      padding: "10px 20px",
                      borderRadius: "50px",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>

            <div className="fv6" style={{ width: "45%" }}>
              <img src={b1} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-48 mb-24">
        <Footer />
      </section>
    </>
  );
}
