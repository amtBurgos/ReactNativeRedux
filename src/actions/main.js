import * as types from '../types/main';

export const displayModalAction = displayModal => ({ type: types.DISPLAY_MODAL, displayModal });

export const saveItem = (id, value, saveType) => ({
  type: types.SAVE_ITEM,
  id,
  value,
  saveType,
});

export const changeItemEdited = itemEdited => ({ type: types.CHANGE_ITEM_EDITED, itemEdited });
