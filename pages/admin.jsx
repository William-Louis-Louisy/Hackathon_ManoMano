import axios from "axios";
import { useState } from "react";
import CreationCard from "../components/CreationCard";

const Admin = () => {
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
      price: projectPrice
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
            This project is best suited for: <span className="">{filters[filters.length - 1].level}</span>
          </p>
          <p>This project takes place: <span className="text-manoblue">{filters[filters.length - 1].place}</span></p>
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
            
            {/* {filters[filters.length - 1].price} */}
            <label>
            The approximate budget for this project is:{" "} <br />
            </label>
            <input type="text" id="projectprice" value={projectPrice} onChange={(e) => setProjectPrice(e.target.value)}>
            </input>
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
