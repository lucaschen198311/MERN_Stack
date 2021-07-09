//import logo from './logo.svg';
import './App.css';
import Person from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person firstName={"Doe"} lastName={"Jane"} age={45} hairColor={"Black"} />
      <Person firstName={"Smith"} lastName={"John"} age={88} hairColor={"White"} />
      <Person firstName={"Fillmore"} lastName={"Millard"} age={50} hairColor={"Brown"} />
      <Person firstName={"Smith"} lastName={"Maria"} age={62} hairColor={"Brown"} />
    </div>
  );
}

export default App;
