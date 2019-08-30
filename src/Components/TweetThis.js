import React from 'react';

const TweetThis = ({elementId, buttonDisplayName, tweetText}) => (
    <a href={`https://twitter.com/intent/tweet?text=${tweetText}`} class='twitter-share-button' id={elementId}>{buttonDisplayName}</a>
)

export default TweetThis;