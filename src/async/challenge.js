const fetchData = require("../utils/fetchData");
const api = 'https://rickandmortyapi.com/api/character/'

const getData = async (url) => {

    try {
        const data = await fetchData(url)
        const character = await fetchData(`${url}${data.results[0].id}`)
        const origin = await fetchData(character.origin.url)

        console.log({
            data: data.info.count,
            name: character.name,
            origin: origin.dimension
        })
    } catch (error) {
        console.log(error)
    }

}

console.log('before')
getData(api)
console.log('after')