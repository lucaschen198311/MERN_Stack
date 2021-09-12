const UserController = require("../controllers/user.controller");
const { authenticate } = require("../middleware/jwt.middleware");

module.exports = (app) => {
  app.post("/api/register", UserController.register);
  app.post("/api/login", UserController.login);
  app.post("/api/logout", UserController.logout);
  app.get("/api/authenuser", authenticate, UserController.displayCurrentUser);
  app.get("/api/cart", authenticate, UserController.displayCart);
  app.put("/api/cart/addtocart/:product_id",authenticate,UserController.addToCart);
  app.put("/api/cart/removefromcart/:product_id", authenticate, UserController.removeFromCart);
  //app.put("/api/cart/increasetocart/:product_id", authenticate, UserController.increaseToCart);
  app.put("/api/cart/decreasefromcart/:product_id", authenticate, UserController.decreaseFromCart);
  app.put("/api/cart/order", authenticate, UserController.clearCart);
};
