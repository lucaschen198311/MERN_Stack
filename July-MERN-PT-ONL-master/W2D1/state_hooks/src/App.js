import React, { useState } from "react";
import "./App.css";
import Beatle from "./components/Beatle";

// This is the array of objects we will use the map function on
// and feed the key/val pairs as props to Beatle component
const theBeatles = [
  {
    name: "John Lennon",
    instrument: "guitar",
    likes: 4,
  },
  {
    name: "Paul McCartney",
    instrument: "bass",
    likes: 8,
  },
  {
    name: "George Harrisson",
    instrument: "guitar",
    likes: 4,
  },
  {
    name: "Ringo Starr",
    instrument: "drums",
    likes: 2,
  },
];

function App() {
  // notice how statement below does NOT print when changing
  // local state via useState hook in Beatle component, but does print
  // when changing random word
  console.log("APP COMPONENT RERENDERS");

  // This is an example of using the useState hook for component state.
  // We destructure the return value of the useState() function.
  // The randomWord variable will hold the current stateful value, and the
  // setRandomWord function is what we will use to CHANGE the current state value
  const [randomWord, setRandomWord] = useState("goofball");

  const handleSetRandomWord = () => {
    console.log("HANDLESETRANDOMBLAH CLICKED");
    setRandomWord("peanutbutter");
  };

  // REMINDER: inside of the return() is JSX!
  return (
    <div className="App">
      {/* We can display the current value of a state variable inside JSX like this... */}
      <h1>Random word is {randomWord}</h1>
      {/* 
        We can change the current value of a state variable by providing a function 
        to the synthetic event "onClick". A synthetic event is responding to user action 
        of our app. In this case we are responding to the event of a user clicking this button,
        hence "onClick". In this case, when the user clicks the button, we will run the
        handleSetRandomWord function above. We do not need to pass this function the user
        event as an argument because in this case our state change is STATIC (changing the 
        random word to the same word "peanutbutter" every time ) NOTICE PLEASE how we do not feed 
        the onClick handleSetRandomWord() but we feed it handleSetRandomWord WITHOUT THE ()'s!!!
      */}
      <button onClick={handleSetRandomWord}>Change word</button>

      {/* map through theBeatles array of objects and feed key/val pairs as props to Beatle component*/}
      {theBeatles.map((beatle, index) => {
        return (
          // Feeding props to a component
          <Beatle
            name={beatle.name}
            instrument={beatle.instrument}
            likes={beatle.likes}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default App;
