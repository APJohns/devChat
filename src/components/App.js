import React, { Component } from "react";

class App extends Component {
	messageRef = React.createRef();
	messageFormRef = React.createRef();

	state = {
		messages: {}
	};

	sendMessage = e => {
		e.preventDefault();

		let messages = { ...this.state.messages };
		messages[Date.now()] = this.messageRef.current.value;
		this.setState({ messages });

		this.messageFormRef.current.reset();
	};

	render() {
		return (
			<main>
				<h1>DevChat</h1>
				<section className="messages">
					{Object.keys(this.state.messages).map(key => (
						<p key={key}>{this.state.messages[key]}</p>
					))}
				</section>
				<form ref={this.messageFormRef} onSubmit={this.sendMessage}>
					<input type="text" ref={this.messageRef} />
				</form>
			</main>
		);
	}
}

export default App;
