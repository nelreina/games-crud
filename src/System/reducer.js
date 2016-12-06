export default (state={}, action ) => {
  let systemError = false;
  switch (action.type) {
    case 'SYSTEM_HTTP_ERROR':
      const { message } = action;
      systemError = true;
      return { systemError, message }
    case 'SYSTEM_CLEAR_MESSAGE':
      delete state.message;
      return Object.assign({}, state, { systemError })
    default:
			return state;
  }
}
