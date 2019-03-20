import React, { Component } from "react";
import base from "../base";

import NamePicker from "./NamePicker";
import Messenger from "./Messenger";

class App extends Component {
	state = {
		username: null,
		messages: {}
	};

	componentDidMount() {
		this.ref = base.syncState(`room1/messages`, {
			context: this,
			state: "messages"
		});
	}

	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	updateName = name => {
		this.setState({
			username: name
		});
	};

	sendMessage = msg => {
		let messages = { ...this.state.messages };
		messages[Date.now()] = {
			message: msg,
			username: this.state.username
		};
		this.setState({ messages });
	};

	render() {
		return (
			<div>
				<h1>DevChat</h1>
				{this.state.username ? (
					<Messenger
						messages={this.state.messages}
						sendMessage={this.sendMessage}
					/>
				) : (
					<NamePicker updateName={this.updateName} />
				)}
			</div>
		);
	}
}

export default App;
