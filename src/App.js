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
import Login from './view/pages/Login/Login';

window.allNames = [];



function App(props) {

  // const [allNames, setAllNames] = useState([])
  const [userObj, setUserObj] = useState({
    email: '',
    isAnonymous: '',
    displayName: '',
    login: false
  })

  useEffect(() => {


    window.firebase.auth().signInAnonymously().catch(function (error) {

      console.error(error)

    });

    window.firebase.auth().onAuthStateChanged(user => {
      if (user) {

        setUserName(user);
        DB.collection('users').doc(user.uid).set({
          email: user.email,
          isAnonymous: user.isAnonymous,
          displayName: user.displayName,
          login: true
        })
      } else {
        console.log('No user is signed in.');
        setUserObj({
          email: '',
          isAnonymous: '',
          displayName: '',
          login: false
        })
      }
    });


  }, [])

  const [userName, setUserName] = useState(false);
  const [names, setNames] = useState([]);
  const [randNames, setRandNames] = useState([])


  function getNames() {
    console.log('get games')
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
          nameTmp.randomOrder = Math.random();
          namesTmp.push(nameTmp)
          if (!nameTmp.averageSelections) {
            nameTmp.averageSelections = 0;
          }
        })

        //sort names for "results'
        namesTmp.sort((a, b) => b.averageSelections - a.averageSelections)
        setNames(namesTmp);

        console.log(namesTmp)

        return namesTmp;

        //random sort array;
        // let tmpRands = namesTmp.sort((a, b) => b.randomOrder - a.randomOrder);

        //just if no names in the array, get random names from DB

        // if (randNames.length == 0) {
        //   console.dir(randNames)
        //   setRandNames(tmpRands);

        // }

        // setAllNames(randonNames)


      })
  }


  useEffect(() => {
    getNames()

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
            <AddingNames setUserName={setUserName} userName={userName} allNames={window.allNames} />
          </Route>
          <Route path="/vote">
            <SelectNames setRandNames={setRandNames} randNames={randNames} names={names} />
          </Route>
          <Route path="/results">
            <Results names={names} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


