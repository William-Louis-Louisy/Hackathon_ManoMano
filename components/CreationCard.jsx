import React, { useEffect, useState } from "react";
import Vignette2 from "./Vignette2";
import axios from "axios";
import BackBtn from "./BackBtn";
import Loading from "./Loading";

const Card = ({
  question,
  filters,
  setFilters,
  questionNumber,
  setQuestionNumber,
}) => {
  const [vignettes, setVignettes] = useState();

  console.log("initial vignettes", vignettes);
  console.log("logging the filters", filters);
  console.log("question nb", questionNumber);

  useEffect(() => {
    if (questionNumber === 0 || questionNumber === 1) {
      getFirstQuestions();
    } else {
      getData();
    }
  }, [questionNumber]);

  async function getFirstQuestions() {
    console.log("here")
    const res = await axios.get("http://localhost:3000/api/images", {
      params: { type: question.type },
    });
    setVignettes(res.data);
  }


  async function getData() {
    console.log("hello");
    console.log("filter", filters[filters.length - 1]);
    const res = await axios.get("http://localhost:3000/api/works", {
      params: { filters: filters[filters.length - 1] },
    });
    const foundProjects = res.data;
    const vignettes = foundProjects.map((project) => project[question.type]);
    const foundVignettes = sortVignettes(vignettes);
    console.log("finally", foundVignettes);
    getImages(foundVignettes);
  }

  function sortVignettes(vignettes) {
    const vignettesFound = [];
    vignettes.map((vignette) => {
      if (typeof vignette === "object") {
        vignette.map((elem) => {
          if (vignettesFound.includes(elem) === false)
            vignettesFound.push(elem);
        });
      }
      if (typeof vignette === "string") {
        if (vignettesFound.includes(vignette) === false)
          vignettesFound.push(vignette);
      }
    });
    return vignettesFound;
  }

  async function getImages(foundVignettes) {
    const res = await axios.get("http://localhost:3000/api/images", {
      params: { type: question.type },
    });
    const images = res.data;
    const neededVignettes = [];
    images.map((image) => {
      if (foundVignettes.includes(image.name)) neededVignettes.push(image);
    });
    setVignettes(neededVignettes);
  }

  if (!vignettes) {
    return <Loading/>;
  }
  console.log("vignettes : ", vignettes)
  return (
    <div className="card flex flex-col items-center rounded-2xl">
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
      <h2 className="mt-4 text-center text-xl font font-bold">
        {question.content}
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 w-auto pt-10 overflow-hidden ">
        {vignettes.map((vignette) => {
          console.log("vignettes in admin: ", vignette)
          return (
            <Vignette2
              key={vignette._id}
              picture={vignette.imgUrl}
              title={vignette.name}
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
