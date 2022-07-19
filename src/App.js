import { useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";


// pages import
import Enter from "./Pages/Enter"
import Main from "./Pages/Main"
import Lost from "./Pages/Lost"

// components import
import MainNavigation from "./components/MainNavigation"

//  context import
import { SearchContext } from "./context/search"


function App(){
  const [animeData, setAnimeData] = useState([])
  const [singleData, setSingleData] = useState({})

  const setData = (data) => {
    setAnimeData(data);

  }

  const setSingle = (data) => {
    setSingleData(data);
  }

  const search = (searchTerm) => {
    return fetch (
      `https://api.jikan.moe/v4/anime?q=${searchTerm}$limit=20`
    ).then((response) => response.json());
  }




  return (
    <div className="App">
  <SearchContext.Provider value={{search, animeData, setData, singleData, setSingle}} >
   <Router>
<main>
<Switch>
<Route exact path= "/">
  <Enter/>
</Route>
<Route path= "/main">
  <Main/>
</Route>
<Route path= "/lost">
  <Lost/>
</Route>
<Redirect to="/" />
</Switch>

</main>



   </Router>
   </SearchContext.Provider>
    </div>
  );
}

export default App;
