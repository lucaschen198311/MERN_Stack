const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
// require mongoose config
require("./config/mongoose.config");

// express config to use json
app.use(express.json(), express.urlencoded({ extended: true }));

// require routes and feed express app to ()
const AllRestaurantRoutes = require("./routes/restaurant.routes");
AllRestaurantRoutes(app);

// start express server...
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
