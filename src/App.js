
import react, { useState, useEffect, createContext } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { productList } from './data'
import Dashboard from './components/Dashboard';
import MyItemsList from './components/MyItemsList';
import ProfileForm from './forms/ProfileForm';
import NewItemForm from './forms/NewItemForm';
import ItemsList from './components/ItemsList';

import './App.css';

export const MarketContext = createContext();
const App = () => {
  const [items, setItems] = useState(productList)

  return (

    <MarketContext.Provider value={[items, setItems]}>
      
        <div className="App">
          <header className="App-header">
            <h1>African Marketplace</h1>
          </header>
            <Dashboard />
            <Router>
            <Switch>
              <Route exact path='/' component={MyItemsList} />
              <Route path='/marketplace' component={ItemsList} />
              <Route path='/new-item' component={NewItemForm} />
              <Route path='/profile' component={ProfileForm} />
          </Switch>
          </Router>
        </div>
     
    </MarketContext.Provider>
  );
}

export default App;
