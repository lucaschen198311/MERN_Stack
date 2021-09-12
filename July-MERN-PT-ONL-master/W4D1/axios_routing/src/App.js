import "./App.css";
import { useEffect, useState } from "react";
// must import axios to use it
import axios from "axios";

function App() {
  const [people, setPeople] = useState([]);
  // useEffect hook. This automatically runs on original component render
  // When the useEffect hook will be called again after original render depends on second arg provided.
  // Since the arg is [] with no variable inside it only runs on render and never again
  useEffect(() => {
    console.log("useEffect function invoked");
    // axios is promise based http client
    // axios.get returns a promise. when we want to run a promise we HAVE TO HAVE
    // a then and catch block
    axios
      .get("https://swapi.dev/api/people")
      // success block runs if axios.get promise is resolved
      // In this cases, we use the setPeople hook function to set the people state variable
      .then((response) => setPeople(response.data.results))
      // error block run if axios.get promise is rejeced
      .catch((err) => console.log(err));
  }, []);
  console.log("COMPONENT RENDER");
  return (
    <div className="App">
      {/* map through people data from api */}
      {/* The && is a conditional - what is after && will run only if the condition people.length > 0 is true */}
      {people.length > 0 &&
        people.map((person, index) => (
          <div key={index}>
            <p>{person.name}</p>
            <p>{person.gender}</p>
            <hr />
          </div>
        ))}
    </div>
  );
}

export default App;
