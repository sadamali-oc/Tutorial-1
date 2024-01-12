import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome First Project</h1>
        <button className="click-me" onClick={() => navigate("/users")}>
          Click Me
        </button>
      </header>
    </div>
  );
}

export default App;
