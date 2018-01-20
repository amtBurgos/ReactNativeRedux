import * as types from '../types/main';

const initialState = {
  text: 'Hello from Main',
};

const main = (state = initialState, action) => {
  let currentState = state;
  switch (action.type) {
    case types.CHANGE_TEXT:
      currentState = Object.assign({}, state, { text: 'Text changed' });
      break;
    default:
  }
  return currentState;
};

export default main;
