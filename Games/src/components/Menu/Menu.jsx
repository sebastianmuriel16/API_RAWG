import { useMenu } from '../../Hooks/useMenu'
import { useState,useEffect,useId } from 'react'
import { FilterIcon } from '../../components/Icons/Icons'
import './Menu.css'

function FiltersMenu() {
  const menuFilterId = useId()
  const { genres, setFilters } = useMenu()
  const [checkedItems, setCheckedItems] = useState({})

  const getCheckedItems = () => {
      const newFilters = genres.filter(genre => checkedItems[genre.id]).map(genre => genre.id)
      return newFilters
    }
  const handleCheck = (id) => {
    const newCheckedItems = { ...checkedItems, [id]: !checkedItems[id] }
    setCheckedItems(newCheckedItems)
  }

  useEffect(() => {
     const hola = getCheckedItems()
     setFilters(hola)
  }, [checkedItems])



  return (
    <main>
    <label className="Menu-button" htmlFor={menuFilterId}>
      <FilterIcon />
    </label>
    <input type="checkbox"  id={menuFilterId}  hidden/>
    <aside className="Menu">
      <ul>
        {genres?.map((genre) => {
          return (
            <li key={genre.id} id={genre.id} onClick={() => handleCheck(genre.id)}>
              <input type="checkbox" id={genre.id} checked={checkedItems[genre.id] || false} onChange={() => handleCheck(genre.id)} />
              {genre.name}
            </li>
          )
        })}
      </ul>
    </aside>
    </main>
  )
}

export { FiltersMenu }
