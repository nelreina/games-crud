import httpError from './httpError';

export const setSystemHttpError = (status) => ({
  type: 'SYSTEM_HTTP_ERROR',
  message: httpError(status)
});
export const clearMessage = () => ({ type: 'SYSTEM_CLEAR_MESSAGE' });
