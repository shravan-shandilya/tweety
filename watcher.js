Web3 = require('web3')
web3 = new Web3()
web3.setProvider(new Web3.providers.HttpProvider('http://localhost:8545'))
web3.eth.defaultAccount = web3.eth.coinbase;

var abi = [{"constant":false,"inputs":[{"name":"c","type":"string"}],"name":"SendTweet","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"cool_string","type":"string"}],"name":"FireTweetEvent","type":"event"}];
var tweetybirdContract = web3.eth.contract(abi);
contract = tweetybirdContract.at('0xa162441bc58e4a87d3f3b206e5feb0b8ce3e8edd');

var tweet_event = contract.FireTweetEvent(function(error,result){
  console.log(result);
});
