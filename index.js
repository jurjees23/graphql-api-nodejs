const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./graphql/Schema");
const resolvers = require("./graphql/Resolvers");

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/graphql-demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(res => {
    console.log("Monogo Connected")
})


app.use(
    "/",
    graphqlHTTP({
        schema,
        rootValue: resolvers,
        graphiql: true,
    })
);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000/");
});