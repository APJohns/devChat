import React, { Component } from "react";
import base from "../base";

import NamePicker from "./NamePicker";
import Messenger from "./Messenger";

class App extends Component {
	state = {
		username: null,
		messages: {},
		color: ""
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
		let colors = [
			"#1abc9c",
			"#2ecc71",
			"#3498db",
			"#9b59b6",
			"#f1c40f",
			"#e67e22",
			"#e74c3c"
		];
		this.setState({
			username: name,
			color: colors[Math.floor(Math.random() * colors.length)]
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
						color={this.state.color}
					/>
				) : (
					<NamePicker updateName={this.updateName} />
				)}
			</>
		);
	}
}

export default App;
