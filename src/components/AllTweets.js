import React, {  } from 'react';
import Tweet from "./Tweet";



function AllTweets(props) {
    const { list } = props;
    return (
        <div>
            {list.map((tweet, index) => 
                <Tweet key={tweet.date+tweet.userName}
                 userName={tweet.userName}
                  date={tweet.date}
                   content={tweet.content} />
                )}
        </div>
    )
}

export default AllTweets

