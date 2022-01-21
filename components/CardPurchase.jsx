import React from "react";
import BackBtn from "./BackBtn";
import Items from "./Items";
import style from "../css/Slider.module.css";

const CardPurchase = () => {
  const items = [
    { img: "/home.png", name: "Tourne-vis", price: 35 },
    { img: "/home.png", name: "Perceuse", price: 22 },
    { img: "/home.png", name: "Marteau", price: 33 },
    { img: "/home.png", name: "Marteau", price: 33 },
    { img: "/home.png", name: "Marteau", price: 33 },
  ];

  return (
    <div className="card flex flex-col items-center rounded-2xl shadow-xl lg:w-4/5 lg:gap-10 pb-6">
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
        For this products <br />
        you may need :
      </h2>
      <div className={style.wrapper + " wrapper"}>
        <div className={style.slider}>
          {items.map((item) => {
            return (
              <>
                <Items name={item.name} img={item.img} />
              </>
            );
          })}
        </div>
      </div>
      <h3 className="text-2xl font w-full text-right px-6 pb-2 ">
        Total ={" "}
        {Object.keys(items).reduce(function (previous, key) {
          return previous + items[key].price;
        }, 0)}{" "}
        €
      </h3>
    </div>
  );
};

export default CardPurchase;
