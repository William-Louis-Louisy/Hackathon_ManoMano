import base from "../../../middlewares/common";
import Images from "../../../models/images";

async function getImages(req, res) {
  if (req.body) {
    const images = await Images.getImagesByType(req.body);
    res.status(200).send(images);
  }
}

async function postImage(req, res) {
  if (req.body) {
    console.log("posting image", req.body);
    const newImage = await Images.addImage(req.body);
    res.status(201).send(newImage);
  }
}

export default base().post(postImage).get(getImages);
