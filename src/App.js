import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <label class="label" for="name">Enter name:</label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}}>Start</button>
      </header>
    </div>
  );
}

export default App;
