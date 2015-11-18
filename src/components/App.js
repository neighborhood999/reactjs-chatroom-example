import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="chat-app clearfix">
          <div className="chat-app_left">
              <div className="heading">
                  <h3 className="messenger-title">Messager</h3>
              </div>
              <div className="thread-list">
                  <li className="thread-item">
                      <a href="#" className="_1ht5 _5l-3">
                          <div className="clearfix">
                              <div className="thread-item_left">
                                  <img className="img-circle" src="http://lorempixel.com/50/50/people/1" width="50" height="50" alt="" className="img" />
                              </div>
                              <div className="thread-item_right">
                                  <div className="thread-from">
                                      Elsa
                                  </div>
                                  <div>
                                      <span className="thread-content">: )</span>
                                  </div>
                                  <span className="thread-time">12:27am</span>
                              </div>
                          </div>
                      </a>
                  </li>
                  <li className="thread-item">
                      <a href="#" className="_1ht5 _5l-3">
                          <div className="clearfix">
                              <div className="thread-item_left">
                                  <img className="img-circle" src="http://lorempixel.com/50/50/people/9" width="50" height="50" alt="" className="img" />
                              </div>
                              <div className="thread-item_right">
                                  <div className="thread-from">
                                      Katharine
                                  </div>
                                  <div>
                                      <span className="thread-content">: )</span>
                                  </div>
                                  <span className="thread-time">12:27am</span>
                              </div>
                          </div>
                      </a>
                  </li>
                  <li className="thread-item">
                      <a href="#" className="_1ht5 _5l-3">
                          <div className="clearfix">
                              <div className="thread-item_left">
                                  <img className="img-circle" src="http://lorempixel.com/50/50/people/7" width="50" height="50" alt="" className="img" />
                              </div>
                              <div className="thread-item_right">
                                  <div className="thread-from">
                                      Marshall
                                  </div>
                                  <div>
                                      <span className="thread-content">: )</span>
                                  </div>
                                  <span className="thread-time">12:27am</span>
                              </div>
                          </div>
                      </a>
                  </li>
              </div>
          </div>
          <div className="chat-app_right">
              <div className="heading">
                  <div className="current-target">Elsa</div>
              </div>
              <div className="message-list">
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
              <div className="footer">
                  <input className="new-message" type="text" />
              </div>
          </div>
      </div>
    );
  }
}
