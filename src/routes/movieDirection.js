const express = require("express");
const movieDirectionSchema = require("../models/movieDirection");

const router = express.Router();

// create
router.post("/moviedirection", (req,res) => {
    const movieDirection = movieDirectionSchema(req.body);
    movieDirection.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
})

// get all
router.get("/moviedirection", (req, res) => {
    movieDirectionSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get by dir_id
router.get("/moviedirection/:id", (req, res) => {
  const { id } = req.params;
  movieDirectionSchema
  .findOne({ dir_id: id })
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

// update by dir_id
router.put("/moviedirection/:id", (req, res) => {
  const { id } = req.params;
  const { dir_id, mov_id } = req.body;
  movieDirectionSchema
  .updateOne({ dir_id: id }, { $set: { dir_id, mov_id }})
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

// delete by dir_id
router.delete("/moviedirection/:id", (req, res) => {
  const { id } = req.params;
  movieDirectionSchema
  .deleteOne({ dir_id: id })
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

module.exports = router;

