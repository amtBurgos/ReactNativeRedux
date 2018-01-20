import * as types from '../types/main';

const initialState = {
  text: 'Hello from Main',
  items: [
    { id: 'exampleKey1', value: 'One' },
    { id: 'exampleKey2', value: 'Two' },
    { id: 'exampleKey3', value: 'Three' },
    { id: 'exampleKey4', value: 'Four' },
    { id: 'exampleKey5', value: 'Five' },
  ],
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
