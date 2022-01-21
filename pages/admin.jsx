import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import CreationCard from "../components/CreationCard";

const Admin = () => {
  const router = useRouter();

  const [questionNumber, setQuestionNumber] = useState(0);
  const [filters, setFilters] = useState([{}]);
  const [projectName, setProjectName] = useState("");
  const [projectPrice, setProjectPrice] = useState("");

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
    // {
    //   questionNumber: 6,
    //   content:
    //     "What is the budget for this project (tools and screws included)?",
    //   type: "price",
    // },
  ];

  const handlePost = () => {
    const obj = {
      name: projectName,
      category: filters[filters.length - 1].category,
      place: filters[filters.length - 1].place,
      level: filters[filters.length - 1].level,
      rooms: filters[filters.length - 1].rooms,
      equipment: filters[filters.length - 1].equipment,
      product: filters[filters.length - 1].product,
      price: projectPrice,
    };
    console.log("this obj", obj);
    axios
      .post("http://localhost:3000/api/works", obj)
      .then((res) => console.log(res.data));
  };

  return (
    <div className="card flex flex-col pb-12 items-center rounded-2xl lg:w-4/5 lg:pb-24 shadow-xl mx-auto">
      <h1 className="mt-6 text-center text-4xl lg:text-6xl font font-bold">
        Let's create a new project !
      </h1>
      {questionNumber === creationJourney.length ? (
        <div>
          <h2 className="mt-12 mx-6 text-center text-2xl lg:text-4xl font font-bold">
            Here is the project you created:
          </h2>
          <p className="mt-6 font-normal">
            This project is best suited for:{" "}
            <span className="font-bold text-manoblue">
              {filters[filters.length - 1].level}
            </span>
          </p>
          <p className="mt-2 font-normal">
            This project takes place:{" "}
            <span className="font-bold text-manoblue">
              {filters[filters.length - 1].place}
            </span>
          </p>
          <p className="mt-2 font-normal">
            More precisely in the:{" "}
            <span className="font-bold text-manoblue">
              {filters[filters.length - 1].rooms}
            </span>
          </p>
          <p className="mt-2 font-normal">
            This project is of type:{" "}
            <span className="font-bold text-manoblue">
              {filters[filters.length - 1].category}
            </span>
          </p>
          <p className="mt-2 font-normal">
            The equipement needed for this project is:{" "}
            <span className="font-bold text-manoblue">
              {filters[filters.length - 1].equipment}
            </span>
          </p>
          <p className="mt-2 font-normal">
            The products needed for this project are:{" "}
            <span className="font-bold text-manoblue">
              {filters[filters.length - 1].product}
            </span>
          </p>

          <span className="flex flex-row mt-2 gap-4">
            <label>
              The approximate budget for this project is: <br />
            </label>
            <input
              type="text"
              id="projectprice"
              className="bg-manowhite rounded-lg mb-3 h-6 border-2 border-logosecond text-center"
              value={projectPrice}
              onChange={(e) => setProjectPrice(e.target.value)}
            ></input>
          </span>
          <div className="flex flex-col items-center p-4 border-manoblue border-2 rounded-xl">
            <label htmlFor="projectName">
              Now what is the name of this project ? <br />
              <input
                type="text"
                id="projectName"
                className="bg-manowhite rounded-lg my-3 h-6 border-2 border-logosecond text-center"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </label>{" "}
            <br />
            <button
              onClick={async () => {
                await handlePost();
                router.push({
                  pathname: "/",
                });
              }}
              className="my-2 cursor-pointer shadow-md flex justify-center items-center bg-gradient-to-r from-manoblue to-manoblue w-20 h-12 rounded-2xl text-manowhite hover:from-logofirst hover:to-logosecond hover:scale-110"
            >
              SUBMIT
            </button>
          </div>
        </div>
      ) : (
        <CreationCard
          question={creationJourney[questionNumber]}
          filters={filters}
          setFilters={setFilters}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
      )}
    </div>
  );
};

export default Admin;
