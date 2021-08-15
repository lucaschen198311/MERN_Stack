import { navigate } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";
const cuisineChoiceOptions = [
  "Bar",
  "American",
  "Asian",
  "Italian",
  "Mexican",
  "Pizza",
];
const EditRestaurant = (props) => {
  // We have access to the value sent in url with below.
  const { restaurantId } = props;
  // We need to define state variable for EACH field in db.
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [hasDelivery, setHasDelivery] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  /* 
    Let's think about it... We want to pack the mongo document info 
    into form inputs. So when this component in originally rendered,
    we need to query the database for the data for an individual Restaurant document.
    useEffect is perfect for this because if we provide the [] as the second arg
    for useEffect, useEffect will ONLY RUN ON ORIGINAL RENDER and that's what we want 
    to do! We only want to get this data once, on original render.
  */

  useEffect(() => {
    axios
      // pack restaurantId into url string
      .get(`http://localhost:8000/api/restaurant/${restaurantId}`)
      // Upon successful query get request, we want to pack info from db
      // into state variables, so we can edit each field via form inputs
      .then((queriedRestaurant) => {
        console.log(queriedRestaurant.data.restaurant);

        setName(queriedRestaurant.data.restaurant.name);
        setCuisine(queriedRestaurant.data.restaurant.cuisine);
        setZipcode(queriedRestaurant.data.restaurant.zipcode);
        setHasDelivery(queriedRestaurant.data.restaurant.hasDelivery);
        setPhotoUrl(queriedRestaurant.data.restaurant.photoUrl);
      })
      .catch((err) => console.log(err));
  }, []);

  // trigger this funciton when form is submitted
  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    // put is http verb for updating, it is the http verb our backend is expectin to
    // update doc in collection
    axios
      // 1st arg is url, 2nd arg is form data that will be req.body
      .put(`http://localhost:8000/api/restaurant/${restaurantId}`, {
        // pack values of state variables into object sent as form data
        name,
        zipcode,
        cuisine,
        hasDelivery,
        photoUrl,
      })
      // Upon sucessful creation, navigate to Main component at "/" route
      // This will add the Main component back into the dom, and DIsplayAllRestaurants
      // useEffect will be triggered
      .then((updatedDoc) => navigate("/"))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmitUpdate}>
        <div>
          Name:{" "}
          {/* 
            *** The value for the form fields need to be initialized with what we got back from db -
            this info is set to state variables. So adding the value attribute is absolutely essential
            so we can edit what is in the db
          */}
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          Cuisine:{" "}
          <select
            name="cuisine"
            value={cuisine}
            defaultValue={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            id="cuisine"
          >
            {cuisineChoiceOptions.map((cuisineType, index) => (
              <option key={index} value={cuisineType}>
                {cuisineType}
              </option>
            ))}
          </select>
          {/* <input
            type="text"
            name="cuisine"
            onChange={(e) => setCuisine(e.target.value)}
            value={cuisine}
          /> */}
        </div>
        <div>
          Zipcode:{" "}
          <input
            type="text"
            name="zipcode"
            onChange={(e) => setZipcode(e.target.value)}
            value={zipcode}
          />
        </div>
        <div>
          Delivery:{" "}
          <input
            type="checkbox"
            name="hasDelivery"
            onChange={() => setHasDelivery(!hasDelivery)}
            checked={hasDelivery}
          />
        </div>
        <div>
          PhotoUrl:{" "}
          <input
            type="text"
            name="hasDelivery"
            onChange={(e) => setHasDelivery(e.target.value)}
            value={photoUrl}
          />
        </div>
        <button>SUBMIT EDIT</button>
      </form>
    </div>
  );
};

export default EditRestaurant;
