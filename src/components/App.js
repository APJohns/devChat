import React, { Component } from "react";
import base from "../base";

import NamePicker from "./NamePicker";
import Messenger from "./Messenger";

class App extends Component {
	state = {
		username: "Ash",
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
		messages[`${this.state.username.replace(/\s/g, "")}${Date.now()}`] = {
			message: msg,
			username: this.state.username,
			timestamp: Date.now()
		};
		this.setState({ messages });
	};

	render() {
		return (
			<>
				<nav>
					<h1>DevChat</h1>
				</nav>
				{this.state.username ? (
					<Messenger
						messages={this.state.messages}
						sendMessage={this.sendMessage}
					/>
				) : (
					<NamePicker updateName={this.updateName} />
				)}
			</>
		);
	}
}

export default App;
