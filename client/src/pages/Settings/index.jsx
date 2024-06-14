import React, { useState, useEffect } from "react";
import { FaGears } from "react-icons/fa6";
import MainLayout from "../../components/MainLayout";

export default function Settings() {
  const [tab, setTab] = useState(1);
  const [voiceType, setVoiceType] = useState(
    localStorage.getItem("voiceType") || ""
  );

  const handleVoiceChange = (event) => {
    setVoiceType(event.target.value);
    console.log(event.target.value);
    localStorage.setItem("voiceType", event.target.value);
  };

  const [voices, setVoices] = useState([]);

  const customNames = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Eve",
    "Frank",
    "Grace",
    "Hank",
    "Ivy",
    "Jack",
    // Add more names if needed
  ];

  const fetchVoices = async () => {
    const voices = speechSynthesis.getVoices();
    setVoices(voices);
    console.log(voices);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchVoices();
    }, 2000);
  }, []);

  return (
    <MainLayout>
      <div className="min-h-screen">
        <div className="w-full mx-auto bg-[#fff] p-5 min-h-screen shadow-md rounded">
          <div className="flex items-center gap-4">
            <FaGears className="w-16 h-16" color="purple" />
            <h1 className="text-3xl font-bold mb-4">Settings</h1>
          </div>

          <ul className="flex gap-5 justify-center text-md">
            <li
              className={`${
                tab === 1
                  ? "text-violet-900 underline underline-offset-8"
                  : "text-gray-500"
              } font-semibold text-md cursor-pointer`}
              onClick={() => setTab(1)}
            >
              Account
            </li>

            <li
              className={`${
                tab === 2
                  ? "text-violet-900 underline underline-offset-8"
                  : "text-gray-500"
              } font-semibold text-md cursor-pointer`}
              onClick={() => setTab(2)}
            >
              Notifications
            </li>
            <li
              className={`${
                tab === 3
                  ? "text-violet-900 underline underline-offset-8"
                  : "text-gray-500"
              } font-semibold text-md cursor-pointer`}
              onClick={() => setTab(3)}
            >
              Payment History
            </li>

            <li
              className={`${
                tab === 4
                  ? "text-violet-900 underline underline-offset-8"
                  : "text-gray-500"
              } font-semibold text-md cursor-pointer`}
              onClick={() => setTab(4)}
            >
              Help
            </li>
          </ul>
          <hr className="mb-8 mt-4" />
          {tab === 1 && (
            <section>
              <label
                className="block mb-2 text-xl font-bold"
                htmlFor="voiceType"
              >
                Select Voice:
              </label>
              <select
                className="block w-full p-2 border border-gray-300 rounded"
                id="voiceType"
                value={voiceType}
                onChange={handleVoiceChange}
              >
                {voices?.map((voice, i) => (
                  <option key={voice.voiceURI} value={i}>
                    {customNames[i] || voice.name}
                  </option>
                ))}
              </select>
            </section>
          )}

          {tab === 2 && (
            <section>
              <h4 className="text-xl font-bold mb-4">Notifications</h4>
              <div
                className="
              flex items-center mb-4 justify-between"
              >
                <p>Allow Notifications</p>
                <label class="inline-flex items-center me-5 cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-[#fff] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                </label>
              </div>
              <div className="flex items-center mb-4 justify-between">
                <p>Allow Email Notifications</p>
                <label class="inline-flex items-center me-5 cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    class="sr-only peer"
                    disabled
                  />
                  <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                </label>
              </div>
            </section>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
