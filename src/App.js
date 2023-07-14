import logo from './logo.svg';
import HelloComponent from './HelloComponent.js';
import './App.css';

const App = () => {
  return (
    <div id="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <HelloComponent />
    </div>
  );
};

export default App;
