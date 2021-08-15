import logo from "./logo.svg";
import "./App.css";
import Main from "../src/views/Main";
import { Router } from "@reach/router";
import EditRestaurant from "./components/EditRestaurant";
import DisplayRestaurant from "./components/DisplayRestaurant";

function App() {
  return (
    <div className="App">
      {/* We put our app urls inside the <Router> component */}
      <Router>
        <Main path="/" />
        {/* the ":" signifies that we are expecting a dynamic value in that spot in the url. 
            Both EditRestaurant and DIsplayRestaurant will have access to the value for restaurantsId
            as props.restaurantId
        */}
        <EditRestaurant path="/:restaurantId/edit" />
        <DisplayRestaurant path="/:restaurantId" />
      </Router>
    </div>
  );
}

export default App;
