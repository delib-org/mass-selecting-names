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
import Results from './view/pages/Results/Results';

function App(props) {
  console.dir(props)
  const[userName, setUserName] = useState(false);

  return (
    <Router>
      <div className='app'>
        <Nav />
        <Switch>
         <Route exact path="/">
            <AddingNames  setUserName={setUserName} userName={userName}/>
          </Route>
          <Route path="/add">
            <AddingNames  setUserName={setUserName} userName={userName}/>
          </Route>
          <Route path="/vote">
            <SelectNames />
          </Route>
           <Route path="/results">
            <Results />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
