import { setSystemHttpError } from '../../System/actions';
export const fetchGames = () => {
  return dispatch => {
    fetch('/api/notisia')
      .then( resp => {
        // console.log(resp.status);
        if (resp.status === 200) {
          return resp.json()
        } else {
          dispatch(setSystemHttpError(resp.status));
          const data= { notisia: [] };
          return { data };
        }
      })
      .then( data => dispatch({ type: 'FETCH_NOTISIA_COMPLETED', notisianan: data.notisianan }))
      .catch(message => {
        console.log(message);
        dispatch({type: 'SYSTEM_UNKNOWN_ERROR', message })
      })
  }
}
