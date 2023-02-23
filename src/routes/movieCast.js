const express = require("express");
const movieCastSchema = require("../models/movieCast");

const router = express.Router();

// create
router.post("/moviecast", (req,res) => {
    const movieCast = movieCastSchema(req.body);
    movieCast.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
});

// get all
router.get("/moviecast", (req, res) => {
    movieCastSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get by mov_id
router.get("/moviecast/:id", (req, res) => {
  const { id } = req.params;
  movieCastSchema
  .findOne({mov_id: id})
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

// update by mov_id
router.put("/moviecast/:id", (req, res) => {
  const { id } = req.params;
  const { act_id, mov_id, role } = req.body;
  movieCastSchema
  .updateOne({mov_id: id}, { $set: { act_id, mov_id, role }})
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

// delete by mov_id
router.delete("/moviecast/:id", (req, res) => {
  const { id } = req.params;
  movieCastSchema
  .deleteOne({ mov_id: id })
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

module.exports = router;

