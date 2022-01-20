import Card from "@components/Card";
import CardLookingFor from "@components/CardLookingFor";
import CardShopping from "@components/CardShopping";
import Loading from "@components/Loading";
import WelcomeCard from "@components/WelcomeCard";
import Image from "next/image";
import { useState } from "react";

export default function IndexPage() {
  const [questionNumber, setQuestionNumber] = useState(3);
  const [filters, setFilters] = useState([{}, {}]);

  const userJourney = [
    {
      questionNumber: 0,
      content: "Would you like a personalized support ? ",
      type: "beginning",
    },
    {
      questionNumber: 1,
      content: "What are you looking for ?",
      type: "search",
    },
    {
      questionNumber: 2,
      content: "What is your level ?",
      type: "level",
    },
    {
      questionNumber: 3,
      content: "Where are the works located ?",
      type: "place",
    },
    {
      questionNumber: 4,
      content: "On which room are you going to work",
      type: "room",
    },
    {
      questionNumber: 5,
      content: "For what kind of works ?",
      type: "category",
    },
    {
      questionNumber: 6,
      content: "For what kind of equipment ?",
      type: "equipment",
    },
    {
      questionNumber: 7,
      content: "For what kind of product ?",
      type: "product",
    },
    {
      questionNumber: 8,
      content: "What is your budget (tools and screws include)?",
      type: "price",
    },
    {
      questionNumber: 9,
      content: "Which shape do you want ?",
      type: "shape",
    },
    {
      questionNumber: 10,
      content: "Which size do you need ?",
      type: "size",
    },
  ];

  console.log("question", userJourney[questionNumber]);
  console.log(filters);
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      {questionNumber >= 2 && questionNumber <= 10 ? (
        <Card
          question={userJourney[questionNumber]}
          filters={filters}
          setFilters={setFilters}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
      ) : questionNumber === 0 ? (
        <WelcomeCard setQuestionNumber={setQuestionNumber} />
      ) : questionNumber === 1 ? (
        <CardLookingFor setQuestionNumber={setQuestionNumber} />
      ) : (
        <div className="flex flex-col items-center justify-center space-y-12">
          <CardShopping
            setQuestionNumber={setQuestionNumber}
            question="Which product do you want?"
          />
        </div>
      )}
    </div>
  );
}
