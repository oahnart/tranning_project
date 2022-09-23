import types from "../actions/types";

const defaultState = {
  selectValue: "",
};

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case types.SELECT_BAR:
      return {
        ...state,
        selectValue: action.selectValue,
      };
    default:
      return state;
  }
};
