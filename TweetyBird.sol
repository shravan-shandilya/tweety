pragma solidity ^0.4.0;
contract TweetyBird {
    mapping (address => string) tweets;
    event FireTweetEvent(string cool_string);
    function SendTweet(string c) returns (bool){
        if(bytes(c).length <= 140){
            tweets[msg.sender] = c;
            FireTweetEvent(c);
            return true;
        }
        return false;
    }
}
