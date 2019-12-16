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

  const [ currentTweet, setCurrentTweet] = useState({ name: 'raz', timeCreated:'', content:'',});
  const submitTweet = () => {
       setCurrentTweet({
          username:'raz',
          timeCreated: new Date().toISOString(),
          content: tweetContent,
      });
      setTweets([ currentTweet , ...tweets]);
      console.log(currentTweet); // FIRST CLICK RETURNS EMPTY OBJECT --ASYNC(?)
  };



  return (
    <div className="App">
      <CreateTweet maxChar={maxChar} disabled={!isValid} input={(e) => tweetInput(e)} submit={() => submitTweet()}  />
      <AllTweets list={tweets} />
      {/* <Tweet username='bob' timeCreated='just now' 
      content='Nisi dolore ad ex magna nostrud voluptate
       enim nulla magna.' /> */}
    </div>
  );
}

export default App;
