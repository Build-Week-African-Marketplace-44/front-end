// libraries
import react, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// data
import { productList, locationsData, categoriesData } from "./data";

//components
<<<<<<< HEAD
import Dashboard from './components/Dashboard';
import MyItemsList from './components/MyItemsList';
import ProfileForm from './forms/ProfileForm';
import NewItemForm from './forms/NewItemForm';
import ItemsList from './components/ItemsList';
import Landing from './components/Landing';
=======
import Dashboard from "./components/Dashboard";
import MyItemsList from "./components/MyItemsList";
import ProfileForm from "./forms/ProfileForm";
import NewItemForm from "./forms/NewItemForm";
import ItemsList from "./components/ItemsList";
import Signup from "./forms/Signup";
import Login from "./forms/Login";

import PrivateRoute from "./components/PrivateRoute";

>>>>>>> a2583edc03bf206bb1794b465b64b25b73a4e301
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
<<<<<<< HEAD
      
        <div className="App">
          {/* <header className="App-header">
            <h1>African Marketplace</h1>
          </header> */}
            <Dashboard />
            <Router>
            <Switch>
              <Route path='/Landing' component={Landing}/> 
              <Route exact path='/' component={MyItemsList} />
              <Route path='/marketplace' component={ItemsList} />
              <Route path='/new-item' component={NewItemForm} />
              <Route path='/profile' component={ProfileForm} />
=======
      <div className='App'>
        <header className='App-header'>
          <h1>African Marketplace</h1>
        </header>
        <Router>
          {isLoggedIn ? <Dashboard setIsLoggedIn={setIsLoggedIn} /> : null}

          <Switch>
            <PrivateRoute exact path='/' component={MyItemsList} />
            <PrivateRoute exact path='/marketplace' component={ItemsList} />
            <PrivateRoute exact path='/new-item' component={NewItemForm} />
            <PrivateRoute exact path='/profile' component={ProfileForm} />
            <Route path='/signup' component={Signup} />
            <Route
              path='/login'
              render={(props) => {
                return <Login {...props} setIsLoggedIn={setIsLoggedIn} />;
              }}
            />
>>>>>>> a2583edc03bf206bb1794b465b64b25b73a4e301
          </Switch>
        </Router>
      </div>
    </MarketContext.Provider>
  );
};

export default App;
