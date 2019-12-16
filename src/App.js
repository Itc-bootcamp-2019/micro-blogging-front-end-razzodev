import React from 'react';
import './App.css';
import CreateTweet from './components/CreateTweet';
import Tweet from './components/Tweet';

function App() {
  return (
    <div className="App">
      <CreateTweet  />
      <Tweet username={'raz'}
      timeCreated={new Date().toISOString()}
      content={'foobar!'}/>
    </div>
  );
}

export default App;
