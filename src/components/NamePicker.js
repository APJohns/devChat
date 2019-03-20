import React from "react";

class NamePicker extends React.Component {
	nameRef = React.createRef();
	formRef = React.createRef();

	handleSubmit = e => {
		e.preventDefault();
		this.props.updateName(this.nameRef.current.value);
	};

	render() {
		return (
			<form ref={this.formRef} onSubmit={this.handleSubmit}>
				<h2>Enter Your Name</h2>
				<input type="text" ref={this.nameRef} required />
				<button type="submit">Go</button>
			</form>
		);
	}
}

export default NamePicker;
