import React, { useEffect, useState } from "react";
import Vignette from "./Vignette";
import axios from "axios";
import Budget from "./Budget";
import Shape from "./Shape";
import BackBtn from "./BackBtn";
import Loading from "./Loading";

import uniqid from "uniqid";

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
          params: { filters: filters[questionNumber-1] },
        }
      );
      const newVignettes = sortVignettes(res.data);
      setVignettes(newVignettes);
  }

  function sortVignettes(vignettes) {
    if (vignettes.length === 0) {
      return [{ [`${question.type}`]: "" }];
    }
    let typeAlreadyExist = [];
    let sortedVignettes = [];
    if (typeof vignettes[0][`${question.type}`] === "object") {
      vignettes.map((vignette) => {
        vignette[`${question.type}`].map((type) => {
          if (!typeAlreadyExist.includes(type)) {
            typeAlreadyExist.push(type);
          }
        });
      });
      sortedVignettes = typeAlreadyExist.map((type) => {
        return { [`${question.type}`]: type };
      });
    } else {
      sortedVignettes = vignettes.filter((vignette) => {
        if (!typeAlreadyExist.includes(vignette[`${question.type}`])) {
          typeAlreadyExist.push(vignette[`${question.type}`]);
          return vignette;
        }
      });
    }
    return sortedVignettes;
  }

  useEffect(() => {
    if (questionNumber >= 2) {
      getData();
    }
  }, [questionNumber]);

  if (!vignettes) {
    return <Loading />;
  }
  return (
    <div className="card flex flex-col items-center rounded-2xl pb-12 lg:w-4/5 lg:gap-10 lg:pb-24">
      <span className="flex flex-row justify-between w-full mx-4 mt-4">
        <div
          onClick={() => {
            const newFilters = filters.filter(
              (f, i) => i !== filters.length - 1
            );
            setFilters(newFilters);
            const newQuestionNumber = questionNumber - 1;
            setQuestionNumber(newQuestionNumber);
          }}
        >
          <BackBtn />
        </div>
        <a href="https://www.manomano.fr/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-manoblue"
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
      </span>
      <h2 className="my-12 mx-6 text-center text-2xl font font-bold">
        {question.content}
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 w-auto pt-10 lg:flex-wrap">
        {vignettes.map((vignette) => {
          return (
              <Vignette
                key={uniqid()}
                name={vignette[`${question.type}`]}
                type={question.type}
                filters={filters}
                setFilters={setFilters}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
          );
        })}
      </div>
    </div>
  );
};

export default Card;
