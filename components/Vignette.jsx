import React from "react";
import Image from "next/image";

const Vignette = () => {
  return (
    <div className="vignette flex flex-col justify-between items-center">
      <div className="mt-6">
        <Image
          src="/Icon-test.png"
          width={70}
          height={70}
          priority
          alt="ManoMano logo"
        />
      </div>
      <h1 className="font font-bold pb-2">NAME</h1>
    </div>
  );
};

export default Vignette;
