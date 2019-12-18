import React, {  } from 'react';
import './CreateTweetStyle.css';


function CreateTweet(props) {
    const { maxChar , input , disabled , submit } = props;

    return (
        <div className='create-tweet-wrapper'>
            <textarea id='tweetInput' placeholder='What you have in mind...'
                onChange={input} />
            <div>
                {maxChar && <div id='maxCharWarning'>The tweet can't contain more than 140 chars.</div>}
                <button id='tweetButton' disabled={disabled} onClick={submit} >Tweet</button>
            </div>
        </div>
    )
}

export default CreateTweet
