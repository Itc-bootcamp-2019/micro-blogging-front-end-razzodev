import React from 'react';
import './TweetStyle.css';

function Tweet(props) {
    const { userName, date, content } = props;
    return (
        <div id='tweetCont'>
            <div>
                <h4 id='tweetUsername'>{userName}</h4>
                <h4 id='tweetTime'>{date}</h4>
            </div>
            <h3 id='tweetContent'>{content}</h3>
        </div>
    )
}

export default Tweet
