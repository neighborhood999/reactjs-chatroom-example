import * as types from '../constants/ActionTypes';

export function addMessage(id, message) {
  return {
    type: types.SEND_MESSAGE,
    id,
    message
  };
}

export function checkoutUser(id) {
  return {
    type: types.CHECKOUT_USER,
    id
  };
}
