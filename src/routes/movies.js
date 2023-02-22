const express = require("express");
const moviesSchema = require("../models/movies");

const router = express.Router();

//Create a movie
router.post("/movies", (req,res) => {
    const movie = moviesSchema(req.body);
    movie.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
})

// Get all movies
router.get("/movies", (req, res) => {
    moviesSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

//Get a movie by mov_id
router.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  moviesSchema
    .findOne({ mov_id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Get a movie by title
router.get("/movies/title/:title", (req, res) => {
  const { title } = req.params;
  moviesSchema
    .findOne({mov_title: title})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))

});

//Delete a movie by mov_id
router.delete("/movies/:id", (req, res) => {
  const { id } = req.params;
  moviesSchema
    .remove({ mov_id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//update a users
router.put('/movies/:id', (req, res) => {
  const { id } = req.params;
  const {mov_id, mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country } = req.body;
  moviesSchema
    .updateOne({mov_id:id}, { $set: {mov_id, mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country } })
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});



module.exports = router;

