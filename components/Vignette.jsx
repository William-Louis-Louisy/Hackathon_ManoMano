/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const Vignette = ({ picture, title }) => {
  return (
    <div className="vignette my-2 pb-2 pt-4 flex flex-col justify-between items-center rounded-xl">
      {/* <h1 className="font font-bold">IMAGE</h1> */}
      <img src={picture} alt="Category image" className="w-3/5" />
      <h1 className="font font-bold pb-2 text-center flex flex-col mt-1">{title}</h1>
    </div>
  );
};

export default Vignette;
