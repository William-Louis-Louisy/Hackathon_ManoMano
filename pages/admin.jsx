import { useState } from "react";
import CreationCard from "../components/CreationCard";

const admin = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [filters, setFilters] = useState({});

  const creationJourney = [
    {
      questionNumber: 0,
      content: "What is the difficulty level for this project ?",
      type: "level",
    },
    {
      questionNumber: 1,
      content: "Where is the project located ?",
      type: "place",
    },
    {
      questionNumber: 2,
      content: "In which room(s) precisely ?",
      type: "room",
    },
    {
      questionNumber: 3,
      content: "What is the type of this project ?",
      type: "category",
    },
    {
      questionNumber: 4,
      content: "What equipment is needed for this project ?",
      type: "equipment",
    },
    {
      questionNumber: 5,
      content: "What products are needed for this project ?",
      type: "product",
    },
    {
      questionNumber: 6,
      content:
        "What is the budget for this project (tools and screws included)?",
      type: "price",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <h1>Let's create a new project !</h1>
      <CreationCard
        question={creationJourney[questionNumber]}
        filters={filters}
        setFilters={setFilters}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
      />
    </div>
  );
};

export default admin;
