const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    // required means that each new Restaurant document MUST have the name field
    // 1st item in array is a boolean signifying it field is required or not
    // and 2nd item is the error message
    required: [true, "Restaurant Name is Required"],
    // minLength means that the field name has a min length.
    // 1st item in array is minLength amount and second item is error message
    minLength: [5, "A restaurant name must be at least 5 characters"],
  },
  zipcode: {
    type: String,
    required: [true, "Restaurant address is required"],
    minLength: [5, "Zip Code"],
  },
  cuisine: {
    type: String,
    required: [true, "Cuisine is required"],
    // using enum for field validation means that the value for cuisine MUST match
    // one of the strings in the array that is key of enum's value
    enum: ["Bar", "American", "Asian", "Italian", "Mexican", "Pizza"],
  },
  // This is how we define a Boolean field
  hasDelivery: {
    type: Boolean,
    // give this field a default. So if post request does not contain the hasDelivery field, it will default to false
    default: false,
  },
  photoUrl: {
    type: String,
  },
});

// MUST EXPORT MODEL!!! :)
module.exports = mongoose.model("Restaurant", RestaurantSchema);
