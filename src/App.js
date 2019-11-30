import React, {useState} from 'react';
import './App.css';

import { useParams} from "react-router";
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
      <div>
       <Nav />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
