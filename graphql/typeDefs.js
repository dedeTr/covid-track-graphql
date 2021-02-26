const { gql } = require('apollo-server')

const typeDefs = gql`
 type Cards {
     confirmed: String!
     recovered: String!
     deaths: String!
     lastUpdate: String!
 }
 type DailyData {
     confirmed: String!
     deaths: String!
     date: String
 }
 type Query {
     getCards: Cards
     getCountries: [String]
     getDailyData: [DailyData]
 }
`
module.exports = typeDefs