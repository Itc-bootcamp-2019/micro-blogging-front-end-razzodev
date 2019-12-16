import React, { useState } from 'react';
import './CreateTweetStyle.css';


function CreateTweet(props) {
    const [ tweet , setTweet ] = useState('');
    const [ maxChar , setMaxChar ] = useState(false);
    
    const tweetInput = (e) => {
        setTweet(e.target.value);
        maxCharCheck();
    }

    const maxCharCheck = () => {
        return (tweet.length > 140) ? setMaxChar(true) : setMaxChar(false);
    }

    return (
        <div className='create-tweet-wrapper'>
            <input id='tweetInput' type='textarea'
                placeholder='What you have in mind...'
                onChange={(e) => tweetInput(e)} />
            <div> 
                {maxChar && <div id='maxCharWarning'>The tweet can't contain more than 140 chars.</div>}
                <button id='tweetButton' >Tweet</button>
            </div>
        </div>
    )
}

export default CreateTweet
