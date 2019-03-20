import React from "react";
import Message from "./Message";

class Messenger extends React.Component {
	messageRef = React.createRef();
	messageFormRef = React.createRef();

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
							color={this.props.color}
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
