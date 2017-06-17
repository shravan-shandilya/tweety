Web3 = require('web3')
web3 = new Web3()
web3.setProvider(new Web3.providers.HttpProvider('http://localhost:8545'))

var tweetybirdContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"c","type":"string"}],"name":"SendTweet","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"cool_string","type":"string"}],"name":"FireTweetEvent","type":"event"}]);
var tweetybird = tweetybirdContract.new(
   {
     from: web3.eth.accounts[0],
     data: '6060604052341561000c57fe5b5b61029c8061001c6000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063b528f9f21461003b575bfe5b341561004357fe5b610093600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506100ad565b604051808215151515815260200191505060405180910390f35b6000608c82511115156101c15781600060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020908051906020019061010d9291906101cb565b507f29781825c4580a032aa231d9d691d862ea1e9692413f1f1cd2bb3e09c9f3beb282604051808060200182810382528381815181526020019150805190602001908083836000831461017f575b80518252602083111561017f5760208201915060208101905060208303925061015b565b505050905090810190601f1680156101ab5780820380516001836020036101000a031916815260200191505b509250505060405180910390a1600190506101c6565b600090505b919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061020c57805160ff191683800117855561023a565b8280016001018555821561023a579182015b8281111561023957825182559160200191906001019061021e565b5b509050610247919061024b565b5090565b61026d91905b80821115610269576000816000905550600101610251565b5090565b905600a165627a7a7230582014cd692c325374f48fad2a13322e944b836becc29cda6f91793c17cb885c78b10029', 
     gas: 3000000
   }, function(e, contract){
    console.log(e, contract);
    if (typeof contract.address != 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
