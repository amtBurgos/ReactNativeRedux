import * as types from '../types/settings';

export const changeItemTextColor = color => ({
  type: types.CHANGE_ITEM_TEXT_COLOR,
  color,
});
