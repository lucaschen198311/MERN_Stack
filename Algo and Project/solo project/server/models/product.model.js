const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "product title is required"]
    },
    img_url: {
        type: String,
        required: [true, "image url is required"]
      },
      price: {
        type: Number,
        required: [true, "price is required"]
      },
      category:{
        type: String,
        default: "not known"
      },
    description: {
      type: String,
      required: [true, "category is required"]
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
