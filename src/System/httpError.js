export default (status) => {
  const title = 'System Error';
  const variation = 'error';
  const icon = 'warning';
  let text;
  switch (status) {
    case 500:
      text = 'System is offline! Please try again later...'
      break;
    default:
      text = 'We expiriencen some problems with the system. Please try again later...'
  }
  return { title, variation, icon, text }
};
