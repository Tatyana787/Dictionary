import "./App.css";
import Dictionary from "./Dictionary";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          {" "}
          <h1 className="text-center"> DICTIONARY </h1>
        </div>
        <main>
          <Dictionary />
        </main>
      </header>
      <footer className="App-footer ">
        <small>Coded by TS</small>
      </footer>
    </div>
  );
}

export default App;
