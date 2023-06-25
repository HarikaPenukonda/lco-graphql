import express from 'express'

import resolvers from './resolvers.js'

import schema from './schema.js'

import {graphqlHTTP} from 'express-graphql'

const app = express() // Creates an express application OcVJSy3hda1kqbbZct_JV

app.get("/",(req,res)=>{
    res.send("Up and running with grapghql crash course")
}) // home route

//const root = {lco: () => console.log("LearnCodeOnline.in")}

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root, // methods we pass
    graphiql: true // provided nice interface on the web so we can use it
}))

app.listen(8082, () => console.log("Running at 8082"))