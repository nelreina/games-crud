import { get } from '../../_utils/api';

export const fetchVideos = () => {
  return dispatch => {
    get('/api/video', dispatch)
      .then( data => dispatch({ type: 'FETCH_VIDEO_COMPLETED', videonan: data.videonan }))
      .catch(message => {
        console.log(message);
        dispatch({type: 'SYSTEM_UNKNOWN_ERROR', message })
      })
  }
}
