import homeActions from 'Home/redux/actions';
import createActions from './actionsUtils';

const actions = {
  HOME: createActions('HOME', homeActions),
};

export default actions;
