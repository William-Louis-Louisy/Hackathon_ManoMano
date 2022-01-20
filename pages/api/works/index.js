import base from "../../../middlewares/common";
import Works from "../../../models/works";

async function getWorks(req, res) {
  if (req.query.filters) {
    // console.log("type of query : ", typeof req.query.filters);
    // console.log("handling works");
    const works = await Works.getWorks(JSON.parse(req.query.filters));
    res.status(200).send(works);
  } /* else {
    const works = await Works.getWorks();
    res.status(201).send(works);
  } */
}

async function postWork(req, res) {
  console.log(req);
  if (req.body) {
    console.log("posting work", req.body);
    const newWorkId = await Works.createWork(req.body);
    console.log(newWorkId);
    res.status(201).send({ _id: newWorkId, ...req.body });
  }
}

export default base().post(postWork).get(getWorks);
