import { navigate } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";

const DisplayRestaurant = (props) => {
  const { restaurantId } = props;
  const [restaurantInfo, setRestaurantInfo] = useState();
  // To display individual restaurant info, we need to query
  // The individual restaurant's data! So we do it on original component render
  useEffect(() => {
    axios
      // pack restaurantId variable into url
      .get(`http://localhost:8000/api/restaurant/${restaurantId}`)
      // upon successful axios get request, add restaurant data from db to state variable
      .then((queriedRestaurant) => {
        console.log(queriedRestaurant.data.restaurant);
        setRestaurantInfo(queriedRestaurant.data.restaurant);
      })
      .catch((err) => console.log(err.response));
  }, []);

  // Function to delete restaurant in db.
  // Takes in id as arg, puts mongo id in url as a param for backend.
  // The id comes from below inside the JSX where we map through all restaurants
  const deleteRestaurant = (id) => {
    axios
      // pack mongo_id into url
      .delete(`http://localhost:8000/api/restaurant/${id}`)
      // upon successful deletion, navigate to "/" which will trigger render
      // of Main component so DisplayAllRestaurants useEffect will be triggered,
      // getting update query of all documents in Restaurant collection
      .then((response) => {
        console.log("deletion successful");
        navigate("/");
      })
      .catch((err) => console.log("error deleitng restaurant", err));
  };

  return (
    <>
      {/* 
        We check to make sure restaurantInfo is defined because we get the data for restaurantInfo from axios promise.
        So this state variable is not defined until that promise is successful. When restaurantInfo is set, component will rerender
        because if ANY state variable changes AT ALL the react component will be rerendered
      */}
      {restaurantInfo ? (
        <div>
          <h1>Display Restaurant</h1>
          <p>{restaurantInfo.name}</p>
          <p>{restaurantInfo.cuisine}</p>
          <p>{restaurantInfo.zipcode}</p>
          <p>{restaurantInfo.hasDelivery}</p>
          {/* When this button is clicked, trigger deleteRestaurant with mongo doc _id */}
          <button onClick={() => deleteRestaurant(restaurantInfo._id)}>
            DELETE
          </button>
        </div>
      ) : (
        <h1>DTA IS LOADING</h1>
      )}
    </>
  );
};

export default DisplayRestaurant;
