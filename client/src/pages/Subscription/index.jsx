import React from "react";
import MainLayout from "../../components/MainLayout";
export default function Subscription() {
  return (
    <div>
      <MainLayout active={4}>
        <div className="w-full text-3xl font-bold">Subscriptions</div>
        <div>See your current plan. Chose a plan to that will suit you.</div>
        <section className="grid grid-cols-3 sm:grid-cols-1 gap-8 my-5 px-48">
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
      </MainLayout>
    </div>
  );
}
