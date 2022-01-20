/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const VignetteLookForN1 = () => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link
        href="https://www.manomano.fr/"
        passHref
        onClick={() => setIsClicked((isClicked) => !isClicked)}
      >
        <div className="vignette my-2 pb-2 pt-4 flex flex-col justify-between items-center rounded-xl">
          <img
            src="/ajouter-au-panier.png"
            alt="Category image"
            className="w-3/5"
          />
          <h1 className="font font-bold pb-2 text-center flex flex-col mt-1">
            Buy
          </h1>
        </div>
      </Link>
    </motion.button>
  );
};

export default VignetteLookForN1;
