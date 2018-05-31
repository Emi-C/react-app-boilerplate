import React from 'react';
import './theme/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: true };
  }

  toggler = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <div className="App">
        <h1>
          {`Hello, ${(
            <span onClick={this.toggler} onKeyPress={this.toggler}>
              {this.state.toggle ? 'World' : 'Moon'}
            </span>
          )}!`}
        </h1>
      </div>
    );
  }
}

export default App;
