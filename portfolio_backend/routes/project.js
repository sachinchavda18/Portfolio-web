const express = require("express");
const router = express.Router();
const ProjectModel = require("../models/ProjectModel");

router.post("/create", async (req, res) => {
  const { title, thumbnail, text, view, source } = req.body;
  if (!title || !thumbnail || !text || !view || !source) {
    return res
      .status(301)
      .json({ err: "Insufficient details to create Project. " });
  }

  const projectDetails = { title, thumbnail, text, view, source };
  // const createProject = await ProjectModel.create(projectDetails)
  try{
    await ProjectModel.insertMany(projectDetails);
    return res.status(200).json({ message: "Success"  });
  }
  catch{(err)=>{
    return res.status(200).json({ err });
  }}
});

router.get("/get/allproject", async (req, res) => {
  const proj = await ProjectModel.find({});
  return res.status(200).json({ data: proj });
});

module.exports = router;
