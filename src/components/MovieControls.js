import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const MovieControls = ({movie, type}) => {
 const { removeMovie, addMovieToWatched } = useContext(GlobalContext)
  return (
    <div className='inner-card-controls'>
        {type === "watchlist" && (
            <>
            <button className='ctrl-btn' onClick={() => addMovieToWatched(movie)}>
            ✓
            </button>
            <button className='ctrl-btn' onClick={() => removeMovie(movie.id)}>
              X
            </button>
            </>
        )}
    </div>
  )
}
