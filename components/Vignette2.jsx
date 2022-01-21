import React from "react";
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
        className="vignette shadow-lg border-2 border-logofirst my-2 pb-2 pt-4 flex flex-col justify-between items-center rounded-xl bg-gradient-to-tr from-manowhite to-manowhite hover:from-logofirst hover:to-logosecond hover:border-2 hover:border-manoblue ease-in-out duration-150"
        onClick={() => {
          setFilters([
            ...filters,
            { ...filters[questionNumber], [`${type}`]: `${title}` },
          ]);
          setQuestionNumber(questionNumber + 1);
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
