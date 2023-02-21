const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const moviesRoutes = require("./routes/movies")

const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use("/api", moviesRoutes);

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
  