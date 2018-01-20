import * as types from '../types/main';

import { keyGen } from '../util/util';

const initialState = {
  text: 'Hello from Main',
  items: [
    { id: keyGen(), value: 'One' },
    { id: keyGen(), value: 'Two' },
    { id: keyGen(), value: 'Three' },
    { id: keyGen(), value: 'Four' },
    { id: keyGen(), value: 'Five' },
    { id: keyGen(), value: 'One' },
    { id: keyGen(), value: 'Two' },
    { id: keyGen(), value: 'Three' },
    { id: keyGen(), value: 'Four' },
    { id: keyGen(), value: 'Five' },
    { id: keyGen(), value: 'One' },
    { id: keyGen(), value: 'Two' },
    { id: keyGen(), value: 'Three' },
    { id: keyGen(), value: 'Four' },
    { id: keyGen(), value: 'Five' },
    { id: keyGen(), value: 'One' },
    { id: keyGen(), value: 'Two' },
    { id: keyGen(), value: 'Three' },
    { id: keyGen(), value: 'Four' },
    { id: keyGen(), value: 'Five' },
    { id: keyGen(), value: 'One' },
    { id: keyGen(), value: 'Two' },
    { id: keyGen(), value: 'Three' },
    { id: keyGen(), value: 'Four' },
    { id: keyGen(), value: 'Five' },
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
