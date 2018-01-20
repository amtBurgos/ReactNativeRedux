import * as types from '../types/settings';

export const changeItemTextColorAction = color => ({
  type: types.CHANGE_ITEM_TEXT_COLOR,
  color,
});

export const changePrimaryColorAction = color => ({
  type: types.CHANGE_PRIMARY_COLOR,
  color,
});
