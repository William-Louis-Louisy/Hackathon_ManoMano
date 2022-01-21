import React from "react";

function BackBtn() {
  return (
    <>
      <button className="flex flex-row cursor-pointer text-manoblue">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        BACK
      </button>
    </>
  );
}

export default BackBtn;
