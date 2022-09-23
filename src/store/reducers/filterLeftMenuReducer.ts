/**
 * @author Peter
 * @email [hoangvanlam9988@gmail.com]
 * @create date 2022-01-28 14:28:42
 * @modify date 2022-01-28 14:28:42
 * @desc [description]
 */
import types from "../actions/types";

const defaultState = {
  querySearch: undefined,
  typeSearch: undefined,
  startPrice: undefined,
  endPrice: undefined,
};

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case types.FILTER_ON_LEFT_MENU:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
