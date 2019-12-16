import React, { useState , useEffect } from 'react';
import Tweet from "./Tweet";



function AllTweets(props) {
    const { newTweet } = props;
    const [ tweets , setTweets ] = useState([]);

    useEffect(() => {
        setTweets([newTweet, ...tweets ])
    },[newTweet,tweets]);

    return (
        <div /*style={{marginTop: '20px'}}*/>
            {tweets.map(tweet => 
                <Tweet username={tweet.username} timeCreated={tweet.timeCreated} content={tweet.content} />
                )}
        </div>
    )
}

export default AllTweets

