const API_KEY = '35cb6672bc84439a85813b1967cd36dc'
const BASE_URL = 'https://api.rawg.io/api/games'

async function getGames(search, genres) {
  try {
    let response
    if (genres.length > 0) {
      response = await fetch(
        `${BASE_URL}?key=${API_KEY}&search=${search}&genres=${genres}`
      )
    }else {
      response = await fetch(`${BASE_URL}?key=${API_KEY}&search=${search}`)
    }
    const results = await response.json()
    const games = results.results

    return games?.map((game) => {
      return {
        id: game.id,
        name: game.name,
        image: game.background_image,
        genres: game.genres,
      }
    })
  } catch (error) {
    console.log(error)
    console.error(error)
  }
}

export { getGames }
