import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const Budget = () => {
  return (
    <div className="flex flex-col justify-between items-center">
      <TextField
        id="outlined-number"
        label="Max"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        className="mt-10"
      />

      <TextField
        id="outlined-number"
        label="Min"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        className="mt-10"
      />

      <Button variant="text" className="mt-10">
        Validate
      </Button>
    </div>
  );
};

export default Budget;
