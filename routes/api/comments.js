const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");

// Matches with "/api/comments"
router.route("/")
  .post(commentsController.create);

// Matches with "/api/comments/:id"
router.route("/:id")
  .put(commentsController.update)
  .delete(commentsController.remove);

module.exports = router;