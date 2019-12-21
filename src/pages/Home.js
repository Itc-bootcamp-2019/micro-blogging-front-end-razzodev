import React, { useState, useEffect , useContext } from 'react';
import { getTweets, postTweets } from '../lib/api'
import { UserNameContext } from '../context';
import CreateTweet from '../components/CreateTweet';
import AllTweets from '../components/AllTweets';

function Home() {
    const [loading, setLoading] = useState(true);
    const [tweets, setTweets] = useState([]);
    const userName = useContext(UserNameContext);

    useEffect(() => {
        setInterval(() =>
            getTweets().then(data => setTweets(data)).then(() => setLoading(false))
            , 5000);
        return () => {
        }
    }, []);

    const submitTweet = (tweetContent, name) => {
        let nameConvert = JSON.stringify(name);
        let nameSlice = nameConvert.slice(13,-2)
        let newTweet = {
            content: tweetContent,
            date: new Date().toISOString(),
            userName: nameSlice,
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
            <CreateTweet submit={(e) => submitTweet(e,userName)} />
            {loading && <h3>Loading...</h3>}
            <AllTweets list={tweets} />
        </div>
    )
}

export default Home
