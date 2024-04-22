import React from "react";
import MainLayout from "../../components/MainLayout";
export default function Subscription() {
  return (
    <div>
      <MainLayout active={4}>
        <div className="w-full text-3xl">Subscriptions</div>
        <div>See your current plan. Chose a plan to that will suit you.</div>
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-center my-4">
          <div
            id="card"
            className="w-[80%] md:w-[90%] h-[500px] bg-[#fff] rounded-xl hover:bg-purple-900 hover:text-[#fff] p-4"
          >
            <div className="flex gap-4 my-4">
              <img src="" alt="basic" />
              <div>
                <p>For Individual</p>
                <h2 className="font-bold text-xl">Basic</h2>
              </div>
            </div>
            <p className="mb-16">
              Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
              elit.{" "}
            </p>
            <div className="mb-10">
              <p>What’s included</p>
              <ul>
                <li>All analytics features</li>
                <li>Up to 250,000 tracked visits</li>
                <li>Normal support</li>
                <li>Up to 3 team members</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <button className="text-[#fff] px-8 py-3 font-bold border border-[#fff] bg-purple-900 rounded ">
                Get Premium
              </button>
            </div>
          </div>
          <div
            id="card"
            className="w-[80%] md:w-[90%] h-[500px] bg-[#fff] rounded-xl hover:bg-purple-900 hover:text-[#fff] p-4"
          >
            <div className="flex gap-4 my-4">
              <img src="" alt="basic" />
              <div>
                <p>For Individual</p>
                <h2 className="font-bold text-xl">Basic</h2>
              </div>
            </div>
            <p className="mb-16">
              Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
              elit.{" "}
            </p>
            <div className="mb-10">
              <p>What’s included</p>
              <ul>
                <li>All analytics features</li>
                <li>Up to 250,000 tracked visits</li>
                <li>Normal support</li>
                <li>Up to 3 team members</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <button className="text-[#fff] px-8 py-3 font-bold border border-[#fff] bg-purple-900 rounded ">
                Get Premium
              </button>
            </div>
          </div>
          <div
            id="card"
            className="w-[80%] md:w-[90%] h-[500px] bg-[#fff] rounded-xl hover:bg-purple-900 hover:text-[#fff] p-4"
          >
            <div className="flex gap-4 my-4">
              <img src="" alt="basic" />
              <div>
                <p>For Individual</p>
                <h2 className="font-bold text-xl">Basic</h2>
              </div>
            </div>
            <p className="mb-16">
              Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
              elit.{" "}
            </p>
            <div className="mb-10">
              <p>What’s included</p>
              <ul>
                <li>All analytics features</li>
                <li>Up to 250,000 tracked visits</li>
                <li>Normal support</li>
                <li>Up to 3 team members</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <button className="text-[#fff] px-8 py-3 font-bold border border-[#fff] bg-purple-900 rounded ">
                Get Premium
              </button>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
