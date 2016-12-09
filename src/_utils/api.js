import { setSystemHttpError } from '../System/actions';

export const get = (url, dispatch) =>
  new Promise((resolve, reject) =>{
    fetch(url)
    .then( resp => {
      // console.log(resp.status);
      if (resp.status === 200) {
        resolve(resp.json())
      } else {
        dispatch(setSystemHttpError(resp.status));
        reject(`Error executing API get ${url}`);
      }
    })
  }
)
