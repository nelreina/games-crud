export default (state=[], action ) => {
  switch (action.type) {
    case 'FETCH_VIDEO_COMPLETED':
      return action.videonan;
    default:
      return state;
  }
}
