import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Navigation />
        <Main>
            <div className="sub">
              <SubContents />
              <SubContents />
              <SubContents />
            </div>
            <Advertisement />
        </Main>
      </div>
    </div>
  );
}

export default App;
