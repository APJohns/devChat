import React from "react";

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
						<div key={key} className="message">
							<h3>{this.props.messages[key].username}</h3>
							<p>{this.props.messages[key].message}</p>
							<p>
								{new Date(
									this.props.messages[key].timestamp
								).getDate() === new Date().getDate()
									? new Date(
											this.props.messages[key].timestamp
									  ).toLocaleTimeString("en-US")
									: new Date(
											this.props.messages[key].timestamp
									  ).toLocaleDateString("en-US", {
											month: "short",
											day: "numeric",
											year: "numeric"
									  })}
							</p>
						</div>
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
