pragma solidity ^0.4.0;
contract TweetyBird {
    event FireTweetEvent(string cool_string);
    function SendTweet(string c) returns (bool){
        if(bytes(c).length <= 140){
            FireTweetEvent(c);
            return true;
        }
        return false;
    }
}
