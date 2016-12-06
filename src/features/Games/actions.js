import { setSystemHttpError } from '../../System/actions';
export const fetchGames = () => {
  return dispatch => {
    fetch('/api/games')
      .then( resp => {
        // console.log(resp.status);
        if (resp.status === 200) {
          return resp.json()
        } else {
          dispatch(setSystemHttpError(resp.status));
          const data= { games: [] };
          return { data };
        }
      })
      .then( data => dispatch({ type: 'FETCH_GAMES_COMPLETED', games: data.games }))
      .catch(message => {
        console.log(message);
        dispatch({type: 'SYSTEM_UNKNOWN_ERROR', message })
      })
  }
}
