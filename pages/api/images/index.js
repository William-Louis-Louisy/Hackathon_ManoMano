import base from "../../../middlewares/common";
import Images from "../../../models/images";

async function getImages(req, res) {
  // if (req.query) {
  //   const images = await Images.getImagesByType(req.query);
  // console.log("req.query", req.query);}
  if (req.query?.filters) {
    const images = await Images.getImagesByType(JSON.parse(req.query.filters));
    console.log("images: ", images);
    res.status(200).send(images);
  }
  if (req.query?.type) {
    console.log("req.query image: ", req.query);
    const images = await Images.getImagesByType(req.query);
    console.log(images);
    res.status(200).send(images);
  }
}

async function postImage(req, res) {
  if (req.body) {
    const newImage = await Images.addImage(req.body);
    res.status(201).send(newImage);
  }
}

export default base().post(postImage).get(getImages);
