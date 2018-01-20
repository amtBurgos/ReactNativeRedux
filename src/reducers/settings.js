import * as types from '../types/settings';

const initialState = {
  text: 'Hello from Settings',
};

const settings = (state = initialState, action) => {
  const currentState = state;
  // switch (action.type) {
  //   case types.CHANGE_TEXT:
  //     currentState = Object.assign({}, state, { text: 'Text changed' });
  //     break;
  //   default:
  // }
  return currentState;
};

export default settings;
