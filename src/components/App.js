import React, { Component } from "react";
import base from "../base";
import { Link } from "react-router-dom";

import NamePicker from "./NamePicker";
import Messenger from "./Messenger";

import logo from "../logo.png";

class App extends Component {
	state = {
		username: null,
		messages: {}
	};

	componentDidMount() {
		this.ref = base.syncState(
			`rooms/${this.props.match.params.roomId}/messages`,
			{
				context: this,
				state: "messages"
			}
		);
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
		messages[`${Date.now()}${this.state.username.replace(/\s/g, "")}`] = {
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
					<Link to="/" className="logo">
						<img src={logo} alt="logo" />
					</Link>
					{this.state.username && (
						<p>Welcome, {this.state.username}!</p>
					)}
				</nav>
				{this.state.username ? (
					<Messenger
						messages={this.state.messages}
						sendMessage={this.sendMessage}
						username={this.state.username}
					/>
				) : (
					<NamePicker updateName={this.updateName} />
				)}
			</>
		);
	}
}

export default App;
