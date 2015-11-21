import React, { Component, PropTypes } from 'react';

export default class Message extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    fromMe: PropTypes.bool.isRequired
  }

  render() {
    const { text, fromMe } = this.props;
    return (
      <div className={`message-item ${fromMe ? 'message-from-me' : 'message-from-other'}`}>
        <span>{text}</span>
      </div>
    );
  }
}
