import React, { useState, useEffect, useContext } from "react";
import { getTweets, postTweets } from "../lib/api";
import { UserNameContext } from "../context";
import CreateTweet from "../components/CreateTweet";
import AllTweets from "../components/AllTweets";
import { dbCollection } from "../lib/firebaseFunc";

function Home() {
  const [loading, setLoading] = useState(true);
  const [tweets, setTweets] = useState([]);
  const userName = useContext(UserNameContext);
  const [tweetsFB, setTweetsFB] = useState([]);
  let tempArray = [];
  const readFromCloud = async () => {
    try {
      const get = await dbCollection.get();
      await get.forEach(doc => tempArray.push(doc.data()));
      setTweetsFB(tempArray);
      console.log("executed");
    } catch (error) {
      console.error(error + "THE RROR");
    }
  };

  useEffect(() => {
    setInterval(() => readFromCloud().then(() => setLoading(false)), 3000);
    // setInterval(
    //   () =>
    //     getTweets()
    //       .then(data => setTweets(data))
    //       .then(() => setLoading(false)),
    //   5000
    // );
    return () => {};
  }, []);

  const submitTweet = (tweetContent, name) => {
    let nameConvert = JSON.stringify(name);
    let nameSlice = nameConvert.slice(13, -2);
    let newTweet = {
      content: tweetContent,
      date: new Date().toISOString(),
      userName: nameSlice
    };
    try {
      postTweets(newTweet);
      getTweets().then(data => setTweets(data));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <CreateTweet submit={e => submitTweet(e, userName)} />
      {loading && <h3>Loading...</h3>}
      <h4>DB Collection</h4>
      <AllTweets list={tweetsFB} />
      <h4>Class Server</h4>
      <AllTweets list={tweets} />
    </div>
  );
}

export default Home;
