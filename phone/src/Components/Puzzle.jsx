import React from 'react';
import Lock from './Puzzles/Lock.jsx';

export default class Puzzle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			lock: "lock"
		}
	}

	render() {
		return (
			<div className="puzzle">
				{ this.state.lock === "lock" ? <Lock /> : null }
			</div> 
		);
	}
}