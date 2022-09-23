import types from "../actions/types";

const defaultState = {
  dataUser: {},
};

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case types.GET_DATA_USER:
      return {
        ...state,
        dataUser: action.dataUser,
      };
    default:
      return state;
  }
};
