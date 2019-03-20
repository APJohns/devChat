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
				<ul>
					{Object.keys(this.state.rooms).map(room => (
						<Link to={`/rooms/${room}`}>{room}</Link>
					))}
				</ul>
			</div>
		);
	}
}

export default Rooms;
