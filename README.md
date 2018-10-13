
# Posts App
  
Small App to create short posts and filtered them  
  
## Getting Started  
  
The instructions below will guide you how to run the application  
  
### Prerequisites  
  
Before running the application make sure you have the following packages installed
  
* [Docker](https://docs.docker.com/install/linux/docker-ce/fedora/#install-docker-ce)
*  [Docker-compose](https://docs.docker.com/compose/install/)   
  
## Installing  
  
### With docker-compose  
After docker & docker-compose installed, run the following commands:
  
```  
docker-compose build 
```  
```
docker-compose up  
```  
  
Open your browser on: localhost:3000
  
### Without docker-compose  
Use docker to run local mongo db server:
```
docker pull mongo
```
```
docker run --name mongo --net=host  -d mongo:latest
```
For the following command, you can use [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/en/):

Server dependencies installation:
```  
yarn
npm install 
```  
Start the node process:
```
node index.js
```
To install the React app dependencies go to /client  directory:
```  
yarn
npm install 
```
Build the app:  
```
npm run build
yarn build  
```  
```
npm run start
yarn start 
```  
 Open your browser on: localhost:3000
## Authors  
  
* **Yuval Zalka**  - [Github](https://github.com/yuvalic)  