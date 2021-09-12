import DisplayAllRestaurants from "../components/DisplayAllRestaurants";
import RestaurantForm from "../components/RestaurantForm";
import React, { useState } from "react";
// We create the Main view because it will contain two diff components: Form and DisplayAll
const Main = () => {
  // We will use this dummy state variable as the second arg in useEffect.
  // We have to lift the state up to the Main view because both components use this state var
  const [formSubmittedBoolean, setFormSubmittedBoolean] = useState(false);
  return (
    <div>
      <RestaurantForm
        formSubmittedBoolean={formSubmittedBoolean}
        setFormSubmittedBoolean={setFormSubmittedBoolean}
      />
      <hr />
      <DisplayAllRestaurants
        formSubmittedBoolean={formSubmittedBoolean}
        setFormSubmittedBoolean={setFormSubmittedBoolean}
      />
    </div>
  );
};

export default Main;
