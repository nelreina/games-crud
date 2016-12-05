export default (state={}, action ) => {
  let error = {};
  switch (action.type) {
    case 'SYSTEM_HTTP_ERROR':
      return action.payload
    default:

  }
}
