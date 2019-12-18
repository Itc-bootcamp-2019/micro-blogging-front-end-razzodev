import './App.css';
import React, { useState , useEffect } from 'react';
import { getTweets , postTweets } from './lib/api'
import CreateTweet from './components/CreateTweet';
import AllTweets from './components/AllTweets';

function App(props) {
  
  const [ loading , setLoading ] = useState(true);
  const [ tweets , setTweets ] = useState([]);
  
  const submitTweet = (tweetContent) => {
      let newTweet = {
        content: tweetContent,
        date: new Date().toISOString(),
        userName: 'aba',
      }
      try{
        postTweets(newTweet);
        getTweets().then(data => setTweets(data))
      } catch (error) {
        alert(error);
      }
  }; 

  useEffect(() => {
    setInterval(() => 
    getTweets().then(data => setTweets(data)).then(() => setLoading(false))
    , 5000)
  },[]);

  return (
    <div className="App">
      <CreateTweet submit={(e) => submitTweet(e)} />
      {loading && <h3>Loading...</h3>}
      <AllTweets list={tweets} />
    </div>
  );
}

export default App;
