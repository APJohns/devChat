import React from "react";

class Message extends React.Component {
	render() {
		const message = this.props.messages[this.props.id];
		return (
			<div
				key={this.props.key}
				className={`message ${
					message.username === this.props.username ? "self" : "other"
				}`}
			>
				<h3
					className="user"
					style={{ color: this.props.colors[message.username] }}
				>
					{message.username}
				</h3>
				<p className="msgTxt">{message.message}</p>
				<p className="timestamp">
					{new Date(message.timestamp).getDate() ===
					new Date().getDate()
						? new Date(message.timestamp).toLocaleTimeString(
								"en-US"
						  )
						: new Date(message.timestamp).toLocaleDateString(
								"en-US",
								{
									month: "short",
									day: "numeric",
									year: "numeric"
								}
						  )}
				</p>
			</div>
		);
	}
}

export default Message;
