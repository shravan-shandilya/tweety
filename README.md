# tweety
Local Tesing
1. Fireup testrpc
```
$ testrpc
```

2. Deploy contract:
```
$ node deploy.js
```
3. Fill up access tokens in environment.sh
```
export CONSUMER_KEY=""
export CONSUMER_SECRET=""
export ACCESS_TOKEN_KEY=""
export ACCESS_TOKEN_SECRET=""
export HTTP_RPC_PROVIDER=""
export CONTRACT_ADDRESS=""
```

4. Export environmental variables
```
$ source ./environment.sh
```

5. Start the watch for 'FireTweetEvent'.
```
$ node watcher.js
```
   This can be deployed to a server.All the parameters are picked from environmental variables.

6. Invoke Smart contract method
```
$ python tweeth 'this will be tweeted' localhost:8545 <contract_address>
```
7. Sitback and relax!
