const mongoose = require("mongoose");

const movieGenresSchema = mongoose.Schema({
    gen_id: {
        type: Number,
        required: true,
        ref: "Genres"
    },
    mov_id: {
        type: Number,
        required: true,
        ref: "Movies"
    }
})

module.exports = mongoose.model("MovieGenres", movieGenresSchema);
