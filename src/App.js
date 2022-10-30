import "./App.css";
import Dictionary from "./Dictionary";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
          {" "}
          <h1 className="text-center"> DICTIONARY </h1>
  
        </header>
        <main>
          <Dictionary />
        </main>
     
      <footer className="App-footer ">
        <small> 
         <a href="https://github.com/Tatyana787/dictionary"> Open-source code </a> by Tanya Stadnyk</small>
      </footer>
    </div>
  );
}

export default App;
