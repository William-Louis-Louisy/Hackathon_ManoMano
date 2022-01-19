import React from "react";
import Image from "next/dist/client/image";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Items = () => {
  const [items, SetItems] = [
    { img: "../public/home.png", name: "Tourne-vis" },
    { img: "../public/home.png", name: "Perceuse" },
    { img: "../public/home.png", name: "Marteau" },
  ];

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.name}
            className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-14 w-auto mt-5 items-center"
          >
            <Image
              src={item.img}
              width={25}
              height={25}
              layout="responsive"
              priority
              alt="ManoMano logo"
            />
            <h2 className="text-xl">{item.name}</h2>
            <DeleteForeverIcon sx={{ fontSize: 30 }} />
          </div>
        );
      })}
    </div>
  );
};

export default Items;
