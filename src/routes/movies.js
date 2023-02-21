const express = require("express");
const moviesSchema = require("../models/movies");

const router = express.Router();

router.post("/movies", (req,res) => {
    const movie= moviesSchema(req.body);
    movie.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
})

router.get("/movies", (req, res) => {
    moviesSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;

