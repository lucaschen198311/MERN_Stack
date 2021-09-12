import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import QuoteList from "./components/QuoteList";

class App extends Component {
  // in constructor is where we definestate
  constructor() {
    // MUST call super to have access to React's Component class
    super();
    this.state = {
      quotes: [],
    };
  }

  // This run on FIRST component render and NOT again!
  componentDidMount() {
    axios
      .get("https://api.quotable.io/quotes?limit=10")
      .then((response) => this.setState({ quotes: response.data.results }))
      .catch((err) => console.log(err));
  }

  // Every time a component updates, this function will run
  componentDidUpdate() {
    console.log("updated");
  }

  // define method for the App class
  changeWord() {
    // We change state of class components using setState
    this.setState({ word: "goodbye" });
  }
  // the render method runs on original compnent render, then after every compnent update to state or props
  render() {
    console.log("inside render function");
    return (
      <div className="App">
        <h1>App</h1>
        <h2>count: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase Count
        </button>
        <button onClick={() => this.setState({ count: 0 })}>Count to 0</button>
        <h2>word: {this.state.word}</h2>
        <button onClick={() => this.changeWord()}>Change Word</button>
        <QuoteList quotes={this.state.quotes} />
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div className="App">
//       <h1>App</h1>
//     </div>
//   );
// };

export default App;
