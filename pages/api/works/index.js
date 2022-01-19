import base from "../../../middlewares/common";
import Works from "../../../models/works";

async function getWorks(req, res) {
  if (req.body) {
    console.log("handling works");
    const works = await Works.getWorks(req.body);
    res.status(201).send(works);
  } else {
    const works = await Works.getWorks();
    res.status(201).send(works);
  }
}

async function postWork(req, res) {
  console.log(req);
  if (req.body) {
    console.log("posting work");
    const newWork = await Works.createWork(req.body);
    console.log(newWork);
    res.status(201).send(newWork);
  }
}

export default base().post(postWork).get(getWorks);
