import React from 'react';
import PropTypes from 'prop-types';
import { Title, Counter } from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: true, color: '#000' };
  }

  componentDidMount() {
    const { bootstrap } = this.props;
    this.randomicColor();
    bootstrap();
  }

  toggler = () => {
    const { toggle } = this.state;
    this.setState({ toggle: !toggle });
  };

  randomicColor = () => {
    setInterval(() => {
      const color = '#000000'.replace(/0/g, () => Math.floor(Math.random() * 16).toString(16));
      this.setState({ color });
    }, 500);
  };

  render() {
    const { salutation, increment, decrement, counter } = this.props;
    const { toggle, color } = this.state;
    return (
      <div className="Home">
        <Title onClick={this.toggler} onKeyPress={this.toggler}>
          {`${salutation}, ${toggle ? 'World' : 'Moon'}!`}
        </Title>
        <h2 onClick={increment} onKeyPress={increment}>
          Increment
        </h2>
        <h2 onClick={decrement} onKeyPress={decrement}>
          Decrement
        </h2>

        <Counter color={color}>{counter}</Counter>
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
