const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener("submit", function(evt) {
    // const username = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const user = tweetForm.elements.username.value;
    const tweet = tweetForm.elements.tweet.value;
    console.log(user, tweet);
    evt.preventDefault();

    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(user);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    
    tweetsContainer.append(newTweet);
})
