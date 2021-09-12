const ProductController = require("../controllers/product.controller");
const { authenticate } = require("../middleware/jwt.middleware");

module.exports = (app) => {
  app.post("/api/products", authenticate, ProductController.addNewProduct);
  app.get("/api/products/:category", ProductController.getAllProducts);
  app.get("/api/products/detail/:product_id", authenticate, ProductController.getOneProduct);
  app.put("/api/products/detail/:product_id", authenticate, ProductController.updateProduct)  
};