import React, { useState } from 'react';
import './App.css';
import CreateTweet from './components/CreateTweet';
import Tweet from './components/Tweet';
import AllTweets from './components/AllTweets';

function App(props) {
  const [maxChar, setMaxChar] = useState(false);
  const maxCharCheck = () => {
      return (tweetContent.length > 140) ? setMaxChar(true) : setMaxChar(false);
  }

  const [ isValid , setIsValid ] = useState(false);
  const checkValid = () => {
      return (tweetContent.length > 0 && !maxChar) ? setIsValid(true) : setIsValid(false);
  };
  
  const [tweetContent, setTweetContent] = useState('');
  const tweetInput = (e) => {
      setTweetContent(e.target.value);
      maxCharCheck();
      checkValid();
  }
  
  const [ tweets , setTweets ] = useState([]);

  const submitTweet = () => {
      let newTweet = {
        content: tweetContent,
        userName: 'raz',
        date: new Date().toISOString()
      }
      setTweets([ newTweet , ...tweets]);
  };
  return (
    <div className="App">
      <CreateTweet maxChar={maxChar} disabled={!isValid} input={(e) => tweetInput(e)} submit={() => submitTweet()}  />
      <AllTweets list={tweets} />
    </div>
  );
}

export default App;
