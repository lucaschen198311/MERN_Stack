import "./App.css";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import DisplayInt from "./components/DisplayInt";
import DisplayIntStr from "./components/DIsplayIntStr";
function App() {
  return (
    <div className="App">
      {/* Inside router component is the routes that will display components */}
      <Router>
        {/* ===== STATIC ROUTES ===== */}
        {/* localhost:3000 is the route */}
        <Home path="/" />
        {/* localhost:3000/contact is the route */}
        <Contact path="/contact" />
        {/* localhost:3000/about is the route. This will display About compoennt */}
        <About path="/about" />
        {/* ===== DYNAMIC ROUTES ===== */}
        {/* So we want to pull a variable off of the url. what is after the : will be 
            available in the props object for that component. i.e. props.int
            Routes that will hit this component: localhost:8000/display/8, localhost:8000/display/50, localhost:8000/display/300
        */}
        <DisplayInt path="/display/:int" />
        {/* Routes that will hit this component: localhost:8000/display/8/hello/red, localhost:8000/display/50/yo/blue, localhost:8000/display/300/hi/white */}
        <DisplayIntStr path="/display/:int/:str/:color" />
      </Router>
    </div>
  );
}

export default App;
