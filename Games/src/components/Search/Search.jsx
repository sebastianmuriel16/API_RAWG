import { IconSearch } from '../Icons/Icons'
import { useContext } from 'react'
import { SearchContext } from '../../Context/Search'
import './search.css'
function Search() {
  const { search, setSearch } = useContext(SearchContext)
  const handleSubmit = (event) => {
    event.preventDefault()
    const newSearch = event.target[0].value
    setSearch(newSearch)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-search">
        <div className="Icon">
          <IconSearch />
        </div>
        <input type="text" autoComplete="off" placeholder="search game" />
      </div>
    </form>
  )
}

export { Search }
