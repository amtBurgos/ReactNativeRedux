import * as types from '../types/common';

const initialState = {
  primaryColor: '#13d3d8',
};

const common = (state = initialState, action) => {
  const currentState = state;
  // switch (action.type) {
  //   case types.CHANGE_TEXT:
  //     currentState = Object.assign({}, state, { text: 'Text changed' });
  //     break;
  //   default:
  // }
  return currentState;
};

export default common;
