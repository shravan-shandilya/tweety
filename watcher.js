Web3 = require('web3')
web3 = new Web3()
Twitter = require('twitter')

var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});


web3.setProvider(new Web3.providers.HttpProvider(process.env.HTTP_RPC_PROVIDER))
web3.eth.defaultAccount = web3.eth.coinbase;

var abi = [{"constant":false,"inputs":[{"name":"c","type":"string"}],"name":"SendTweet","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"cool_string","type":"string"}],"name":"FireTweetEvent","type":"event"}];
var tweetybirdContract = web3.eth.contract(abi);
contract = tweetybirdContract.at(process.env.CONTRACT_ADDRESS);

function hex2a(hexx) {
    var hex = hexx.toString();
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

var filter = web3.eth.filter({event:'FireTweetEvent',fromBlock:'latest'});
filter.watch(function(err,res){
  console.log("fired");
  client.post('statuses/update', {status: hex2a(res.data)},  function(error, tweet, response) {
      if(error) throw error;
      console.log(tweet);
      console.log(response);
  });
});
