# DEEL BACKEND TASK
[![Run Test](https://github.com/jonathan-sh/deel-backend/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/jonathan-sh/deel-backend/actions/workflows/test.yml)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/7b5c0ac1bbff6f7c2ae6?action=collection%2Fimport)
### to run

```sh
npm run start
```

### to feed the data base

```sh
npm run seed
```

### to test

```sh
npm run test
or
npm run fill-db-run-test
```

![image](https://user-images.githubusercontent.com/15783623/206600411-35d7af4d-1e78-4f2a-b80c-872584dfac3a.png)

### apache ab

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

Results:<br/>
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

- pool connectios;
- improve retry strategy;
