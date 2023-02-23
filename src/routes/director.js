const express = require("express");
const directorSchema = require("../models/director");

const router = express.Router();

// create director
router.post("/director", (req,res) => {
    const director = directorSchema(req.body);
    director.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
})

// get all directors
router.get("/director", (req, res) => {
    directorSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a director by dir_id
router.get("/director/:id", (req, res) => {
  const { id } = req.params;
  directorSchema
  .findOne({ dir_id: id})
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

// udate a director
router.put("/director/:id", (req, res) => {
  const { id } = req.params;
  const { dir_id, dir_fname, dir_lname } = req.body;
  directorSchema
  .updateOne({ dir_id: id}, { $set: { dir_id, dir_fname, dir_lname }})
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

// delete a director
router.delete("/director/:id", (req, res) => {
  const { id } = req.params;
  directorSchema
  .deleteOne({ dir_id: id})
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

module.exports = router;