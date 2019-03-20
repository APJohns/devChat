import React from "react";

class Messenger extends React.Component {
	messageRef = React.createRef();
	messageFormRef = React.createRef();

	handleMessage = e => {
		e.preventDefault();
		this.props.sendMessage(this.messageRef.current.value);
		this.messageFormRef.current.reset();
	};

	render() {
		return (
			<main>
				<section className="messages">
					{Object.keys(this.props.messages).map(key => (
						<p key={key}>{this.props.messages[key].message}</p>
					))}
				</section>
				<form ref={this.messageFormRef} onSubmit={this.handleMessage}>
					<input type="text" ref={this.messageRef} />
				</form>
			</main>
		);
	}
}

export default Messenger;
