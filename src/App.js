// libraries
import react, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// data
import { productList, locationsData, categoriesData } from "./data";

//components
import Dashboard from "./components/Dashboard";
import MyItemsList from "./components/MyItemsList";
import ProfileForm from "./forms/ProfileForm";
import NewItemForm from "./forms/NewItemForm";
import ItemsList from "./components/ItemsList";
import Signup from "./forms/Signup";
import Login from "./forms/Login";

// contexts
import { MarketContext } from "./contexts/MarketContext";

// styles
import "./App.css";

// export const MarketContext = createContext();
const App = () => {
  const [items, setItems] = useState(productList);
  const [locations, setLocations] = useState(locationsData);
  const [categories, setCategories] = useState(categoriesData);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <MarketContext.Provider value={[items, setItems, locations, categories]}>
      <div className='App'>
        <header className='App-header'>
          <h1>African Marketplace</h1>
        </header>
        <Router>
          <Dashboard setIsLoggedIn={setIsLoggedIn}/>

          <Switch>
            <Route exact path='/' component={MyItemsList} />
            <Route path='/marketplace' component={ItemsList} />
            <Route path='/new-item' component={NewItemForm} />
            <Route path='/profile' component={ProfileForm} />
            <Route path='/signup' component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    </MarketContext.Provider>
  );
};

export default App;
