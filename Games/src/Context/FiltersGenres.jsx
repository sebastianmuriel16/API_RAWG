import { createContext, useState } from 'react'

const FilterGenres = createContext()

function GenresProvider({ children }) {
  const [filters, setFilters] = useState([])
  return (
    <FilterGenres.Provider value={{ filters, setFilters}}>
      {children}
    </FilterGenres.Provider>
  )
}

export { FilterGenres, GenresProvider }
