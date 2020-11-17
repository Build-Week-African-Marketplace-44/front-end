// libraries
import react, { useState, useEffect, createContext } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// data
import { productList, locationsData, categoriesData } from './data'

//components
import Dashboard from './components/Dashboard';
import MyItemsList from './components/MyItemsList';
import ProfileForm from './forms/ProfileForm';
import NewItemForm from './forms/NewItemForm';
import ItemsList from './components/ItemsList';

// contexts
import { MarketContext } from './contexts/MarketContext';

// styles
import './App.css';

// export const MarketContext = createContext();
const App = () => {

  const [items, setItems] = useState(productList)
  const [locations, setLocations] = useState(locationsData)
  const [categories, setCategories] = useState(categoriesData)

  return (

<<<<<<< HEAD
    <MarketContext.Provider value={[items, setItems]}>

=======
    <MarketContext.Provider value={[items, setItems, locations, categories]}>
      
>>>>>>> 849bb25f923c0d50a4cd675d23b5f61c05bc51f9
        <div className="App">
          <header className="App-header">
            <h1>Sauti Marketplace</h1>
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
