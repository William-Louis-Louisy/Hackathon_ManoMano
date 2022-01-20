import React, { useEffect, useState } from "react";
import BackBtn from "./BackBtn";
import ProductCard from "./ProductCard";
import style from "../css/Slider.module.css";
import axios from "axios";

function CardShopping({ question, filters, setQuestionNumber }) {

  const [products, setProducts] = useState();
  const [works, setWorks] = useState();
  
  async function getWorks(){
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/works`,
      {
        params: { filters: filters[filters.length -1] },
      }
    );
    setWorks(res.data);
  }

  useEffect(() => {
    getWorks();
  }, [])
  
  console.log("works from shopping: ", works);
  console.log(filters[filters.length -1]);
  const items = [
    { img: "/dark-light.jpg", name: "Dark Ligth Mirror", price: 35 },
    { img: "/dark-light.jpg", name: "Dark Ligth Mirror", price: 22 },
    { img: "/dark-light.jpg", name: "Dark Ligth Mirror", price: 149 },
    { img: "/dark-light.jpg", name: "Dark Ligth Mirror", price: 44 },
    { img: "/dark-light.jpg", name: "Dark Ligth Mirror", price: 59 },
  ];

  return (
    <div className="card flex flex-col items-center rounded-2xl  lg:w-4/5 lg:gap-10 pb-6">
      <span className="flex flex-row justify-between w-full mx-4 mt-4">
        <div onClick={() => setQuestionNumber(8)}><BackBtn /></div>
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

        <div className={style.wrapper + " wrapper  lg:flex-wrap"}>
          <div className={style.slider}>
            {items.map((item) => {
              return (
                <>
                  <ProductCard
                    url={item.img}
                    name={item.name}
                    price={item.price}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardShopping;
