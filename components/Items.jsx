import React from "react";
import Image from "next/image";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Items = ({ name, img }) => {
  return (
    <div className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-14 w-auto mt-5 items-center">
      <Image
        src={img}
        width={25}
        height={25}
        layout="responsive"
        priority
        alt="ManoMano logo"
      />
      <h2 className="text-xl">{name}</h2>
      <DeleteForeverIcon sx={{ fontSize: 30 }} />
    </div>
  );
};

export default Items;
