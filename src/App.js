import React, { useState } from 'react';
import './App.css';
import CreateTweet from './components/CreateTweet';
import Tweet from './components/Tweet';
import AllTweets from './components/AllTweets';

function App() {
  
  return (
    <div className="App">
      <CreateTweet  />
      {/* <AllTweets /> */}
      <Tweet username='bob' timeCreated='just now' 
      content='Nisi dolore ad ex magna nostrud voluptate enim nulla magna.' />
    </div>
  );
}

export default App;
