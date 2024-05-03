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
      <div  >
        <Header className="w-[86%] md:w-full md:p-5" />
        <div className="self-stretch" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
          <div className="flex flex-col items-center" style={{width:"100%"}}>



            <div className="section1" style={{paddingTop:"20vh" , paddingBottom:"20px"}}>
              <Text style={{fontSize:"5vw" , textAlign:"center" , paddingBottom:"1vh"}} as="p" className="!text-gray-900">
                About Contextify
              </Text>
              <Text
              style={{fontSize:"3.5vw", textAlign:"center"}}
                as="p"
                className="mt-3.5 !text-gray-600_03 text-center"
              >
                Discover the Power of Contextify!
              </Text>
            </div>
            <div className="section2" style={{paddingBottom:"20px"}} >

              <div className="uifhn" style={{ width: "100%" }}>

                <div className="vygfsduhij" style={{ width: "60.41vw" }}>

                  <Img
                    src="images/img_photo.png"
                    alt="photo_one"
                    width="100%"
                  />
                </div>
                <div className="dcexvf" style={{ width: "34.66vw" }}>


                  <Img
                    src="images/img_photo_583x476.png"
                    alt="photo_three"
                    width="100%"
                  />
                </div>


              </div>

            </div>


            {/* <div className="section3" > */}
            <div className="flex justify-between md:flex-col sm:flex-col md:items-center " style={{paddingBottom:"20px"}} >

              <div style={{ width: "max-content" }}>

                <Heading size="10xl" as="h1" className="ddddoooo !text-gray-900 !font-nunito text-center md:w-full">
                  What we do
                </Heading>
              </div>


              <div className="scjxhjf" style={{ width: "60%" }} >
                <Text
                  size="11xl"
                  as="p"
                  className=" md:w-full ml-0 !text-gray-600_03 !font-nunito leading-[157.4%] sm:w-full"
                  style={{
                    display: "flex"
                  }}
                >
                  <>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using.
                    <br />
                    <br />
                    Content here&#39;, making it look like readable English.
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for &#39;lorem ipsum&#39; will uncover many web sites still
                    in their infancy.{" "}
                  </>
                </Text>





              </div>

            </div>


            <div className="section4"  style={{paddingBottom:"20px"}}>

              <div className="flex flex-col items-center w-full  md:w-full md:text-center ">
                <div className="h-12 w-52 md:w-[52%] bg-orange-50_01" />
                <div className="flex mt-[-42px]">
                  <div className="flex flex-col items-center" >
                    <Text size="19xl" as="p" className="capitalize">
                      Our Trusted Partners
                    </Text>
                  </div>
                </div>
              </div>

              {/* <div style={{ width: "100%", marginTop: "30px" }} > */}
     <div style={{width:"100%"}} >
  {/* <div className="grid grid-cols-5 md:grid-cols-6 md:gap-4 gap-4 justify-items-center md:w-full"> */}
  <div className="dsvhue" style={{display:"flex" ,justifyContent:"space-around", width:"100%" , }}>

    <img src={img2} alt="" width={"10%"} />
    <img src={img3} alt="" width={"10%"} />
    <img src={img4} alt="" width={"10%"} />
    <img src={img5} alt="" width={"10%"} />
    <img src={img6} alt="" width={"10%"} />
    <img src={img7} alt="" width={"10%"} />
    
    </div>

    <div  className="dsvhue" style={{display:"flex" ,justifyContent:"space-around", width:"100%"}}>

    <img src={img8} alt="" width={"10%"} />
    <img src={img9} alt="" width={"10%"} />
    <img src={img10} alt="" width={"10%"} />
    <img src={img11} alt="" width={"10%"} />
    <img src={img12} alt="" width={"10%"} />
    {/* <img src={img13} alt="" width={"20%"} /> */}
  
  </div>
</div>



            </div>




            {/* our missition */}
            <div  
              className="sdfg "
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "10vh",
                paddingBottom:"20px"
              }}
            >
              <div
                className="w-full "
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap:"20px",
                  justifyContent: "center",
                }}
              >
                <div className="flex md:flex-col justify-center items-center w-full mx-auto my-20 max-w-[1372px]">
                  <div className="flex flex-col items-start  md:w-full gap-5 md:items-center  rvfdv" style={{width:"50%"}}>
                    <Heading
                      size="10xl"
                      as="h1"
                      className="!text-gray-900 !font-nunito  md:items-center"
                    >
                      Our Mission
                    </Heading>
                    <Text
                      size="11xl"
                      as="p"
                      className="w-[100%] md:w-[80%]  md:ml-0 !text-gray-600_03 !font-nunito leading-[157.4%]"
                    >
                      <>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        Pharetra
                        <br />
                        Ld eu aliquet diam lorem viverra at justo. Nulla odio
                        nequefjf gravida in pharetra egestas. Ac id sagittis
                        at morbi interdum nibh diam sagittis et.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        Pharetra
                        <br /> id eu aliquet diam lorem viverra at justo.
                        Nulla odio nequesg gravida in pharetra egestas.
                      </>
                    </Text>
                  </div>
                  <div class="md:self-stretch md:ml-0 flex-1 flex flex-col items-center ml-[-4px] md:ml-0">
                    <div class="bg-gray-400_02 w-full  rounded-[60px] ghfgbhj" >
                      <Img
                        src="images/img_photo_378x760.png"
                        alt="photo_one"
                        class="h-[378px] w-full md:w-full h-auto object-cover rounded-[2vw]"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* our value */}

            {/* <Helmet>
              <title>Contextify</title>
              <meta
                name="description"
                content="Web site created using create-react-app"
              />
            </Helmet> */}


            <div className="section5" style={{paddingBottom:"20px"}} >

              <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <p style={{ background: "#EFECFF", padding: "20px 15px ", color: "#4B0082", borderRadius: "50px", fontWeight: "bold" }}>Our Value</p>
              </div>

              <div style={{ display: "flex", justifyContent: "center", width: "100%" }} >
                <p style={{ width: "70%", textAlign: "center", fontSize: "50px" }} className="text-l">The story and values behind our company</p>
              </div>

              <div style={{ display: "flex", justifyContent: "center", width: "100%" }} className="md:w-60 md:flex-col md:items-center chgf">
                <div className="hvgh" style={{ width: "40%" }}>
                  <img src={innovation} alt="" />
                  <img src={responsablity} alt="" />
                </div>
                <div className="hvgh" style={{ width: "40%" }}>
                  <img src={teamwork} alt="" />
                  <img src={excelence} alt="" />
                </div>

              </div>
            </div>


            <div className="section6" style={{ width: "100%" ,paddingBottom:"20px" }}>

              <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <p style={{ background: "#EFECFF", padding: "20px 15px ", color: "#4B0082", borderRadius: "50px", fontWeight: "bold" }}>Our Team</p>
              </div>

              <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <p style={{ width: "70%", textAlign: "center", fontSize: "4.166vw" }}>Meet the team behind Contextify!</p>
              </div>


              <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }} className="wkhc edkigf">

                <img src={c1} alt="" width={"28%"} />
                <img src={c2} alt="" width={"28%"} />
                <img src={c3} alt="" width={"28%"} />
              </div>
            </div>


            <div className="section7" style={{ width: "100%", display: "flex", justifyContent: "center" ,paddingBottom:"20px" }}>
              <div className="rpvfvd3" style={{ width:"90%", background: "linear-gradient(to bottom , #684FFF , #B871FE", borderRadius: "20px" , display:"flex" , justifyContent:'space-around' }}>

                <div className="fv5" style={{ width:"45%" , padding:"100px 60px "}}>
                  <div style={{display:"grid" , gap:"15px"}}>
                    <div style={{ width: "100%" , display:"grid" , gap:"30px"}}>

                      <h5 style={{fontSize:"35px"}}>Start your free trial today
                      </h5>
                      <p>It is a long established fact that a reader will be
                        by the readable when looking at it layout. </p>
                    </div>

                    <div style={{width:"100%" , display:"flex" ,gap:"5px", justifyContent:"space-between"}}>
                      <input style={{width:"78%" , background:"#ffffff7d" , borderRadius:"50px" , outline:""}}  placeholder="your mail here..." type="text" />
                      <button style={{width:"max-content" , color:"#5236FF" , background:"white" , padding:"10px 20px" , borderRadius:"50px"}}>Submit</button>
                    </div>
                  </div>
                </div>

                <div className="fv6" style={{ width: "45%" }}><img src={b1} alt="" /></div>

              </div>
            </div>
            {/* Team */}
            {/* <div className="Team"> */}

            <Footer />
            <Text className="self-start mt-[25px]" />
          </div>
        </div>
      </div>

    </>
  );
}
