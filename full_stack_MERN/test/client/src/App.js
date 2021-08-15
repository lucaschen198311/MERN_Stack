import logo from "./logo.svg";
import "./App.css";
import Main from "../src/views/Main";
import { Router } from "@reach/router";
import EditPet from "./views/EditPet";
import DisplayPet from "./views/DisplayPet";
import AddPet from './views/AddPet';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <AddPet path="/pets/new" />
        <EditPet path="/pets/edit/:id" />
        <DisplayPet path="/pets/:id" />
      </Router>
    </div>
  );
}

export default App;
