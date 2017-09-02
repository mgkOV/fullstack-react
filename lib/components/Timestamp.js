import React, { Component } from 'react';
import StoreProvider from './StoreProvider';

class Timestamp extends Component {
  static displayTime = timestamp =>
    timestamp.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });

  render() {
    return (
      <div>
        Time: {this.props.timestampDisplay}
      </div>
    );
  }
}

const extraProps = store => ({
  timestampDisplay:
    store.getState().timestamp &&
    Timestamp.displayTime(store.getState().timestamp)
});

export default StoreProvider(extraProps)(Timestamp);
