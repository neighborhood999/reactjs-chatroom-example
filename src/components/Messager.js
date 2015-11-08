import React, { Component, PropTypes } from 'react';

export default class Messager extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    handleMessagerChange: PropTypes.func.isRequired
  }

  render() {
    const { src, name, content, time, handleMessagerChange } = this.props;
    return (
      <li className="thread-item" onClick={handleMessagerChange}>
        <a href="#">
          <div className="clearfix">
            <div className="thread-item_left">
              <img className="img-circle" src={src} alt="" className="img" />
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
