const axios = require('axios')

const resolvers = {
    Query: {
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
                const arrData = data.map(arr => ({
                    confirmed: arr.positive,
                    deaths: arr.death,
                    date: arr.dateChecked
                }))
                console.log(arrData)
                return arrData
            } catch (error) {
                throw new Error(error)
            }
        }
    },
    Mutation: {
        async getCards(_, {country}){
            try {
                let url = "https://covid19.mathdro.id/api/"
                if(country){
                    url = `${url}/countries/${country}`
                }
                const cardData = await axios.get(url)
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
        }
    }
}

module.exports = resolvers

