import React, { useState, useEffect , useContext } from 'react';
import { getTweets, postTweets } from '../lib/api'
import { UserNameContext } from '../context';
import CreateTweet from '../components/CreateTweet';
import AllTweets from '../components/AllTweets';

function Home() {
    const [loading, setLoading] = useState(true);
    const [tweets, setTweets] = useState([]);
    const name = useContext(UserNameContext);

    useEffect(() => {
        setInterval(() =>
            getTweets().then(data => setTweets(data)).then(() => setLoading(false))
            , 5000);
        return () => {

        }
    }, []);


    const submitTweet = (tweetContent, name) => {
        let newTweet = {
            content: tweetContent,
            date: new Date().toISOString(),
            userName: name,
        }
        try {
            postTweets(newTweet);
            getTweets().then(data => setTweets(data))
        } catch (error) {
            alert(error);
        }
    };

 
    return (
        <div>
            <CreateTweet submit={(e) => submitTweet(e,name)} />
            {loading && <h3>Loading...</h3>}
            <AllTweets list={tweets} />
        </div>
    )
}

export default Home
