import React from "react";
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
import './index.css';
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

import { FaArrowRightLong } from "react-icons/fa6";


export default function HomePage() {

  const [selected, setSelected] = React.useState({
    img: 'img_photo_1.png',
    description: 'I love using contextify for my context.',
    name: 'Walter White',
    title:'Developer'
  });


  return (
    <>
      <div style={{ width: '100%', height: 'max-content', marginBottom: '100px' }}>

        <Helmet>
          <title>Contextify</title>
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
        </Helmet>
        <div>
          <section className="px-48">
            <Header />
          </section>

          <section className="px-48 mt-24">
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-5">
                <h1 className="text-7xl">Be in the <br /><span className="bg-orange-50">Know.</span></h1>
                <p className="text-2xl">Contexttify  is a hub puts information into <br /> context at the click of a button</p>
                <div className="flex gap-5 items-center mt-16">
                  <div className="border border-gray-500 rounded-3xl px-4 py-5 w-[80%]">
                    Get Started for Free
                  </div>
                  <div className="border border-gray-500 rounded-3xl px-4 py-5 bg-purple-900 w-min-[100px]">
                    <FaArrowRightLong width={100} height={100} color="white" />
                  </div>
                </div>
                <p>Already using contextify? <span className="text-purple-900">sign in</span></p>
                <div className="flex gap-12 mt-8 w-full">
                  <div className="flex w-fit ">
                    <img className="z-20" src="images/img_ellipse_1.png" width={60} height={60} color="white" />
                    <img className="z-10 ml-[-25px]" src="images/img_ellipse_1.png" width={60} height={60} color="white" />
                    <img className="ml-[-30px]" src="images/img_ellipse_1.png" width={60} height={60} color="white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">1,200+</h3>
                    <p>Happy <br /> Customer</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">4.8/5</h3>
                    <p>Rating</p>
                  </div>
                </div>


              </div>
              <div className="flex justify-center items-center"><img className="shadow-2xl" src={section1Image} alt="section1Image" /></div>
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

          <section className="px-48 mt-48">
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-5">
                <h1 className="text-5xl">For All Your Research</h1>
                <ul className="flex flex-col gap-10">
                  <li className="flex gap-5">
                    <div className="h-16 w-16 bg-red-400 rounded-full" />
                    <div>
                      <h3 className="text-2xl m-1">Appointments</h3>
                      <p>Many desktop publishing packages and web page editors now use for them.</p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <div className="h-16 w-16 bg-blue-400 rounded-full" />
                    <div>
                      <h3 className="text-2xl m-1">Appointments</h3>
                      <p>Many desktop publishing packages and web page editors now use for them.</p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <div className="h-16 w-16 bg-green-400 rounded-full" />
                    <div>
                      <h3 className="text-2xl m-1">Appointments</h3>
                      <p>Many desktop publishing packages and web page editors now use for them.</p>
                    </div>
                  </li>
                </ul>

              </div>

              <div className="flex justify-center items-center"> <img className=' shadow-2xl' src={section3Image} alt="section1Image" /></div>
            </div>

          </section>

          <section className="px-48 mt-48">
            <div className="flex justify-center">
              <div className="bg-purple-900 w-[90%] h-[250px] rounded-3xl flex justify-evenly text-[#fff] items-center shadow-2xl">
                <div className="text-center">
                  <h2 className="text-5xl font-bold mb-5">110+</h2>
                  <p>Searches per second</p>
                </div>

                <div className="text-center">
                  <h2 className="text-5xl font-bold mb-5">110+</h2>
                  <p>Searches per second</p>
                </div>

                <div className="text-center">
                  <h2 className="text-5xl font-bold mb-5">110+</h2>
                  <p>Searches per second</p>
                </div>
              </div>
            </div>
          </section>

          <section className="px-48 mt-48">
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-5 justify-center">
                <h1 className="text-5xl">Manage your searches and <span className="bg-orange-50">notes</span> with ease.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio aut deserunt. Porro minima magnam assumenda nam ipsa, unde praesentium qui autem sint aliquam sunt consequuntur tempora voluptates maiores natus? Possimus, obcaecati. Laborum maxime minus quis molestias sequi officia saepe excepturi, assumenda eveniet, vel eos!</p>


              </div>

              <div className="flex justify-center items-center"> <img className=' shadow-2xl' src={section4Image} alt="section1Image" /></div>
            </div>

          </section>

          <section className="px-48 mt-48">
            <div className="grid grid-cols-2">
              <div className="flex justify-center items-center"> <img className=' shadow-2xl' src={section5Image} alt="section1Image" /></div>
              <div className="flex flex-col gap-5 justify-center">
                <h1 className="text-5xl">Manage your searches and <span className="bg-orange-50">notes</span> with ease.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio aut deserunt. Porro minima magnam assumenda nam ipsa, unde praesentium qui autem sint aliquam sunt consequuntur tempora voluptates maiores natus? Possimus, obcaecati. Laborum maxime minus quis molestias sequi officia saepe excepturi, assumenda eveniet, vel eos!</p>
              </div>
            </div>
          </section>

          <section className="px-48 mt-48">
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-5 justify-center">
                <h1 className="text-5xl">Manage your searches and <span className="bg-orange-50">notes</span> with ease.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio aut deserunt. Porro minima magnam assumenda nam ipsa, unde praesentium qui autem sint aliquam sunt consequuntur tempora voluptates maiores natus? Possimus, obcaecati. Laborum maxime minus quis molestias sequi officia saepe excepturi, assumenda eveniet, vel eos!</p>
              </div>
              <div className="flex justify-center items-center"> <img className=' shadow-2xl' src={section6Image} alt="section1Image" /></div>
            </div>
          </section>

          <section className="px-48 mt-48">
            <div className="flex justify-center mb-24">
              <h2 className="text-5xl text-center">Contextify Has The Ability to Serve <br /> <span className="bg-orange-50">Several Use Cases</span> </h2>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex p-5 bg-[#fff] gap-4 rounded-3xl shadow-2xl">
                <div className="h-12 w-12 bg-red-400 shrink-0 rounded-full" />
                <div className="text-wrap">
                  <h3 className="text-xl">Education System</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta sequi earum atque rerum ullam.</p>
                </div>
              </div>
              <div className="flex p-5 bg-[#fff] gap-4 rounded-3xl shadow-2xl">
                <div className="h-12 w-12 bg-red-400 shrink-0 rounded-full" />
                <div className="text-wrap">
                  <h3 className="text-xl">Education System</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta sequi earum atque rerum ullam.</p>
                </div>
              </div>
              <div className="flex p-5 bg-[#fff] gap-4 rounded-3xl shadow-2xl">
                <div className="h-12 w-12 bg-red-400 shrink-0 rounded-full" />
                <div className="text-wrap">
                  <h3 className="text-xl">Education System</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta sequi earum atque rerum ullam.</p>
                </div>
              </div>
              <div className="flex p-5 bg-[#fff] gap-4 rounded-3xl shadow-2xl">
                <div className="h-12 w-12 bg-red-400 shrink-0 rounded-full" />
                <div className="text-wrap">
                  <h3 className="text-xl">Education System</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta sequi earum atque rerum ullam.</p>
                </div>
              </div>
              <div className="flex p-5 bg-[#fff] gap-4 rounded-3xl shadow-2xl">
                <div className="h-12 w-12 bg-red-400 shrink-0 rounded-full" />
                <div className="text-wrap">
                  <h3 className="text-xl">Education System</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta sequi earum atque rerum ullam.</p>
                </div>
              </div>
              <div className="flex p-5 bg-[#fff] gap-4 rounded-3xl shadow-2xl">
                <div className="h-12 w-12 bg-red-400 shrink-0 rounded-full" />
                <div className="text-wrap">
                  <h3 className="text-xl">Education System</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta sequi earum atque rerum ullam.</p>
                </div>
              </div>

            </div>
          </section>

          <section className="px-48 mt-48">
            <div className="flex justify-center">
              <h2 className="text-5xl text-center">What our <span className="bg-orange-50">Client</span> Think <br />About US? </h2>
            </div>
            <div className="reviews w-full h-[1000px]">
              <div className="h-[700px] w-[700px] absolute border-8 border-purple-500 rounded-full m-auto left-0 right-0"></div>
              <div className="w-full flex justify-end" onClick={() => setSelected({ img: 'img_photo_1.png', description: 'I love using contextify for my context.', name: 'Walter White', title:'Developer'})}>
                <img className="border-4 border-purple-500 rounded-full p-1" src="images/img_photo_1.png" width={150} height={150} alt="" />
              </div>

              <div onClick={() => setSelected({ img: 'img_photo_2.png', description: 'I love using contextify for my context2.', name: 'Jhon Snow', title:'Tester'})}>
                <img className="border-4 border-purple-500 rounded-full p-1" src="images/img_photo_2.png" width={150} height={150} alt="" />
              </div>

              <div  className="w-full flex justify-center">
                <div className="flex flex-col items-center">
                <img className="border-4 border-purple-500 rounded-full p-1" src={`images/${selected.img}`} width={150} height={150} alt="" />
                <div className="bg-[#fff] p-2 text-center w-[500px] rounded-xl">
                  <p>{selected.description}</p>
                  <h3 className="text-xl mt-2 font-bold">{selected.name}</h3>
                  <h3 className="text-xl mt-2 font-bold">{selected.title}</h3>
                </div>
                </div>
              </div>

              <div onClick={()=> setSelected({ img: 'img_group_2.png', description: 'I love using contextify for my context3.', name: 'Tony Stark', title:'Iron Man'})} className="w-full flex justify-end">
                <img className="border-4 border-purple-500 rounded-full p-1" src="images/img_group_2.png" width={150} height={150} alt="" />
              </div>

              <div onClick={() => setSelected({ img: 'img_group_3.png', description: 'I love using contextify for my context4.', name: 'Steve Rogers', title:'Captain'})} className="w-full flex ">
                <img className="border-4 border-purple-500 rounded-full p-1" src="images/img_group_3.png" width={150} height={150} alt="" />
              </div>

              <div  onClick={() => setSelected({ img: 'img_photo_44x41.png', description: 'I love using contextify for my context5.', name: 'Robin Hood', title:'BDM'})}  className="w-full flex justify-center">
                <img className="border-4 border-purple-500 rounded-full p-1" src="images/img_photo_44x41.png" width={150} height={150} alt="" />
              </div>

            </div>
          </section>

          <section  className="mt-48">
            <FreeTrialArea />
          </section>

          <section className="mt-48">
            <Footer />
          </section>

          

        </div >
      </div >

    </>
  );
}
