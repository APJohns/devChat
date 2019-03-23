import React from "react";
import { Link } from "react-router-dom";
import base from "../base";

import logo from "../logo.png";

function slugify(text) {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(/[^\w-]+/g, "")
		.replace(/--+/g, "-")
		.replace(/^-+/, "")
		.replace(/-+$/, "");
}

class Rooms extends React.Component {
	nameRef = React.createRef();

	state = {
		rooms: {}
	};

	componentDidMount() {
		this.ref = base.bindToState("rooms", {
			context: this,
			state: "rooms"
		});
	}

	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	handleForm = e => {
		e.preventDefault();
		this.props.history.push(`rooms/${slugify(this.nameRef.current.value)}`);
	};

	render() {
		return (
			<div>
				<nav>
					<Link to="/" className="logo">
						<img src={logo} alt="logo" />
					</Link>
				</nav>
				<main>
					<h2>Rooms</h2>
					{Object.keys(this.state.rooms).length === 0 && (
						<p>No rooms at the moment :(</p>
					)}
					<ul>
						{Object.keys(this.state.rooms).map(room => (
							<li key={room}>
								<Link to={`/rooms/${room}`}>{room}</Link>
							</li>
						))}
					</ul>
					<form className="newRoom" onSubmit={this.handleForm}>
						<input
							type="text"
							placeholder="Room Name"
							ref={this.nameRef}
						/>
						<button type="submit">New Room</button>
					</form>
				</main>
			</div>
		);
	}
}

export default Rooms;
