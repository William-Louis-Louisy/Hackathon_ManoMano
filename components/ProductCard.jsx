/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

function ProductCard({ url, name, price }) {
  return (
    <div className="w-full shadow-lg hover:scale-110 ease-in-out duration-200">
      <div className="flex font-sans">
        <div className="flex-none w-24 relative">
          <img
            src={url}
            alt=""
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
        <form className="flex-auto p-2">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-lg font-semibold text-slate-900">
              {name}
            </h1>
            <div className="text-lg font-semibold text-manoblue">{price} €</div>
            <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
              In stock
            </div>
          </div>

          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <div className="flex-row flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <button
                  className="h-10 px-6 font-semibold rounded-md bg-gradient-to-r from-manoblue to-manoblue w-20 text-manowhite hover:from-logofirst hover:to-logosecond flex flex-row items-center justify-center"
                  type="submit"
                >
                  BUY
                </button>
              </motion.button>
            </div>
            <button
              className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300"
              type="button"
              aria-label="Like"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductCard;
