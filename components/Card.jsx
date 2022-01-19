import React, { useEffect, useState } from "react";
import Vignette from "./Vignette";
import axios from "axios";

const Card = ({
  question,
  filters,
  setFilters,
  questionNumber,
  setQuestionNumber,
}) => {
  const [vignettes, setVignettes] = useState();

  async function getData() {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/works`,
      {
        params: {filters: filters}
      }
    );
    setVignettes(res.data);
  }

  useEffect(() => {
    getData();
  }, [questionNumber]);

  if (!vignettes) {
    return "Loading...";
  }

  console.log("vignettes : ", vignettes);
  return (
    <div className="card flex flex-col items-center rounded-2xl">
      <a href="https://www.manomano.fr/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 relative left-32 mt-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </a>
      <h2 className="mt-4 text-center text-xl font font-bold">
        {question.content}
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 w-auto pt-10 overflow-hidden ">
        {vignettes.map((vignette) => {
          return (
            <>
              <Vignette
                picture={vignette.picture}
                title={vignette[`${question.type}`]}
                type={question.type}
                filters={filters}
                setFilters={setFilters}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
