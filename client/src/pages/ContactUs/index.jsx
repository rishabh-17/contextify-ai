import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img, Heading, Input, FAQ } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactUsPage() {
  // const { formData, setFormData } = useState({
  //   fullname: "",
  //   email: "",
  //   company: "",
  //   subject: "",
  //   message: ""
  // })

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  // const handleDivClick = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const respose = await fetch('http://localhost:5173/submit-form', {
  //       method: 'POST',
  //       headter: {
  //         'Contect-type': 'application/json'
  //       },
  //       body: JSON.stringify(formData)
  //     });
  //     if (respose.pf) {
  //       console.log('Form Submited successfull !');
  //       console.log('Submitted data:', formData);
  //       setFormData({
  //         name: '',
  //         email: '',
  //         company: '',
  //         subject: '',
  //         message: '',
  //       })
  //     } else {
  //       console.log('Something Wrong!');
  //     }
  //   } catch (error) {
  //     console.log('error submition form', error);
  //   }
  // }

  return (
    <>
      <Helmet>
        <title>Contextify</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div>
        <Header />
        <section className="my-48 text-center  mx-48 sm:mx-5">
          <h1 className="text-7xl mb-8">Get in touch today!</h1>
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 justify-center px-24">
            <div className="bg-[#fff] rounded-xl p-4 shadow-md flex items-center mx-3">
              <div className="bg-purple-400 rounded-xl p-4 w-24">
                <Img
                  src="images/img_icon.svg"
                  // src="images/img_frame_purple_900.svg"
                  alt="image"
                  className="my-0 pb-0 h-[60px]"
                />
              </div>
              <div className="flex justify-between w-full px-3">
                <p>Mail Us</p>
                <p>connect@contextify.info</p>
              </div>
            </div>
            <div className="bg-[#fff] rounded-xl p-4 shadow-md flex items-center mx-3">
              <div className="bg-purple-A100 rounded-xl p-4 w-24 ">
                <Img
                  src="images/img_iocn.svg"
                  // src="images/img_frame_purple_900.svg"
                  alt="image"
                  className="my-0 pb-0 h-[60px]"
                />
              </div>
              <div className="flex justify-between w-full px-3">
                <p>Call Us</p>
                <p>+1 234 6787 75557 </p>
              </div>
            </div>
          </div>
        </section>
        <form action="" className="bg-gray-100  mx-48 sm:mx-5 p-24 rounded-xl ">
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col gap-2 mb-5">
              <label htmlFor="">First Name</label>
              <input className="w-full rounded-xl p-3" type="text" />
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <label htmlFor="">First Name</label>
              <input className="w-full rounded-xl p-3" type="text" />
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <label htmlFor="">First Name</label>
              <input className="w-full rounded-xl p-3" type="text" />
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <label htmlFor="">First Name</label>
              <input className="w-full rounded-xl p-3" type="text" />
            </div>
          </div>
          <label htmlFor="">Message</label>
          <textarea
            name=""
            id=""
            className="block w-full rounded-xl"
            rows={12}
          ></textarea>
          <div className="flex justify-center my-5">
            <button className="mt-8 bg-purple-900 text-[#fff] rounded-xl p-3 px-8">
              Send Message
            </button>
          </div>
        </form>
        <section className="mx-48 my-24">
          <FAQ
            question={" Where is my order? Quisque molestie "}
            answer={" Your answer for Where is my order?"}
          />
          <FAQ
            question={" How can I return an item purchased online? "}
            answer={"Your answer for Where is my order?"}
          />
          <FAQ
            question={" Can I cancel or change my order?"}
            answer={" Your answer for Where is my order?"}
          />
          <FAQ
            question={" I have a promotional or discount code? "}
            answer={" Your answer for Where is my order?"}
          />
          <FAQ
            question={" Can I integrate my store with Facebook?"}
            answer={" Your answer for Where is my order?"}
          />
        </section>
        <Footer />
      </div>
    </>
  );
}
