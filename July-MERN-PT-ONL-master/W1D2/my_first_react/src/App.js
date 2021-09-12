import logo from "./logo.svg";
import "./App.css";
import Name from "./components/Name";

const App = () => {
  return (
    <div className="App">
      {/* Below is how we nest the Name component inside the App component */}
      <Name name={"Matilda"} age={36} />
    </div>
  );
};

export default App;
