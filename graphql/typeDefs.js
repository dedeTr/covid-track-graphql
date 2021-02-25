const { gql } = require('apollo-server')

const typeDefs = gql`
 type Cards {
     confirmed: String!
     recovered: String!
     deaths: String!
     lastUpdate: String!
 }
 type CountryPicker {
     countries: String!
 }
 type Query {
     getCards: Cards
     getCountries: CountryPicker
 }
`
module.exports = typeDefs