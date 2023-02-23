const mongoose = require("mongoose");

const movieCastSchema = mongoose.Schema({
    act_id: {
        type: Number,
        required: true,
        ref: "Actor"
    },
    mov_id: {
        type: Number,
        required: true,
        ref: "Movies"
    },
    role: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("MovieCast", movieCastSchema);

