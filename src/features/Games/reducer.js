export default (state={}, action ) => {
  let list =[];
  switch (action.type) {
    case 'FETCH_GAMES_COMPLETED':
      list = action.games;
      return { list };
    case 'FETCH_GAMES_ERROR':
      console.dir(action.error);
      return { error: action.error.message, list };
    default:
      return { list };
  }
}
