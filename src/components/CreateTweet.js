import React, {  } from 'react';
import './CreateTweetStyle.css';


function CreateTweet(props) {

    // const [maxChar, setMaxChar] = useState(false);
    // const maxCharCheck = () => {
    //     return (tweetContent.length > 140) ? setMaxChar(true) : setMaxChar(false);
    // }
    // const [ isValid , setIsValid ] = useState(false);
    // const checkValid = () => {
    //     return (tweetContent.length > 0 && !maxChar) ? setIsValid(true) : setIsValid(false);
    // };
    
    // const [tweetContent, setTweetContent] = useState('');
    // const tweetInput = (e) => {
    //     setTweetContent(e.target.value);
    //     maxCharCheck();
    //     checkValid();
    // }
    
    // const [ currentTweet, setCurrentTweet] = useState({});
    // const submitTweet = () => {
    //     return setCurrentTweet({
    //         username:'raz',
    //         timeCreated: new Date().toISOString(),
    //         content: tweetContent,
    //     });
    //     // console.log(currentTweet); // FIRST CLICK RETURNS EMPTY OBJECT --ASYNC(?)
    // }
    const { maxChar , input , disabled , submit } = props;
    return (
        <div className='create-tweet-wrapper'>
            <textarea id='tweetInput' placeholder='What you have in mind...'
                onChange={input} />
            <div>
                {maxChar && <div id='maxCharWarning'>The tweet can't contain more than 140 chars.</div>}
                <button id='tweetButton' disabled={disabled} onClick={submit} >Tweet</button>
            </div>
        </div>
    )
}

export default CreateTweet
