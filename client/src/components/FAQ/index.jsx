import React, { useState } from "react";
import { Text } from "components";
import { IoIosArrowDropdownCircle } from "react-icons/io";
const FAQ = ({ question, answer, count }) => {
  const [toggle, settoggle] = useState(false);
  return (
    <div
      id="accordion-open"
      data-accordion="open"
      className="transition ease-in-out delay-150 text-xl bg-[#DBCCE6]"
    >
      <h2 id="accordion-open-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right textt-purple-500 border border-b-0 border-purple-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:textt-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          data-accordion-target="#accordion-open-body-1"
          aria-expanded="true"
          aria-controls="accordion-open-body-1"
          onClick={() => settoggle(!toggle)}
        >
          <span className="flex items-center">
            {/* <svg
              className="w-5 h-5 me-2 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              ></path>
            </svg>{" "} */}
            {count}
            {question}
          </span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      {toggle && (
        <div
          id="accordion-open-body-1"
          aria-labelledby="accordion-open-heading-1"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-700 dark:text-purple-700 text-sm">
              {answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQ;
