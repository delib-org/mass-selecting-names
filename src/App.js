import React, { useState, useEffect } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import DB from './control/firebase';
//components
import Nav from './view/components/nav/Nav';
//pages
import AddingNames from './view/pages/AddingNames/AddingNames';
import SelectNames from './view/pages/SelectNames/SelectNames';
import Results from './view/pages/Results/Results';


function App(props) {

  const [userName, setUserName] = useState(false);
  const [names, setNames] = useState([]);
  

  function getNames() {
    return DB.collection('groups')
      .doc('0nWDzSq0oFoqBXTQJJ6w')
      .collection('questions')
      .doc('AhNnQ5GMhN3xMCFYwQp9')
      .collection('subQuestions')
      .doc('79awrIGoQqrJVmo7p0LO')
      .collection('options')
      .onSnapshot(namesDB => {

        let namesTmp = [];
        namesDB.forEach(nameDB => {
          let nameTmp = nameDB.data();
          nameTmp.id = nameDB.id
          namesTmp.push(nameTmp)
          if(!nameTmp.averageSelections){
            
          }
        })

        namesTmp.filter((a,b)=> a.averageSelections - b.averageSelections)

        setNames(namesTmp);
       
        
      })
  }

  useEffect(() => {
    return getNames();

  }, [])


  return (
    <Router>
      <div className='app'>
        <Nav />
        <Switch>
          <Route exact path="/">
            <AddingNames setUserName={setUserName} userName={userName} />
          </Route>
          <Route path="/add">
            <AddingNames setUserName={setUserName} userName={userName} />
          </Route>
          <Route path="/vote">
            <SelectNames />
          </Route>
          <Route path="/results">
            <Results names={names} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
