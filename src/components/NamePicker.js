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
				<input type="text" ref={this.nameRef} />
			</form>
		);
	}
}

export default NamePicker;
