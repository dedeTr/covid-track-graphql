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
                
            } catch (error) {
                throw new Error(error)
            }
        }
    }
}

module.exports = resolvers

