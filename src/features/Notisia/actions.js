import { get } from '../../_utils/api';

export const fetchGames = () => {
  return dispatch => {
    get('/api/notisia', dispatch)
      .then( data => dispatch({ type: 'FETCH_NOTISIA_COMPLETED', notisianan: data.notisianan }))
      .catch(message => {
        console.log(message);
        dispatch({type: 'SYSTEM_UNKNOWN_ERROR', message })
      })
  }
}
