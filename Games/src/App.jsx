import { CardGames } from "./components/Games/Games.jsx";
import { useGames } from "./Hooks/useGames.js";
import { Search } from "./components/Search/Search.jsx";
import { FiltersMenu } from "./components/Menu/Menu.jsx";
import { CloseProvider } from "./Context/close.jsx";

import "./App.css";
function App() {
  const { games } = useGames();

  return (
    <main>
      <FiltersMenu />
      <Search />
      <CloseProvider>
        <CardGames games={games} />
      </CloseProvider>
    </main>
  );
}

export default App;
