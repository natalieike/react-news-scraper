var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Comment constructor
var CommentSchema = new Schema({
  commentText: {
  	type: String,
  	required: "Please enter Comment Text"
  },
  commentUser: {
  	type: String,
  	required: "Please enter a UserName"
  },
  commentTime: {
  	type: Date,
  	default: Date.now
  }
});

// Create Comment Model
var Comment = mongoose.model("Comment", CommentSchema, "comments");

// Export the Comments model
module.exports = Comment;