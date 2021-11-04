const express = require('express')
const expressGraphQL = require('express-graphql').graphqlHTTP
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')
const app = express()
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Hello',
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => 'Hello GraphQL'
      }
    })
  })
})
app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}))
app.listen(5000, () => console.log('Server running'))
