import axios from "axios";
import { useState } from "react";
import CreationCard from "../components/CreationCard";

const Admin = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [filters, setFilters] = useState([{}]);
  const [projectName, setProjectName] = useState("");

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
    // {
    //   questionNumber: 4,
    //   content: "What equipment is needed for this project ?",
    //   type: "equipment",
    // },
    // {
    //   questionNumber: 5,
    //   content: "What products are needed for this project ?",
    //   type: "product",
    // },
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
      toolList: filters[filters.length - 1].equipment,
      rawMaterialList: filters[filters.length - 1].product,
    };
    console.log("this obj", obj);
    axios
      .post("http://localhost:3000/api/works", obj)
      .then((res) => console.log(res.data));
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <h1>Let's create a new project !</h1>
      {questionNumber === creationJourney.length ? (
        <div>
          <h2>Here is the project you created:</h2>
          <p>
            This project is best suited for: {filters[filters.length - 1].level}
          </p>
          <p>This project takes place: {filters[filters.length - 1].place}</p>
          <p>More precisely in the: {filters[filters.length - 1].rooms}</p>
          <p>This project is of type: {filters[filters.length - 1].category}</p>
          <p>
            The equipement needed for this project is:{" "}
            {filters[filters.length - 1].equipment}
          </p>
          <p>
            The products needed for this project are:{" "}
            {filters[filters.length - 1].product}
          </p>
          <p>
            The approximate budget for this project is:{" "}
            {filters[filters.length - 1].price}
          </p>
          <label htmlFor="projectName">
            Now what is the name of this project ? <br />
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </label>{" "}
          <br />
          <button
            onClick={() => {
              handlePost();
            }}
          >
            SUBMIT
          </button>
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
