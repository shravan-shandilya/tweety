Web3 = require('web3')
web3 = new Web3()
Twitter = require('twitter')

var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

try{
  web3.setProvider(new Web3.providers.HttpProvider(process.env.HTTP_RPC_PROVIDER));
  web3.eth.defaultAccount = web3.eth.coinbase;
}catch(err){
  console.log("Connection to RPC Provider failed!");
  return;
}

var abi = [{"constant":true,"inputs":[{"name":"index","type":"uint8"}],"name":"GetTweet","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"c","type":"string"}],"name":"SendTweet","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"cool_string","type":"string"}],"name":"FireTweetEvent","type":"event"}];
var tweetybirdContract = web3.eth.contract(abi);
contract = tweetybirdContract.at(process.env.CONTRACT_ADDRESS);

var filter = web3.eth.filter({event:'FireTweetEvent',fromBlock:'latest'});
filter.watch(function(err,res){
  console.log("fired");
  client.post('statuses/update', {status: web3.toAscii(res.data)},  function(error, tweet, response) {
      if(error){
        console.log(error);
      }
  });
});
