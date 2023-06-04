import express from 'express'

const app = express() // Creates an express application

app.get("/",(req,res)=>{
    res.send("Up and running with grapghql crash course")
}) // home route

app.listen(8082, () => console.log("Running at 8082"))