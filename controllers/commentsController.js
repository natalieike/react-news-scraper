const db = require("../models");

// Defining methods for the articlesController
module.exports = {
  create: function(req, res) {
    newComment = {
      commentText: req.body.commentText,
      commentUser: req.body.commentUser
    };
    db.Comment
      .create(newComment)
      .then(data => db.Article.findOneAndUpdate({_id: req.body.articleId}, { $push: { comments: data._id } }, { new: true }))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Comment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//I can't figure out why remove doesn't work - it's not pulling the comment id out of the array in Article
  remove: function(req, res) {
    db.Comment
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(data => db.Article
        .findOne({comments: req.params.id})
        .then(dbModel => {
          commentsArray = dbModel.comments;
          index = commentsArray.indexOf(req.params.id);
          commentsArray.splice(index, 1);
          console.log(dbModel._id + " " + req.params.id);
          db.Article.findOneAndUpdate({_id: dbModel._id}, {$pull: {comments: req.params.id}},{ new: true })}))
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  }
};