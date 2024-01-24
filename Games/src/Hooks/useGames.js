import { getGames } from '../services/Games'
import { useEffect, useState, useContext } from 'react'
import { SearchContext } from '../Context/Search'

function useGames() {
  const [games, setGames] = useState([])
  const { search, filters } = useContext(SearchContext)

  const getResults = async () => {
    const newGames = await getGames(search, filters)
    setGames(newGames)
  }
  useEffect(() => {
    getResults()
  }, [search, filters])

  return { games, getResults }
}

export { useGames }
