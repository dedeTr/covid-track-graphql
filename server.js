// import {ApolloServer} from 'apollo-server'
// import typeDefs from './graphql/typeDefs'
// import resolvers from './graphql/resolvers'

const { ApolloServer, PubSub } = require('apollo-server')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const PORT = process.env.PORT || 5000

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen({port: PORT}).then((res) => {
    console.log(`listen to ${res.url}`)
})