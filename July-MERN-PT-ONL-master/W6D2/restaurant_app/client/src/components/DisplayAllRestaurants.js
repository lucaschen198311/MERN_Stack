import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const DisplayAllRestaurants = (props) => {
  const { formSubmittedBoolean, setFormSubmittedBoolean } = props;
  const [restaurants, setRestaurants] = useState([]);
  // This useEffect will run on component origin render, and will run again
  // everytime formSubmittedBoolean variable changes
  useEffect(() => {
    console.log("useeffect triggered");
    axios
      .get("http://localhost:8000/api/restaurant")
      // Successful get request
      .then(
        (allRestaurants) => {
          console.log(allRestaurants.data.allRestaurants);
          setRestaurants(allRestaurants.data.allRestaurants);
        }
        // setRestaurants(allRestaurants.data.allRestaurants)
      )
      // get request had an error
      .catch((err) => console.log(err));
    // providing a second arg to useEffect inside the [] tells useEffect to run
    // 1. on first component render, 2. when formSubmittedBoolean changes.
    // formSubmittedBoolean changes inside the RestaurantForm component after a successful
    // db post. So ONLY after a successful db post will this variable change.
  }, [formSubmittedBoolean]);

  // Function to delete restaurant in db.
  // Takes in id, puts id in url as a param for backend.
  // The id comes from below inside the JSX where we map through all restaurants
  const deleteRestaurant = (id) => {
    axios
      .delete(`http://localhost:8000/api/restaurant/${id}`)
      // Check the delete controller function on the server. It just returns a 200 status with a simple .send('Everything Ok').
      // So we dont need to use the response callback
      .then((response) => {
        console.log("deletion successful");
        setFormSubmittedBoolean(!formSubmittedBoolean);
      })
      .catch((err) => console.log("error deleitng restaurant", err));
  };
  return (
    <div>
      <h1>display all restaurants</h1>
      {/* First we need to check to see if there are items in restaurants
          because our axios get api call is a promise, so we have to wait for the data to come back.
          So when component first renders, the restaurant state variable is set to an empty array,
          so if we dont check to see if items are in array first, we will get an error because we're trying
          to loop through an array that doesnt have any items
      
      */}
      {restaurants.length > 0 &&
        restaurants.map((restaurant, index) => (
          <div key={index}>
            <h2>
              {/* This is how to give the user a link to click to change the URL.
                  The "to" prop defines the url to go to

              */}
              <Link to={`/${restaurant._id}/edit`}>EDIT</Link>
            </h2>
            <Link to={`/${restaurant._id}`}>DISPLAY RESTAURANT INFO</Link>
            <p>{restaurant.name}</p>
            <p>{restaurant.zipcode}</p>
            <p>{restaurant.cuisine}</p>
            <img src={restaurant.photoUrl} alt="" />
            {/* When button clicked, ignite deleteRestaurant function with restaurant _id */}
            <button onClick={() => deleteRestaurant(restaurant._id)}>
              DELETE
            </button>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default DisplayAllRestaurants;
