/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

const VignetteLookForN2 = () => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <div className="vignette shadow-lg border-2 border-logofirst my-2 pb-2 pt-4 flex flex-col justify-between items-center rounded-xl bg-gradient-to-tr from-manowhite to-manowhite hover:from-logofirst hover:to-logosecond hover:border-2 hover:border-manoblue ease-in-out duration-150">
        <img src="/charpentier.png" alt="Category image" className="w-3/5" />
        <h1 className="font font-bold pb-2 text-center flex flex-col mt-1">
          WORKS
        </h1>
      </div>
    </motion.button>
  );
};

export default VignetteLookForN2;
