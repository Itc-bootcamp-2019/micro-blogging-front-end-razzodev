import React, { useState, useEffect, useContext } from "react";
import { UserNameContext } from "../context";
import CreateTweet from "../components/CreateTweet";
import AllTweets from "../components/AllTweets";
import { dbCollection } from "../lib/firebaseFunc";

function Home() {
  const [loading, setLoading] = useState(true);
  const userName = useContext(UserNameContext);
  const [tweetsFirebase, setTweetsFirebase] = useState([]);
  let tempArray = [];

  const readFromCloud = async () => {
    try {
      const get = await dbCollection.get();
      await get.forEach(doc => tempArray.push(doc.data()));
      await tempArray.reverse();
      setTweetsFirebase(tempArray);
    } catch (error) {
      console.error("Error when trying to fetch data from firebase:");
      console.error(error);
    }
  };

  const sendToCloud = document => {
    dbCollection
      .doc(`${document.date}:${document.userName}`)
      .set(document)
      .then(readFromCloud());
  };

  const submitTweet = (tweetContent, name) => {
    let nameConvert = JSON.stringify(name);
    let nameSlice = nameConvert.slice(13, -2);
    let newTweet = {
      content: tweetContent,
      date: new Date().toISOString(),
      userName: nameSlice
    };
    try {
      sendToCloud(newTweet);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    readFromCloud().then(() => setLoading(false));
    return () => {};
  }, []);

  return (
    <div>
      <CreateTweet submit={e => submitTweet(e, userName)} />
      {loading && <h3>Loading...</h3>}
      <AllTweets list={tweetsFirebase} />
    </div>
  );
}

export default Home;
