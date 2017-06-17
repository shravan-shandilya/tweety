pragma solidity ^0.4.0;
contract TweetyBird {
    string[] tweets;
    event FireTweetEvent(string cool_string);

    modifier rejectValuedTxn{
        if(msg.value > 0)
            throw;
        _; //Replaced with the original function to be modified
    }
    function SendTweet(string c) rejectValuedTxn {
        if(bytes(c).length <= 160){
            tweets.push(c);
            FireTweetEvent(c);
        }
    }
    function GetTweet(uint8 index) constant returns (string){
        if((index >= 0) && (index < tweets.length)){
            return tweets[index];
        }else{
            return "Invalid Index!";
        }
    }
}
