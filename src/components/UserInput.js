import React, { Component, PropTypes } from 'react';

export default class UserInput extends Component {
  static propTypes = {
    messageChange: PropTypes.func.isRequired,
    handleKeyDown: PropTypes.func.isRequired,
    newMessage: PropTypes.string.isRequired
  }

  render() {
    const { newMessage, messageChange, handleKeyDown} = this.props;
    return (
      <input className="new-message"
             value={newMessage}
             onChange={messageChange}
             onKeyDown={handleKeyDown} />
    );
  }
}
