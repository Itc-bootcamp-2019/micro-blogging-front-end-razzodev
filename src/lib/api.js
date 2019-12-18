import axios from 'axios';

export const getTweets = () => {
    return axios.get('https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet').then(res => res.data.tweets);
};

export const postTweets = (object) => {
    return axios.post('https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet',{tweet: object} );
};