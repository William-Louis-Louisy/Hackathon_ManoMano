import React, { useState } from "react";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";

const Shape = () => {
  const [label, setLabel] = useState("");
  const labels = () => {
    label = { label: "Rectangular", label: "Oval", label: "Round" };
  };
  return (
    <div className="flex flex-col justify-between items-center h-auto gap-8 mt-14">
      <FormControlLabel control={<Checkbox />} label="Label" />
      <FormControlLabel control={<Checkbox />} label="Label" />
      <FormControlLabel control={<Checkbox />} label="Label" />
    </div>
  );
};

export default Shape;
