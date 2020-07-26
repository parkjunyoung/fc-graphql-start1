const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
    type Query {
        hello: String,
        nodejs: Int
    }
`);

const root = { 
    hello: () => 'Hello world!' ,
    nodejs: () => 20 ,
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('Running a GraphQL API server at localhost:4000/graphql');
});