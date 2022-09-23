import types from "../actions/types";

const defaultState = {
  isOpen: false,
  searchValue: "",
};

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case types.SEARCH_BAR:
      return {
        ...state,
        isOpen: action.isOpen,
        searchValue: action.searchValue,
      };
    default:
      return state;
  }
};
