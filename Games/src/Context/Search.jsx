import { createContext, useState } from 'react'

const SearchContext = createContext()

function SearchProvider({ children }) {
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState([])
  return (
    <SearchContext.Provider value={{ search, setSearch , filters, setFilters}}>
      {children}
    </SearchContext.Provider>
  )
}

export { SearchContext, SearchProvider }
