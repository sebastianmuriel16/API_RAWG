import { CardGames } from './components/Games/Games.jsx'
import { useGames } from './Hooks/useGames.js'
import { Search } from './components/Search/Search.jsx'
import { FiltersMenu } from './components/Menu/Menu.jsx'
import { ModalDetail } from './components/ModalDetail/ModalDetail.jsx'

import './App.css'
function App() {
  const { games } = useGames()
  return (
    <main>  
      <FiltersMenu />
      <Search />
      <CardGames games={games} />
      <ModalDetail game={true}/>
    </main>
  )
}

export default App
