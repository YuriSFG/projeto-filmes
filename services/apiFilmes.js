const { default: axios } = require("axios");

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: ''
    }
})

export default apiFilmes