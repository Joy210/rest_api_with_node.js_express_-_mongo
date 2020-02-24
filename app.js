"use strict";

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

// Import Routes
const postsRoute = require("./routes/posts");

app.use(bodyParser.json());

app.use("/posts", postsRoute);

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("Successfully connected to MongoDB...")
);

const port = 3000;
app.listen(port, () => console.log(`Listening on port port! ${port}`));
