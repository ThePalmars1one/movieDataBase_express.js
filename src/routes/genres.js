const express = require("express");
const genresSchema = require ("../models/genres");

const router = express.Router();

//Create a genre
router.post("/genres", (req,res) => {
    const movie= genresSchema(req.body);
    movie.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
})

// Get all genres
router.get("/genres", (req, res) => {
    genresSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

//Delete a genre
router.delete("/genres/:id", (req, res) => {
    const { id } = req.params;
    genresSchema
      .remove({ gen_id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});
  
//update a genre
router.put('/genres/:id', (req, res) => {
    const { id } = req.params;
    const {gen_id, gen_title} = req.body;
    genresSchema
      .updateOne({gen_id:id}, { $set: { gen_id, gen_title } })
      .then((data) => res.json(data))
      .catch((error) => res.json({message:error}));
});

module.exports = router;