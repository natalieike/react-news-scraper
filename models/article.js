const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: Date, default: Date.now },
    // Reference Comment model
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;