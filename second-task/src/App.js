import Witness from "./Components/witness";
import './/stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <div className="main_container">
        <h1>
          Here is what our alumni say about freeCodeCamp:
        </h1>
        <Witness />
      </div>
    </div>
  );
}

export default App;
