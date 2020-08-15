import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {Provider} from 'react-redux' 

import Header from './components/Header';
import UpdatePage from './routes/UpdatePage';
import Home from './routes/Home';
import RestaurantPage from './routes/RestaurantPage';


import store from './store/store';


function App() {
  return (
    //bind a store 
    <Provider store={store}>  
        <div className="container">
          {/* put header */}
        <Header/>
        {/* make SPA App with switching via each page */}
            <Router >
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/restuarants/:id/update" component={UpdatePage}/>
                <Route exact path="/restuarants/:id" component={RestaurantPage}/>
              </Switch>
            </Router>
          
        </div>
    </Provider>
    
  );
}

export default App;
