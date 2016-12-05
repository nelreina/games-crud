export const fetchGames = () => {
  console.log('Fetching games...');
  return dispatch => {
    fetch('/api/games')
      .then( resp => {
        // console.log(resp.status);
        if (resp.status === 200) {
          return resp.json()
        } else {
          throw Error('Some HTTP Error')
        }
      })
      .then( data => dispatch({ type: 'FETCH_GAMES_COMPLETED', games: data.games }))
      .catch(error => {
        console.log(error);
        dispatch({type: 'FETCH_GAMES_ERROR', error })
      })
  }
}
