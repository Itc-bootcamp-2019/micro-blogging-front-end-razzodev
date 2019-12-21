import React, { useState } from 'react';
import './App.css';
import { UserNameContext } from './context'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile'
import Navbar from './components/Navbar';

function App(props) {
  const [ name , setName ] = useState('Guest');
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/profile'>
            <UserNameContext.Provider value={name}>
            <Profile />
            </UserNameContext.Provider>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
