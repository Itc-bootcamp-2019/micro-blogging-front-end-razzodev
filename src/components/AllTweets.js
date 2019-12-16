import React, {  } from 'react';
import Tweet from "./Tweet";



function AllTweets(props) {
    const { list } = props;
    
    // const [ tweets , setNotTweets ] = useState([]);
    // useEffect(() => {
    //     setNotTweets([newTweet, ...tweets ])
    // },[newTweet,tweets]);

    return (
        <div /*style={{marginTop: '20px'}}*/>
            Hello
            {list.map((tweet, index) => 
                <Tweet key={tweet.timeCreated}
                 username={tweet.username}
                  timeCreated={tweet.timeCreated}
                   content={tweet.content} />
                )}
        </div>
    )
}

export default AllTweets

