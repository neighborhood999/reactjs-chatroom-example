import React, { Component, PropTypes } from 'react';
import MessageItem from './MessageItem';

export default class MessageList extends Component {
  static propTypes = {
    threads: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired
  }

  render() {
    const { threads, index } = this.props;
    const messages = threads[index].messages;
    return (
      <div>
        {messages.map((message, id) => {
          return (
            <MessageItem key={id}
                         fromMe={message.fromMe}
                         text={message.text} />
          );
        })}
      </div>
    );
  }
}
