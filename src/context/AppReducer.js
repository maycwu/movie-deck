export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
        return {...state, watchlist: [...state.watchlist, action.movie]}
    default:
      return state;
  }
};
