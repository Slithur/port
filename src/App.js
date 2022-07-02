import { Route } from "react-router-dom";

// pages import
import Enter from "./Pages/Enter"
import Main from "./Pages/Main"
import Lost from "./Pages/Lost"

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path = "/">
      <Enter />
      </Route>

      <Route path = "/main">
      <Main />
      </Route>

      <Route path = "/lost">
        <Lost />
      </Route>
    </div>
  );
}

export default App;
