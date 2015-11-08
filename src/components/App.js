import '../../assets/css/normalize.css';
import '../../assets/css/reset.css';
import '../../assets/css/style.css';

import React, { Component } from 'react';
import MessageList from './MessageList';
import Messager from './Messager';
import UserInput from './UserInput';

const initialState = {
  newMessage: '',
  threads: [
    {
      target: {
        name: 'Elsa',
        profilePic: 'http://lorempixel.com/50/50/people/1'
      },
      messages: [
        { fromMe: false, text: '蛤？', time: '12:27am' },
        { fromMe: false, text: '來來來～', time: '12:27am' },
        { fromMe: false, text: '靠左邊嗎？', time: '12:27am' },
        { fromMe: true, text: '換我了！', time: '12:27am' },
        { fromMe: true, text: '有看到嗎？', time: '12:27am' },
      ]
    },
    {
      target: {
        name: 'Katharine',
        profilePic: 'http://lorempixel.com/50/50/people/9'
      },
      messages: [
        { fromMe: false, text: '對啊！', time: '12:27am' },
      ]
    },
    {
      target: {
        name: 'Marshall',
        profilePic: 'http://lorempixel.com/50/50/people/7'
      },
      messages: [
        { fromMe: false, text: '好呦～', time: '12:27am' },
      ]
    }
  ],
  currentIndex: 0
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleMessageChange(event) {
    this.setState({ newMessage: event.target.value });
  }

  handleMessagerChange(event) {
    this.setState({ currentIndex: event });
  }

  handleKeyDown(event) {
    const message = event.target.value;
    const time = new Date().toDateString();
    const addMessage = {fromMe: true, text: message, time: time};

    if (event.keyCode === 13 && message !== '') {
      const {threads, currentIndex} = this.state;
      threads[currentIndex].messages.push(addMessage);

      this.setState({
        newMessage: '',
        threads: threads
      });
    }
  }

  render() {
    const { threads, currentIndex } = this.state;
    return (
      <div className="chat-app clearfix">
        <div className="chat-app_left">
          <div className="heading">
            <h3 className="messenger-title">Messager</h3>
          </div>
          <div className="thread-list">
            {threads.map((thread, id) => {
              const { target, messages } = thread;
              const lastMessage = messages[messages.length - 1];
              return (
                <Messager
                  key={id}
                  src={target.profilePic}
                  name={target.name}
                  content={lastMessage.text}
                  time={lastMessage.time}
                  handleMessagerChange={this.handleMessagerChange.bind(this, id)}
                />
              );
            })}
          </div>
        </div>
        <div className="chat-app_right">
          <div className="heading">
            <div className="current-target">{threads[currentIndex].target.name}</div>
          </div>
          <div className="message-list">
            <MessageList threads={threads} index={currentIndex} />
          </div>
          <div className="footer">
            <UserInput newMessage={this.state.newMessage}
                       messageChange={this.handleMessageChange.bind(this)}
                       handleKeyDown={this.handleKeyDown.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}
