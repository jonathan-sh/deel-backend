# DEEL BACKEND TASK

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

