const fetchData = require("../utils/fetchData");
const api = 'https://rickandmortyapi.com/api/character/'


fetchData(api)
.then(data => {
    console.log(data.info.count)
    return fetchData(`${api}${data.results[0].id}`)
})
.then(data => {
    // console.log('second then',data)
    return fetchData(`${data.origin.url}`)
})
.then(data => {
    console.log('third then', data.dimension)
})
.catch(err => {
    console.error(err)
})