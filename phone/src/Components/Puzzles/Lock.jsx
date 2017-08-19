import React from 'react';

export default class Lock extends React.Component {
	constructor(props) {
		super(props);
	}

	returnMessage(message) {

		this.props.returnMessage("")
	}

	render() {
		return (
			<div className="lock">
				<div className="wheel numbers-10">
					<button className="btnDirection btnTop"></button>
					<button className="btnDirection btnDown"></button>
				</div>
				<div className="wheel numbers-10">
					<button className="btnDirection btnTop"></button>
					<button className="btnDirection btnDown"></button>
				</div>
				<div className="wheel numbers-10">
					<button className="btnDirection btnTop"></button>
					<button className="btnDirection btnDown"></button>
				</div>
			</div>
		);
	}
}