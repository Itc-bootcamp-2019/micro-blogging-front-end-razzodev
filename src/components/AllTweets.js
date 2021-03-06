import React from "react";
import Tweet from "./Tweet";

function AllTweets(props) {
  const { list } = props;
  return (
    <div>
      {list.map(tweet => (
        <Tweet
          key={tweet.date + tweet.userName + Math.floor(Math.random * 100) + 1}
          content={tweet.content}
          date={tweet.date}
          userName={tweet.userName}
        />
      ))}
    </div>
  );
}

export default AllTweets;
