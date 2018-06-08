//connection
import { connect } from 'react-redux';
import actions from 'redux/actions';
import Home from './template';

const homeActions = actions.HOME;
const mapDispatchToProps = (dispatch) => ({
  bootstrap: () => dispatch(homeActions.BOOTSTRAP.create()),
  increment: () => dispatch(homeActions.INCREMENT.create()),
  decrement: () => dispatch(homeActions.DECREMENT.create()),
});

const mapStateToProps = (state) => ({
  counter: state.home.counter,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
