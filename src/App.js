import logo from "../src/assets/home-img.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="image-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <h1>WAKAMANN</h1> <h3>Like you, different</h3>
        </div>
        <br />
        <a className="App-link" href="#" rel="noopener noreferrer">
          Coming soon...
        </a>
        <div>
          📍 Buea - Mayor Street <br />
          📞 680-541-820
        </div>
      </header>
    </div>
  );
}

export default App;
