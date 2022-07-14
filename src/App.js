import './App.css';
import { TdlistsContainer } from "./TdlistsContainer";

function App() {
  return (
    <div className="mainContainer">
      <div className="topHeading">
        <h1>A Simple To-Do List App</h1>
      </div>
      <TdlistsContainer />
    </div>
  );
}

export default App;
