const express = require("express");
const movieGenresSchema = require("../models/movieGenres");

const router = express.Router();

//Create a movie genre
router.post("/moviegenres", (req,res) => {
    const movie_genres= movieGenresSchema(req.body);
    movie_genres.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
})

// Get all movie genres
router.get("/moviegenres", (req, res) => {
    movieGenresSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

//Delete a movie genre
router.delete("/moviegenres/:id", (req, res) => {
    const { id } = req.params;
    movieGenresSchema
      .remove({ gen_id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});
  
//update a movie genre
router.put('/moviegenres/:id', (req, res) => {
    const { id } = req.params;
    const {gen_id, mov_id} = req.body;
    movieGenresSchema
      .updateOne({gen_id:id}, { $set: { gen_id, mov_id } })
      .then((data) => res.json(data))
      .catch((error) => res.json({message:error}));
});



module.exports = router;