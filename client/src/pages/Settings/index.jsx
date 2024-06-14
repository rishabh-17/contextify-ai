import React, { useState, useEffect } from "react";

export default function Settings() {
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
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Settings</h1>

        <label className="block mb-2" htmlFor="voiceType">
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
      </div>
    </div>
  );
}
