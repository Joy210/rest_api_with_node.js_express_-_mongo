const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

// const PostSchema = new Schema({
const PostSchema = Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Posts", PostSchema);
