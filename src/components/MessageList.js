import React, { Component, PropTypes } from 'react';
import Message from './Message';

export default class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.object.isRequired,
    currentId: PropTypes.number.isRequired
  }

  render() {
    const { messages, currentId } = this.props;
    const content = messages[currentId].messages;
    return (
      <div>
        {content.map((message, id) => {
          return (
            <Message key={id} text={message.text} fromMe={message.fromMe} />
          );
        })}
      </div>
    );
  }
}
