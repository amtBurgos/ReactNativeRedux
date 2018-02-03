import * as types from '../types/main';

import { keyGen } from '../util/util';

const initialState = {
  text: 'Hello from Main',
  displayModal: false,
  itemEdited: { id: -1, value: '' },
  items: [
    { id: keyGen(), value: 'One' },
    { id: keyGen(), value: 'Two' },
    { id: keyGen(), value: 'Three' },
    { id: keyGen(), value: 'Four' },
    { id: keyGen(), value: 'Fivewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww' },
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
      currentState = {
        ...state,
        displayModal: action.displayModal,
        itemEdited: action.displayModal ? state.itemEdited : initialState.itemEdited,
      };
      break;
    case types.SAVE_ITEM:
      let items = state.items.slice();
      if (action.saveType === 'ADD') {
        if (action.value.trim() !== '') {
          items.unshift({ id: action.id, value: action.value });
        }
      } else if (action.saveType === 'CHANGE') {
        if (action.value.trim() !== '') {
          items = items.map((item) => {
            const newItem = { ...item };
            if (newItem.id === action.id) {
              newItem.value = action.value;
            }
            return newItem;
          });
        } else {
          items = state.items.filter(item => item.id !== action.id);
        }
      }
      // Save item, close modal and clean input text
      currentState = {
        ...state,
        items,
        displayModal: false,
        itemEdited: initialState.itemEdited,
      };
      break;
    case types.CHANGE_ITEM_EDITED:
      currentState = { ...state, itemEdited: action.itemEdited };
      break;
    default:
  }
  return currentState;
};

export default main;
