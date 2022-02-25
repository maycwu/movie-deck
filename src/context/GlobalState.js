import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
  watchlist: localStorage.getItem('watchlist')
    ? JSON.parse(localStorage.getItem('watchlist'))
    : [],
  watched: localStorage.getItem('watched')
    ? JSON.parse(localStorage.getItem('watched'))
    : [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
    localStorage.setItem('watched', JSON.stringify(state.watched)); //converts the watchlist array into a string
  }, [state]); //we pass state since we're accessing it

  //actions
  const addMovie = (movie) => {
    dispatch({ type: 'ADD_MOVIE', movie });
  };

  const removeMovie = (id) => {
      dispatch({type: 'REMOVE_MOVIE', id})
  }

  const addMovieToWatched = (movie) => {
      dispatch({type: "ADD_MOVIE_TO_WATCHED", movie})
  }
//move to watch list
  const moveToWatchlist = (movie) => {
    dispatch({type: "MOVE_TO_WATCHLIST", movie})
  }
//remove from watched
 const removeFromWatched = (id) => {
  dispatch({type: "REMOVE_FROM_WATCHED", id})
 }
  return (
    <GlobalContext.Provider
      value={{ watchlist: state.watchlist, watched: state.watched, addMovie, removeMovie, addMovieToWatched, moveToWatchlist, removeFromWatched}}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
