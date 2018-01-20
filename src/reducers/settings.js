import * as types from '../types/settings';

const initialState = {
  primaryColor: '#13d3d8',
  itemTextColor: '#13d3d8',
};

const settings = (state = initialState, action) => {
  let currentState = state;
  switch (action.type) {
    case types.CHANGE_ITEM_TEXT_COLOR:
      // Random Hex generator '#'+Math.floor(Math.random()*16777215).toString(16);
      currentState = { ...state, itemTextColor: action.color };
      break;
    case types.CHANGE_PRIMARY_COLOR:
      currentState = { ...state, primaryColor: action.color };
      break;
    default:
  }
  return currentState;
};

export default settings;
