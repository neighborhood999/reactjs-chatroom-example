import { SEND_MESSAGE, CHECKOUT_USER } from '../constants/ActionTypes';

const initialState = {
  currentId: 0,
  friends: [0, 1, 2],
  friendsById: [{
    0: {
      name: 'Elsa',
      profilePic: 'http://lorempixel.com/50/50/people/1',
      messages: [
        { fromMe: false, text: '怎麼辦？', time: '12:27am' },
        { fromMe: false, text: '要掰了～', time: '12:27am' },
        { fromMe: true, text: '蛤？', time: '12:27am' },
        { fromMe: true, text: '什麼意思～', time: '12:27am' },
        { fromMe: false, text: '哭～', time: '12:27am' },
      ]
    },
    1: {
      name: 'Katharine',
      profilePic: 'http://lorempixel.com/50/50/people/9',
      messages: [
        { fromMe: false, text: '想睡...', time: '12:27am' },
        { fromMe: true, text: '我也是...', time: '12:27am' }
      ]
    },
    2: {
      name: 'Marshall',
      profilePic: 'http://lorempixel.com/50/50/people/7',
      messages: [
        { fromMe: false, text: '好呦～', time: '12:27am' },
      ]
    }
  }]
};

export default function chat(state = initialState, action) {
  switch (action.type) {
  case SEND_MESSAGE:
    return {
      ...state,
      friendsById: {
        [0]: {
          ...state.friendsById[0],
          [action.id]: {
            name: state.friendsById[0][action.id].name,
            profilePic: state.friendsById[0][action.id].profilePic,
            messages: [
              ...state.friendsById[0][action.id].messages,
              { fromMe: true, text: action.message, time: '12:27am' }
            ]
          }
        }
      }
    };
  case CHECKOUT_USER:
    return {
      ...state,
      currentId: action.id
    };
  default:
    return state;
  }
}
