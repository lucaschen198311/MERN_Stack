const CommentController = require("../controllers/comment.controller");
const { authenticate } = require("../middleware/jwt.middleware");

module.exports = (app) => {
  app.post("/api/products/detail/:product_id/comment", authenticate, CommentController.addNewComment);
  //app.get("/api/products/:product_id/comments", authenticate, CommentController.displayAllComments);
};