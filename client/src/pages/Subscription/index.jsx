import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";
export default function Subscription() {
  const [range, setRange] = useState(20);
  return (
    <div>
      <MainLayout active={4}>
        <div className="w-full text-3xl font-bold">Subscriptions</div>
        <div>See your current plan. Chose a plan to that will suit you.</div>
        <section className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 my-5 px-36 md:px-5">
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

          <div className="flex flex-col col-span-2 md:col-span-1 gap-16 text-center rounded-xl bg-purple-900 p-4 text-[#fff]">
            <div className="flex justify-between px-5">
              <h3 className="font-bold text-3xl">Custom</h3>
              <div className="bg-[#fff] rounded-full px-2 text-[#9b3ab4] text-center content-center">
                Popular
              </div>
            </div>
            <div>
              <label
                for="minmax-range"
                class="block text-lg font-bold text-gray-100 dark:text-white mb-3"
              >
                Price $ {range * 2}
              </label>
              <p>Tokens {range}</p>
            </div>
            <input
              id="minmax-range"
              type="range"
              min="20"
              max="300"
              step="10"
              value={range}
              onChange={(e) => setRange(e.target.value)}
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex flex-col gap-4">
              <p>15 credits</p>
              <p>Access to browser extension</p>
              <p>Access to audio + text search results</p>
              <p>User dashboard</p>
            </div>

            <div>
              <button className="text-purple-900 bg-[#fff] rounded-full px-4 py-2">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </MainLayout>
    </div>
  );
}
