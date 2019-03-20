import React from "react";
import Message from "./Message";

class Messenger extends React.Component {
	messageRef = React.createRef();
	messageFormRef = React.createRef();

	state = {
		colors: {}
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.messages !== this.props.messages) {
			let cols = [
				"#1abc9c",
				"#2ecc71",
				"#3498db",
				"#9b59b6",
				"#f1c40f",
				"#e67e22",
				"#e74c3c"
			];
			let colors = {};
			Object.keys(this.props.messages).forEach(msg => {
				if (!colors[this.props.messages[msg].username]) {
					let c;
					if (cols.length === 0) {
						c = `rgb(${Math.floor(
							Math.random() * 150
						)}, ${Math.floor(Math.random() * 150)}, ${Math.floor(
							Math.random() * 150
						)})`;
					} else {
						c = cols.pop();
					}
					colors[this.props.messages[msg].username] = c;
				}
			});
			this.setState({ colors });
		}
	}

	handleMessage = e => {
		e.preventDefault();
		this.props.sendMessage(this.messageRef.current.value.trim());
		this.messageFormRef.current.reset();
	};

	render() {
		return (
			<main className="main">
				<section className="messages">
					{Object.keys(this.props.messages).map(key => (
						<Message
							key={key}
							id={key}
							messages={this.props.messages}
							colors={this.state.colors}
						/>
					))}
				</section>
				<form
					className="sendMessage"
					ref={this.messageFormRef}
					onSubmit={this.handleMessage}
				>
					<input type="text" ref={this.messageRef} required />
					<button type="submit">Send</button>
				</form>
			</main>
		);
	}
}

export default Messenger;
