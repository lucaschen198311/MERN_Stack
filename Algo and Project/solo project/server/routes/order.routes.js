const OrderController = require("../controllers/order.controller");
const { authenticate } = require("../middleware/jwt.middleware");

module.exports = (app) => {
  app.post("/api/orders/new", authenticate, OrderController.addOrder);
  app.get("/api/orders", authenticate, OrderController.getAllOrders);
  app.delete("/api/orders/:order_id", authenticate, OrderController.recallOrder);
};