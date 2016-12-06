export default (state=[], action ) => {
  switch (action.type) {
    case 'FETCH_GAMES_COMPLETED':
      return action.games;
    case 'FETCH_GAMES_ERROR':
      console.dir(action.error);
      return { error: action.error.message };
    default:
      return state;
  }
}
