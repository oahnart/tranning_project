import types from '../actions/types';

const defaultState = {
  isOpen: false,
  content: '',
  title: '',
  type: '',
  dataConfirm: {},
};

export default (state = defaultState, action:any) => {
  const type = action?.type
  switch (action.type) {
    case types.OPEN_POPUP:
      return {...state, isOpen: true, type,...action.payload, confirm: ''};
    case types.CLOSE_POPUP:
      return {...state, isOpen: false, dataConfirm: action.payload?.dataConfirm};
    default:
      return state;
  }
};
