import React, { Component } from 'react';

export default class MessageList extends Component {
  render() {
    return (
      <div>
          <div className="message-item message-from-other">
              <span>對啊</span>
          </div>
          <div className="message-item message-from-other">
              <span>試著</span>
          </div>
          <div className="message-item message-from-other">
              <span>靠左邊嘛</span>
          </div>
          <div className="message-item message-from-me">
              <span>換我了</span>
          </div>
          <div className="message-item message-from-me">
              <span>有看到嗎</span>
          </div>
      </div>
    );
  }
}
