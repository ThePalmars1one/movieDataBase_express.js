const express = require("express");
const movieDirectionSchema = require("../models/movieDirection");

const router = express.Router();

router.post("/moviedirection", (req,res) => {
    const movieDirection = movieDirectionSchema(req.body);
    movieDirection.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
})

router.get("/moviedirection", (req, res) => {
    movieDirectionSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;

