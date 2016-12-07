export default (state=[], action ) => {
  switch (action.type) {
    case 'FETCH_NOTISIA_COMPLETED':
      return action.notisianan;
    case 'FETCH_NOTISIA_ERROR':
      console.dir(action.error);
      return { error: action.error.message };
    default:
      return state;
  }
}
