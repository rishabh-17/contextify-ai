import React, { useContext, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, Input, SelectBox } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomePageLearnhtml from "../../components/HomePageLearnhtml";
import HomePageReadbooklight from "../../components/HomePageReadbooklight";
import HomePageSituplight from "../../components/HomePageSituplight";
import HomePageUIDesign from "../../components/HomePageUIDesign";
import FreeTrialArea from "../../components/FreeTrialArea";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./index.css";
import CountUp from "react-countup";
import company1 from "../../assets/company1.png";
import company2 from "../../assets/company2.png";
import company3 from "../../assets/company3.png";
import company4 from "../../assets/company4.png";
import company5 from "../../assets/company5.png";
import company6 from "../../assets/company6.png";
import company7 from "../../assets/company7.png";
import company8 from "../../assets/company8.png";
import company9 from "../../assets/company9.png";
import company10 from "../../assets/company10.png";
import company11 from "../../assets/company11.png";
import section1Image from "../../assets/section1Image.png";
import section3Image from "../../assets/section3Image.png";
import section4Image from "../../assets/section4Image.png";
import section5Image from "../../assets/section5Image.png";
import section6Image from "../../assets/section6Image.png";
import contextify1 from "../../assets/contextify1.mp4";
import extensionvid from "../../assets/extensionvid.mp4";
import knowinternet from "../../assets/knowinternet.mp4";
import knowtopic from "../../assets/knowtopic.mp4";
import knowsearches from "../../assets/knowsearches.mp4";

import { LoadingContext } from "../../App";

import { FaArrowRightLong } from "react-icons/fa6";
import { contextType } from "react-quill";

export default function HomePage() {
  const [selected, setSelected] = React.useState({
    img: "img_photo_1.png",
    description: "I love using contextify for my context.",
    name: "Walter White",
    title: "Developer",
  });

  const videoEl1 = useRef(null);
  const videoEl2 = useRef(null);
  const videoEl3 = useRef(null);
  const videoEl4 = useRef(null);
  const videoEl5 = useRef(null);

  const attemptPlay = () => {
    videoEl1 &&
      videoEl1.current &&
      videoEl1.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
    videoEl2 &&
      videoEl2.current &&
      videoEl2.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
    videoEl3 &&
      videoEl3.current &&
      videoEl3.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
    videoEl4 &&
      videoEl4.current &&
      videoEl4.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
    videoEl5 &&
      videoEl5.current &&
      videoEl5.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  const setLoading = useContext(LoadingContext);

  return (
    <>
      <div
        style={{ width: "100%", height: "max-content", paddingBottom: "100px" }}
        className="bg-[#f7f0fc]"
      >
        <Helmet>
          <title>Contextify</title>
          <meta
            name="description"
            content="Contextify puts information into context at the click of a button."
          />
        </Helmet>
        <div>
          <section className=" px-48 sm:px-5">
            <Header />
          </section>

          <section className=" px-48 sm:px-5 mt-24">
            <div className="grid grid-cols-2 sm:grid-cols-1">
              <div className="flex flex-col gap-5">
                <h1 className="text-7xl">
                  Bring the Internet into
                  <br />
                  <span className="bg-orange-50">Focus.</span>
                </h1>
                <p className="text-2xl">
                  Contextify puts information into context at the click of a
                  button. Be in the know
                </p>
                <div className="flex gap-5 items-center mt-16">
                  <input
                    className="border border-gray-500 rounded-3xl px-4 py-5 w-[80%]"
                    placeholder="Get Started for Free"
                  />
                  <div className="border border-purple-400 rounded-3xl px-4 py-5 bg-white  w-min-[100px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-900 duration-300">
                    <FaArrowRightLong width={100} height={100} color="purple" />
                  </div>
                </div>
                <p>
                  Already using Contextify?{" "}
                  <span className="text-purple-900">Sign in</span>
                </p>
                {/* <div className="flex gap-12 mt-8 w-full">
                  <div className="flex w-fit ">
                    <img
                      className="z-20"
                      src="images/img_ellipse_1.png"
                      width={60}
                      height={60}
                      color="white"
                    />
                    <img
                      className="z-10 ml-[-25px]"
                      src="images/img_ellipse.png"
                      width={60}
                      height={60}
                      color="white"
                    />
                    <img
                      className="ml-[-30px]"
                      src="images/img_ellipse_2.png"
                      width={60}
                      height={60}
                      color="white"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">1,200+</h3>
                    <p>
                      Happy <br /> Customer
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">4.8/5</h3>
                    <p>Rating</p>
                  </div>
                </div> */}
              </div>
              <div className="flex justify-center items-center">
                <video
                  // style={{ maxWidth: "100%", width: "900px", margin: "0 auto" }}
                  playsInline
                  loop
                  muted
                  alt="All the devices"
                  src={contextify1}
                  ref={videoEl1}
                  className="rounded-3xl object-fill h-[350px] sm:mt-5"
                />
              </div>
            </div>
          </section>

          {/* <section className="mt-24 mb-48">
            <div className="flex flex-col items-center">
              <div className="text-center">
                <p>Trusted by 20000+ Clients</p>
                <h2 className="text-5xl text-center mt-5">They Trust US.</h2>
              </div>
              <div>
                <div className="flex gap-8 justify-center w-min-0 flex-wrap">
                  <div class="hexagon">
                    <div className=" img bg-[#fff] shadow-md"></div>
                  </div>
                  <div class="hexagon">
                    <div className=" img bg-[#fff] shadow-md"></div>
                  </div>
                  <div class="hexagon">
                    <div className=" img bg-[#fff] shadow-md"></div>
                  </div>
                  <div class="hexagon">
                    <div className=" img bg-[#fff] shadow-md"></div>
                  </div>
                  <div class="hexagon">
                    <div className=" img bg-[#fff] shadow-md"></div>
                  </div>
                  <div class="hexagon">
                    <div className=" img bg-[#fff] shadow-md"></div>
                  </div>
                  <div class="hexagon">
                    <div className=" img bg-[#fff] shadow-md"></div>
                  </div>
                  <div class="hexagon">
                    <div className=" img bg-[#fff] shadow-md"></div>
                  </div>
                  <div class="hexagon">
                    <div className=" img bg-[#fff] shadow-md"></div>
                  </div>
                  <div class="hexagon">
                    <div className=" img bg-[#fff] shadow-md"></div>
                  </div>
                  <div class="hexagon">
                    <div className=" img bg-[#fff] shadow-md"></div>
                  </div>
                  <div class="hexagon">
                    <div className=" img bg-[#fff] shadow-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          <section className=" px-48 sm:px-5 mt-48">
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
              <div className="flex flex-col gap-5">
                <h1 className="text-5xl">One Platform for Your Research</h1>
                <ul className="flex flex-col gap-10">
                  <li className="flex gap-5 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 rounded p-2 duration-300">
                    <div className="h-16 w-16">
                      <img src="images/logo.png" alt="section1Image" />
                    </div>
                    <div>
                      <h3 className="text-2xl m-1">Browser extension</h3>
                      <p>
                        Run web searches on text + images without leaving your
                        current tab
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-5 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 rounded p-2 duration-300">
                    <div className="h-16 w-16">
                      <img src="images/logo.png" alt="logo" />
                    </div>
                    <div>
                      <h3 className="text-2xl m-1">Audio search results</h3>
                      <p>
                        No time to read? Click to hear the information you’re
                        looking for.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-5 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 rounded p-2 duration-300">
                    <div className="h-16 w-16">
                      <img src="images/logo.png" alt="logo" />
                    </div>
                    <div>
                      <h3 className="text-2xl m-1">Log your learning</h3>
                      <p>
                        We make it easy to re-find things you thought were cool.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center items-center">
                {" "}
                <video
                  // style={{ maxWidth: "100%", width: "900px", margin: "0 auto" }}
                  playsInline
                  loop
                  muted
                  alt="All the devices"
                  src={extensionvid}
                  ref={videoEl2}
                  className="rounded-3xl object-fill h-[350px]"
                />
              </div>
            </div>
          </section>

          {/* <section className=" px-48 sm:px-5 mt-48">
            <div className="flex justify-center">
              <div className="bg-purple-900 w-[90%] h-[250px] rounded-3xl flex flex-wrap justify-evenly text-[#fff] items-center shadow-md">
                <div className="text-center">
                  <h2 className="text-5xl font-bold mb-5">
                    <CountUp end={110} duration={4.75} enableScrollSpy />+
                  </h2>
                  <p>Current Users</p>
                </div>

                <div className="text-center">
                  <h2 className="text-5xl font-bold mb-5">
                    {" "}
                    <CountUp end={110} duration={7.75} enableScrollSpy />+
                  </h2>
                  <p>Searches Made</p>
                </div>

                <div className="text-center">
                  <h2 className="text-5xl font-bold mb-5">
                    {" "}
                    <CountUp end={110} duration={4.75} enableScrollSpy />+
                  </h2>
                  <p>Searches per second</p>
                </div>
              </div>
            </div>
          </section> */}

          <section className=" px-48 sm:px-5 mt-48">
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
              <div className="flex flex-col gap-5 justify-center">
                <h1 className="text-5xl">
                  Know the <span className="bg-orange-50">Topic</span>
                </h1>
                <p>
                  Contextify provides built-in, same-page Google search results
                  with one simple highlight, skipping the need to open new tabs.
                  Each search includes recommended resources for easy
                  exploration.
                </p>
              </div>

              <div className="flex justify-center items-center">
                {" "}
                <video
                  // style={{ maxWidth: "100%", width: "900px", margin: "0 auto" }}
                  playsInline
                  loop
                  muted
                  alt="All the devices"
                  src={knowtopic}
                  ref={videoEl3}
                  className="rounded-3xl object-fill h-[350px]"
                />
              </div>
            </div>
          </section>

          <section className=" px-48 sm:px-5 mt-48">
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
              <div className="flex justify-center items-center">
                {" "}
                <video
                  // style={{ maxWidth: "100%", width: "900px", margin: "0 auto" }}
                  playsInline
                  loop
                  muted
                  alt="All the devices"
                  src={knowinternet}
                  ref={videoEl4}
                  className="rounded-3xl object-fill h-[350px]"
                />
              </div>
              <div className="flex flex-col gap-5 justify-center">
                <h1 className="text-5xl">
                  Know the <span className="bg-orange-50">Internet</span>
                </h1>
                <p>
                  Contextify goes beyond simple summaries, placing selected
                  media into both broad and specific contexts, making you a
                  well-informed "citizen of the internet" in seconds.
                </p>
              </div>
            </div>
          </section>

          <section className=" px-48 sm:px-5 mt-48">
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
              <div className="flex flex-col gap-5 justify-center">
                <h1 className="text-5xl">
                  Know your <span className="bg-orange-50">Searches</span>
                </h1>
                <p>
                  Contextify goes beyond categorization, organizing information
                  into broad and specific contexts, enhancing your search
                  experience and making you more informed in seconds.
                </p>
              </div>
              <div className="flex justify-center items-center">
                {" "}
                <video
                  // style={{ maxWidth: "100%", width: "900px", margin: "0 auto" }}
                  playsInline
                  loop
                  muted
                  alt="All the devices"
                  src={knowsearches}
                  ref={videoEl5}
                  className="rounded-3xl object-fill h-[350px]"
                />
              </div>
            </div>
          </section>

          <section className=" px-48 sm:px-5 mt-48">
            <div className="flex justify-center mb-24">
              <h2 className="text-5xl text-center">
                Use <br /> <span className="bg-orange-50">Contextify</span>{" "}
              </h2>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-2  sm:grid-cols-1 gap-5 ">
              <div className="flex p-5 bg-[#fff] gap-4 rounded-3xl shadow-md hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300">
                <div className="h-20 w-20">
                  <img src="images/logo.png" alt="logo" />
                </div>
                <div className="text-wrap">
                  {/* <h3 className="text-xl">Tight on time?</h3> */}
                  <p>Save time with short-form bullet-point summaries</p>
                </div>
              </div>
              <div className="flex p-5 bg-[#fff] gap-4 rounded-3xl shadow-md hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300">
                <div className="h-24 w-24">
                  <img src="images/logo.png" alt="logo" />
                </div>
                <div className="text-wrap">
                  {/* <h3 className="text-xl">Doing in-depth research?</h3> */}
                  <p>
                    Save time by identifying relevant research rabbit holes
                    within your main tab.
                  </p>
                </div>
              </div>
              <div className="flex p-5 bg-[#fff] gap-4 rounded-3xl shadow-md hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300">
                <div className="h-24 w-24">
                  <img src="images/logo.png" alt="logo" />
                </div>
                <div className="text-wrap">
                  {/* <h3 className="text-xl">Feeling social?</h3> */}
                  <p>
                    Easily share your discoveries on Contextify directly within
                    the platform.
                  </p>
                </div>
              </div>
              <div className="flex p-5 bg-[#fff] gap-4 rounded-3xl shadow-md hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300">
                <div className="h-24 w-24">
                  <img src="images/logo.png" alt="logo" />
                </div>
                <div className="text-wrap">
                  {/* <h3 className="text-xl">Need good sources?</h3> */}
                  <p>
                    Find reliable sources and related topics effortlessly
                    without losing your way.
                  </p>
                </div>
              </div>
              <div className="flex p-5 bg-[#fff] gap-4 rounded-3xl shadow-md hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300">
                <div className="h-24 w-24">
                  <img src="images/logo.png" alt="logo" />
                </div>
                <div className="text-wrap">
                  {/* <h3 className="text-xl">Catching up on trends?</h3> */}
                  <p>
                    Stay updated on trends with Contextify's summaries of movie
                    plots, production details, celeb news, and more.
                  </p>
                </div>
              </div>
              <div className="flex p-5 bg-[#fff] gap-4 rounded-3xl shadow-md hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300">
                <div className="h-24 w-24">
                  <img src="images/logo.png" alt="logo" />
                </div>
                <div className="text-wrap">
                  {/* <h3 className="text-xl">
                    Keep forgetting to look things up?
                  </h3> */}
                  <p>
                    Never forget to look things up again with Contextified notes
                    to keep track of interesting tidbits.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* <section className=" px-48 sm:px-5 mt-48">
            <div className="flex justify-center">
              <h2 className="text-5xl text-center">
                What our <span className="bg-orange-50">Client</span> Think{" "}
                <br />
                About US?{" "}
              </h2>
            </div> */}
          {/* <div
              className="reviews w-full h-[1000px] sm:h-[500px]
            "
            >
              <div className="h-[700px] w-[700px] sm:w-[300px] sm:h-[300px] absolute border-8 sm:border-2 border-purple-500 rounded-full m-auto left-0 right-0"></div>
              <div
                className="w-full flex justify-end "
                onClick={() =>
                  setSelected({
                    img: "img_photo_1.png",
                    description: "I love using contextify for my context.",
                    name: "Walter White",
                    title: "Developer",
                  })
                }
              >
                <img
                  className="border-4 border-purple-500 rounded-full p-1 w-36 sm:w-16"
                  src="images/img_photo_1.png"
                  // width={150}
                  // height={150}
                  alt=""
                />
              </div>

              <div
                onClick={() =>
                  setSelected({
                    img: "img_photo_2.png",
                    description: "I love using contextify for my context.",
                    name: "Jhon Snow",
                    title: "Tester",
                  })
                }
              >
                <img
                  className="border-4 border-purple-500 rounded-full p-1 w-36 sm:w-16"
                  src="images/img_photo_2.png"
                  alt=""
                />
              </div>

              <div className="w-full flex justify-center">
                <div className="flex flex-col items-center">
                  <img
                    className="border-4 border-purple-500 rounded-full p-1 w-36 sm:w-16"
                    src={`images/${selected.img}`}
                    alt=""
                  />
                  <div className="bg-[#fff] p-2 text-center w-[500px] rounded-xl">
                    <p>{selected.description}</p>
                    <h3 className="text-xl mt-2 font-bold">{selected.name}</h3>
                    <h3 className="text-xl mt-2 font-bold">{selected.title}</h3>
                  </div>
                </div>
              </div>

              <div
                onClick={() =>
                  setSelected({
                    img: "img_group_2.png",
                    description: "I love using contextify for my context.",
                    name: "Tony Stark",
                    title: "Iron Man",
                  })
                }
                className="w-full flex justify-end"
              >
                <img
                  className="border-4 border-purple-500 rounded-full p-1 w-36 sm:w-16"
                  src="images/img_group_2.png"
                  alt=""
                />
              </div>

              <div
                onClick={() =>
                  setSelected({
                    img: "img_group_3.png",
                    description: "I love using contextify for my context.",
                    name: "Steve Rogers",
                    title: "Captain",
                  })
                }
                className="w-full flex "
              >
                <img
                  className="border-4 border-purple-500 rounded-full p-1 w-36 sm:w-16"
                  src="images/img_group_3.png"
                  alt=""
                />
              </div>

              <div
                onClick={() =>
                  setSelected({
                    img: "img_photo_44x41.png",
                    description: "I love using contextify for my context.",
                    name: "Robin Hood",
                    title: "BDM",
                  })
                }
                className="w-full flex justify-center"
              >
                <img
                  className="border-4 border-purple-500 rounded-full p-1 w-36 sm:w-16"
                  src="images/img_photo_44x41.png"
                  alt=""
                />
              </div>
            </div> */}
          {/* </section> */}

          <section className="mt-48">
            <FreeTrialArea />
          </section>

          <section className="mt-48">
            <Footer />
          </section>
        </div>
      </div>
    </>
  );
}
