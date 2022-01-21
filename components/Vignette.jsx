/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import axios from "axios";

const Vignette = ({ name, type, setFilters, setQuestionNumber, filters, questionNumber }) => {
  const [imgUrl, setImgUrl] = useState("");
  async function getImage() {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/images`,
      {
        params: { filters: { type: type, name: name } },
      }
    );
    setImgUrl(res.data[0]?.imgUrl);
  }

  useEffect(() => {
    getImage();
  }, [questionNumber]);
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <div
        className="vignette shadow-lg border-2 border-logofirst my-2 pb-2 pt-4 flex flex-col justify-between items-center rounded-xl bg-gradient-to-tr from-manowhite to-manowhite hover:from-logofirst hover:to-logosecond hover:border-2 hover:border-manoblue ease-in-out duration-150"
        onClick={() => {
          setFilters([
            ...filters,
            { ...filters[questionNumber - 1], [`${type}`]: `${name}` },
          ]);
          const newQuestionNumber = questionNumber + 1;
          setQuestionNumber(newQuestionNumber);
        }}
      >
        {/* <h1 className="font font-bold">IMAGE</h1> */}
        <img src={imgUrl} alt="Category image" className="w-3/5" />
        <h1 className="font font-bold pb-2 text-center flex flex-col mt-1">
          {typeof name === "string" ? name.toUpperCase() : name}
        </h1>
      </div>
    </motion.button>
  );
};

export default Vignette;
