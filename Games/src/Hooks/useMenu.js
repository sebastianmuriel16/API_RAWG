import { getGenres } from '../services/Genres'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { SearchContext } from '../Context/Search'

function useMenu() {
  const [genres, setGenres] = useState([])
  const { setFilters } = useContext(SearchContext)

  const getResults = async () => {
    const newGenres = await getGenres()
    setGenres(newGenres)
  }

  useEffect(() => {
    getResults()
  }, [])

  return { genres, getResults,setFilters }
}

export { useMenu }
