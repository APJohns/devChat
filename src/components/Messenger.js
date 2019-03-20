import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import smoothscroll from "smoothscroll-polyfill";
import Message from "./Message";

smoothscroll.polyfill();
class Messenger extends React.Component {
	messageRef = React.createRef();
	messageFormRef = React.createRef();

	state = {
		colors: {}
	};

	componentDidMount() {
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
					c = `rgb(${Math.floor(Math.random() * 150)}, ${Math.floor(
						Math.random() * 150
					)}, ${Math.floor(Math.random() * 150)})`;
				} else {
					c = cols.pop();
				}
				colors[this.props.messages[msg].username] = c;
			}
		});
		this.setState({ colors });
	}

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

		window.scroll({
			top: window.innerHeight + 500,
			left: 0,
			behavior: "smooth"
		});
	}

	handleMessage = e => {
		e.preventDefault();
		this.props.sendMessage(this.messageRef.current.value.trim());
		this.messageFormRef.current.reset();
	};

	render() {
		return (
			<main className="main">
				<TransitionGroup component="section" className="messages">
					{Object.keys(this.props.messages).map(key => (
						<CSSTransition
							classNames="msg"
							key={key}
							timeout={{ enter: 500, exit: 500 }}
						>
							<Message
								id={key}
								messages={this.props.messages}
								colors={this.state.colors}
								username={this.props.username}
							/>
						</CSSTransition>
					))}
				</TransitionGroup>
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
