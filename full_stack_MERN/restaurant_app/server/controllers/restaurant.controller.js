const Restaurant = require("../models/restaurant.model");

// controller function to add new restaurant document to db collection
const addNewRestaurant = (req, res) => {
  const { body } = req;
  console.log("BODY:", body);
  // Inside create(), we must feed it an object - this objects keys MUST
  // match with the field names in the model
  Restaurant.create({
    name: body.name,
    zipcode: body.zipcode,
    cuisine: body.cuisine,
    hasDelivery: body.hasDelivery,
    photoUrl: body.photoUrl,
  })
    // Send json response to client with new restaurant that was just added
    .then((newRestaurant) => {
      res.json({ newRestaurant });
    })
    .catch((err) => {
      console.log("MONGOOSE ERROR:");
      console.log(err);
      // if there is an error in db query, send status of 400 and json response w/ error msg
      res.status(400).json({ errors: err });
    });
};

// controller to query all restaurants
const getAllRestaurants = (req, res) => {
  // Model.find() gets ALL docs from db
  Restaurant.find()
    // send json response with all restaurants to client
    .then((allRestaurants) => res.json({ allRestaurants }))
    // if there is an error in db query, send status of 400 and json response w/ error msg
    .catch((err) => res.status(400).json({ error: err }));
};

// controller to delete a restaurant
const deleteRestaurant = (req, res) => {
  // We pull off restaurantId off of the url
  console.log(req.params.restaurantId);
  // deleteOne takes {} as arg which is {queryField: queryVal}
  Restaurant.deleteOne({ _id: req.params.restaurantId })
    // Send 200 status code and message restaurant deleted
    .then((deletedRestaurant) => res.status(200).send("Restaurant Deleted"))
    // if there is an error in db query, send status of 400 and json response w/ error msg
    .catch((err) => res.status(400).json({ error: err }));
};

// controller to query a single restaurant by its id
const getRestaurantById = (req, res) => {
  // findOne() takes {} as arg - {queryField: queryVal}
  Restaurant.findOne({ _id: req.params.restaurantId })
    // if successful return json response to client w restaurant info
    .then((restaurant) => res.json({ restaurant }))
    // if there is an error in db query, send status of 400 and json response w/ error msg
    .catch((err) => res.status(400).json({ error: err }));
};

// Controller to update restaurant
const updateRestaurant = (req, res) => {
  // req.body will contain form data as {}
  const { body } = req;
  // findOneAndUpdate takes 1st arg: {queryField: queryVal}, 2nd arg the fields to update, then settings inside {}
  // new: true means we want the updated "new" document supplied arg in then promise block
  Restaurant.findOneAndUpdate({ _id: req.params.restaurantId }, body, {
    new: true,
    runValidators: true,
  })
    // send json response with updated restaurant
    .then((restaurant) => res.json({ restaurant }))
    // if there is an error in db query, send status of 400 and json response w/ error msg
    .catch((err) => res.status(400).json({ error: err }));
};

const healthCheckController = (req, res) => {
  res.json({ message: "This is set up" });
};

module.exports = {
  addNewRestaurant,
  getAllRestaurants,
  deleteRestaurant,
  getRestaurantById,
  updateRestaurant,
  healthCheckController,
};
