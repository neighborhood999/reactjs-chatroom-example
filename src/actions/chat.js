import * as types from '../constants/ActionTypes';

export function addMessage(id, message) {
  return {
    type: types.SEND_MESSAGE,
    id,
    message
  };
}

export function delaySend(id, message, delay = 2000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(addMessage(id, message));
    }, delay);
  };
}

export function checkoutUser(id) {
  return {
    type: types.CHECKOUT_USER,
    id
  };
}
