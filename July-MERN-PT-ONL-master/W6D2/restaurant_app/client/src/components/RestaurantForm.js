import { navigate } from "@reach/router";
import axios from "axios";
import React, { useState } from "react";
const cuisineChoiceOptions = [
  "Bar",
  "American",
  "Asian",
  "Italian",
  "Mexican",
  "Pizza",
];

const RestaurantForm = (props) => {
  // Define state vars needed to fulfill mongo models
  const [name, setName] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [hasDelivery, setHasDelivery] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");
  const [errors, setErrors] = useState({});
  const { formSubmittedBoolen, setFormSubmittedBoolean } = props;

  // Function to handle axios post to db w/ form data
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("handleformsubmit");
    // Pack in form data into an object
    const newRestaurantData = {
      // if key and val are same name, can just put "name" in object
      // and it will add key and value.
      name,
      // SAME THING AS THIS BELOW!
      zipcode: zipcode,
      cuisine,
      hasDelivery,
      photoUrl,
    };

    axios
      // axios.post(): 1st arg is url, 2nd arg is form data which will be req.body
      .post("http://localhost:8000/api/restaurant", newRestaurantData)
      .then((newRestaurant) => {
        // upon successful db post, Set all state variables back to empty so form inputs will reset
        setName("");
        setZipcode("");
        setCuisine("");
        setHasDelivery("");
        setPhotoUrl("");
        // Change boolean state variable so DisplayAllRestaurants useEffect will be triggered
        setFormSubmittedBoolean(!formSubmittedBoolen);
      })
      .catch((err) =>
        // This err that is returns from our backend will be a NESTED object.
        // Start off by console.log(err.response) and go to console in browser to
        // look at the SHAPE of the data. We need to go all the way into err.response.data.errors.errors
        // to get the object we want to set to errors state variable
        {
          console.log(err.response.data.errors);
          setErrors(err.response.data.errors.errors);
        }
      );
  };
  return (
    <>
      <h2>Restaurant Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Restaurant Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {/* if there is a key of name inside errors state var, display  error message */}
          {errors.name ? <p>{errors.name.message}</p> : null}
        </div>
        <div>
          <label htmlFor="zipcode">Zipcode</label>
          <input
            type="text"
            name="zipcode"
            onChange={(e) => setZipcode(e.target.value)}
            value={zipcode}
          />
        </div>
        <div>
          <label htmlFor="cuisine">Cuisine Type</label>
          {/* select html tag is a dropdown. The value on the select is the value for the select 
          and what will be sent to backend */}
          <select
            name="cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            id="cuisine"
          >
            {/* Take array of cuisineChoiceOptions, map through it and return option using 
            that index in array as value and option text */}
            {cuisineChoiceOptions.map((cuisineType, index) => (
              <option key={index} value={cuisineType}>
                {cuisineType}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="hasDelivery">Delivery?</label>
          {/* 
            When this checkbox input is either checked OR unchecked (when it changes values),
            the onChange will be triggered and will set hasDelivery Boolean to be the opposite.
            !boolean will change val of true --> false and false --> true

          */}
          <input
            type="checkbox"
            name="hasDelivery"
            id="hasDelivery"
            onChange={() => setHasDelivery(!hasDelivery)}
            readOnly
            // checkbox will be checked when hasDelivery is true and not checked when hasDelivery is false
            checked={hasDelivery}
          />
        </div>
        <div>
          <label htmlFor="photoUrl">Photo Url</label>
          <input
            type="text"
            name="photoUrl"
            onChange={(e) => setPhotoUrl(e.target.value)}
            value={photoUrl}
          />
        </div>
        <button>Add</button>
      </form>
      {/* 
        Check to see if errors. If there are errors, Object.keys(errors) creates an array
        of the keys in the error object. THen we map thorugh this array, and return a list
        of errors in p tag
      */}
      {errors
        ? Object.keys(errors).map((objKey, index) => (
            <p key={index}>{errors[objKey].message}</p>
          ))
        : null}
    </>
  );
};

export default RestaurantForm;
