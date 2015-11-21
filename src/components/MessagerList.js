import React, { Component, PropTypes } from 'react';
import Messager from './Messager';

export default class MessagerList extends Component {
  static propTypes = {
    friends: PropTypes.object.isRequired,
    checkoutUser: PropTypes.func.isRequired,
  }

  render() {
    const { friends, checkoutUser } = this.props;
    return (
        <div className="thread-list">
          {Object.keys(friends).map((id, index) => {
            const { messages } = friends[id];
            const lastMessages = messages[messages.length - 1];
            return (
              <Messager key={id}
                        content={lastMessages.text}
                        time={lastMessages.time}
                        friendInfo={friends[id]}
                        checkoutUser={checkoutUser}
                        currentId={index} />
            );
          })}
        </div>
    );
  }
}
