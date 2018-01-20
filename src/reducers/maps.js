import * as types from '../types/maps';

const initialState = {
  text: 'Hello from Maps',
};

const maps = (state = initialState, action) => {
  const currentState = state;
  // switch (action.type) {
  //   case types.CHANGE_TEXT:
  //     currentState = Object.assign({}, state, { text: 'Text changed' });
  //     break;
  //   default:
  // }
  return currentState;
};

export default maps;
