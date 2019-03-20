import React from "react";
import { Link } from "react-router-dom";
import base from "../base";

class Rooms extends React.Component {
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

	render() {
		return (
			<div>
				<nav>
					<Link to="/" className="logo">
						DevChat
					</Link>
				</nav>
				<main>
					<h2>Rooms</h2>
					<ul>
						{Object.keys(this.state.rooms).map(room => (
							<li>
								<Link to={`/rooms/${room}`}>{room}</Link>
							</li>
						))}
					</ul>
				</main>
			</div>
		);
	}
}

export default Rooms;
