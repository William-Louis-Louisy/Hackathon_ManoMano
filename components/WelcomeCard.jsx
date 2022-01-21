/* eslint-disable @next/next/no-img-element */
import React from "react";
import BackBtn from "./BackBtn";
import Btn from "./Btn";

function WelcomeCard({ question, setQuestionNumber }) {
  return (
    <>
      <div className="card flex flex-col pb-12 items-center rounded-2xl lg:w-4/5 lg:pb-24 shadow-xl">
        <span className="flex flex-row justify-between w-full mx-4 mt-4">
          <div
            onClick={() => {
              const newFilters = filters.filter(
                (f, i) => i !== filters.length - 1
              );
              setFilters(newFilters);
              const newQuestionNumber = questionNumber - 1;
              setQuestionNumber(newQuestionNumber);
            }}
          >
            <BackBtn />
          </div>
          <a href="https://www.manomano.fr/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-4 text-manoblue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
        </span>
        <h1 className="mt-6 text-center text-4xl lg:text-6xl font font-bold">
          Welcome to
        </h1>
        <img src="/mano.png" alt="Logo" className="w-4/5 lg:w-3/5" />
        <h2 className="mt-12 mx-6 text-center text-2xl lg:text-4xl font font-bold">
          {question}
        </h2>

        <span className="flex flex-row gap-6 mt-8 lg:mt-10">
          <div onClick={() => setQuestionNumber(1)}>
            <Btn content="YES" />
          </div>
          <a href="https://www.manomano.fr/">
            <Btn content="NO" />
          </a>
        </span>

        {/* <div className="flex flex-wrap justify-center items-center gap-4 w-auto pt-10 overflow-hidden "></div> */}
      </div>
    </>
  );
}

export default WelcomeCard;
