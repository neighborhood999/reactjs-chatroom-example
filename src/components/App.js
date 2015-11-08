import '../../assets/css/normalize.css';
import '../../assets/css/reset.css';
import '../../assets/css/style.css';

import React, { Component } from 'react';

import Messager from './Messager';
import MessageList from './MessageList';
import UserInput from './UserInput';

export default class App extends Component {
  render() {
    return (
      <div className="chat-app clearfix">
          <div className="chat-app_left">
            <div className="heading">
              <h3 className="messenger-title">Messager</h3>
            </div>
            <div className="thread-list">
              <Messager />
            </div>
          </div>
          <div className="chat-app_right">
            <div className="heading">
              <div className="current-target">Elsa</div>
            </div>
            <div className="message-list">
              <MessageList />
            </div>
            <div className="footer">
              <UserInput />
            </div>
          </div>
        </div>
    );
  }
}
