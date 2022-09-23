import types from '../actions/types';

const defaultState = {
  account: '',
  dataSellInfo: [
    {
      OrderID: 102945828,
      Time: '05-22 13:34:43',
      status: 'Complete',
      title: '800 KUSDT',
    },
    {
      OrderID: 134656233,
      Time: '05-22 13:34:43',
      status: 'Pending',
      title: '800 KUSDT',
    },
    {
      OrderID: 134656233,
      Time: '05-22 13:34:43',
      status: 'Running',
      title: '800 KUSDT',
    },
  ],
};

export default (state = defaultState, action:any) => {
  switch (action.type) {
    case types.USER_INFO:
      return {...state, ...action.payload};
    case types.REMOVE_USER_INFO:
      return {...state, ...defaultState};

    default:
      return state;
  }
};
