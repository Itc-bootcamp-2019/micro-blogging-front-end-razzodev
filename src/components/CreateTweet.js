import React, { useState, useEffect } from "react";
import "./CreateTweetStyle.css";

function CreateTweet(props) {
  const { submit } = props;
  const [maxChar, setMaxChar] = useState(false); // limit tweet to 140 characters
  const maxCharCheck = () => {
    return tweetContent.length > 140 ? setMaxChar(true) : setMaxChar(false);
  };

  const [isValid, setIsValid] = useState(false); // enable-disable submit button
  const checkValid = () => {
    return tweetContent.length > 0 && !maxChar
      ? setIsValid(true)
      : setIsValid(false);
  };

  const [tweetContent, setTweetContent] = useState("");

  useEffect(() => {
    maxCharCheck();
    checkValid();
    return () => {};
  }, [tweetContent]);

  return (
    <div className="create-tweet-wrapper">
      <textarea
        id="tweetInput"
        value={tweetContent}
        placeholder="What you have in mind..."
        onChange={e => setTweetContent(e.target.value)}
      />
      <div>
        {maxChar && (
          <div id="maxCharWarning">
            The tweet can't contain more than 140 chars.
          </div>
        )}
        <button
          id="tweetButton"
          disabled={!isValid}
          onClick={() => {
            submit(tweetContent);
            setTweetContent("");
          }}
        >
          Tweet
        </button>
      </div>
    </div>
  );
}

export default CreateTweet;
