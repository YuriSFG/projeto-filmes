const { default: axios } = require("axios");

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2YzMGFmNWM5ZGVmNmJiYzRkZDM4YjdlOTAyMDEyMyIsInN1YiI6IjY0MzQ4YmVkMzEwMzI1MDEyNjk4NjNkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MKIytHHyOlKDHImcfJl73oiaEJGRQ3N8N09eMCf0xMo'
    }
})

export default apiFilmes