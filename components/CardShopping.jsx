import React, { useEffect, useState } from "react";
import BackBtn from "./BackBtn";
import ProductCard from "./ProductCard";
import style from "../css/Slider.module.css";
import axios from "axios";
import Loading from "./Loading";

function CardShopping({ question, filters, setQuestionNumber }) {

  const [products, setProducts] = useState();
  const [works, setWorks] = useState();
  
  async function getWorks(){
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/works`,
      {
        params: { filters: filters[filters.length -2] },
      }
    );
    setWorks(res.data);
  }

  async function getProducts(){
    const list  = works[0].toolList.concat(works[0].rawMaterialList);
    console.log("list: ", list);
    const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/products`,
    {
      params: { list: {list} },
    }
  );
  setProducts(res.data);
  }

  useEffect(() => {
    getWorks();
  }, [])

  useEffect(() => {
    if(works){
      if(works.length !==0){
        getProducts()
      }
    }
  }, [works])
  
  console.log("products : ", products)
  const items = [
    { img: "/dark-light.jpg", name: "Dark Ligth Mirror", price: 35 },
    { img: "/dark-light.jpg", name: "Dark Ligth Mirror", price: 22 },
    { img: "/dark-light.jpg", name: "Dark Ligth Mirror", price: 149 },
    { img: "/dark-light.jpg", name: "Dark Ligth Mirror", price: 44 },
    { img: "/dark-light.jpg", name: "Dark Ligth Mirror", price: 59 },
  ];

  if(!products){
    return <Loading/>
  }

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
            {products.map((product) => {
              return (
                <>
                  <ProductCard
                    url={product.url}
                    name={product.name}
                    price={product.price}
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
