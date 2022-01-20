/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

const VignetteAvanced = () => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <div
        className="vignette my-2 pb-2 pt-4 flex flex-col justify-between items-center rounded-xl"
        onClick={() => setIsClicked((isClicked) => !isClicked)}
      >
        <img
          src="/ajouter-au-panier.png"
          alt="Category image"
          className="w-3/5"
        />
        <h1 className="font font-bold pb-2 text-center flex flex-col mt-1">
          AVANCED
        </h1>
      </div>
    </motion.button>
  );
};

export default VignetteAvanced;
