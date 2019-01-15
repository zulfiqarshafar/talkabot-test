import React, { Component } from 'react';
import iconMini from './minimize icon.svg';

class Chat extends Component {
	render() {
		return (
			<div className="chatFrame">
				<button className="miniBtn" onClick={this.props.handleClick}><img src={iconMini} className="iconMiniBtn" alt="Minimize Icon" /></button>
				<iframe title="talkabotChat" src="https://your-staging.talklogics.co/user/5b6056b87e71490004ede0df">
					<p>Browser does not support iframe.</p>
				</iframe>
			</div>
		);
	}
}

export default Chat;