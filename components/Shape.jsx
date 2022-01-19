import React, { useState } from "react";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";

const Shape = () => {
  const [labels, setLabels] = useState([
    { name: "Rectangular", number: "30" },
    { name: "Oval", number: "30" },
    { name: "Rouded", number: "30" },
  ]);

  return (
    <div className="flex flex-col justify-between  gap-10 h-auto mt-14">
      {labels.map((label) => {
        return (
          <>
            <div className="flex items-center">
              <FormControlLabel control={<Checkbox />} label={label.name} />
              <p className="text-xs font-light">{label.number}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Shape;
