const express = require("express");
const actorSchema = require("../models/actor");

const router = express.Router();

// create actor
router.post("/actor", (req, res) => {
    const actor = actorSchema(req.body);
    actor.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
});

// get all actors
router.get("/actor", (req, res) => {
    actorSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

// get a actor by act_id
router.get("/actor/:id", (req, res) => {
    const { id } = req.params;
    actorSchema
    .findOne({act_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

// update a actor
router.put("/actor/:id", (req, res) => {
    const { id } = req.params;
    const { act_id, act_fname, act_lname, act_gender } = req.body;
    actorSchema
    .updateOne({ act_id: id }, { $set: { act_id, act_fname, act_lname, act_gender }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

// delete a actor
router.delete("/actor/:id", (req, res) => {
    const { id } = req.params;
    actorSchema
    .deleteOne({ act_id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

module.exports = router;

