import React, { useState } from 'react';
import './CreateTweetStyle.css';


function CreateTweet(props) {

    const [maxChar, setMaxChar] = useState(false);
    const maxCharCheck = () => {
        return (tweetContent.length > 140) ? setMaxChar(true) : setMaxChar(false);
    }
    const [ isValid , setIsValid ] = useState(false);
    const checkValid = () => {
        (tweetContent.length > 0 && !maxChar) ? setIsValid(true) : setIsValid(false);
    };
    
    const [tweetContent, setTweetContent] = useState('');
    const tweetInput = (e) => {
        setTweetContent(e.target.value);
        maxCharCheck();
        checkValid();
    }
    
    const [ currentTweet, setCurrentTweet] = useState({});

    const submitTweet = () => {
        setCurrentTweet({
            username:'raz',
            timeCreated: new Date().toISOString(),
            content: tweetContent,
        });
        console.log(currentTweet); // FIRST CLICK RETURNS EMPTY OBJECT --ASYNC(?)
    }

    return (
        <div className='create-tweet-wrapper'>
            <textarea id='tweetInput' placeholder='What you have in mind...'
                onChange={(e) => tweetInput(e)} />
            <div>
                {maxChar && <div id='maxCharWarning'>The tweet can't contain more than 140 chars.</div>}
                <button id='tweetButton' disabled={!isValid} onClick={() => submitTweet()} >Tweet</button>
            </div>
        </div>
    )
}

export default CreateTweet
