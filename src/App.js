import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile'
import Navbar from './components/Navbar';

function App(props) {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
