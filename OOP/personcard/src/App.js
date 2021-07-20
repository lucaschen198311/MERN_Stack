import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"John"} lastName={"Dole"} age={45} hariColor={"Black"}/>
      <PersonCard firstName={"John"} lastName={"Smith"} age={88} hariColor={"Brown"}/>
      <PersonCard firstName={"Fillmore"} lastName={"Millard"} age={50} hariColor={"White"}/>
      <PersonCard firstName={"Maria"} lastName={"Smith"} age={62} hariColor={"Gold"}/>
    </div>
  );
}

export default App;
