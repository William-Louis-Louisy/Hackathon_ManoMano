import React from "react";
import Vignette from "./Vignette";
import CancelIcon from "@mui/icons-material/Cancel";

const Card = () => {
  return (
    <div className="card flex flex-col flex-nowrap items-center">
      <CancelIcon className="relative left-32 mt-2" sx={{ fontSize: 30 }} />
      <h2 className="pt-10 font font-bold">Question ?</h2>

      <div className="grid overflow-hidden grid-cols-2 grid-rows-2 gap-4 w-auto pt-10">
        <Vignette />
        <Vignette />
        <Vignette />
        <Vignette />
      </div>
    </div>
  );
};

export default Card;
