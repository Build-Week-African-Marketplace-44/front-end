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
import ItemPage from "./components/ItemPage";
import Signup from "./forms/Signup";
import Login from "./forms/Login";

import PrivateRoute from "./components/PrivateRoute";
import axiosWithAuth from "./utils/axiosWithAuth"


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
  const [myUserId, setMyUserId] = useState("");

useEffect(() => {
  if(localStorage.getItem('token')) {
    setIsLoggedIn(true);
  }
  if(localStorage.getItem('myUserId')) {
    setMyUserId(localStorage.getItem('myUserId'))
  }
  getItemsData();
}, [])

const getItemsData = () => {
  axiosWithAuth()
    .get("/items")
    .then((req) => {
      // console.log(req.data)
      setItems(req.data);
      console.log(items);
    })
    .catch((err) => {
      console.log(err);
    });
};

  return (
    <MarketContext.Provider value={[items, setItems, locations, categories, myUserId]}>
      <div className='App'>
        <Router>
          {isLoggedIn ? <Dashboard setIsLoggedIn={setIsLoggedIn} /> : null}

          <Switch>
            <PrivateRoute exact path='/' component={MyItemsList} />
            <PrivateRoute exact path='/marketplace' component={ItemsList} />
            <PrivateRoute exact path='/new-item' component={NewItemForm} />
            <PrivateRoute path="/item/:id" component={ItemPage} />
            <PrivateRoute exact path='/profile' component={ProfileForm} />
            <Route path='/signup' component={Signup} />
            <Route
              path='/login'
              render={(props) => {
                return <Login {...props} setIsLoggedIn={setIsLoggedIn} setMyUserId={setMyUserId}/>;
              }}
            />
          </Switch>
        </Router>
      </div>
    </MarketContext.Provider>
  );
};

export default App;
