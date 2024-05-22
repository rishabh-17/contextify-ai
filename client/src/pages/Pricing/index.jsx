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
    <div className=" px-48 sm:px-5">
      <Helmet>
        <title>Contextify</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <Header />
      <section className=" px-48 sm:px-5 mt-48 text-center">
        <h1 className="text-7xl mb-5">Pricing</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
          ullamcorper sed pharetra sene.
        </p>
      </section>

      <section className="grid grid-cols-3 gap-8 mt-48">
        <div className="flex flex-col gap-16 text-center rounded-xl bg-violet-200 p-4">
          <div className="flex justify-between px-5">
            <h3 className="font-bold text-3xl">Basic</h3>
            <div className="bg-[#fff] rounded-full px-2 text-center content-center">
              Save 30%
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
            <p>Unlimited members</p>
            <p>Unlimited feedback</p>
            <p>Weekly team Feedback Friday</p>
            <p>Custom Kudos +9 illustration</p>
            <p>Team feedback history</p>
          </div>
          <div>
            <button className="bg-purple-900 text-[#fff] rounded-full px-4 py-2">
              Get Started
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-16 text-center rounded-xl bg-purple-900 p-4 text-[#fff]">
          <div className="flex justify-between px-5">
            <h3 className="font-bold text-3xl">Basic</h3>
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
            <p>Unlimited members</p>
            <p>Unlimited feedback</p>
            <p>Weekly team Feedback Friday</p>
            <p>Custom Kudos +9 illustration</p>
            <p>Team feedback history</p>
          </div>
          <div>
            <button className="text-purple-900 bg-[#fff] rounded-full px-4 py-2">
              Get Started
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-16 text-center rounded-xl bg-violet-200 p-4">
          <div className="flex justify-between px-5">
            <h3 className="font-bold text-3xl">Basic</h3>
            <div className="bg-[#fff] rounded-full px-2 text-center content-center">
              Save 30%
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
            <p>Unlimited members</p>
            <p>Unlimited feedback</p>
            <p>Weekly team Feedback Friday</p>
            <p>Custom Kudos +9 illustration</p>
            <p>Team feedback history</p>
          </div>
          <div>
            <button className="bg-purple-900 text-[#fff] rounded-full px-4 py-2">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="mt-48">
        <h2 className="text-3xl text-center">Compare pricing packages</h2>
        <div className="rounded-xl bg-purple-100 w-full">
          <table class="table-auto w-full">
            <thead className="py-5 border-b-2 border-gray-300">
              <tr className="text-start text-2xl my-5">
                <th className="py-10">Features</th>
                <th>Basic</th>
                <th>Adv</th>
                <th>Pro</th>
              </tr>
            </thead>
            <tbody className="text-xl">
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
                  <FaBan className="mx-auto" color={"red"} />
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="text-center py-6 ">Realtime analytics</td>

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
              </tr>
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
      <Footer />
    </div>
  );
}
