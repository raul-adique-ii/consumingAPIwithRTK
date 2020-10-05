import axios from 'axios';
import * as actions from '../api';

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { url, method, data, onStart, onSuccess, onError } = action.payload;

  if (onStart) dispatch({ type: onStart });

  next(action);

  try {
    const res = await axios.request({
      baseURL: 'https://rickandmortyapi.com/api',
      url,
      method,
      data,
    });
    // General
    dispatch(actions.apiCallSuccess(res.data));
    // Specific
    if (onSuccess) dispatch({ type: onSuccess, payload: res.data });
  } catch (error) {
    // General error
    dispatch(actions.apiCallFailed(error.message));
    // Specific
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default api;
