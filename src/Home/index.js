//connection
import { connect } from 'react-redux';
import actions from 'reduxUtils/actions';
import Home from './template';

const homeActions = actions.HOME;
const mapDispatchToProps = (dispatch) => ({
  bootstrap: () => dispatch(homeActions.BOOTSTRAP.create()),
  increment: () => dispatch(homeActions.INCREMENT.create()),
  decrement: () => dispatch(homeActions.DECREMENT.create()),
});

const mapStateToProps = (state) => ({
  counter: state.home.counter,
  salutation: 'Hello',
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
