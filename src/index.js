const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const moviesRoutes = require("./routes/movies")
const actorsRoutes = require("./routes/actor")
const movieCastRoutes = require("./routes/movieCast")
const directorRoutes = require("./routes/director")
const movieDirectionRoutes = require("./routes/movieDirection")
const genresRoutes = require("./routes/genres")
const movieGenresRoutes = require("./routes/movieGenres")
const reviewerRoutes = require("./routes/reviewer")
const ratingRoutes = require("./routes/rating")

const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use("/api", moviesRoutes);
app.use("/api", actorsRoutes);
app.use("/api", movieCastRoutes);
app.use("/api", directorRoutes);
app.use("/api", movieDirectionRoutes);
app.use("/api", genresRoutes);
app.use("/api", movieGenresRoutes);
app.use("/api", reviewerRoutes);
app.use("/api", ratingRoutes);

// routes
app.listen(port, () => console.log("Server listening on port", port));

// mongodb connection
mongoose
   .connect(process.env.MONGODB_URI)
   .then(() => console.log("Connected to MongoDB Atlas"))
   .catch((error) => console.error(error));

app.get("/", (req, res) => {
    res.send("Welcome to my API");
});
  