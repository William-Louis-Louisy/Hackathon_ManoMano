import React from "react";
import Image from "next/image";

const Vignette = () => {
  return (
    <div className="vignette flex flex-col justify-between items-center">
      <h1 className="font font-bold">IMAGE</h1>
      <h1 className="font font-bold pb-2">NAME</h1>
    </div>
  );
};

export default Vignette;
