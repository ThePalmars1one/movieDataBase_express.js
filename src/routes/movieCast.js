const express = require("express");
const movieCastSchema = require("../models/movieCast");

const router = express.Router();

router.post("/moviecast", (req,res) => {
    const movieCast = movieCastSchema(req.body);
    movieCast.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
})

router.get("/moviecast", (req, res) => {
    movieCastSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;

