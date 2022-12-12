# DEEL BACKEND TASK

what was done:

- project architecture quick refac (MVC) ✓
- implementation of seven tasks ✓
- added unit tests (jest) ✓
- added concurrence benchmark tests (apache ab) ✓

what can we improve: 

- migrate the project to Typescript;
- migrate two raw queires to usei Model interfaces;
- use [increment function](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#increment-decrement) to update balance;


| tests    | collection       |  code challenge ref                             |
|----------|-------------     |------                                 |
|[![Run Test](https://github.com/jonathan-sh/deel-backend/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/jonathan-sh/deel-backend/actions/workflows/test.yml)      | [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/7b5c0ac1bbff6f7c2ae6?action=collection%2Fimport)  | [challenge](https://github.com/jonathan-sh/deel-backend/blob/main/CC.md)        

## quick explanation: 
<pre>
.
├── scripts
│   └── seedDb.js //to hydrated the db 
├── src
│   ├── config //config rules
│   ├── middleware //the middlewares
│   ├── model //model rules
│   ├── router //router rules
│   ├── server.js //entry point
│   └── service //service rules
└── test //jest files
    └── apache //to run apache ab
</pre>

## to run

```sh
npm run start
```

## to feed the data base

```sh
npm run seed
```

## to test

```sh
npm run test
or
npm run fill-db-run-test
```
![image](https://user-images.githubusercontent.com/15783623/206928194-d7b23d99-92f4-41f4-99b9-fc7eb8500a26.png)


## apache ab

```sh
chmod +x ./test/apache/ab.sh && ./test/apache/ab.sh
```

> addition of 10 to the balance per request (ab -n 10 -c 10 )

Before:<br/>
![before](https://user-images.githubusercontent.com/15783623/206600797-3bc1c8e3-634b-4110-9a0c-abf0cd4837bf.png)

Many things happening... <br/>
![ab](https://user-images.githubusercontent.com/15783623/206600018-0cac50a8-3694-4b6b-be2e-feb020c9abae.gif)

After:<br/>
![afeter](https://user-images.githubusercontent.com/15783623/206600830-cb3e0504-ea48-4f7c-b3f4-9e3c81f0fe93.png)

Results without the improvements: 10.732 seconds 🙁<br/>
<pre>
This is ApacheBench, Version 2.3 <$Revision: 1901567 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 127.0.0.1 (be patient).....done

Server Software:
Server Hostname:        127.0.0.1
Server Port:            3001

Document Path:          /balances/deposit/2
Document Length:        62 bytes

Concurrency Level:      10
Time taken for tests:   10.732 seconds
Complete requests:      10
Failed requests:        8
   (Connect: 0, Receive: 0, Length: 8, Exceptions: 0)
Non-2xx responses:      7
Keep-Alive requests:    2
Total transferred:      1329 bytes
Total body sent:        1950
HTML transferred:       124 bytes
Requests per second:    0.93 [#/sec] (mean)
Time per request:       10732.318 [ms] (mean)
Time per request:       1073.232 [ms] (mean, across all concurrent requests)
Transfer rate:          0.12 [Kbytes/sec] received
                        0.18 kb/s sent
                        0.30 kb/s total

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       0
Processing:    57 6112 4275.4   9442   10675
Waiting:       56 5668 4619.1   9442   10675
Total:         57 6112 4275.4   9442   10675

Percentage of the requests served within a certain time (ms)
  50%   9442
  66%   9450
  75%   9473
  80%  10113
  90%  10675
  95%  10675
  98%  10675
  99%  10675
 100%  10675 (longest request)
</pre>

I know, I know, the time could be better. 😬 <br>
I thought of a few reasons for this but my knowledge of Sequelize those a total of 4 hours.  <br>
Things I know can improve this result:

- pool connections;
- improve retry strategy;

Another thing that can also be improved is the entity relationship and the rest layer routing.

Results with the improvements: 0.878 seconds 🔥<br/>
<pre>
This is ApacheBench, Version 2.3 <$Revision: 1901567 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 127.0.0.1 (be patient).....done


Server Software:        
Server Hostname:        127.0.0.1
Server Port:            3001

Document Path:          /balances/deposit/2
Document Length:        62 bytes

Concurrency Level:      10
Time taken for tests:   0.878 seconds
Complete requests:      10
Failed requests:        8
   (Connect: 0, Receive: 0, Length: 8, Exceptions: 0)
Non-2xx responses:      8
Keep-Alive requests:    2
Total transferred:      1434 bytes
Total body sent:        1950
HTML transferred:       124 bytes
Requests per second:    11.40 [#/sec] (mean)
Time per request:       877.575 [ms] (mean)
Time per request:       87.758 [ms] (mean, across all concurrent requests)
Transfer rate:          1.60 [Kbytes/sec] received
                        2.17 kb/s sent
                        3.77 kb/s total

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       0
Processing:    72  530 179.4    553     805
Waiting:       72  529 179.4    553     805
Total:         72  530 179.4    553     805

Percentage of the requests served within a certain time (ms)
  50%    553
  66%    554
  75%    554
  80%    554
  90%    805
  95%    805
  98%    805
  99%    805
 100%    805 (longest request)
</pre>
