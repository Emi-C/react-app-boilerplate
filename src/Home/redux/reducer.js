import actions from '../../redux/actions';

const homeActions = actions.HOME;

const initialState = {
  counter: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case homeActions.BOOTSTRAP_SUCCESS.type:
      return { ...state, counter: 0 };
    case homeActions.INCREMENT_REQUEST_SUCCESS.type: //'INCREMENT_SUCCESS'
      return { ...state, counter: action.payload };
    case homeActions.DECREMENT_REQUEST_SUCCESS.type:
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};
