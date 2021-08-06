const express = require("express");
const app = express();
const port = 8000;

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllJokeRoutes = require("./server/routes/joke.routes");
AllJokeRoutes(app);

app.listen(port, () => console.log("The server is all fired up on port 8000"));
