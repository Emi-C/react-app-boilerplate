import { combineReducers } from 'redux';
import homeReducer from 'Home/redux/reducer';

const mainReducer = combineReducers({
  home: homeReducer,
});

export default mainReducer;
