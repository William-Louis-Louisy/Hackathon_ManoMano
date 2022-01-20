import React from "react";
import BackBtn from "./BackBtn";
import VignetteAvanced from "./VignetteAvanced";
import VignetteNoob from "./VignetteNoob";

const CardLvl = () => {
  return (
    <div className="card flex flex-col items-center rounded-2xl">
      <span className="flex flex-row justify-between w-full mx-4 mt-4">
        <BackBtn />
        <a href="https://www.manomano.fr/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-manoblue"
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
      <h2 className="mt-4 text-center text-xl font font-bold">
        What you are looking for ?
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 w-auto pt-10 mt-10">
        <VignetteNoob />
        <VignetteAvanced />
      </div>
    </div>
  );
};

export default CardLvl;
