import React, { useState } from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


//components
import Nav from './view/components/nav/Nav';
//pages
import AddingNames from './view/pages/AddingNames/AddingNames';
import SelectNames from './view/pages/SelectNames/SelectNames';

function App() {

  return (
    <Router>
      <div className='app'>
        <Nav />
        <Switch>
          <Route path="/add">
            <AddingNames />
          </Route>
          <Route path="/vote">
            <SelectNames />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
