import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaRegCheckCircle, FaBan } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import FreeTrialArea from "../../components/FreeTrialArea";

export default function PricingPage() {
  return (
    <div className=" sm:px-5 bg-[#f7f0fc]">
      <Helmet>
        <title>Contextify</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="mx-48">
        <Header />
      </div>
      <section className="px-48 sm:px-5 mt-48 text-center">
        <h1 className="text-6xl mb-3 ">Ready to Start Contextifying?</h1>
        <br/>
        <p className="text-3xl">
        Choose your tier and start contextifying today!
        </p>
      </section>

      <section className="grid grid-cols-3 sm:grid-cols-1 gap-8 mt-48 px-48">
        <div className="flex flex-col gap-16 text-center rounded-xl bg-violet-200 p-4">
          <div className="flex justify-between px-5">
            <h3 className="font-bold text-3xl">Free</h3>
           
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h2>
              <span className="text-3xl font-bold">$0</span> / month
            </h2>
            <div className="text-orange-500 bg-yellow-100 rounded-full p-2 px-4 w-fit">
              Billed as $0 per year
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p>15 credits</p>
            <p>Access to browser extension</p>
            <p>Access to audio + text search results</p>
            <p>User dashboard</p>
            
           
          </div>
          <div>
            <button className="bg-purple-900 text-[#fff] rounded-full px-4 py-2">
              Get Started
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-16 text-center rounded-xl bg-purple-900 p-4 text-[#fff]">
          <div className="flex justify-between px-5">
            <h3 className="font-bold text-3xl">Premium</h3>
            <div className="bg-[#fff] rounded-full px-2 text-[#9b3ab4] text-center content-center">
              Popular
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h2>
              <span className="text-3xl font-bold">$7.99</span> / month
            </h2>
            <div className="text-orange-500 bg-yellow-100 rounded-full p-2 px-4 w-fit">
              Billed as $96 per year
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p>45 Credits</p>
            <p>Everything in Basic</p>
            <p>Collaborations</p>
           
          </div>
          <div>
            <button className="text-purple-900 bg-[#fff] rounded-full px-4 py-2 mt-8">
              Get Started
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-16 text-center rounded-xl bg-violet-200 p-4">
          <div className="flex justify-between px-5">
            <h3 className="font-bold text-3xl">Executive</h3>
            
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h2>
              <span className="text-3xl font-bold">Custom</span>
            </h2>
            <h2>
              <span className="text-1xl font-bold">Tailored plan for your team’s unique needs.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            
            <p>Everything in Premium</p>
            <p>Dedicated Customer Support</p>
            <p>Data Backup</p>
            
          </div>
          <div>
            <button className="bg-purple-900 text-[#fff] rounded-full px-4 py-2">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="mt-48 px-48">
        <h2 className="text-3xl text-center">Compare pricing packages</h2>
        <div className="rounded-xl bg-purple-100 w-full">
          <table class="table-auto w-full">
            <thead className="py-5 border-b-2 border-gray-300">
              <tr className="text-start text-2xl my-5">
                <th className="py-10">Features</th>
                <th>Free</th>
                <th>Premium</th>
                <th>Executive</th>
              </tr>
            </thead>
            <tbody className="text-xl">
              <tr className="bg-purple-100">
                <td className="text-center py-6">General</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="bg-[#fff]">
                <td className="text-center py-6 ">Browser Extension</td>

                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="text-center py-6 ">Collaborations</td>

                <td>
                  <FaBan className="mx-auto" color={"red"} />
                </td>
                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
              </tr>
              <tr className="bg-[#fff]">
                <td className="text-center py-6 "> Dedicated Support</td>

                <td>
                  <FaBan className="mx-auto" color={"red"} />
                </td>
                <td>
                  <FaBan className="mx-auto" color={"red"} />
                </td>
                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
              </tr>

              {/* <tr className="bg-purple-100">
                <td className="text-center py-6">Analytics</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="bg-[#fff]">
                <td className="text-center py-6 ">Realtime analytics</td>

                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="text-center py-6 ">Realtime analytics</td>

                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
              </tr>
              <tr className="bg-[#fff]">
                <td className="text-center py-6 ">Realtime analytics</td>

                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
              </tr>

              <tr className="bg-purple-100">
                <td className="text-center py-6">Analytics</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="bg-[#fff]">
                <td className="text-center py-6 ">Realtime analytics</td>

                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="text-center py-6 ">Realtime analytics</td>

                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
              </tr>
              <tr className="bg-[#fff]">
                <td className="text-center py-6 ">Realtime analytics</td>

                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
                <td>
                  <FaRegCheckCircle className="mx-auto" color={"green"} />
                </td>
              </tr> */}
            </tbody>
            <tfoot className="py-5 border-b-2 border-gray-300">
              <tr className="text-start my-5">
                <th className="py-10"></th>
                <th>
                  <button className="p-3 rounded-full border-2 border-gray-400 text-white">
                    Get Started
                  </button>
                </th>
                <th>
                  <button className="p-3 rounded-full bg-purple-900 text-[#fff]">
                    Get Started
                  </button>
                </th>
                <th>
                  <button className="p-3 rounded-full border-2 border-gray-400 text-white">
                    Get Started
                  </button>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
      <FreeTrialArea />
      <Footer className="pb-24" />
    </div>
  );
}
