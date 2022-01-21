import Budget from "@components/Budget";
import CardLookingFor from "@components/CardLookingFor";
import CardShopping from "@components/CardShopping";
import React from "react";

const Results = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <CardShopping question="Which product do you want?" />
    </div>
  );
};

export default Results;
