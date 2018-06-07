import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: true };
  }

  componentDidMount() {
    this.props.bootstrap();
  }

  toggler = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <div className="Home">
        <h1 onClick={this.toggler} onKeyPress={this.toggler}>
          {`${this.props.salutation}, ${this.state.toggle ? 'World' : 'Moon'}!`}
        </h1>
        <h2 onClick={this.props.increment} onKeyPress={this.props.increment}>
          Increment
        </h2>
        <h2 onClick={this.props.decrement} onKeyPress={this.props.decrement}>
          Decrement
        </h2>

        <h3>{this.props.counter}</h3>
      </div>
    );
  }
}

Home.defaultProps = {
  salutation: 'Hi',
  counter: 0,
};

Home.propTypes = {
  salutation: PropTypes.string,
  counter: PropTypes.number,
  bootstrap: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default Home;
