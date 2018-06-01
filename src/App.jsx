import React from 'react';

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
        <h1 onClick={this.toggler} onKeyPress={this.toggler}>
          {`Hello, ${this.state.toggle ? 'World' : 'Moon'}!`}
        </h1>
      </div>
    );
  }
}

export default App;
