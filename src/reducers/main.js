import * as types from '../types/main';

import { keyGen } from '../util/util';
import { displayModal } from '../actions/main';

const initialState = {
  text: 'Hello from Main',
  displayModal: false,
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
    case types.DISPLAY_MODAL:
      currentState = { ...state, displayModal: action.displayModal };
      break;
    default:
  }
  return currentState;
};

export default main;
