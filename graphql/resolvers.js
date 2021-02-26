const axios = require('axios')

const resolvers = {
    Query: {
        async getCards(){
            try {
                const cardData = await axios.get('https://covid19.mathdro.id/api/')
                const {confirmed, recovered, deaths, lastUpdate} = cardData.data
                let cards = new Object()
                cards.confirmed = confirmed.value
                cards.recovered = recovered.value
                cards.deaths = deaths.value
                cards.lastUpdate = lastUpdate
                return cards
            } catch (error) {
                throw new Error(error)
            }
        },
        async getCountries(){
            try {
                const countryData = await axios.get('https://covid19.mathdro.id/api/countries')
                const countries = countryData.data.countries
                const arr = countries.map(country => country.name)
                return arr
            } catch (error) {
                throw new Error(error)
            }
        },
        async getDailyData(){
            try {
                const dailyData = await axios.get('https://api.covidtracking.com/v1/us/daily.json')
                const data = dailyData.data
            } catch (error) {
                throw new Error(error)
            }
        }
    }
}

module.exports = resolvers

