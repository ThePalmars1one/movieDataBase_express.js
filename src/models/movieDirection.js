const mongoose = require("mongoose");

const movieDirectionSchema = mongoose.Schema({
    dir_id: {
        type: Number,
        required: true,
        ref: "Director"
    },
    mov_id: {
        type: Number,
        required: true,
        ref: "Movies"
    }
})

module.exports = mongoose.model("MovieDirection", movieDirectionSchema);

