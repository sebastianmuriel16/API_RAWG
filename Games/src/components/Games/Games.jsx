import { useContext, useState } from "react";
import { CloseContext } from "../../Context/close";
import { Carrusel } from "../Carrusel/Carrusel";
import "./games.css";
function CardGames({ games }) {
  const { close, setClose } = useContext(CloseContext);
  const [objetGame, setObjetGame] = useState({});

  const handleClose = (game) => {
    setObjetGame(game.id);
    setClose(false);
  };

  return (
    <main className="cards">
      <div className="cards-container">
        {games?.map((game) => {
          return (
            <div
              key={game.id}
              className="card "
              onClick={() => handleClose(game)}
            >
              <a>
                <img src={game.image} alt={game.name} />
              </a>
              <div className="card-game-info">
                <strong>{game.name}</strong>
                <p>
                  {game.genres?.map((genre) => {
                    return <span key={genre.id}>{genre.name}</span>;
                  })}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {close ? null : <Carrusel id={objetGame} />}
    </main>
  );
}

export { CardGames };
