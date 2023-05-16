import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: { // 'Bearer ' + process.env.API_KEY_TMDB
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWVkNTgxYjRkNzVkYzYyYmUxZmJhZGY2NTVkM2VkZSIsInN1YiI6IjY0MzVlNDBmYWVkZTU5MDA5Nzk5MWY3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UlgLjgNDT7r3sifErGIwaLxAOkQLDS5ibYKQyyHIy28'}
})

export default apiFilmes