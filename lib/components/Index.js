import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  state = {
    answer: 43
  };

  asyncFunc = () => {
    return Promise.resolve(37);
  };

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }

  render() {
    return (
      <h2>
        Hello {this.state.answer}
      </h2>
    );
  }
}

render(<App />, document.getElementById('root'));
