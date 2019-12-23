import React, { useState } from "react";
import "./App.css";
import { UserNameContext } from "./context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function App(props) {
  const [userName, setUsername] = useState("Guest");
  // getCafes();
  return (
    <div className="App">
      <UserNameContext.Provider value={{ userName, setUsername }}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Router>
      </UserNameContext.Provider>
    </div>
  );
}

export default App;
