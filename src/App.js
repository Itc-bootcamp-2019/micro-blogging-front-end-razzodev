import React, { useState , useEffect } from 'react';
import './App.css';
import CreateTweet from './components/CreateTweet';
import AllTweets from './components/AllTweets';

function App(props) {
  const inStorage = localStorage.getItem('tweets');
  const [ tweets , setTweets ] = useState(
    JSON.parse(inStorage) || []
  );
  
  const submitTweet = (tweetContent) => {
      let newTweet = {
        content: tweetContent,
        date: new Date().toISOString(),
        userName: 'raz',
      }
      setTweets([ newTweet , ...tweets]);
  };

  useEffect(() => {
    localStorage.setItem('tweets', JSON.stringify(tweets)); 
  },[tweets]);

  return (
    <div className="App">
      <CreateTweet submit={(e) => submitTweet(e)} />
      <AllTweets list={tweets} />
    </div>
  );
}

export default App;
