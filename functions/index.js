import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { getDogs, testApi } from "./src/dogs.js"

const app = express() // sets upp our express app 
app.use(cors()) // tell it to allow cross-origin resource sharing
app.use(express.json()) // allow post with JSON bodies 

//now we set up some routes...
app.get('/dogs', getDogs)
app.get*('/test', testApi)

// instead of app.listen(PORT)...

// we need to 1. create a cloud function and 2. point it to 'app'
export const api = functions.https.onRequest(app) //this is how we define function called api 

// exports.helloWorld = functions.https.onRequest((request, response) => {
    // functions.logger.info("Hello logs!", {structuredData:true)
    // response.send ("Hello from Firebase!")
// })