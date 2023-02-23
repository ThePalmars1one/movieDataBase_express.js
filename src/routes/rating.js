const express = require("express");
const ratingSchema = require ("../models/rating");

const router = express.Router();

router.post("/ratings", (req,res) => {
    const rating= ratingSchema(req.body);
    rating.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
})

// Get all genres
router.get("/ratings", (req, res) => {
    ratingSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

// get a rating by id
router.get("/ratings/:id", (req, res) => {
    const { id } = req.params;
    ratingSchema
      .findOne({ rev_id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

//Delete a rating
router.delete("/ratings/:id", (req, res) => {
  const { id } = req.params;
  ratingSchema
    .remove({ rev_id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//update a rating
router.put('/ratings/:id', (req, res) => {
  const { id } = req.params;
  const { rev_id, mov_id, rev_stars, num_o_ratings } = req.body;
  ratingSchema
    .updateOne({ rev_id: id }, { $set: { rev_id, mov_id, rev_stars, num_o_ratings } })
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});


module.exports = router;