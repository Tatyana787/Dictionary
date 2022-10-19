import "./App.css";
import Dictionary from "./Dictionary";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          {" "}
          <Button type="button" class=" btn btn-danger">
            Danger
          </Button>
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
