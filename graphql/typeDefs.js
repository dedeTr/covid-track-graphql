const { gql } = require('apollo-server')

const typeDefs = gql`
 type Cards {
     confirmed: String!
     recovered: String!
     deaths: String!
     lastUpdate: String!
 }
 type DailyData {
     confirmed: String
     deaths: String
     date: String
 }
 type Query {
     getCountries: [String]
     getDailyData: [DailyData]
 }
 type  Mutation {
    getCards(country: String): Cards   
 }
`
module.exports = typeDefs