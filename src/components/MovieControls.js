import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const MovieControls = ({movie, type}) => {
 const { removeMovie, addMovieToWatched, removeFromWatched, moveToWatchlist } = useContext(GlobalContext)
  return (
    <div className='inner-card-controls'>
        {type === "watchlist" && (
            <>
            <button className='ctrl-btn' onClick={() => addMovieToWatched(movie)}>
            Watched
            </button>
            <button className='ctrl-btn' onClick={() => removeMovie(movie.id)}>
              X
            </button>
            </>
        )}
        {type === 'watched' && (
          <>
          <button className='ctrl-btn' onClick={() => moveToWatchlist(movie)}>
            Unwatch
          </button>
          <button className='ctrl-btn' onClick={() => removeFromWatched(movie.id)}>
            X
          </button>
          </>
        )}
    </div>
  )
}
