import React, { Component } from 'react';
import Chat from './Chat.js';
import iconClose from './close icon.svg';

class ChatButton extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true, showChat: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
      showChat: !state.showChat
    }));
  }

  miniClick() {
  	this.setState(state => ({
      isToggleOn: this.props.isToggleOn,
      showChat: this.props.showChat
    }));
  }

  render() {
    return (
		<div>
			{ this.state.showChat ? <Chat handleClick={this.handleClick} /> : null }
			<button onClick={this.handleClick} className="chatBtn">
	        	{this.state.isToggleOn ? <span className="iconOpenChat">CHAT</span> : <img src={iconClose} className="iconCloseChat" alt="Close Icon" />}
			</button>
		</div>
    );
  }
}

export default ChatButton;