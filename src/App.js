import logo from "../src/assets/home-img.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="image-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          WAKAMANN <br /> Like you, different
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coming soon...
        </a>
      </header>
    </div>
  );
}

export default App;
