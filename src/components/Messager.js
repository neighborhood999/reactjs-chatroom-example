import React, { Component, PropTypes } from 'react';

export default class Messager extends Component {
  static propTypes = {
    friendInfo: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    checkoutUser: PropTypes.func.isRequired,
    currentId: PropTypes.number.isRequired
  }

  render() {
    const { friendInfo: { name, profilePic }, content, time, currentId, checkoutUser } = this.props;
    return (
      <li className="thread-item" onClick={() => checkoutUser(currentId)}>
        <a href="#">
          <div className="clearfix">
            <div className="thread-item_left">
              <img className="img-circle" src={profilePic} className="img"/>
            </div>
            <div className="thread-item_right">
              <div className="thread-from">
                {name}
              </div>
              <div>
                <span className="thread-content">{content}</span>
              </div>
              <span className="thread-time">{time}</span>
            </div>
          </div>
        </a>
      </li>
    );
  }
}
