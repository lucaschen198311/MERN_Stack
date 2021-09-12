const jwt = require("jsonwebtoken");
const Comment = require("../models/comment.model");
const Product = require("../models/product.model");

const addNewComment = async (req, res) => {
  const { body, params } = req;
  let newComment = new Comment(body);
  let productQuery;
  newComment.product_id = params.product_id;
  const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true });
  newComment.user_id = decodedJwt.payload.id;
  try {
    newComment = await newComment.save();
    productQuery = await Product.findByIdAndUpdate(
      { _id: params.product_id },
      { $push: { comments: newComment._id } },
      { new: true, useFindAndModify: true }
    );
    res.json({ newComment, productQuery });
  } catch (error) {
    res.status(400).json(error);
  }
}

/*
const displayAllComments = async(req, res)=>{
  try {
    const allComments = await Comment.find()
      .populate("user_id", "userName")
      .exec();
    res.json(allComments);
  } catch (error) {
    res.status(400).json(error);
  }
}
*/
module.exports = {
  addNewComment,
  //displayAllComments
};
