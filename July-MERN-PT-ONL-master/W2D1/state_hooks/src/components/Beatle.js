// We need to import the useState function in order to use it! :)
import React, { useState } from "react";

// We need to add props to our function argument in order to access the props
// passed by the App component
const Beatle = (props) => {
  // Notice how this statemenet prints upon initial render, then EVERY TIME
  // we update stateLikes with setStateLikes
  console.log("BEATLE COMPONENT RERENDERS");

  // Destructure props. props is just an object! so we destructure this object
  // and "pull off" the key/val pairs as variables.
  const { name, instrument, likes } = props;

  // stateLikes represent the current value of our state variable, setStateLikes
  // is the function to change this state value
  const [stateLikes, setStateLikes] = useState(likes);
  return (
    <div>
      <h2>{name}</h2>
      <h2>{instrument}</h2>

      {/* use state variable value in JSX */}
      <h2>{stateLikes}</h2>
      {/*
        Notice how here, we respond to the onClick synthetic event with a function written
        into the onClick event, rather than utilizing a function written outside of JSX like in the 
        App component. 
      */}
      <button onClick={() => setStateLikes(stateLikes + 1)}>LIKE</button>
    </div>
  );
};
export default Beatle;
