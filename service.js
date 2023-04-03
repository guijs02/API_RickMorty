var axios = require('axios')

const URL = "https://rickandmortyapi.com/api/character"

async function GetCharacter(personagem) {
    var urlApi = `${URL}/${personagem}`
    var response = await axios.get(urlApi)
    return response.data
}

module.exports = { GetCharacter }
