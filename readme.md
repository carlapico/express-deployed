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

## Deploy 
```
firebase deploy
```
