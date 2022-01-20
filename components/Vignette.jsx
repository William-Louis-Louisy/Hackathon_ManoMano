/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Vignette = ({
  picture,
  title,
  type,
  setFilters,
  setQuestionNumber,
  filters,
  questionNumber,
}) => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <div
        className="vignette my-2 pb-2 pt-4 flex flex-col justify-between items-center rounded-xl"
        onClick={() => {
          setFilters([
            ...filters,
            { ...filters[questionNumber], [`${type}`]: `${title}` },
          ]);
          const newQuestionNumber = questionNumber + 1;
          setQuestionNumber(newQuestionNumber);
        }}
      >
        {/* <h1 className="font font-bold">IMAGE</h1> */}
        <img src={picture} alt="Category image" className="w-3/5" />
        <h1 className="font font-bold pb-2 text-center flex flex-col mt-1">
          {title}
        </h1>
      </div>
    </motion.button>
  );
};

export default Vignette;
