export default (state={}, action ) => {
  switch (action.type) {
    case 'SYSTEM_HTTP_ERROR':
      const { message } = action;
      return { message }
    case 'SYSTEM_CLEAR_MESSAGE':
      delete state.message;
      return {...state }
    default:
			return state;
  }
}
