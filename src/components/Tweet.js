import React from 'react';
import './TweetStyle.css';

function Tweet(props) {
    const { username, timeCreated, content } = props;
    return (
        <div id='tweetCont'>
            <div>
                <h4 id='tweetUsername'>{username}</h4>
                <h4 id='tweetTime'>{timeCreated}</h4>
            </div>
            <h3 id='tweetContent'>{content}</h3>
        </div>
    )
}

export default Tweet
