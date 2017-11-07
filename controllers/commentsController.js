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
  remove: function(req, res) {
    const commentId = req.params.id;
    db.Article
      .findOneAndUpdate({comments: commentId}, {$pull: {comments: commentId}})
      .then(data => {
        db.Comment
          .findById({_id: commentId})
          .then(dbModel => dbModel.remove())
      }).then(result => res.json(result))
      .catch(err => res.status(422).json(err)); 
  }  
};