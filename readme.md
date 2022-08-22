# Deploy an API 

## Make Folder and CD in it 
```
mkdir file-name && cd file-name
```

## Initialize Firebase Hosting 
```
firebase init hosting 
```
- select defaults

## Intitialize Firebase Functions (make sure it is in blaze plan)
```
firebase init function
```
- select defaults 

## Create SRC folder in the functions folder

## Install Express 
```
npm i express cors
```

## Redirect Traffic in firebase.json
```
//now we set up some routes...
app.get('/dogs', getDogs)
app.get*('/test', testApi)
```

## Build an express app in functions/index.js

## Test using 

```
firebase emulators:start
```
- make edits on the firebase emulators once you type it in the command line
- use that info to write it in the firebase.json file after hosting. 
- change the port number and host 


## Deploy 
```
firebase deploy
```
