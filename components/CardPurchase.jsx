import React from "react";
import Items from "./Items";

const CardPurchase = () => {
  const items = [
    { img: "/home.png", name: "Tourne-vis" },
    { img: "/home.png", name: "Perceuse" },
    { img: "/home.png", name: "Marteau" },
  ];

  return (
    <div className="card flex flex-col items-center rounded-2xl">
      <a href="https://www.manomano.fr/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 relative left-32 mt-2"
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
      <h2 className="mt-4 text-center text-xl font font-bold">
        For this products <br />
        you maybe need :
      </h2>
      {items.map((item) => {
        return (
          <>
            <Items name={item.name} img={item.img} />
          </>
        );
      })}
    </div>
  );
};

export default CardPurchase;
