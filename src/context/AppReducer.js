// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        ...state,
        watchlist: [...state.watchlist, action.movie],
      };
    case 'REMOVE_MOVIE':
      return {
        ...state,
        watchlist: state.watchlist.filter((movie) => movie.id !== action.id),
      };
    case 'ADD_MOVIE_TO_WATCHED':
      return {
        ...state,
        watchlist: state.watchlist.filter((movie) => movie.id !== action.movie.id),
        watched: [...state.watched, action.movie]
      };
    default:
      return state;
  }
};
