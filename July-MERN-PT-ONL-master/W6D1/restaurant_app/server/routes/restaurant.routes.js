const RestaurantController = require("../controllers/restaurant.controller");

module.exports = (app) => {
  app.post("/api/restaurant", RestaurantController.addNewRestaurant);
  app.get("/api/restaurant", RestaurantController.getAllRestaurants);
  app.get("/example", RestaurantController.sendObj);
  app.delete(
    "/api/restaurant/:restaurantId",
    RestaurantController.deleteRestaurant
  );
  app.get(
    "/api/restaurant/:restaurantId",
    RestaurantController.getRestaurantById
  );
  app.put(
    "/api/restaurant/:restaurantId",
    RestaurantController.updateRestaurant
  );
};
