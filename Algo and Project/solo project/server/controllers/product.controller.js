const Product = require("../models/product.model");
const jwt = require("jsonwebtoken");

const addNewProduct = async (req, res) => {
  const { body } = req;
  let newProduct = new Product(body);
  const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true });
  console.log(decodedJwt);
  newProduct.user_id = decodedJwt.payload.id;
  console.log(newProduct);
  try {
    newProduct = await newProduct.save();
    res.json(newProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getAllProducts = async (req, res) => {
  const {params} = req;
  let condition;
  params.category=="all" ? condition={} : condition={category:params.category};
  //console.log(condition);
  try {
    const allProducts = await Product.find(condition)
      .populate(
        {
          path: "comments",
          model: "Comment",
          populate: {
            path: "user_id",
            model: "User",
          }
        }
      )
      .exec();
    res.json(allProducts);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getOneProduct = async (req, res) =>{
    try{
        const oneProduct = await Product.findOne({_id: req.params.product_id})
        .populate(
          {
            path: "comments",
            model: "Comment",
            populate: {
              path: "user_id",
              model: "User",
            }
          }
        ).populate("user_id")
        .exec();
        res.json(oneProduct);
    } catch(error) {
        res.status(400).json(error);
    }
}

const updateProduct = async (req, res) =>{
    try{
        const updatedProduct = await Product.findOneAndUpdate({_id: req.params.product_id}, {$set: req.body}, {new: true, runValidators: true});
        res.json(updatedProduct);
    } catch(error){
        res.status(400).json(error);
    }
}

module.exports = {
  addNewProduct,
  getAllProducts,
  getOneProduct,
  updateProduct
};
