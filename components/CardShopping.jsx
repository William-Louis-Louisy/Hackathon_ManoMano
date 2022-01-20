import React from "react";
import BackBtn from "./BackBtn";
import ProductCard from "./ProductCard";

function CardShopping({ question }) {
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

      <div className=" flex flex-col items-center ">
        <h2 className="my-12 mx-6 text-center text-2xl font font-bold">
          {question}
        </h2>
        <ProductCard
          url="/dark-light.jpg"
          name="Dark Light Mirror"
          price="49€"
        />
        <ProductCard
          url="/dark-light.jpg"
          name="Dark Light Mirror"
          price="49€"
        />
        <ProductCard
          url="/dark-light.jpg"
          name="Dark Light Mirror"
          price="49€"
        />
        <ProductCard
          url="/dark-light.jpg"
          name="Dark Light Mirror"
          price="49€"
        />
      </div>
    </div>
  );
}

export default CardShopping;
