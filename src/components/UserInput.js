import React, { Component, PropTypes } from 'react';

export default class UserInput extends Component {
  static propTypes = {
    addMessage: PropTypes.func.isRequired,
    delaySend: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleMessage(e) {
    const { addMessage, id } = this.props;
    if (e.which === 13) {
      const text = e.target.value.trim();
      if (text.length === 0) {
        e.preventDefault();
      } else {
        addMessage(id, text);
        this.setState({ text: '' });
      }
    }
  }

  handleDelay(e) {
    const { delaySend, id } = this.props;
    const text = e.target.value.trim();
    delaySend(id, text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <input type="text"
               value={this.state.text}
               className="new-message"
               onChange={this.handleChange.bind(this)}
               onKeyDown={this.handleMessage.bind(this)} />
        <button type="button"
                value={this.state.text}
                onClick={this.handleDelay.bind(this)}>Delay</button>
      </div>
    );
  }
}
