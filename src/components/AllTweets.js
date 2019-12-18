import React, {  } from 'react';
import Tweet from "./Tweet";



function AllTweets(props) {
    const { list } = props;
    return (
        <div>
            {list.map((tweet, index) => 
                <Tweet key={tweet.date+tweet.userName}
                   content={tweet.content}
                   date={tweet.date}
                   userName={tweet.userName}
                   />
                )}
        </div>
    )
}

export default AllTweets

