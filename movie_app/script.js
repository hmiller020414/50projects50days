const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f21c6ab4c25c2420b9629264dc4947ab&page=1'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=f21c6ab4c25c2420b9629264dc4947ab&query="'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const response = await fetch(url)
    const data = await response.json()

    console.log(data.results)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})