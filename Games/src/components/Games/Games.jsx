import './games.css'
function CardGames({ games }) {


  return (
    <main className="cards">
      <div className="cards-container">
        {games?.map((game) => {
          return (
            <div key={game.id} className="card">
              <a>
                <img src={game.image} alt={game.name} />
              </a>
              <div className="card-game-info">
                <strong>{game.name}</strong>
                <p>{
                  game.genres?.map((genre) => {
                    return (
                      <span key={genre.id}>{genre.name}</span>
                    )
                  })
                  }</p>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export { CardGames }
