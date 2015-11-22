import React, { Component, PropTypes } from 'react';
import MessagerList from './MessagerList';
import MessageList from './MessageList';
import UserInput from './UserInput';

export default class ChatRoom extends Component {
  static propTypes = {
    chat: PropTypes.object.isRequired,
    checkoutUser: PropTypes.func.isRequired,
    addMessage: PropTypes.func.isRequired,
    delaySend: PropTypes.func.isRequired
  }

  render() {
    const { chat, chat: { currentId }, checkoutUser, addMessage, delaySend } = this.props;
    return (
      <div className="chat-app clearfix">
        <div className="chat-app_left">
          <div className="heading">
            <h3 className="messenger-title">Messager</h3>
          </div>
          <MessagerList friends={chat.friendsById[0]} checkoutUser={checkoutUser} />
        </div>
        <div className="chat-app_right">
          <div className="heading">
            <div className="current-target">{chat.friendsById[0][currentId].name}</div>
          </div>
          <div className="message-list">
            <MessageList messages={chat.friendsById[0]} currentId={currentId} />
          </div>
          <div className="footer">
            <UserInput addMessage={addMessage} delaySend={delaySend} id={currentId} />
          </div>
        </div>
      </div>
    );
  }
}
