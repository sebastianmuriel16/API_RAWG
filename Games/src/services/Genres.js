const API_KEY = '35cb6672bc84439a85813b1967cd36dc'
const BASE_URL = 'https://api.rawg.io/api/genres'

async function getGenres() {
    try {
        const response = await fetch(`${BASE_URL}?key=${API_KEY}`)
        const rsultls = await response.json()
        const genres = rsultls.results
        return genres.map((genre) => {
            return {
                id: genre.id,
                name: genre.name
            }
        })
    }
    catch (error) {
        console.log(error)
    }
}

export { getGenres }

